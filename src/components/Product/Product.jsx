import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Product1 from "../../assets/images/products/product1.jpg";
import Product2 from "../../assets/images/products/product2.jpg";
import Product3 from "../../assets/images/products/product3.jpg";
import Product4 from "../../assets/images/products/product4.jpg";
import Product5 from "../../assets/images/products/product5.jpg";
import Product6 from "../../assets/images/products/product6.jpg";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/Product";
import { fetchCategoriesById } from "../../utils/Category";

const Product = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response);

        const categoryData = await fetchCategoriesById(response.category_id);
        setCategoryName(categoryData.category_name);

        const discount = (response.discount_percent / 100) * response.price;
        const discountedPrice = response.price - discount;
        setPrice(response.price);
        setDiscountedPrice(discountedPrice);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img src={product.image_url} alt="product" className="w-full" />
          {/* <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={Product2}
              alt="product2"
              className="w-full cursor-pointer border border-red-700"
            />
            <img
              src={Product3}
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src={Product4}
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src={Product5}
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src={Product6}
              alt="product2"
              className="w-full cursor-pointer border"
            />
          </div> */}
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              {product.available_units > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-green-600">Out of Stock</span>
              )}
            </p>

            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{categoryName}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-red-700 font-semibold">
              ₹{discountedPrice ? discountedPrice.toFixed(2) : ""}
            </p>
            <p className="text-base text-gray-400 line-through">
              ₹{price ? price.toFixed(2) : ""}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>
          {/* <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" id="red" className="hidden" />
                <label
                  htmlFor="red"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fc3d57" }}
                />
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  className="hidden"
                />
                <label
                  htmlFor="black"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#000" }}
                />
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  className="hidden"
                />
                <label
                  htmlFor="white"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fff" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div> */}
          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-red-700 border border-red-700 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-red-700 transition"
            >
              <FontAwesomeIcon icon={faBagShopping} /> Add to cart
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-red-700 transition"
            >
              <FontAwesomeIcon icon={faHeart} /> Wishlist
            </a>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      {/* ./product-detail */}
      {/* description */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-bold text-left">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <th className="py-2 px-4 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Material
                </th>
                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <th className="py-2 px-4 border border-gray-300 ">55kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ./description */}
      {/* related product */}
      <div className="container pb-16">
        <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6 text-left">
          Related products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* ./related product */}
    </>
  );
};

export default Product;
