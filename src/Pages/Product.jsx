import { useEffect, useState } from "react";
import Products_Card from "../Components/Products_Card";

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products?limit=100&skip=100")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });

    }, []);

    return (
        <main className="container py-4">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 g-lg-4 justify-content-center">
                {products.map((prod) => (
                    <Products_Card
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        price={prod.price}
                        image={prod.thumbnail}
                        category={prod.category}
                    />
                ))}
            </div>
        </main>
    );
};

export default Product;