import React from 'react'
import OtpInput from './OtpInput'

const PhoneOtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [showOtpField, setShowOtpField] = React.useState(false)
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // phone number validation
        const phoneRegex = /^0-9/g;
        // if (!phoneRegex.test(phoneNumber)) {
        //     alert('Please enter a valid phone number')
        //     return
        // }

        if (phoneNumber.length<10 || phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid phone number')
            return;

        }
                 // call Backend API to send OTP
        // Show otp feild
        setShowOtpField(true)
   
    }
    const onOtpSubmit = (otp) => {
        // call Backend API to verify OTP
        alert("Successfully Login", otp);
        // Handle OTP verification logic here
        // If successful, redirect or show success message
    }
  return (
    <div>
      {!showOtpField?( <form onSubmit={handleSubmit}>
        <input type="text" value={phoneNumber} 
        onChange={handlePhoneNumberChange}
        placeholder='Enter Phone Number'
        />
        <button type="submit">Submit</button>

       </form>):(<div>
        <p>Enter the Opt send to your {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>)}
    </div>
  )
}

export default PhoneOtpLogin