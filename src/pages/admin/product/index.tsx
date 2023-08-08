import { IProduct } from "@/interface/product";
import React, { useState } from "react";
import { Table, Button, Skeleton, Popconfirm, Alert } from "antd";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../../api/product";

type Props = {};

const AdminProduct = (props: Props) => {
  const { data: productData, error, isLoading } = useGetProductsQuery();

  const [
    removeProduct,
    { isLoading: isRemoveLoading, isSuccess: isRemoveSuccess },
  ] = useRemoveProductMutation();

  const confirm = (id: number) => {
    removeProduct(id);
  };
  const dataSource = productData?.map(({ id, name, price, img }: IProduct) => ({
    key: id,
    name,
    price,
    img,
  }));
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "IMG",
      dataIndex: "img",
      key: "img",
      render: (url: string) => (
        <img src={url} alt="Product" style={{ width: 50 }} />
      ),
    },
    {
      title: "",
      render: ({ key: id }: any) => {
        return (
          <>
            <div className="flex space-x-2">
              <Popconfirm
                title="Bạn có muốn xóa ?"
                onConfirm={() => confirm(id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  <AiTwotoneDelete />
                </Button>
              </Popconfirm>

              <Button type="primary" primary className="m-4">
                <Link to={`/admin/product/${id}/edit`}>
                  <AiTwotoneEdit />
                </Link>
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <header className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
        <Button type="primary" primary>
          <Link to="/admin/product/add" className="flex items-center space-x-2">
            <AiOutlinePlus />
            Thêm sản phẩm
          </Link>
        </Button>
      </header>
      {isRemoveSuccess && <Alert message="Success Text" type="success" />}
      {isLoading ? (
        <Skeleton />
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
  );
};

export default AdminProduct;
