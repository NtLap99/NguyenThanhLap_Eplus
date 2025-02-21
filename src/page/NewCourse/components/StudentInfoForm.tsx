import React from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";
import { PlusOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Box } from "../../../components/box";

const { Option } = Select;

interface StudentCondition {
  employeeCode: string;
  employee: string;
  department: string;
  position: string;
  title: string;
}

interface studentData {
  department: string | null;
  positions: string[];
  conditions: StudentCondition[];
}

interface StudentInfoFormProps {
  studentData: studentData;
  onChange: (updatedFilter: studentData) => void;
}

const StudentInfoForm: React.FC<StudentInfoFormProps> = ({
  studentData,
  onChange,
}) => {
  const handleDepartmentChange = (value: string) => {
    onChange({ ...studentData, department: value });
  };

  const handlePositionsChange = (values: string[]) => {
    onChange({ ...studentData, positions: values });
  };

  const addCondition = () => {
    onChange({
      ...studentData,
      conditions: [
        ...studentData.conditions,
        {
          employeeCode: "",
          employee: "",
          department: "",
          position: "",
          title: "",
        },
      ],
    });
  };

  const removeCondition = (index: number) => {
    const updatedConditions = studentData.conditions.filter(
      (_, i) => i !== index
    );
    onChange({ ...studentData, conditions: updatedConditions });
  };

  const handleConditionChange = (
    index: number,
    field: keyof StudentCondition,
    value: string
  ) => {
    const updatedConditions = [...studentData.conditions];
    updatedConditions[index][field] = value;
    onChange({ ...studentData, conditions: updatedConditions });
  };
  
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Phòng ban thuộc">
            <Select
              placeholder="Chọn phòng ban"
              value={studentData.department}
              onChange={handleDepartmentChange}
            >
              <Option value="hr">Nhân sự</Option>
              <Option value="it">Công nghệ</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Vị trí thuộc">
            <Select
              mode="multiple"
              placeholder="Chọn nhiều"
              value={studentData.positions}
              onChange={handlePositionsChange}
            >
              <Option value="manager">Quản lý</Option>
              <Option value="staff">Nhân viên</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Button color="default" variant="filled" icon={<PlusOutlined />}>
        Điều kiện
      </Button>

      {studentData.conditions.map((condition, index) => (
        <Row gutter={8} key={index} style={{ marginTop: 10 }}>
          <Col span={3}>
            <Form.Item label="Mã nhân sự">
              <Input
                placeholder="Mã nhân sự"
                value={condition.employeeCode}
                onChange={(e) =>
                  handleConditionChange(index, "employeeCode", e.target.value)
                }
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Nhân sự">
              <Input
                placeholder="Chọn nhân sự"
                suffix={
                  <SearchOutlined style={{ color: "#ddd", fontSize: 21 }} />
                }
                value={condition.employee}
                onChange={(e) =>
                  handleConditionChange(index, "employee", e.target.value)
                }
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Phòng ban">
              <Input
                placeholder="Phòng ban"
                value={condition.department}
                onChange={(e) =>
                  handleConditionChange(index, "department", e.target.value)
                }
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Vị trí">
              <Input
                placeholder="Vị trí"
                value={condition.position}
                onChange={(e) =>
                  handleConditionChange(index, "position", e.target.value)
                }
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Chức vụ">
              <Input
                placeholder="Chức vụ"
                value={condition.title}
                onChange={(e) =>
                  handleConditionChange(index, "title", e.target.value)
                }
                disabled
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label=" ">
              <Button
                type="text"
                icon={
                  <CloseOutlined
                    style={{ color: "#aaa", fontSize: 18, marginTop: 16 }}
                  />
                }
                onClick={() => removeCondition(index)}
              />
            </Form.Item>
          </Col>
        </Row>
      ))}
      <Box
        style={{
          marginTop: studentData.conditions?.length === 0 ? 16 : 0,
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          danger
          ghost
          shape="circle"
          icon={<PlusOutlined />}
          onClick={addCondition}
        />
      </Box>
    </Form>
  );
};

export default StudentInfoForm;
