import {Table} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHanziList} from "../../Redux/Slice/HanziSlice";
import {hanziTableColumns} from "./HanziTableColumns";

const HanziTable = () => {
  const hanzi = useSelector((state) => state.hanzi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHanziList());
  }, [])

  return (
    <div>
      <Table columns={hanziTableColumns} dataSource={hanzi.items} loading={hanzi.isLoading}/>
    </div>
  );
};
export default HanziTable;