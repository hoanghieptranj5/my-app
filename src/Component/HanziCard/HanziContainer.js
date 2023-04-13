import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Input, Space } from 'antd';
import {Spin, Button } from 'antd';
import HanziCard from "./HanziCard";
import {getHanziList} from "../../Redux/Slice/HanziCardSlice";

const { Search } = Input;

const HanziContainer = () => {
  const hanziStore = useSelector((state) => state.hanziCard);
  const dispatch = useDispatch();

  const [skip, setSkip] = useState(10);
  const [take, setTake] =  useState(1);

  useEffect(() => {
    dispatch(getHanziList({skip: skip, take: take}));
  }, [])

  const onClickSkip = (value) => setSkip(value);
  const onClickTake = (value) => setTake(value);

  const onSubmit = () => dispatch(getHanziList({skip: skip, take: take}));

  return (
    <div>
      <Search placeholder="input skip" onSearch={onClickSkip} style={{ width: 200 }} />
      <Search placeholder="input take" onSearch={onClickTake} style={{ width: 200 }} />
      <Button onClick={onSubmit}>Submit</Button>

      {
        hanziStore.isLoading
          ? <Spin/> : hanziStore.items.map(i => <HanziCard hanzi={i}/>)
      }
    </div>
  );
};

export default HanziContainer;