"use client"

import { useQuery, } from '@tanstack/react-query'
import axios from 'axios';

import { motion } from "motion/react"
import Logo from "@/../public/images/branding/ywc-logo.png"
import Image from 'next/image';
import FindModal from './_components/FindModal';
import { useEffect, useState } from 'react';
import { camps } from './constant/camp';
import Link from 'next/link';

export default function Home() {

  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [search, setSearch] = useState("")
  const [findDisplay , setFindDisplay] = useState(null)

  useEffect(() => {
    setFirstName(search.split(" ")[0])
    setLastName(search.split(" ")[1])
  }, [search])
  
  async function searchCamper() {
    const result = [...data.content, ...data.design, ...data.marketing, ...data.programming].filter((camper) => camper.firstName === firstName && camper.lastName === lastName)
    setOpen(true)
    if (result.length === 0) {
      setFindDisplay(null)
      return
    }
    setFindDisplay(result[0])
  }

  async function fetchCamper() {
    const response = await axios.get("https://api.ywc20.ywc.in.th/homework/candidates"
      , {
        headers: {
          "x-reference-id": process.env.NEXT_PUBLIC_API_TOKEN,
        }
      }
    )
    return response.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["camperData"],
    queryFn: fetchCamper,
  });
  return (
    
    <div className='w-full min-h-full flex justify-center items-center pt-10 lg:pt-0'>
      {open && (
      <FindModal data={findDisplay} setOpen={setOpen} />
      )}
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className='animate-pulse flex flex-col items-center justify-center gap-4'>
            <Image src={Logo} alt='YWC Logo' className='h-12 w-auto' />
            <p>กำลังดึงข้อมูล...</p>
          </motion.div>
        )}
        {data && (
          <div className='container flex flex-col items-center justify-center gap-4 h-full'>
            <div className='flex flex-col items-center justify-center gap-4 w-full'>
              <div className='text-center max-w-64'>
                <motion.h1 initial={{y:6 , opacity : 0 }} animate={{y:0 , opacity :100}} transition={{duration : 0.2}} className='text-xl'>ผลการการสมัครค่าย</motion.h1>
                <motion.h2 initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.4, delay:0.2 }} className='text-2xl bg-linear-90 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent font-bold'>Young Webmaster Camp ครั้งที่ 20</motion.h2>
              </div>
              <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 0.4, delay: 0.6 }} className='flex flex-col items-center justify-center gap-4 w-full'>
                <div className='flex items-center flex-col sm:flex-row justify-center gap-3 w-[450px] mb-4 max-w-full'>
                  <input onChange={(e) => {setSearch(e.target.value)}} value={search} type="text" className='w-full sm:flex-1 outline-2 border-tertiary outline-transparent border h-9 rounded-md p-2 focus:outline-primary outline-offset-2' placeholder='Suwijak Promsatid' />
                <button onClick={() => { searchCamper()}} className='w-full sm:w-fit bg-linear-90 from-secondary via-tertiary to-quaternary h-9 px-4 font-bold rounded-md hover:scale-95 transition outline-2 outline-transparent focus:outline-primary outline-offset-2 hover:cursor-pointer'>ค้นหาด้วยชื่อ</button>
                </div>
                <div className='flex items-center justify-center gap-3 w-[450px] max-w-dvw'>
                  <div className='h-[2px] w-[50px] bg-linear-90 from-secondary via-tertiary to-quaternary' />
                  หรือค้นหาด้วยตัวเองผ่านรายชื่อ
                  <div className='h-[2px] w-[50px] -bg-linear-90 from-secondary via-tertiary to-quaternary' />
                </div>
              </motion.div>
            </div>
            <motion.div className='max-w-[220px] sm:max-w-md md:max-w-lg lg:max-w-4xl sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 w-[850px] items-center justify-center'>
              {camps.map((camp,i) => (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.8 + (0.2 * i) ,ease : "easeIn"}} className='w-full' key={camp.name}>
                  <Link href={`/camp${camp.path}`} key={camp.name} className={`flex p-4 text-center flex-col items-center justify-center gap-2 w-full aspect-square ${camp.bgcolor} border ${camp.border} rounded-md hover:scale-95 transition outline-2 outline-transparent focus:outline-primary outline-offset-2 hover:cursor-pointer`}>
                    <img src={camp.image.src} alt={camp.name} className='w-full h-auto' />
                    <h3 className={`text-lg font-bold text-white`}>{camp.name}</h3>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* <p className='font-black text-4xl'>
        {JSON.stringify(data)}
      </p> */}
      </div>

  );
}
