import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
// import Button from 'antd/lib/Button';
// import "antd/dist/antd.css"
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary" children="按钮" />
        <DatePicker />
      </div>
    );
  }
}

export default App;
