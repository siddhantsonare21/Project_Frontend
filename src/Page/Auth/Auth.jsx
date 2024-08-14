import React, { useState } from 'react'
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>

            <div className='box lg:max-w-4*1'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>

                    <div className='front'>

                        <img src=" " alt="" />
                        <div className='text'>
                            <span className='text-1'>Assignments are not just tasks, they are opportunities to learn, grow, and achieve greatness. </span>
                            <span className='text-2 text-xs'>Let's get connected</span>

                        </div>

                    </div>
                    <div className='back'>
                        <img src=" " alt="" />
                    </div>
                </div>
                <div className='forms h-full'>

                    <div className='form-content h-full'>

                        <div className='login-form'>
                            <Signin togglePanel={togglePanel} />
                        </div>

                        <div className='signup-form'>
                            <Signup togglePanel={togglePanel} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Auth