import React from "react";
import { Input, Avatar, Tooltip } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  BookOutlined,
  BellOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./styles.css";

interface HeaderProps {
  headerLeftContent: React.ReactNode; // Cho phép truyền JSX từ bên ngoài
}

const Header: React.FC<HeaderProps> = ({ headerLeftContent }) => {
  return (
    <div className="header-container">
      {/* Phần trái: nhận nội dung từ props */}
      <div className="header-left">{headerLeftContent}</div>

      {/* Phần phải: Nhóm icon và avatar */}
      <div className="header-right">
        <Input
          className="search-input"
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
          suffix={<FilterOutlined />}
        />
        <Tooltip title="Lọc">
          <FilterOutlined className="header-icon" />
        </Tooltip>
        <Tooltip title="Đánh dấu">
          <BookOutlined className="header-icon" />
        </Tooltip>
        <Tooltip title="Trò chuyện">
          <MessageOutlined className="header-icon" />
        </Tooltip>
        <Tooltip title="Thông báo">
          <BellOutlined className="header-icon" />
        </Tooltip>
        <Avatar className="user-avatar">L</Avatar>
      </div>
    </div>
  );
};

export default Header;
