import { useEffect, useState } from "react"
import Products_Card from "../Components/Products_Card";

export default function Product() {
    const [products, setProuducts] = useState ([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProuducts(data));
    }, []);

    return (
        <div className="Products">
            {products.map(Prod => (
                <Products_Card 
                    key = {Prod.id}
                    title = {Prod.title}
                    price = {Prod.price}
                    image = {Prod.image}
                    category = {Prod.category}
                />
            ))}
        </div>
    );
}