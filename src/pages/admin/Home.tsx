
import React from "react";
import { Link} from "react-router-dom"
import { Button, Typography, Card, Row, Col } from "antd";
import { IProduct } from "../../interface/product";
const { Title, Text } = Typography;
import { useGetProductsQuery } from "../../api/product";

const HomePage: React.FC = () => {
  const { data: productData, error, isLoading } = useGetProductsQuery();
  return (
    <div className="container mx-auto py-8">
    <div className="text-center mb-8 my-8">
      <Title className="text-4xl font-bold text-gray-800">Chào mừng bạn đến với Shop của chúng tôi</Title>
    </div>
    <Row gutter={[16, 16]}>
      {productData?.map((product: IProduct) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={<img alt="Sản phẩm" src={product.img} className="h-20 object-cover" />}
            actions={[
              <Button type="primary" key="view" >
                <Link to={`/products/${product.id}`} className="text-white">Xem</Link>
              </Button>,
              <Button key="add-to-cart">Thêm vào giỏ hàng</Button>,
            ]}
          >
            <Card.Meta title={product.name} description={`$${product.price}`} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default HomePage;
