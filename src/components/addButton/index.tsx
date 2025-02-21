import { Dropdown, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import "./styles.css";

const AddButton: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key) {
      navigate(`/${e.key}`);
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
    >
      <Typography.Link className="add-button">
        <PlusOutlined className="plus-icon" />
      </Typography.Link>
    </Dropdown>
  );
};

export default AddButton;
