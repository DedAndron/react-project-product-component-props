import type {ProductType} from "../types/ProductType.ts";

const AddToFav = (product: ProductType) => {
    const favorites: ProductType[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    const isFavorite = favorites.some((favorite) => favorite.id === product.id);

    const updatedFavorites = isFavorite
        ? favorites.filter((favorite) => favorite.id !== product.id)
        : [...favorites, product];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}

export default AddToFav;