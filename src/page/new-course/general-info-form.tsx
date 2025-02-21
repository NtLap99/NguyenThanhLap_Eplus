import React from "react";
import { Form, Input, DatePicker, Select, Row, Col } from "antd";
import { QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Box from "../../components/box";

const { Option } = Select;
interface FormValues {
  code: string;
}

interface GeneralInfoProps {
  data: {
    code: string;
    courseName: string;
    trainingDateFrom: string | null;
    trainingDateTo: string | null;
    registrationDeadline: string | null;
    trainingType: string;
    commitmentTime: string;
    penaltyFee: string;
    trainingLocation: string;
    manager: string;
    follower: string;
    trainingContent: string;
  };
  onChange: (field: string, value: any) => void;
}

const GeneralInfoForm: React.FC<GeneralInfoProps> = ({ data, onChange }) => {
  return (
    <Form layout="vertical" className="main-general-info">
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item<FormValues>
            name="code"
            rules={[{ required: true, message: "Vui lòng nhập mã tiêu chí" }]}
          >
            <Box>
              <label className="custom-label">
                Mã <span className="required">*</span>
                <QuestionCircleOutlined className="icon" />
              </label>
              <Input
                value={data.code}
                onChange={(e) => onChange("code", e.target.value)}
                 placeholder="Mã khoá đào tạo"
              />
            </Box>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Input
              value={data.courseName}
              onChange={(e) => onChange("courseName", e.target.value)}
              placeholder="Tên khoá đào tạo"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Thời gian đào tạo">
            <DatePicker
              style={{ width: "100%" }}
              value={
                data.trainingDateFrom ? dayjs(data.trainingDateFrom) : null
              }
              onChange={(date) =>
                onChange("trainingDateFrom", date?.toISOString())
              }
              placeholder="dd/mm/yyyy"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label=" ">
            <DatePicker
              style={{ width: "100%" }}
              value={data.trainingDateTo ? dayjs(data.trainingDateTo) : null}
              onChange={(date) =>
                onChange("trainingDateTo", date?.toISOString())
              }
              placeholder="dd/mm/yyyy"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item>
            <label className="custom-label">
              Hình thức đào tạo <span className="required">*</span>
            </label>
            <Select
              value={data.trainingType}
              onChange={(value) => onChange("trainingType", value)}
              placeholder="Hình thức đào tạo"
            >
              <Option value="bat_buoc">Bắt buộc</Option>
              <Option value="tu_nguyen">Tự nguyện</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <DatePicker
              style={{ width: "100%" }}
              value={
                data.registrationDeadline
                  ? dayjs(data.registrationDeadline)
                  : null
              }
              onChange={(date) =>
                onChange("registrationDeadline", date?.toISOString())
              }
              disabled
              placeholder="Hạn đăng ký *"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item>
            <label className="custom-label">
              <QuestionCircleOutlined className="icon" />
            </label>
            <Input
              value={data.commitmentTime}
              onChange={(e) => onChange("commitmentTime", e.target.value)}
              placeholder="Thời gian cam kết"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <Input
              value={data.penaltyFee}
              onChange={(e) => onChange("penaltyFee", e.target.value)}
              placeholder="Tiền phạt"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Địa điểm đào tạo"
              value={data.trainingLocation}
              onChange={(e) => onChange("trainingLocation", e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Người quản lý"
              suffix={
                <SearchOutlined style={{ color: "#ddd", fontSize: 21 }} />
              }
              value={data.manager}
              onChange={(e) => onChange("manager", e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Người theo dõi"
              suffix={
                <SearchOutlined style={{ color: "#ddd", fontSize: 21 }} />
              }
              value={data.follower}
              onChange={(e) => onChange("follower", e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Box>
              <label className="custom-label">Nội dung đào tạo</label>
              <Input
                placeholder="Nội dung đào tạo"
                value={data.trainingContent}
                onChange={(e) => onChange("trainingContent", e.target.value)}
              />
            </Box>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default GeneralInfoForm;
