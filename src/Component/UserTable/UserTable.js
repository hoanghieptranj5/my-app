import React, {useEffect} from 'react';
import {Table, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../Redux/Slice/UserSlice";

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
    render: (roles) => <Tag>{roles.map(r => <p><a>{r.country}</a> / <a>{r.role}</a></p>)}</Tag>
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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [abc])

  return (
    <Table
      loading={user.isLoading}
      dataSource={user.items}
      columns={sampleColumns}
    />
  )
}

export default UserTable;