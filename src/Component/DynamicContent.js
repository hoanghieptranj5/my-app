import React, {useEffect, useState} from 'react';
import CalculateElectricWrapper from "./CalculatedTable/CalculateElectricWrapper";
import UserTable from "./UserTable/UserTable";
import HanziTable from "./HanziTable/HanziTable";

const DynamicContent = ({page}) => {
  const [component, setComponent] = useState(<a>Hello</a>);

  useEffect(() => {
    if (page.toString() === "Calculator") {
      setComponent(<CalculateElectricWrapper/>);

    } else if (page.toString() === "Users") {
      setComponent(<UserTable abc={"acb"}/>)
    } else if (page.toString() === "Hanzi") {
      setComponent(<HanziTable/>)
    } else {
      setComponent(<UserTable abc={"acb"}/>)
    }
  }, [page])

  return (
    <div>
      {component}
    </div>
  )
}

export default DynamicContent;