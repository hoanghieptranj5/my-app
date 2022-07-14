import React, { useEffect, useState } from 'react';
import CalculatedTable from "./tinh_tien_dien_table/CalculatedTable";
import CalculateElectricPage from "../page/CalculateElectricPage";

const DynamicContent = ({page}) => {
  const [component, setComponent] = useState(<a>Hello</a>);

   useEffect(() => {
     if (page.toString() === "Calculator") {
       setComponent(<CalculateElectricPage />);
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