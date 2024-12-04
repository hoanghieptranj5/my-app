import { Table, Typography, Card, Row, Col, Spin } from 'antd';
import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalculation } from '../../Redux/Slice/CalculationSlice';
import { calculatedTableColumns } from './CalculatedTableColumns';

const { Title, Text } = Typography;

const CalculatedTable = ({ inputUsage }) => {
  const calculation = useSelector((state) => state.calculation);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCalculation({ inputUsage, token }));
  }, [inputUsage]);

  return (
    <Card
      bordered={false}
      style={{
        borderRadius: 10,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        padding: '20px',
      }}
    >
      <Spin spinning={calculation.isLoading}>
        <Row gutter={[16, 16]}>
          <Col span={12}></Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Title level={4}>Total Costs</Title>
            <Text strong>Total Price: </Text>
            <NumberFormat
              value={calculation.total}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value) => <Text>{value}</Text>}
            />
            <br />
            <Text strong>Total VAT Price: </Text>
            <NumberFormat
              value={calculation.totalWithVAT}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value) => <Text>{value}</Text>}
            />
          </Col>
        </Row>
        <Table
          columns={calculatedTableColumns}
          dataSource={calculation.items}
          pagination={false}
          style={{ marginTop: '20px' }}
        />
      </Spin>
    </Card>
  );
};

export default CalculatedTable;
