import product from "./Product.tsx";

const AddToCart=()=>{
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
}
export default AddToCart;