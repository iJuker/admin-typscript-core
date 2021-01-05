import React from 'react';
import { Card, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const WrapCard = styled(Card)`
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
`;
const CardLogo = styled.h2`
    text-align: center;
    padding: 5px 0;
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px;
`;
interface User {
    username: string;
    password: string;
    remember: boolean;
}

interface LoginUIProps {
    onFinish(e: User): void;
}
const Index: React.FC<LoginUIProps> = ({ onFinish }) => {
    return (
        <WrapCard>
            <Row>
                <Col lg={24}>
                    <CardLogo>QWIQ</CardLogo>
                </Col>
                <Col lg={24}>
                    <div style={{ marginTop: 40 }}>
                        <Form onFinish={onFinish} name="normal_login" initialValues={{ remember: true }}>
                            <Form.Item
                                name="username"
                                rules={[
                                    { required: true, message: 'Please input your Username!' },
                                    { type: 'email', message: 'Username is not a valid' },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined style={{ color: `rgba(0, 0, 0, 0.25)` }} />}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined style={{ color: `rgba(0, 0, 0, 0.25)` }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </WrapCard>
    );
};

export default Index;
