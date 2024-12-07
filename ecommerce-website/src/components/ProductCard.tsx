import Image from 'next/image';
import React from 'react';

// Interface for Product
interface Product {
  id: number;
  image: string;
  name: string;
  discount: number;
  price: number;
  oldPrice: number;
  rating: number; // Float (e.g., 4.5)
  reviews: number;
}

// Helper Function to Render Stars
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Render Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500 text-lg">★</span>
      ))}
      {/* Render Half Star */}
      {halfStar && <span className="text-yellow-500 text-lg">☆</span>}
      {/* Render Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-lg">★</span>
      ))}
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-md relative flex flex-col group">
      {/* Discount Badge */}
      <div className="Poppins absolute top-5 left-5 z-10 flex justify-center items-center w-14 bg-[#DB4444] text-white text-xs font-light px-2 py-1 rounded">
        -{product.discount}%
      </div>

      {/* Product Image */}
      <div className="relative h-52">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain pb-4 pt-2 bg-gray-100"
        />

        {/* Add to Cart Button (Hidden by Default, Visible on Hover) */}
        <button className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Add To Cart
        </button>
      </div>

      {/* Wishlist and Quick View Buttons */}
      <div className="absolute top-6 right-6 flex flex-col space-y-2">
        <button className="bg-white rounded-full shadow hover:shadow-lg">
          <Image src="/Fill-Heart.png" alt="heart" width={30} height={30} />
        </button>
        <button className="bg-white rounded-full shadow hover:shadow-lg">
          <Image src="/Fill-Eye.png" alt="eye" width={30} height={30} />
        </button>
      </div>

      {/* Product Name */}
      <h3 className="Poppins text-base font-medium text-black mt-4">{product.name}</h3>

      {/* Prices */}
      <div className="flex items-center space-x-2">
        <span className="Poppins text-[#DB4444] font-medium">${product.price}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-500">${product.oldPrice}</span>
        )}
      </div>

      {/* Ratings and Reviews */}
      <div className="flex items-center text-sm mt-1">
        {renderStars(product.rating)}
        <span className="text-gray-500 font-semibold text-base ml-2">
          ({product.reviews})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
