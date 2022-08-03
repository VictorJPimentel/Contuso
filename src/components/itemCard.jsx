import React from "react";
import { Link } from "react-router-dom";

function itemCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={product.images[0]} alt={product.name} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <h3 className="font-bold">{product.name}</h3>
          </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            {product.price.unit_amount / 100}{" "}
            {product.price.currency.toUpperCase()}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default itemCard;
