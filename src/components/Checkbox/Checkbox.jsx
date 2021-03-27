import React from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export const DeliveryCheckbox=(props)=>{

return( 
<Checkbox onChange={onChange} text={props.text}>{props.text}</Checkbox>
)
}

export default DeliveryCheckbox;