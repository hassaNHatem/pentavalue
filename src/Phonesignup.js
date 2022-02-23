import React from "react";
import 'react-phone-number-input/style.css'
import { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { setUpRecaptcha } from "./firebase";

const Phonesignup = () => {
    const [value, setValue] = useState()
    const [ otp , setOtp] = useState()
    const [flag , setflag] = useState(false)
    const [confirm , setconfirm] = useState("")
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
            alert('success!')
        }catch(err){
            alert(err)
        }
    }
    return (
        <>
            <div>
                <h2>Firebase Phone Auth</h2>
                <Form onSubmit={getOtp} style={{display:!flag?"block":"none"}}>
                    <Form.Group>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            defaultCountry={"EG"}
                        />
                    </Form.Group>
                    <div id="recaptcha-container"></div>
                    <div className="button-right"> 
                        <Button>Cancel</Button>&nbsp;
                        <Button type="submit">Send OTP</Button>
                    </div>

                </Form>
                <Form onSubmit={VerfiyOtp} style={{display:flag?"block":"none"}}>
                    <Form.Group>
                     <Form.Control  type="text"
                         placeholder="enter opt"
                         onChange={(e)=>setOtp(e.target.value)}/>
                    </Form.Group>
                   
                    <div className="button-right"> 
                        <Button>Cancel</Button>&nbsp;
                        <Button type="submit">Send OTP</Button>
                    </div>

                </Form>
            </div>
        </>
    )
}
export default Phonesignup