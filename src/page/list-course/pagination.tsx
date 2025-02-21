import { Button, Select } from "antd";
import {
  ColumnWidthOutlined,
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Box from "../../components/box";

const { Option } = Select;

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  startRecord: number;
  endRecord: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
  paginationRightContent: React.ReactNode;
}

const Pagination = ({
  currentPage,
  totalPages,
  startRecord,
  endRecord,
  totalRecords,
  onPageChange,
  paginationRightContent,
}: PaginationControlsProps) => {
  return (
    <Box className="pagination-container">
      <Box className="pagination">
        <Button
          type="text"
          className="style-button"
          icon={<ColumnWidthOutlined />}
        />
        <Button
          type="text"
          className="style-button"
          icon={<UnorderedListOutlined />}
        />
        <Box className="record-info">
          Hiển thị {startRecord} - {endRecord} / {totalRecords} bản ghi
        </Box>
        <Box className="page-selector">
          Trang:
          <Select
            value={currentPage}
            onChange={onPageChange}
            className="page-dropdown"
            size="small"
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1}
              </Option>
            ))}
          </Select>
          / {totalPages}
          <Box className="page-change">
            <Button
              type="text"
              icon={<LeftOutlined />}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            <Button
              type="text"
              icon={<RightOutlined />}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Box>
        </Box>
      </Box>
      {paginationRightContent}
    </Box>
  );
};

export default Pagination;
