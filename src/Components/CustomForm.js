import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import '../App.css'; // Import a separate CSS file for styling

const CustomForm = ({ requiredMark, onRequiredTypeChange ,setshowGifts,handleOk}) => {
    const [form] = Form.useForm();

    const [relationShip, setrelationShip] = useState("")
    const [age, setage] = useState(0)
    const [budget, setbudget] = useState(0)
    const [occasion, setoccasion] = useState("")
    const [interest, setinterest] = useState("")
    const [error, seterror] = useState("")
    const onFinish  = () =>{
        
        if(relationShip === "" || age === 0 || budget === 0 || occasion === "" || interest === ""){
            seterror("All Fields are required!")
        }
        else{
            seterror("")
            handleOk(false);
            setshowGifts(true)
            setrelationShip("")
            setage(0)
            setbudget(0)
            setinterest("")
            setoccasion("")
        }
        
    }
   
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
     
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
      className="custom-form"
      width={800}
    >
        {error &&<h3 style={{backgroundColor:"red",color:"#fff",padding:'10px'}}>{error}</h3>}
      <Form.Item label={<label style={{ color: "#fff" }}>Relationship</label>} rules={[
          { required: true },
        ]} required tooltip="This is a required field">
          <Input placeholder="" value={relationShip} onChange={(e)=>{setrelationShip(e.target.value)}}/>
        </Form.Item>

        <Form.Item label={<label style={{ color: "#fff" }}>Age</label>} required tooltip="This is a required field">
          <Input placeholder="" type="number" value={age} onChange={(e)=>{setage(e.target.value)}} />
        </Form.Item>
        <Form.Item label={<label style={{ color: "#fff" }}>Occasion</label>} required tooltip="This is a required field">
          <Input placeholder="" value={occasion} onChange={(e)=>{setoccasion(e.target.value)}}/>
        </Form.Item>
        <Form.Item label={<label style={{ color: "#fff" }}>Interest</label>} required tooltip="This is a required field">
          <Input placeholder="" value={interest} onChange={(e)=>{setinterest(e.target.value)}}/>
        </Form.Item>

        <Form.Item label={<label style={{ color: "#fff" }}>Budget</label>} required tooltip="This is a required field">
          <Input placeholder="" value={budget} type="number" onChange={(e)=>{setbudget(e.target.value)}} />
        </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onFinish}  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;