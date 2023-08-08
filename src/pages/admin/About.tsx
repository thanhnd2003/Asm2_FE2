import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../api/product";
import { IProduct } from "../../interface/product";
import { Typography } from "antd";

const { Title, Text } = Typography;

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  console.log(id)
  // const productId = parseInt(id);
  const { data: productData} = useGetProductByIdQuery(id);



    return (
      <div className="container mx-auto py-8">
        <div className="text-center mb-8 my-8">
          <Title className="text-4xl font-bold text-gray-800">{productData?.name}</Title>
        </div>
        <div>
          <img alt="Sản phẩm" src={productData?.img} className="h-40 object-cover mx-auto mb-4" />
          <Text className="text-xl text-gray-800">Giá: ${productData?.price}</Text>
        </div>
      </div>
    );
  


  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // return <div>Product not found</div>;
}

export default ProductDetailPage
