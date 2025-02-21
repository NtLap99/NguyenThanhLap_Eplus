import React from "react";
import { Dropdown, Menu, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import './styles.css'

const AddButton: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Đào tạo</Menu.Item>
      <Menu.Item key="2">Tiêu chí đánh giá</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <Typography.Link className="add-button">
        <PlusOutlined className="plus-icon" />
      </Typography.Link>
    </Dropdown>
  );
};

export default AddButton;
