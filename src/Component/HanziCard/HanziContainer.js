import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Input} from 'antd';
import {Spin, Row} from 'antd';
import {setSelectedPage} from "../../Redux/Slice/NavigationBarSlice";
import {getRandomHanziList} from "../../Redux/Slice/HanziCardSlice";
import ChineseCharacterInfo from "./ChineseCharacterInfo";

const {Search} = Input;

const HanziContainer = () => {
  const hanziStore = useSelector((state) => state.hanziCard);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPage('HanziCard');
    dispatch(getRandomHanziList({length: 1, token}));
  }, [])

  const onClickNumberOfChars = (value) => {
    dispatch(getRandomHanziList({length: value, token}));
  };

  return (
    <div>
      <Search placeholder="Number of random characters" onSearch={onClickNumberOfChars} style={{width: 200}}/>
      {
        <Row>
          {hanziStore.isLoading
            ? <Spin/> : hanziStore.items.map(i => <ChineseCharacterInfo hanzi={i}/>)}
        </Row>
      }
    </div>
  );
};

export default HanziContainer;