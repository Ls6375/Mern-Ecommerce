import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
				setImage(item.image[0]); 
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data on component mount or update when productId changes
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-1O transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

				{/* Product Images */}
        <div className="flex-1 flex flex-row gap-3">
					<div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.77%] w-full">
							{
								productData.image.map((img, index) => (
                  <img
										onClick={()=> setImage(img)}
                    key={index}
                    src={img}
                    alt={productData.name}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                  />
                ))
							}

					</div>
					<div className="w-full sm:w-[80%] " >
						<img className="w-full h-auto" src={image} alt='image' />
					</div>
				</div>

				{/* Product Info  */}
      </div>
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
}

export default Product;
