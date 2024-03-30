import ProductCard from '../Product/ProductCard';

const Recomendation = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        recomended for you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </div>
  );
};


export default Recomendation;