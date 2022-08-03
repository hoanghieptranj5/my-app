import React, { useEffect, useState } from 'react';
import CalculateElectricPage from "../Page/CalculateElectricPage";
import UserTable from "./UserTable/UserTable";

const DynamicContent = ({page}) => {
  const [component, setComponent] = useState(<a>Hello</a>);

   useEffect(() => {
     if (page.toString() === "Calculator") {
       setComponent(<CalculateElectricPage/>);

     } else if (page.toString() === "Users") {
       setComponent(<UserTable abc={"acb"} />)
     } else {
       setComponent(<UserTable abc={"acb"} />)
     }
   }, [page])

   return (
     <div>
       {component}
     </div>
   )
}

export default DynamicContent;