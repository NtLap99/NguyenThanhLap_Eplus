import React, { useEffect } from "react";
import {
  Modal,
  Input,
  Switch,
  Select,
  Button,
  Form,
  Collapse,
  Row,
  Col,
} from "antd";

const { Option } = Select;

interface CriterionModalProps {
  visible: boolean;
  onClose: () => void;
}

interface FormValues {
  code: string;
  name: string;
  isType: boolean;
  type: string;
  description?: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
}

const CriterionModal: React.FC<CriterionModalProps> = ({
  visible,
  onClose,
}) => {
  const [form] = Form.useForm<FormValues>();

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [form, visible]);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Submitted values:", values);
        form.resetFields();
        onClose();
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  return (
    <Modal
      title="Thêm mới tiêu chí"
      open={visible}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      footer={[
        <Button
          key="cancel"
          onClick={() => {
            form.resetFields();
            onClose();
          }}
        >
          HỦY BỎ
        </Button>,
        <Button key="submit" type="primary" danger onClick={handleSubmit}>
          CẬP NHẬT
        </Button>,
      ]}
      width={600}
    >
      <Form form={form} layout="vertical" initialValues={{ isType: false }} className="main-form">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item<FormValues>
              name="code"
              rules={[{ required: true, message: "Vui lòng nhập mã tiêu chí" }]}
            >
              <Input placeholder="Mã tiêu chí *" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item<FormValues>
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên tiêu chí" },
              ]}
            >
              <Input placeholder="Tên tiêu chí *" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item<FormValues>
          name="isType"
          valuePropName="checked"
        >
          <Switch /> Là loại tiêu chí
        </Form.Item>

        <Form.Item<FormValues>
          name="type"
          rules={[{ required: true, message: "Vui lòng chọn loại tiêu chí" }]}
        >
          <Select placeholder="Loại tiêu chí *">
            <Option value="type1">Loại 1</Option>
            <Option value="type2">Loại 2</Option>
          </Select>
        </Form.Item>

        <Form.Item<FormValues> name="description">
          <Input placeholder="Mô tả" />
        </Form.Item>

        <Collapse
        ghost
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Đánh giá",
              children: (
                <>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Form.Item<FormValues>
                      key={index}
                      name={`score${index}` as keyof FormValues}
                      rules={[
                        {
                          required: true,
                          message: `Vui lòng nhập điểm ${index}`,
                        },
                      ]}
                    >
                      <Input placeholder={`Điểm ${index} *`} />
                    </Form.Item>
                  ))}
                </>
              ),
            },
          ]}
        />
      </Form>
    </Modal>
  );
};

export default CriterionModal;
