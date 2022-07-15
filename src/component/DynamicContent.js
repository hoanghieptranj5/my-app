import React, { useEffect, useState } from 'react';
import CalculateElectricPage from "../page/CalculateElectricPage";
import UserTable from "./userTable/UserTable";

const DynamicContent = ({page}) => {
  const [component, setComponent] = useState(<a>Hello</a>);

   useEffect(() => {
     if (page.toString() === "Calculator") {
       setComponent(<CalculateElectricPage/>);

     } else if (page.toString() === "Users") {
       setComponent(<UserTable abc={"acb"} />)
     } else {
       setComponent(<b>Coming Soon...</b>)
     }
   }, [page])

   return (
     <div>
       {component}
     </div>
   )
}

export default DynamicContent;