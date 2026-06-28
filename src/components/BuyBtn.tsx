import type {ProductType} from "../types/ProductType.ts";

const AddToCart = (product: ProductType) => {
    const cart: ProductType[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export default AddToCart;