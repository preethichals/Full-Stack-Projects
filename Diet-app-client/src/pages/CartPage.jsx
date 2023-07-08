import React from "react";
import { useCart } from "../context/cart";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";

 const CartPage = () => {

   const [cart, setCart] = useCart();
   // eslint-disable-next-line
   const [auth, setAuth] = useAuth();

   //detele item
   const removeCartItem = (pid) => {
     try {
       let myCart = [...cart];
       let index = myCart.findIndex((item) => item._id === pid);
       myCart.splice(index, 1);
       setCart(myCart);
       localStorage.setItem("cart", JSON.stringify(myCart));
     } catch (error) {
       console.log(error);
     }
   };

   return (
     <Layout title={'Your Plan List'}>
    
        
         <div className="container ">
           <div className="row pt-3 ">
           <h1 className="fs-4 text-uppercase m-2"
                  style={{ letterSpacing: "0.2em", color: "#222222" }}
                >
               {!auth?.user
                 ? "Hello Guest"
                 : `Hello  ${auth?.token && auth?.user?.name}`}
               <p className="text-center">
                 {cart?.length
                   ? `You Have ${cart.length} Plans in your List ${
                       auth?.token ? "" : "please login to checkout !"
                     }`
                   : " Your Cart Is Empty"}
               </p>
             </h1>
             <div className="col-md-10  p-0 m-0">
               {cart?.map((p) => (
                 <div className="row card flex-row m-3" key={p._id}>
                   <div className="col-md-5">
                   <img
                          src={`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                          alt={p.name}
                          className=" p-4 rounded-0 img-fluid "
                          style={{ width: "30rem", height: "20rem" }}
                        />
                   </div>
                   <div className="col-md-6 m-auto ">
                     <p className="fs-3 text-uppercase"
                  style={{ letterSpacing: "0.2em", color: "#222222" }}
                >Name: <span className="fs-3 text-uppercase"
                style={{ letterSpacing: "0.2em", color: "#47856c" }}
              >{p.name}</span></p>
                     <p>Description: {p.description}</p>
                     <button
                       className="btn btn-danger"
                       onClick={() => removeCartItem(p._id)}
                     >
                       Remove
                     </button>
                   </div>
                   <div className="col-md-4 cart-remove-btn">
                     
                   </div>
                 </div>
               ))}
             </div>
             
           </div>
         </div>
       
     </Layout>
   );
 };

 export default CartPage;