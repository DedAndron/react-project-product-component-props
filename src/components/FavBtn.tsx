import product from "./Product.tsx";

const AddToFav=()=>{
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    if(favorites.length > 0){
        favorites.push(product);
    }
    localStorage.setItem("favorites",JSON.stringify(favorites));
}
export default AddToFav;