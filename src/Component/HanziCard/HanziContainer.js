import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Input} from 'antd';
import {Spin, Button, Row} from 'antd';
import HanziCard from "./HanziCard";
import {setSelectedPage} from "../../Redux/Slice/NavigationBarSlice";
import {getRandomHanziList} from "../../Redux/Slice/HanziCardSlice";
import ChineseCharacterInfo from "./ChineseCharacterInfo";

const {Search} = Input;

const HanziContainer = () => {
  const hanziStore = useSelector((state) => state.hanziCard);
  const dispatch = useDispatch();

  const [numberOfChars, setNumberOfChars] = useState(1);

  useEffect(() => {
    setSelectedPage('HanziCard');
    dispatch(getRandomHanziList({numberOfChars: numberOfChars}));
  }, [])

  const onClickNumberOfChars = (value) => setNumberOfChars(value);

  const onSubmit = () => dispatch(getRandomHanziList({numberOfChars: numberOfChars}));

  return (
    <div>
      <Search placeholder="Number of random characters" onSearch={onClickNumberOfChars} style={{width: 200}}/>
      <Button onClick={onSubmit}>Submit</Button>
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