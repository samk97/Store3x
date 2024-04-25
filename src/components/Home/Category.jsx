import Category1 from "../../assets/images/category/category-1.jpg"
import Category2 from "../../assets/images/category/category-2.jpg"
import Category3 from "../../assets/images/category/category-3.jpg"
import Category4 from "../../assets/images/category/category-4.jpg"
import Category5 from "../../assets/images/category/category-5.jpg"
import Category6 from "../../assets/images/category/category-6.jpg"

const Category = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category1}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
           Electronics
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category2}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Home Appliances
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category3}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Electronics
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category4}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Home Appliances
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category5}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Electronics
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src={Category6}
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Home Appliances
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
