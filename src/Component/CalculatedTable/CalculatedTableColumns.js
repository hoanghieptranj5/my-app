import NumberFormat from 'react-number-format';

export const calculatedTableColumns = [
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
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
    render: (text) => (
      <NumberFormat
        value={text}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      />
    ),
  },
  {
    title: 'Usage',
    key: 'usage',
    dataIndex: 'usage',
  },
  {
    title: 'Sub Total',
    key: 'price',
    dataIndex: 'price',
    render: (text) => (
      <NumberFormat
        value={text}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      />
    ),
  },
];
