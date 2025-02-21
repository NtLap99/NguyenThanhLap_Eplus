import {
  CopyOutlined,
  ExportOutlined,
  ImportOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Space, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import courses from "../../data/courses.json";
import { columns } from "./course-columns";
import CriterionModal from "./criteria-modal";
import Pagination from "./pagination";
import "./styles.css";
import Box from "../../components/box";
import Table from "../../components/table";

const PAGE_SIZE = 10;
const totalPages = Math.ceil(courses.length / PAGE_SIZE);

const getCoursesByPage = (page: number) => {
  const startIndex = (page - 1) * PAGE_SIZE;
  return courses.slice(startIndex, startIndex + PAGE_SIZE);
};

const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagedCourses, setPagedCourses] = useState(getCoursesByPage(1));

  useEffect(() => {
    setPagedCourses(getCoursesByPage(currentPage));
  }, [currentPage]);

  useEffect(() => {
    setIsModalOpen(location.pathname === "/criteria");
  }, [location.pathname]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <Box className="main-course">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Tất cả (${courses?.length})`,
            children: (
              <Box>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  startRecord={(currentPage - 1) * PAGE_SIZE + 1}
                  endRecord={Math.min(currentPage * PAGE_SIZE, courses.length)}
                  totalRecords={courses.length}
                  onPageChange={setCurrentPage}
                  paginationRightContent={
                    <Space>
                      <Button
                        type="text"
                        icon={<CopyOutlined />}
                        className="style-button"
                      >
                        Nhãn
                      </Button>
                      <Button
                        type="text"
                        icon={<ImportOutlined />}
                        className="style-button"
                      >
                        Import
                      </Button>
                      <Button
                        type="text"
                        icon={<ExportOutlined />}
                        className="style-button"
                      >
                        Export
                      </Button>
                      <Button
                        type="text"
                        icon={<SettingOutlined />}
                        className="style-button"
                      >
                        Cài đặt
                      </Button>
                    </Space>
                  }
                />

                <Table columns={columns} data={pagedCourses} />
              </Box>
            ),
          },
        ]}
      />
      <CriterionModal visible={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Course;
