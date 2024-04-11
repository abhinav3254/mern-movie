import { useState } from 'react'

const Auth = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='flex w-1/2 shadow-lg shadow-gray-600/50 rounded-md overflow-hidden'>
                <div className='flex flex-col w-1/2 bg-auth text-white p-5'>
                    <h2 className='text-[25px]'>INFORMATION</h2>
                    <div className='text-[14px]'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores qui quia? Nulla harum quas minus, mollitia cum hic. Neque quod cupiditate dicta tempora animi veritatis culpa, corporis quibusdam aliquid?
                            Laboriosam eaque quasi omnis accusantium laborum reprehenderit est ipsum fugit consequatur!
                        </p>
                        <p>
                            Reprehenderit magnam maiores odit, ullam perferendis delectus ad incidunt distinctio architecto cupiditate! Placeat aliquid magni et, tempora laborum ducimus?
                            Reiciendis exercitationem autem adipisci corrupti dolores voluptate velit
                        </p>
                        {!login && (
                            <div className='flex items-center justify-center my-5'>
                                <p className='bg-white text-black px-5 py-2 cursor-pointer' onClick={() => setLogin(true)} > Have An Account</p>
                            </div>
                        )}
                        {login && (
                            <div className='flex items-center justify-center my-5'>
                                <p className='bg-white text-black px-5 py-2 cursor-pointer' onClick={() => setLogin(false)}>Create An Account</p>
                            </div>
                        )}
                    </div>
                </div>
                {!login && (
                    <div className='flex flex-col w-1/2 p-2'>
                        <p className='text-auth text-[25px] mb-4'>REGISTER FORM</p>
                        <div className='flex flex-row'>
                            <div className='flex flex-col m-1'>
                                <p className='text-gray-700 text-[12px]'>First Name</p>
                                <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                            </div>
                            <div className='flex flex-col m-1'>
                                <p className='text-gray-700 text-[12px]'>Last Name</p>
                                <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col m-1'>
                            <p className='text-gray-700 text-[12px]'>Phone Number</p>
                            <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                        </div>
                        <div className='flex flex-col m-1'>
                            <p className='text-gray-700 text-[12px]'>Email</p>
                            <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                        </div>
                        <div className='flex flex-row'>
                            <div className='flex flex-col m-1'>
                                <p className='text-gray-700 text-[12px]'>Password</p>
                                <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                            </div>
                            <div className='flex flex-col m-1'>
                                <p className='text-gray-700 text-[12px]'>Confirm Password</p>
                                <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                            </div>
                        </div>
                        <div className='flex my-1 py-1 items-center'>
                            <input type="checkbox" className='mx-1 cursor-pointer' />
                            <p className='text-[10px]'>I agree to terms & conditions <sup className='text-red-500 text-[12px]'>*</sup> </p>
                        </div>
                        <button className='bg-auth w-fit text-white py-2 px-4 mx-1 my-2 rounded-sm'>Register</button>
                    </div>
                )}

                {login && (
                    <div className='flex flex-col w-1/2 p-2'>
                        <p className='text-auth text-[25px] mb-4'>LOGIN FORM</p>
                        <div className='flex flex-col m-1'>
                            <p className='text-gray-700 text-[12px]'>Phone/Email</p>
                            <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                        </div>
                        <div className='flex flex-col m-1'>
                            <p className='text-gray-700 text-[12px]'>Password</p>
                            <input className='border border-gray-300 outline-none w-full h-8 px-2' type="text" />
                        </div>
                        <button className='bg-auth w-fit text-white py-2 px-4 mx-1 my-2 rounded-sm'>Register</button>
                    </div>
                )}
            </div>



        </div >

    )
}

export default Auth