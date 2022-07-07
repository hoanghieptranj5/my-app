import { UserOutlined } from '@ant-design/icons';
import {useEffect, useState} from "react";
import {Button, Input} from "antd";

const CalculateElectricPage = () => {
  const [value, setValue] = useState(123);

  useEffect(() => {
    setValue(125);
  }, [])

  const onButtonClicked = () => {
    console.log(value);
  }

  const onChangeNumber = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>Enter your usage: </h1>
      <Input size="large" placeholder="Usage" prefix={<UserOutlined />} value={value} onChange={onChangeNumber}></Input>
      <Button onClick={onButtonClicked}>Submit</Button>
    </div>
  )
}

export default CalculateElectricPage;