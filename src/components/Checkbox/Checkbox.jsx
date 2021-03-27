import React from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export const DeliveryCheckbox=()=>{

return( 
<Checkbox onChange={onChange}>Checkbox</Checkbox>
)
}

export default DeliveryCheckbox;