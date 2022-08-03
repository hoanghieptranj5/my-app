import {Tag} from "antd";

export const userTableColumns = [
  {
    title: 'UserId',
    dataIndex: 'userId',
    key: 'userId',
    render: (text) => <a href="#">{text}</a>,
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
    render: (roles) => <Tag>{roles.map(r => <p><a href="#">{r.country}</a> / <a href="#">{r.role}</a></p>)}</Tag>
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