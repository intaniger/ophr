import React, { useReducer } from 'react';

import './App.css'
import { Input, Select, Button } from 'antd';
import { submitAPI } from './api';
const { Option } = Select;

const initFormData = {
  errorMessage: "",
  name: "",
  email: "",
  phone: "",
  male: "",
}

const handleSubmit = (formData) => {
  // submit formData using submitAPI
}

const formReducer = (formData = initFormData, action) => formData

export default () => {
  const [formData, dispatch] = useReducer(formReducer, initFormData)
  return (
    <div className="App">
      <h1 id="error" style={{ color: "red" }}>{formData.errorMessage}</h1>
      <Input className="input" placeholder="ชื่อ - นามสกุล" />
      <Input className="input" placeholder="email" />
      <Input className="input" placeholder="phone" />
      <Select className="input" defaultValue="male">
        <Option value="male">ชาย</Option>
        <Option value="female">หญิง</Option>
      </Select> <br />
      <Button type="primary">submit</Button>
    </div>
  );
}
