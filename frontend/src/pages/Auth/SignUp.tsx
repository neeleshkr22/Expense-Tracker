
import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout'
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';


const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e)=>{

  }
  

  return (

    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'> Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today </p>

        <form onSubmit={handleSignup}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input 
            value={fullName}
            onChange={({target})=> setFullName(target.value)}
            label='Full Name'
            placeholder='Neelesh'
            type='text'

            />

            <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email Address"
                        type="text"
                        placeholder="neelesh@gmail.com"
                      />
            
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        placeholder="Min 8 Characters"
                      />
            
            
          </div>
        </form>

      </div>
    </AuthLayout>
  )
}

export default SignUp