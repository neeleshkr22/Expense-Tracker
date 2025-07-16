import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/inputs/Input';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e):any{

  }

  
  return (
    <AuthLayout>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8'>
          <h3 className='text-2xl font-semibold mb-2'>Welcome Back</h3>
          <p className='text-xs mt-[5px] mb-6 text-gray-600'>Please log in to continue</p>
          <form onSubmit={handleLogin}>
            <Input value={email} onChange={({target})=>{
              setEmail(target.value)}}  type='text' placeholder='neelesh@gmail.com'/>
          </form>

        </div>
    </AuthLayout>
  )
}

export default Login