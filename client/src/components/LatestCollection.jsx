import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title'
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
	const [latestProducts, setLatestProducts] = useState([]);

	useEffect(() => {
		setLatestProducts(products.slice(0, 10	));
	}, [])
	

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3x1 ">
				<Title text1='LATEST' text2='COLLECTIONS' />
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis quis itaque totam placeat perspiciatis quos amet, praesentium quibusdam omnis enim quae sit et dolorum ipsam ab, non corporis rerum.
				</p>
			</div>
			{/* Rendering Products */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{
					latestProducts.map((item, index) => (
						<ProductItem 
							key={index}
							id={item._id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
          ))
				}
			</div>
    </div>
  );
};

export default LatestCollection;
