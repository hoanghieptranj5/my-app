import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Slice/AuthSlice';
import { Form, Input, Button, Typography, Alert } from 'antd';

const { Title } = Typography;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password })).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                navigate('/');
            }
        });
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
            {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '20px' }} />}
            <Form
                name="login"
                onFinish={handleSubmit}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block onClick={handleSubmit}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
