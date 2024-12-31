import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  List,
  Form,
  Select,
  Typography,
  Divider,
  Row,
  Col,
  Card,
  message,
} from 'antd';
import './style.css';

const { Option } = Select;
const { Title, Text } = Typography;

const LunchSplitter = () => {
  const [names, setNames] = useState(() => {
    const savedNames = sessionStorage.getItem('names');
    return savedNames ? JSON.parse(savedNames) : [];
  });

  const [currentName, setCurrentName] = useState('');
  const [items, setItems] = useState(() => {
    const savedItems = sessionStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [currentItem, setCurrentItem] = useState({
    name: '',
    price: 0,
    paidBy: '',
  });

  const [balances, setBalances] = useState([]);

  useEffect(() => {
    sessionStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  useEffect(() => {
    sessionStorage.setItem('items', JSON.stringify(items));
    calculateBalances();
  }, [items, names]);

  const addPerson = () => {
    if (currentName && !names.includes(currentName)) {
      setNames([...names, currentName]);
      setCurrentName('');
      message.success(`Added ${currentName}`);
    } else {
      message.warning('Enter a valid and unique name.');
    }
  };

  const deletePerson = (index) => {
    const personToDelete = names[index];
    const payerList = items.filter((item) => item.paidBy === personToDelete);

    if (payerList.length > 0) {
      message.error(
        `${personToDelete} cannot be deleted as they are listed as a payer.`
      );
      return;
    }

    setNames(names.filter((_, i) => i !== index));
  };

  const addItem = () => {
    if (currentItem.name && currentItem.price > 0 && currentItem.paidBy) {
      setItems([...items, { ...currentItem, price: parseFloat(currentItem.price) }]);
      setCurrentItem({ name: '', price: 0, paidBy: '' });
      message.success('Item added successfully.');
    } else {
      message.warning('Fill in all fields correctly.');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateBalances = () => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const perPerson = names.length ? total / names.length : 0;

    const payments = names.reduce((acc, name) => {
      acc[name] = items
        .filter((item) => item.paidBy === name)
        .reduce((sum, item) => sum + item.price, 0);
      return acc;
    }, {});

    const newBalances = names.map((name) => ({
      name,
      balance: payments[name] - perPerson,
    }));

    setBalances(newBalances);
  };

  const totalPayment = items.reduce((sum, item) => sum + item.price, 0);
  const perPerson = names.length ? totalPayment / names.length : 0;

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title="Add People">
          <Form layout="inline" onFinish={addPerson}>
            <Form.Item>
              <Input
                placeholder="Enter Name"
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={addPerson}>
                Add Person
              </Button>
            </Form.Item>
          </Form>

          <Divider>People</Divider>
          <List
            bordered
            dataSource={names}
            renderItem={(name, index) => (
              <List.Item
                actions={[<Button danger onClick={() => deletePerson(index)}>Delete</Button>]}
              >
                {name}
              </List.Item>
            )}
          />
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={8}>
        {names.length > 0 && (
          <Card title="Add Items">
            <Form layout="vertical">
              <Form.Item label="Item Name">
                <Input
                  placeholder="Enter Item Name"
                  value={currentItem.name}
                  onChange={(e) =>
                    setCurrentItem({ ...currentItem, name: e.target.value })
                  }
                />
              </Form.Item>

              <Form.Item label="Price">
                <Input
                  type="number"
                  placeholder="Enter Price"
                  value={currentItem.price}
                  onChange={(e) =>
                    setCurrentItem({ ...currentItem, price: e.target.value })
                  }
                />
              </Form.Item>

              <Form.Item label="Paid By">
                <Select
                  placeholder="Select Payer"
                  value={currentItem.paidBy}
                  onChange={(value) =>
                    setCurrentItem({ ...currentItem, paidBy: value })
                  }
                >
                  {names.map((name, index) => (
                    <Option key={index} value={name}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" onClick={addItem}>
                  Add Item
                </Button>
              </Form.Item>
            </Form>

            <Divider>Items</Divider>
            <List
              bordered
              dataSource={items}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <Button danger onClick={() => deleteItem(index)}>
                      Delete
                    </Button>,
                  ]}
                >
                  {`${item.name} - $${item.price.toFixed(2)} paid by ${item.paidBy}`}
                </List.Item>
              )}
            />
          </Card>
        )}
      </Col>

      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title="Summary">
          <Text>Total Payment: ${totalPayment.toFixed(2)}</Text>
          <br />
          <Text>Per Person: ${perPerson.toFixed(2)}</Text>
        </Card>

        <Card title="Balances">
          <List
            bordered
            dataSource={balances}
            renderItem={(balance) => (
              <List.Item>
                <Text
                  type={balance.balance > 0 ? 'success' : 'danger'}
                >
                  {balance.name} {balance.balance > 0
                  ? `is owed $${balance.balance.toFixed(2)}`
                  : `owes $${(-balance.balance).toFixed(2)}`}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default LunchSplitter;
