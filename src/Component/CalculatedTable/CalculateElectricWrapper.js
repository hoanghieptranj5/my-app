import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Button, Input, Row, Col, Card } from "antd";
import CalculatedTable from "./CalculatedTable";
import { setSelectedPage } from "../../Redux/Slice/NavigationBarSlice";

const DEFAULT_VALUE = 10;

const CalculateElectricWrapper = () => {
    const [value, setValue] = useState(DEFAULT_VALUE);
    const [submitted, setSubmitted] = useState(DEFAULT_VALUE);

    useEffect(() => {
        setSelectedPage('Calculator');
    }, []);

    const onChangeNumber = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = () => {
        setSubmitted(value);
    }

    return (
        <Card
            bordered={false}
            style={{
                borderRadius: 10,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                padding: '20px',
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#f0f2f5'
            }}
        >
            <Row gutter={[16, 16]} justify="center" align="middle">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Enter your usage:</h1>
                </Col>
                <Col span={16}>
                    <Input
                        size="large"
                        placeholder="Usage"
                        prefix={<UserOutlined />}
                        value={value}
                        onChange={onChangeNumber}
                        style={{ borderRadius: '5px' }}
                    />
                </Col>
                <Col span={8}>
                    <Button
                        type="primary"
                        size="large"
                        onClick={onSubmit}
                        style={{
                            width: '100%',
                            borderRadius: '5px',
                            backgroundColor: '#1890ff',
                            borderColor: '#1890ff'
                        }}
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
            <div style={{ marginTop: '30px' }}>
                <CalculatedTable inputUsage={submitted} />
            </div>
        </Card>
    )
}

export default CalculateElectricWrapper;
