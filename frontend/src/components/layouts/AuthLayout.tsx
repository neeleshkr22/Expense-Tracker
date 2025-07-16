import React from 'react'
import { Left } from './Left'

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[50vw] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
            {children}
        </div>

        <Left/>

    </div>
  )
}
