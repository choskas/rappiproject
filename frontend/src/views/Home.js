import React, {useEffect, useState} from 'react'
import LoginButton from '../components/LoginButton'
import Profile from './Profile';
import LOGIN_SERVICE from '../services/loginServices'
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Home = () => {

    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [isErrorOnPassword, setIsErrorOnPassword] = useState(false);

  const onFinish = values => {
    if(isErrorOnPassword === false){
    console.log('Success:', values);
    LOGIN_SERVICE.signup({
        username: values.username,
        password: values.password,
        email: values.email
    })
    }
    console.log(password)
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className="register-form-container">
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'campo requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'campo requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'campo requerido' }]}
      >
        <Input.Password onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Item>

      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        rules={[{ required: false, message: 'campo requerido' }]}
        
      >
        <Input.Password 
        onChange={(e)=>{
            setConfirmPassword(e.target.value)
            console.log(password, e.target.value)
            if(password !== e.target.value){
                setIsErrorOnPassword(true);
                document.getElementById('error-password').style.display = 'block';
            } else if (password === e.target.value){
                setIsErrorOnPassword(false);
                document.getElementById('error-password').style.display = 'none';
            }
        }}/>
              <small id="error-password" style={{color: 'red', display: 'none'}}>* Las contraseñas no coinciden</small>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={isErrorOnPassword}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export {Home}