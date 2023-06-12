import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"

import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import ActivitiesCard from "../Components/ActivitiesCard";
import Header from "../Components/Header";
import Schedule from "../Components/Schedule";
import TopProduct from "../Components/TopProduct";



export default function Home() {

  const { data: session } = useSession()


  function handleSignOut(){
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Guest Homepage</h3>

          <div className='flex justify-center'>
            <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</a></Link>
          </div>
      </main>
  )
}

// Authorize User
function User({ session, handleSignOut}){
  return(
    <>
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-5">

        <div className="md:col-span-3">
          <Sidebar />
        </div>

        <div className="md:col-span-9 h-full">
           <Header />
          <Card />
           <ActivitiesCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-1">
              <TopProduct />
            </div>
            <div className="md:col-span-1">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }

}