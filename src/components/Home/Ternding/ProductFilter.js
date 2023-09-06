import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchProductsByType } from "../../../Redux/Slice/ProductSlice";
import Skeleton from "../Skeleton";

const ProductFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");

  const { products, loading, error } = useSelector(state => state.product);

  const dispatch = useDispatch();
  const type = "kids";

  useEffect(() => {
    dispatch(fetchProductsByType(type));
  }, [dispatch, type]);

  useEffect(() => {
    // Apply filters to the product data whenever the filter values change
    const applyFilters = () => {
      let filteredData = [...products];

      if (priceFilter) {
        filteredData = filteredData.filter(product => product.price <= parseInt(priceFilter));
      }

      if (categoryFilter) {
        filteredData = filteredData.filter(product => product.category === categoryFilter);
      }

      if (sizeFilter) {
        filteredData = filteredData.filter(product => product.size === sizeFilter);
      }

      if (colorFilter) {
        filteredData = filteredData.filter(product => product.color === colorFilter);
      }

      setFilteredProducts(filteredData);
    };

    applyFilters();
  }, [products, priceFilter, categoryFilter, sizeFilter, colorFilter]);

  return (
    <div>
      <div className="lg:p-0 p-10 my-10 lg:flex gap-5 items-center">
        <div>
          {/* Price Filter */}
          <label>Price:</label>
          <input
            className="border outline-none p-2 mx-2 rounded-lg"
            type="number"
            min="0"
            value={priceFilter}
            onChange={e => setPriceFilter(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="my-5">
          <label>Category:</label>
          <select
            className="border outline-none p-2  mx-2 rounded-lg"
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="travel bag">Travel Bag</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="sale">Sale</option>
            <option value="new arrivals">New arrivals</option>
            <option value="backpacks">Backpacks</option>
          </select>
        </div>

        {/* Size Filter */}
        <div className="my-5">
          <label>Size:</label>
          <select
            className="border outline-none p-2 mx-2 rounded-lg"
            value={sizeFilter}
            onChange={e => setSizeFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Color Filter */}
        <div>
          <label>Color:</label>
          <select
            className="border outline-none p-2 mx-2 rounded-lg"
            value={colorFilter}
            onChange={e => setColorFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="brown">Brown</option>
          </select>
        </div>
      </div>

      {/* Display Filtered Products */}
      <div className="lg:grid grid-cols-4 gap-8 p-10 lg:p-0">
        {error && <h5 className="text-red">Internal server error....</h5>}
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {filteredProducts.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
