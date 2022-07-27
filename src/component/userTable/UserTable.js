import React, {useEffect, useState, useCallback} from 'react';
import {Table} from "antd";
import NumberFormat from "react-number-format";
import {calculate} from "../../service/ElectricService";
import {getUsers} from "../../service/UserService";

const sampleColumns = [
  {
    title: 'UserId',
    dataIndex: 'userId',
    key: 'userId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'userType',
    dataIndex: 'userType',
    key: 'userType'
  },
  {
    title: 'roles',
    dataIndex: 'roles',
    key: 'roles',
    render: (roles) => <tag>{roles.map(r => <p><a>{r.country}</a> / <a>{r.role}</a></p>)}</tag>
  },
  {
    title: 'forcePasswordChange',
    key: 'forcePasswordChange',
    dataIndex: 'forcePasswordChange'
  },
  {
    title: 'createdAt',
    key: 'createdAt',
    dataIndex: 'createdAt'
  },
];

const UserTable = ({ abc }) => {

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      return result.json();
    }
    fetchData()
      .then(res => {
        setUsers(res);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [abc])

  return (
    <Table
      loading={loading}
      dataSource={users}
      columns={sampleColumns}
    />
  )
}

export default UserTable;