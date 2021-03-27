import React from "react";
import axios from "axios";

// antd
import { Row, Col } from "antd";
import CheckboxCard from "../../../components/Card/Card";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { List, Typography, Divider } from "antd";

import TimelineLabel from "../../../components/Timeline/Timeline.jsx";

const data = [
  "Adresa: Envera Šehovića 42",
  "Volonter: Almir Mulalić",
  "Očekivano vrijeme dolaska: 15 min",
  "Ukupna cijena: Trenutno nije dostupno",
];

export const Progress = () => {
  return (
    <div className="progress" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ marginBottom: "10px" }}>
          <TimelineLabel />
        </div>

        <List
          header={<b>Vaša narudžba</b>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div>
                <b>{item.split(":")[0]}:</b> {item.split(":")[1]}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Progress;
