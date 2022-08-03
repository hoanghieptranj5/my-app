import {UserOutlined} from '@ant-design/icons';
import {useEffect, useState} from "react";
import {Button, Input} from "antd";
import CalculatedTable from "./CalculatedTable";

const DEFAULT_VALUE = 10;

const CalculateElectricWrapper = () => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [submitted, setSubmitted] = useState(DEFAULT_VALUE);

  const onChangeNumber = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = () => {
    setSubmitted(value);
  }

  return (
    <div>
      <h1>Enter your usage: </h1>
      <Input size="large" placeholder="Usage" prefix={<UserOutlined/>} value={value} onChange={onChangeNumber}></Input>
      <Button onClick={onSubmit}>Submit</Button>
      <CalculatedTable
        inputUsage={submitted}
      />
    </div>
  )
}

export default CalculateElectricWrapper;