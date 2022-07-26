import { Space, Table, Tag } from 'antd';
import React, {useEffect, useState, useCallback} from 'react';
import { calculate } from '../../service/ElectricService';
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from "react-redux";
import {fetchCalculation} from "../../redux/slice/valueSlice";

const sampleColumns = [
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from'
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
  const vl = useSelector((state) => state.vl);
  const dispatch = useDispatch();
  const [columns] = useState(sampleColumns);

  useEffect(() => {
    dispatch(fetchCalculation(inputUsage));
  }, [inputUsage])

  return (
    <div>
      <p>Usage: <b>{vl.usage} KWh</b></p>
      <p>Total Price: <NumberFormat
        value={vl.total}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <p>Total VAT Price: <NumberFormat
        value={vl.totalVat}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <Table columns={columns} dataSource={vl.items} loading={vl.isLoading} />
    </div>
  );
};
export default CalculatedTable;