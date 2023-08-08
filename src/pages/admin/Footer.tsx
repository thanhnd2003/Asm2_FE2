// src/components/Footer.tsx

import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <Footer className="bg-blue-500 text-black text-center">
      Bản quyền © 2023. Tất cả các quyền được bảo lưu.
    </Footer>
  );
};

export default FooterComponent;
