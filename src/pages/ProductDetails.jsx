import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // param
  const params = useParams();
  // display passed params
  console.log(params);
  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default ProductDetails;
