import React, { Component } from "react";
import { Link } from "react-router-dom"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // ?? lifecycle Component
  // 1.componentDidMount
  // 2.componentDidUpdate
  // 3.componentWillUnmount
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state ={date : new Date()}
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              {" "}
              <img
                style={{ height: 70 }}
                src="/images/logo/logo.png"
                alt=""
              />{" "}
              Healthy Cafe
            </h1>
          </div>

          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item title"><Link className="text-success" to="/">Home</Link> </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"><Link className="text-success" to="/orders">Orders</Link> </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"><Link className="text-success" to="/products">Products</Link> </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"><Link className="text-success" to="/about">About</Link> </li>
              
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
  