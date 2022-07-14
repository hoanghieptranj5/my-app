import { Space, Table, Tag } from 'antd';
import React, {useEffect, useState, useCallback} from 'react';
import { calculate } from '../../service/ElectricService';
import NumberFormat from 'react-number-format';

const sampleColumns = [
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'Standard Price',
    dataIndex: 'standardPrice',
    key: 'standardPrice',
    render: text => <NumberFormat
      value={text}
      className="foo"
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      renderText={(value, props) => <div {...props}>{value}</div>}
    />
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    render: text => <NumberFormat
      value={text}
      className="foo"
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      renderText={(value, props) => <div {...props}>{value}</div>}
    />
  },
  {
    title: 'Usage',
    key: 'usage',
    dataIndex: 'usage'
  },
];
const moqData = {
  "usage": 125,
  "items": [
    {
      "from": 0,
      "to": 25,
      "standardPrice": 1678,
      "price": 41950,
      "usage": 25
    },
    {
      "from": 51,
      "to": 76,
      "standardPrice": 1734,
      "price": 43350,
      "usage": 25
    },
    {
      "from": 102,
      "to": 152,
      "standardPrice": 2014,
      "price": 100700,
      "usage": 50
    },
    {
      "from": 203,
      "to": 253,
      "standardPrice": 2536,
      "price": 63400,
      "usage": 25
    },
    {
      "from": 304,
      "to": 354,
      "standardPrice": 2834,
      "price": 0,
      "usage": 0
    },
    {
      "from": 405,
      "to": 10000,
      "standardPrice": 2927,
      "price": 0,
      "usage": 0
    }
  ],
  "total": 249400,
  "totalVat": 274340
};

const CalculatedTable = ({ inputUsage }) => {

  const [columns, setColumns] = useState(sampleColumns);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [totalUsage, setTotalUsage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalVAT, setTotalVAT] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await calculate(inputUsage);
      return result.json();
    }
    fetchData()
      .then(res => {
          setTotalUsage(res.usage);
          setTotal(res.total);
          setTotalVAT(res.totalVat);
          setData(res.items);

          setLoading(false);
        })
      .catch(err => console.error(err));
  }, [inputUsage])

  return (
    <div>
      <p>Total Usage: {totalUsage} KWh</p>
      <p>Total Price: <NumberFormat
        value={total}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <p>Total VAT Price: <NumberFormat
        value={totalVAT}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <Table columns={columns} dataSource={data} loading={loading} />
    </div>
  );
};
export default CalculatedTable;