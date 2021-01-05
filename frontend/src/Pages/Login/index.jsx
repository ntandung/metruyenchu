import { Form, Button, Input, Checkbox } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./login.module.css";
import { Typography } from 'antd';

const { Title } = Typography;


const Login = (props) => {
  return (
    <div className={styles.root}>
      <Title level={5}>Login to Mê Truyện Chữ</Title>
      <Form initialValues={{ remember: true }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className={styles.item}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a>Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" block>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
