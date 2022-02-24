import React from "react";
import 'react-phone-number-input/style.css'
import { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { setUpRecaptcha } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./App.css"

const Phonesignup = () => {
    const [value, setValue] = useState()
    const [ otp , setOtp] = useState()
    const [flag , setflag] = useState(false)
    const [confirm , setconfirm] = useState("")
    let navigate = useNavigate();
    const getOtp =async (e)=>{
        e.preventDefault()
        if(value===""|| value===undefined) return alert('enter a valid number')
        try{
            const res = await setUpRecaptcha(value);
            setconfirm(res)
            setflag(true)
        }catch(err){
            alert(err)
        }
        
    }
    const VerfiyOtp = async(e)=>{
        e.preventDefault()
        if(otp===''|| otp===null)return;
        try{
            await confirm.confirm(otp)
            navigate("/Dashboard")
        }catch(err){
            alert(err)
        }
    }
    return (
        <>
            <div className="login-container">
                <h2>Penta value task</h2>
                <Form onSubmit={getOtp} style={{display:!flag?"block":"none"}}>
                    <Form.Group>
                        <PhoneInput
                            className="phone-input"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            defaultCountry={"EG"}
                        />
                    </Form.Group>
                    <div id="recaptcha-container" className="recaptcha"></div>
                     
                        <Button type="submit">Send OTP</Button>

                </Form>
                <Form onSubmit={VerfiyOtp} style={{display:flag?"block":"none"}}>
                    <Form.Group>
                     <Form.Control  type="text"
                         placeholder="enter opt"
                         onChange={(e)=>setOtp(e.target.value)}/>
                    </Form.Group>
                   
                    
                        <Button type="submit">Send OTP</Button>
                    

                </Form>
            </div>
        </>
    )
}
export default Phonesignup