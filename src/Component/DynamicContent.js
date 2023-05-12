import React, {useEffect, useState} from 'react';
import CalculateElectricWrapper from "./CalculatedTable/CalculateElectricWrapper";
import HanziContainer from "./HanziCard/HanziContainer";

const DynamicContent = ({page}) => {
  const [component, setComponent] = useState(<a>Hello</a>);

  useEffect(() => {
    if (page.toString() === "Calculator") {
      setComponent(<CalculateElectricWrapper/>);
    } else if (page.toString() === "HanziCard"){
      setComponent(<HanziContainer />)
    } else {
      setComponent(<CalculateElectricWrapper/>)
    }
  }, [page])

  return (
    <div>
      {component}
    </div>
  )
}

export default DynamicContent;