import {
  ColumnWidthOutlined,
  CopyOutlined,
  ExportOutlined,
  ImportOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Select, Space, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react";
import { EStatus, EType, IUser } from "../../common/interface";
import { Box } from "../../components/box";
import { Table } from "../../components/table";
import courses from "../../data/courses.json";
import CourseStatus from "./course-status";
import { useLocation, useNavigate } from "react-router-dom";
import CriterionModal from "./criteria-modal";
import "./styles.css";
const { Option } = Select;
const columns = [
  {
    id: 1,
    title: "Người tạo",
    dataIndex: "user",
    align: "center",
    width: 120,
    fixed: "left",
    render: (user: IUser) => {
      return (
        <Avatar
          size={40}
          src={<img src={`/avatar/${user.avatar}`} alt={`${user.name}`} />}
        />
      );
    },
  },
  {
    id: 2,
    title: "Tên khoá đào tạo",
    dataIndex: "name",
    width: 450,
    render: (name: string, { type }: { type: EType }) => {
      return <CourseStatus name={name} type={type} />;
    },
  },
  {
    id: 3,
    title: "Hình thức đào tạo",
    dataIndex: "method",
    width: 200,
  },
  {
    id: 4,
    title: "Giảng viên",
    dataIndex: "lecturer",
    width: 120,
    align: "center",
    render: (lecturer: IUser) => {
      return (
        <Avatar
          size={40}
          src={
            <img src={`/avatar/${lecturer.avatar}`} alt={`${lecturer.name}`} />
          }
        />
      );
    },
  },
  {
    id: 5,
    title: "Từ ngày",
    dataIndex: "fromDate",
    width: 120,
    align: "center",
  },
  {
    id: 6,
    title: "Đến ngày",
    dataIndex: "toDate",
    width: 120,
    align: "center",
  },
  {
    id: 7,
    title: "Trạng thái",
    dataIndex: "status",
    align: "center",
    width: 200,
    render: (status: EStatus) => {
      return (
        <Box
          className={`status ${
            status === EStatus.PENDING ? "pending" : "complete"
          }`}
        >
          {status}
        </Box>
      );
    },
  },
  {
    id: 8,
    title: "Số học viên",
    dataIndex: "studentCount",
    width: 120,
    align: "center",
  },
  {
    id: 9,
    title: "Tiền phạt nếu vi phạm cam kết",
    dataIndex: "fine",
    width: 250,
    align: "right",
  },
  {
    id: 10,
    title: "Ngày tạo",
    dataIndex: "createdDate",
    width: 120,
    align: "center",
  },
];

const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses?.length / 10);
  const startRecord = (currentPage - 1) * 10 + 1;
  const endRecord = Math.min(currentPage * 10, courses?.length);
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    if (location.pathname === "/criteria") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [location.pathname]);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Quay về trang Course khi đóng modal
  };
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Tất cả (${courses?.length})`,
            children: (
              <>
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
                      Hiển thị {startRecord} - {endRecord} / {courses?.length}{" "}
                      bản ghi
                    </Box>
                    <Box className="page-selector">
                      Trang:
                      <Select
                        value={currentPage}
                        onChange={setCurrentPage}
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
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                        />
                        <Button
                          type="text"
                          icon={<RightOutlined />}
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Space>
                    <Button
                      type="text"
                      className="style-button"
                      icon={<CopyOutlined />}
                    >
                      Nhãn
                    </Button>
                    <Button
                      icon={<ImportOutlined />}
                      type="text"
                      className="style-button"
                    >
                      Import
                    </Button>
                    <Button
                      icon={<ExportOutlined />}
                      type="text"
                      className="style-button"
                    >
                      Export
                    </Button>
                    <Button
                      icon={<SettingOutlined />}
                      type="text"
                      className="style-button"
                    >
                      Cài đặt
                    </Button>
                  </Space>
                </Box>
                <Table columns={columns} data={courses} />
              </>
            ),
          },
        ]}
      />

      <CriterionModal visible={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default Course;
