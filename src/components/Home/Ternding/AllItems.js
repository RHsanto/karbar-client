/* eslint-disable react/no-unescaped-entities */

import ProductFilter from "./ProductFilter";

const AllItems = () => {
  return (
    <div className="my-32 lg:px-32 container mx-auto">
      <div className="border-b-2 p-10 lg:p-0">
        <h3>What's trending now</h3>
        <h6 className="text-[18px] my-5 text[#6B7280]">
          Discover the most trending products in Dokan.
        </h6>
      </div>

      {/* products Filter  */}
      <div>
        <ProductFilter />
      </div>
    </div>
  );
};

export default AllItems;
