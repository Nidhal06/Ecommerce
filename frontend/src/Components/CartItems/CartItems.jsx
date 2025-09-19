import React, { useContext, useRef } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, users , checkout} = useContext(ShopContext);
    const formContainerRef = useRef(null);
    
    
    const loadForm = async () => {
        
        const formContainer = formContainerRef.current;

        const user = users[0] || {};
        if (!user || !user._id) {
            
            alert("You must be logged in to proceed to checkout.");
            return;
        }

        
        if (formContainer) {

            const countries = [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", 
                "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
                "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
                "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia",
                "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
                "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
                "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
                "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
                "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
                "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
                "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
                "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
                "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
                "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
                "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
                "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
                "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
                "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
                "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
                "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
                "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
                "Yemen", "Zambia", "Zimbabwe"
            ];

            const tunisianGovernorates = [
                "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès", "Gafsa",
                "Jendouba", "Kairouan", "Kasserine", "Kébili", "Kef", "Mahdia",
                "Manouba", "Médenine", "Monastir", "Nabeul", "Sfax", "Sidi-Bouzid",
                "Siliana", "Sousse", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
            ];

            const getProductIds = () => {
                
                const productsInCart = all_product.filter((product) => cartItems[product.id] > 0);
                
                const productIds = productsInCart.map((product) => product.id);
                
                return productIds.join(', ');
            };

            
            const quantities = Object.values(cartItems).filter(quantity => quantity > 0);
            const quantitiesString = quantities.join(', ');


            const formHTML = `
                <form id="purchaseForm">
                    <input type="text" placeholder="Enter Your Order Id" name="orderid" value=${generateOrderId()} required readonly>
                    <input type="Number" placeholder="Quantity" name="quantity" required readonly value=${getTotalCartAmount()}>
                    <textarea placeholder="Total" name="total" readOnly>${quantitiesString}</textarea>                    
                    <input type="text" placeholder="Name" name="name" required readonly value=${user.name}>
                    <input type="email" placeholder="Email" name="email" required readonly value=${user.email}>
                    <input type="tel" placeholder="Enter Your Number Phone" name="phone" required>
                    <select name="country" id="country" required>
                        <option value="" disabled selected>Select Country</option>
                          ${countries.map(country => `<option value="${country}">${country}</option>`).join('')}
                    </select>
                    <select name="governorate" id="governorate" required>
                        <option value="" disabled selected>Select Governorate</option>
                        <!-- Les options pour les gouvernorats de la Tunisie -->
                        ${tunisianGovernorates.map(governorate => `<option value="${governorate}">${governorate}</option>`).join('')}
                    </select> 
                    <input type="text" placeholder="Enter Your Postal Code" name="postalCode" required>
                    <input type="text" placeholder="Enter Your Adress" name="adress" required>
                    <textarea placeholder="Product Ids" name="productid" readOnly>${getProductIds()}</textarea>                    
                    <input type="text" placeholder="0000-0000-0000-0000" name="cardnumber" maxlength="16" required>
                    <input type="month"  name="date" required>
                    <input type="text" placeholder="123" maxlength="3" name="cvv" required>
                    <button type="submit" id="purchaseButton">Purchase</button>
                    <button type="reset">Reset</button>
                </form>
            `;

           
            formContainer.innerHTML = formHTML;

            
            formContainer.querySelector('#purchaseForm').addEventListener('submit', async function(event) {
                event.preventDefault();

                
                const formData = new FormData(formContainer.querySelector('form'));
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });

                
                const requiredProperties = ['phone', 'country', 'governorate', 'postalCode', 'adress', 'cardnumber', 'cvv'];
                const missingProperties = requiredProperties.filter(prop => !data[prop]);

                if (missingProperties.length > 0) {
               
                alert(`Please fill in all required fields: ${missingProperties.join(', ')}`);
                return;
                }

                checkout(formData);

                
                this.reset();
            });

            
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    const countriesSelect = formContainer.querySelector('#country');

                    data.forEach(country => {
                        const option = document.createElement('option');
                        option.value = country.name.common;
                        option.textContent = country.name.common;
                        countriesSelect.appendChild(option);
                    });
                })
                .catch(error => console.error('Erreur :', error));
        }
    }

    
    function generateOrderId() {
        const characters = 'abcdef0123456789'; 
        const orderIdLength = 24; 
        let orderId = '';
        for (let i = 0; i < orderIdLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            orderId += characters.charAt(randomIndex);
        }
        return orderId;
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className="carticon-product" />
                        <p>{e.name}</p>
                        <p>TND{e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>TND{e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className="carticon-remove" />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>TND{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>TND{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={loadForm}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            {/* Conteneur du formulaire */}
            <div ref={formContainerRef}></div>
        </div>
    )
}
export default CartItems;
