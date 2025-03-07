import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert("Signup SuccessFully")
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) => {
                // console.log(err)
                // alert(" Error:" + err)
                if (err.response) {
                    console.log(err)
                    alert(" Error:" + err.response.data.message)
                }
            })
    }


    return (
        <>
            {/* Background with a gradient effect */}
            <div className='flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 '>
                <div className="w-[600px]">
                    <div className="modal-box bg-white shadow-lg rounded-lg p-6">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            {/* Name input */}
                            <div className='mt-4 space-y-2 '>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your Fullname'
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("fullname", { required: true })} /> <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>

                            {/* Email input */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password input */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Enter Password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Signup Button & Login Link */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Signup
                                </button>
                                <p className='text-xl'>
                                    Have an account?
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById("my_modal_3").showModal()}>
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
