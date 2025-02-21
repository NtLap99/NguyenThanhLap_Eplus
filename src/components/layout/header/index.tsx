import React from "react";
import { Input, Avatar, Tooltip } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  BookOutlined,
  BellOutlined,
  MessageOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import "./styles.css";
import Box from "../../box";

interface HeaderProps {
  headerLeftContent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ headerLeftContent }) => {
  return (
    <Box className="header-container">
      <Box className="header-left">{headerLeftContent}</Box>
      <Box className="header-right">
        <Input
          className="search-input"
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined className="header-icon"/>}
          suffix={<SortAscendingOutlined className="header-icon"/>}
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
      </Box>
    </Box>
  );
};

export default Header;
