import React, { useEffect } from 'react'

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = React.useState(new Array(length).fill(''))
    const inputRef = React.useRef([])
    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value
        if (isNaN(value)) return
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1) // only take the last character
        setOtp(newOtp)

        // submit triger
        const combinedOtp = newOtp.join('')
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp)
        }
        // move to next input if current input is filled
        if (value && index < length - 1) {
            inputRef.current[index + 1].focus()
        }


    }
    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(0, 1) // select the input value
     }
    const handleKeyDown = (e,index) => { 
        if(e.key === 'Backspace' && !otp[index] && index > 0 && inputRef.current[index - 1]) { 
            inputRef.current[index - 1].focus()
        }
    }
    return (
        <div>
            {
                otp.map((data, index) => {
                    return (
                        <input
                            type="text"
                            name="otp"
                            maxLength="1"
                            ref={(input) => inputRef.current[index] = input}
                            key={index}
                            value={data}
                            onChange={(e) => { handleChange(index, e) }}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className='otp-input'
                        />
                    )
                })
            }
        </div>
    )
}

export default OtpInput