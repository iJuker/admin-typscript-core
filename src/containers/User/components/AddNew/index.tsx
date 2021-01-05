import React, { useState } from 'react';

import { Form, Button, Modal, Row, Col, Input, Select } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
interface User {
    type: string;
    first: string;
    last: string;
    gender: string;
    email: string;
}

interface AddProps {
    addNewRow(user: User): void;
}
const Index: React.FC<AddProps> = ({ addNewRow }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setloading] = useState(false);
    const [form] = Form.useForm();

    function onSubmit(): void {
        setloading(true);
        form.submit();
    }

    function onFinish(user: User): void {
        setTimeout(() => {
            setloading(false);
            setVisible(false);
            addNewRow(user);
        }, 500);
    }

    return (
        <div>
            <Button onClick={() => setVisible(!visible)} type="primary" size="middle">
                Add new
            </Button>
            <Modal
                width={600}
                title="Add new user"
                onOk={onSubmit}
                onCancel={() => setVisible(false)}
                visible={visible}
                confirmLoading={loading}
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    {...layout}
                    initialValues={{ type: 'admin', gender: 'M', email: 'asd@gmail.com' }}
                >
                    <Row gutter={[12, 0]}>
                        <Col md={12}>
                            <Form.Item label="First name" name="first" rules={[{ required: true }]}>
                                <Input placeholder="First name" />
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="Last name" name="last" rules={[{ required: true }]}>
                                <Input placeholder="Last name" />
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="Type" name="type" rules={[{ required: true }]}>
                                <Select defaultValue="">
                                    <Select.Option disabled value="">
                                        -- Select type--
                                    </Select.Option>
                                    <Select.Option value="admin">admin</Select.Option>
                                    <Select.Option value="user">user</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                                <Select defaultValue="">
                                    <Select.Option disabled value="">
                                        -- Select gender--
                                    </Select.Option>
                                    <Select.Option value="M">Male</Select.Option>
                                    <Select.Option value="F">Female</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default Index;
