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
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPage('HanziCard');
    dispatch(getRandomHanziList({numberOfChars: 1}));
  }, [])

  const onClickNumberOfChars = (value) => {
    dispatch(getRandomHanziList({numberOfChars: value}));
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