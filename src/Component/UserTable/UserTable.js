import React, {useEffect} from 'react';
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../Redux/Slice/UserSlice";
import {userTableColumns} from "./UserTableColumns";


const UserTable = ({abc}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [abc])

  return (
    <Table
      loading={user.isLoading}
      dataSource={user.items}
      columns={userTableColumns}
    />
  )
}

export default UserTable;