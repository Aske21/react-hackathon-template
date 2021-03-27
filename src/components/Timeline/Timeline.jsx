import { useState } from "react";
import { Timeline, Radio } from "antd";

function TimelineLabel() {
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  return (
    <>
      <Timeline mode="left">
        <Timeline.Item label={new Date().toString().slice(0, 21)}>
          <b>Narudžba prihvaćena!</b>
        </Timeline.Item>
        <Timeline.Item label={addMinutes(new Date(), 15).toString().slice(0, 21)}>
          <b> Kurir je uspješno preuzeo narudžbu.</b>
        </Timeline.Item>
        <Timeline.Item label={"U Toku"}>Kurir je na putu prema vama.</Timeline.Item>
      </Timeline>
    </>
  );
}

export default TimelineLabel;
