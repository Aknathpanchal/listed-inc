import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import {signIn} from "next-auth/react"

export default function Login(){

    const [show, setShow] = useState(false)

    // Google Handler function
    // async function handleGoogleSignin(){
    //     signIn('google', { callbackUrl : "http://localhost:3000"})
    // }

    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/5 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Sign In</h1>
                <p className='text-gray-400'>Sign in to your account</p>
            </div>

            <div className='flex justify-between gap-3'>
                <div className="input-button rounded-xl bg-white w-full" >
                    <button type='button rounded-xl bg-white' onClick={() => signIn()} className={styles.button_custom}>
                        <Image src={'/assets/google.svg'} width="20" height={20} ></Image> Sign In with Google 
                    </button>
                </div>
                <div className="input-button rounded-xl bg-white w-full">
                    <button type='button rounded-xl bg-white' className={styles.button_custom}>
                         <Image src={'/assets/AppleIcon.svg'} width={25} height={25}></Image> Sign In with Github
                    </button>
                </div>

                </div>

            {/* form */}
            <form className='flex flex-col gap-5 bg-white p-8 rounded-xl'>

            <label>Email address</label>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                </div>

                <label>Password</label>
                <div className={styles.input_group}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    />
                     <span className='icon flex items-center px-4 bg-gray-100' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                <div className="forgotPassword text-blue-700">Forgot password?</div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                    Sign In
                    </button>
                </div>
               
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
            Don’t have an account? <Link href={'/#'}><a className='text-blue-700'>Register here</a></Link>
            </p>
        </section>

        </Layout>
    )
}