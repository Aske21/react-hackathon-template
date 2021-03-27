import { useState } from 'react';
import { Timeline, Radio } from 'antd';

function TimelieLabel() {


  return (
    <>
  
    
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">Narudžba preuzeta</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Nardužba kupljena</Timeline.Item>
        <Timeline.Item label ="2021-27-03">Naružba u tranzitu</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Narudžba dostavljena</Timeline.Item>
      </Timeline>
    </>
  );
}

export default TimelineLabel