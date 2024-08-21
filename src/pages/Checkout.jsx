// import React from 'react';
// import { useCart } from '../components/CartContex.jsx';
// import './Checkout.scss';

// export default () => {
//   const { cart } = useCart();

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => {
//       const price = parseFloat(item.price.replace('£', ''));
//       return  price * item.count;
//     }, 0).toFixed(2);
//   };

//   const calculateSubtotalAmount = () => {
//     return cart.reduce((total, item) => {
//       const price = parseFloat(item.price.replace('£', ''));
//       return total + (price * item.count);
//     }, 0).toFixed(2);
//   };
    
//   return (
//     <div className="checkout__wrap">
//        <div className="checkout">
//       <h2>Your Shopping Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <td>Product</td>
//                 <td>Quantity</td>
//                 <td>Total</td>
//               </tr>
//             </thead>
//             {cart.map(item => (
//               <tbody>
//               <tr key={item.id}>
//                 <td><img src={item.img} alt={item.title} />
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>Price: {item.price}</p>
//                   </div>
//                 </td>
//                 <td>{item.count}</td>
//                 <td>£{calculateTotalAmount()}</td>
//             </tr>
//             </tbody>
//           ))}
//           </table>
//           <div className="checkout-bottom">
//             <div className="checkout-total">
//               <p>Taxes and shipping are calculated at checkout</p>
//               <h3>Subtotal £{calculateSubtotalAmount()}</h3>
//             </div>
//             <button className="button dark">Place Order</button>
//           </div>

//         </div>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { useCart } from '../components/CartContex'
import './Checkout.scss';

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotalAmount = (item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return (price * item.count).toFixed(2);
  };

  const calculateSubtotalAmount = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('£', ''));
        return total + price * item.count;
      }, 0)
      .toFixed(2);
  };

 return (
   <div className="checkout-wrap">
     <div className="checkout">
      <h2>Your Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="checkout-table-container">
          <table className="checkout-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="product-cell">
                    <img src={item.img} alt={item.title} className="checkout-img" />
                    <div className="product-details">
                      <h4>{item.title}</h4>
                      <p>{item.price}</p>
                    </div>
                  </td>
                  <td className="quantity-cell">{item.count}</td>
                  <td className="total-cell">£{calculateTotalAmount(item)}</td>
                </tr>
              ))}
            </tbody>
           </table>
          <div className="checkout-bottom">
            <div className="checkout-total">
              <p>Taxes and shipping are calculated at checkout</p>
              <h3>Subtotal £{calculateSubtotalAmount()}</h3>
            </div>
              <button className="button dark">Place Order</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
    </div>
  );
};

export default Checkout;
