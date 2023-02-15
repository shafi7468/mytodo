import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Productslist() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = await axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div class="row"  align="center">
      
          {products.map((prod,ind) => {
            return (
              <>
                <div class="col-sm-2 m-3" align="center">
                <div class="card" style={{height:"450px"}} >
                <img src={prod.image} class="card-img-top" style={{height:"200px"}} alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{prod.title}</h5>
                    <p class="card-text">
                     price - {prod.price}/-
                     </p>
                    <a href="#" class="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
                </div>
              </>
            );
          })}
        
      </div>
    </>
  );
}
