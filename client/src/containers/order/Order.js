import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

// buy and import
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: null };
  }

  //   แสดงรายหารสั่งซื้อที่ load from APIs มาอยู่ใน State
  //  มีปุ่มลบไปลบ order ใน APIs ได้
  componentDidMount() {
    axios.get("http://localhost:3001/orders").then(
        res => {
            this.setState({ orders: res.data });
    });
  }

  delOrder(order) {
    axios.delete("http://localhost:3001/orders/" + order.id ).then(
    res => {axios.get("http://localhost:3001/orders").then(
        res => {
            this.setState({ orders: res.data });
         }
      );
    });
  }

  showOrders() {
    return this.state.orders && this.state.orders.map(order => {
        const date = new Date(order.orderedDate);

        

        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="btn btn-danger btn-sm title"
                onClick={() => this.delOrder(order)}>
                X
              </button>
            </p>
            <h5>
              Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders && order.orders.map(record => {
                  return (
                    <li key={order.product}>
                      {record.product.productName} X {record.quantity} = 
                      {record.product.unitPrice * record.quantity}
                    </li>
                  );
                })}
            </ul>
            <p className="title"> Total {order.totalPrice}</p>
          </div>
        );
      })
    
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1> รายการสั่งซื้อ</h1>
          <div className="row">
            {this.showOrders()}
          </div>
        </div>
        <Footer   
            company="TH Engineering.,co.ltd"
            email="teerawat.th@outlook.com"/>
      </div>
    );
  }
}

export default Order;
