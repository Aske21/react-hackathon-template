import React from 'react';

import { Card } from 'antd';
import DeliveryCheckbox from '../Checkbox/Checkbox'


export const CheckboxCard =(content)=>{
return(
    <>
    <Card title=""  style={{ width: 300 }}>

      <p><DeliveryCheckbox/></p>
      <p>Card content</p>
      <p>Card content</p>

    </Card>
  </>
)
}

export default CheckboxCard;
