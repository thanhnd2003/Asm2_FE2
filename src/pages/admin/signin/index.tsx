import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { loginUser } from "../../../api/user";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const credentials = {
        username: values.username,
        password: values.password,
        role: values.role
      };
      const user = await loginUser(credentials);
      setLoading(false);
      console.log(user.role)
      console.log(user);
      if (user) {
        // Lưu thông tin người dùng vào local storage
        localStorage.setItem("user", JSON.stringify(user));
        // Chuyển hướng đến trang chính hoặc trang quản trị tùy thuộc vào vai trò của người dùng
        if (user.role === "admin") {
          // navigate("/admin");
        message.success("Đăng nhập thành công!");

        } else if(user.role === "user"){
          // navigate("/home");
        message.success("Đăng nhập thành công!");

        }
      } else {
        message.error("Tài khoản hoặc mật khẩu không chính xác!");
      }
    } catch (error) {
      setLoading(false);
      message.error("Đăng nhập thất bại!");
    }
  };

  return (
    <Form name="login" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
