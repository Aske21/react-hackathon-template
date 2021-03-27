import React from "react";
import { List, message, Avatar, Spin, Card } from "antd";
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";

const fakeDataUrl = "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

class InfiniteList extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    const data = ["Narudžba 315", "Narudžba 300", "Narudžba 45", "Narudžba 20", "Narudžba 10"];

    const data2 = [
      "Hljeb, mlijeko, kafa",
      "Sir, Salama, Piletina",
      "Vlažne maramice, Sir Edamer",
      "Dostava iz Fast Food-a Željo",
      "Dostava iz Restorana Happy",
    ];

    return (
      <div
        className="demo-infinite-container"
        style={{ margin: "10px 10px 10px 10px", paddingRight: "15px", paddingLeft: "15px" }}
      >
        <Card>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={(item, i) => (
                <List.Item
                  key={i}
                  style={{
                    display: "flex",
                    background: "#E8E8E8	",
                    justifyContent: "flex-start",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <i
                    className={i === 0 ? "fas fa-spinner" : "fas fa-check"}
                    style={{ color: i === 0 ? "#00b2d6" : "green", fontSize: "32px" }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <b>
                      <div>{data[i]}</div>
                    </b>
                    <div>{data2[i]}</div>
                  </div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </Card>
      </div>
    );
  }
}

export default InfiniteList;
