import { PlusOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const AddButton: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key) {
      navigate(`/${e.key}`);
      setIsOpen(false);
    }
  };

  const menuItems: MenuProps["items"] = [
    { key: "newCourse", label: "Đào tạo" },
    { key: "criteria", label: "Tiêu chí đánh giá" },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems, onClick: handleMenuClick }}
      trigger={["click"]}
      placement="bottomLeft"
      onOpenChange={(open) => setIsOpen(open)}
    >
      <Typography.Link
        className={`${isOpen ? "open-add-button " : "add-button"}`}
      >
        <PlusOutlined className="plus-icon" />
      </Typography.Link>
    </Dropdown>
  );
};

export default AddButton;
