const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

//Data Connection With MongoDB
mongoose.connect("mongodb+srv://nidhalgharbi:Ng982001@cluster0.lcc472u.mongodb.net/e-commerce");

//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for Images 
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Shema For Creating Products 
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})
app.post('/addproduct', async (req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API For Deleting Products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API For Getting All Products
app.get('/allproduct',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched")
    res.send(products);
})

//Shema Creating For User Model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endponit For Registering The User 
app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email adress"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id,
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//Creating Endpoint For User Login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

//Creation Endpoint To Retrieve The list Of Registered Users
app.get('/getusers', async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

//Creating an Endpoint to Retrieve a User by their ID
app.get('/getuserbyid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: "Utilisateur non trouvé" });
        }

        console.log("ID de l'utilisateur :", user.id);

        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
        res.status(500).json({ success: false, error: "Erreur interne du serveur" });
    }
});

//Creating API For Deleting Users
app.post('/removeuser', async (req, res) => {
    try {
        const userId = req.body.id;
        const user = await Users.findOneAndDelete({ _id: userId });

        if (!user) {
            return res.status(404).json({ success: false, error: "Utilisateur non trouvé" });
        }

        console.log("Utilisateur supprimé :", user);
        res.json({ success: true, message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
        res.status(500).json({ success: false, error: "Erreur interne du serveur" });
    }
});


//Creating Endpoint For Newcollection Data 
app.get('/newcollection', async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//Creating Endpoint For Popular Products Data
app.get('/popularproducts', async(req,res)=>{
    let products = await Product.find({});
    let popular_products = products.slice(0,4);
    console.log("Popular Products Fetched");
    res.send(popular_products);
})

//Creating Middelware To Fetch User 
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authenticate using valid token"})
        }
    }
}

//Creation Endpoint To Retrieve The User Connect
app.get('/getuserconnect', fetchUser, async (req, res) => {
    try {
        const user = await Users.findById(req.user.id); 
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json([user]); 
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

//Creating Endpoint For Adding Products In Cartdata
app.post('/addtocart', fetchUser, async(req,res)=>{
    console.log("added",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

//Creating Endpoint To Remove Product From CartData
app.post('/removefromcart', fetchUser, async(req,res)=>{
    console.log("removed",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

//Creating Endpoint To Get CartData 
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})



//Shema Creating For Order Model
const Order = mongoose.model("Order", {
    orderid: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    governorate: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    productid: {
        type: String,
        required: true,
    },
    cardnumber: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    cvv: {
        type: String,
        required: true,
    },
});

//Creating Endpoint To Chechout 
app.post('/checkout', async (req, res) => {
    try {
        
        const formData = req.body;

        
        if (!formData.orderid || !formData.quantity || !formData.total || !formData.name || !formData.email || !formData.phone || !formData.country || !formData.governorate || !formData.postalCode || !formData.adress || !formData.productid || !formData.cardnumber || !formData.date || !formData.cvv) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        
        const order = new Order({
            orderid: formData.orderid,
            quantity: formData.quantity,
            total: formData.total,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            governorate: formData.governorate,
            postalCode: formData.postalCode,
            adress: formData.adress,
            productid: formData.productid,
            cardnumber: formData.cardnumber,
            date: formData.date,
            cvv: formData.cvv
        });

        
        await order.save();

        
        res.status(200).json({ success: true, message: 'Order placed successfully!' });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, error: 'Failed to place order. Please try again later.' });
    }
});

//Creating Endpoint To Get Orders 
app.get('/getorders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (error) {
        console.error("Error retrieving checkout commands :", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});




//run server
app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})