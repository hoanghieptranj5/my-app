import {Table} from 'antd';
import React, {useEffect} from 'react';
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from "react-redux";
import {fetchCalculation} from "../../Redux/Slice/CalculationSlice";
import {calculatedTableColumns} from "./CalculatedTableColumns";

const CalculatedTable = ({inputUsage}) => {
  const calculation = useSelector((state) => state.calculation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCalculation(inputUsage));
  }, [inputUsage])

  return (
    <div>
      <p>Usage: <b>{calculation.usage} KWh</b></p>
      <p>Total Price: <NumberFormat
        value={calculation.total}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <p>Total VAT Price: <NumberFormat
        value={calculation.totalWithVAT}
        className="foo"
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <div {...props}>{value}</div>}
      /></p>
      <Table columns={calculatedTableColumns} dataSource={calculation.items} loading={calculation.isLoading}/>
    </div>
  );
};
export default CalculatedTable;