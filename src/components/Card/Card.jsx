import React from 'react';

import { Card } from 'antd';
import DeliveryCheckbox from '../Checkbox/Checkbox'


export const CheckboxCard =(content)=>{
return(
    <>
    <Card title=""  style={{ width: 300 }}>

      <p><DeliveryCheckbox text="Narudžba preuzeta"/></p>
      <p><DeliveryCheckbox text="Nardužba kupljena"/></p>
      <p><DeliveryCheckbox text="Naružba u tranzitu"/></p>
      <p><DeliveryCheckbox text="Narudžba dostavljena"/></p>
    </Card>
  </>
)
}

export default CheckboxCard;
