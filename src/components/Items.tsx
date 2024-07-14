import React, { useEffect, useState } from "react";
import { supabase } from "../lib/createClient";

type Product = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: number;
};

const Items = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select();

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("Fetched products:", data); // Логирование данных
        setProducts(data as Product[]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Products to render:", products);

  return (
    <main>
      <div className="item">
        {products.map((product) => (
          <div key={product.id}>
            
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <b>{product.price} $</b>
            <h3 className="add-to-cart">+</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Items;
