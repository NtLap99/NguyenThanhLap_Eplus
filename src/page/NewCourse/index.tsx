import React, { useState } from "react";
import { Button, Tabs } from "antd";
import GeneralInfoForm from "./components/GeneralInfoForm";
import StudentInfoForm from "./components/StudentInfoForm";
import { Box } from "../../components/box";
import "./styles.css";
const { TabPane } = Tabs;
interface StudentCondition {
  employeeCode: string;
  employee: string;
  department: string;
  position: string;
  title: string;
}

interface StudentData {
  department: string | null;
  positions: string[];
  conditions: StudentCondition[];
}

const NewCourse: React.FC = () => {
  const [generalInfo, setGeneralInfo] = useState({
    code: "",
    courseName: "",
    trainingDateFrom: null,
    trainingDateTo: null,
    registrationDeadline: null,
    trainingType: "bat_buoc",
    commitmentTime: "",
    penaltyFee: "",
    trainingLocation: "",
    manager: "",
    follower: "",
    trainingContent: "",
  });

  const [studentInfo, setStudentInfo] = useState<StudentData>({
    department: null,
    positions: [],
    conditions: [],
  });

  const handleGeneralInfoChange = (field: string, value: any) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box className="main-tab">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Thông tin chung",
            children: (
              <GeneralInfoForm
                data={generalInfo}
                onChange={handleGeneralInfoChange}
              />
            ),
          },
          {
            key: "2",
            label: "Thông tin học viên",
            children: (
              <StudentInfoForm
                studentData={studentInfo}
                onChange={setStudentInfo}
              />
            ),
          },
          {
            key: "3",
            label: "Lịch học",
            children: <></>,
          },
          {
            key: "4",
            label: "Phiếu đánh giá",
            children: <></>,
          },
        ]}
      />
      <Box className="action">
        <Button type="primary" danger className="button-update">
          CẬP NHẬT
        </Button>
        <Button type="default">HUỶ BỎ</Button>
      </Box>
    </Box>
  );
};

export default NewCourse;
