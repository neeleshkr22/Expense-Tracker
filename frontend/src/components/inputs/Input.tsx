import React, { useState } from 'react'

export const Input = ({value, onChange, label, placeholder, type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = ()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div>
        <label className=''>{label}</label>
    </div>
  )
}
