// src/components/Header.tsx

import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Header className="bg-blue-500">
      <div className="container mx-auto">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1"><a href="/home">Trang Chu</a></Menu.Item>
          <Menu.Item key="2">Sản phẩm</Menu.Item>
          <Menu.Item key="3">Giới thiệu</Menu.Item>
          <Menu.Item key="4">Liên hệ</Menu.Item>
          <Menu.Item key="4"><a href="/admin">Admin</a></Menu.Item>
          <Menu.Item key="4"><a href="/signup">Signup</a></Menu.Item>
          <Menu.Item key="4"><a href="/signin">Signin</a></Menu.Item>




          
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderComponent;
