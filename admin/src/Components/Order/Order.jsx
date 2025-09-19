import { useState, useEffect } from 'react';
import './Order.css';

const Order = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/getorders');
      const formData = await response.json();
      setOrderData(formData);
    } catch (error) {
      console.error('Failed to process order. Please try again later:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);	   

  return (
    <div className='order'> {/* Utilisation de la classe CSS 'order' */}
      <h1>All Order List</h1>
      <table className="order-format-main"> {/* Utilisation de la classe CSS 'order-format-main' */}
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Governorate</th>
            <th>Postal Code</th>
            <th>Address</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="order-allusers"> {/* Utilisation de la classe CSS 'order-allusers' */}
          {orderData.map((formData, index) => (
            <tr key={index} className="order-format-main order-format">
              <td>{formData.orderid}</td>
              <td>{formData.name}</td>
              <td>{formData.email}</td>
              <td>{formData.phone}</td>
              <td>{formData.country}</td>
              <td>{formData.governorate}</td>
              <td>{formData.postalCode}</td>
              <td>{formData.adress}</td>
              <td>{formData.productid}</td>
              <td>{formData.total}</td>
              <td>{formData.quantity}</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
            
export default Order;
