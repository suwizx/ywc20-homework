"use client"

import { useQuery, } from '@tanstack/react-query'
import axios from 'axios';

import Design from "@/../public/images/branding/camp/design.png"
import Programming from "@/../public/images/branding/camp/programming.png"
import Marketing from "@/../public/images/branding/camp/marketing.png"
import Content from "@/../public/images/branding/camp/content.png"
import { text } from 'stream/consumers';
import Link from 'next/link';

export default function Home() {

  const camps = [
    {
      name: "Web Design",
      image: Design,
      path: "/design",
      color: "bg-rose-500",
      text: "text-rose-500",
      border: "border-rose-500",
      bgcolor: "bg-rose-500/20",
    },
    {
      name: "Web Programming",
      image: Programming,
      path: "/programming",
      color: "bg-orange-500",
      text: "text-orange-500",
      border: "border-orange-500",
      bgcolor: "bg-orange-500/20",
    },
    {
      name: "Web Marketing",
      image: Marketing,
      path: "/marketing",
      color: "bg-amber-500",
      text: "text-amber-500",
      bgcolor: "bg-amber-500/20",
      border: "border-amber-500",
    },
    {
      name: "Web Content",
      image: Content,
      path: "/content",
      color: "bg-yellow-500",
      text: "text-yellow-500",
      bgcolor: "bg-yellow-500/20",
      border: "border-yellow-500",
    }
  ]

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

  const { data, isLoading, error } = useQuery({
    queryKey: ["camperData"],
    queryFn: fetchCamper,
  });
  return (
    <div className='w-full min-h-full flex justify-center items-center'>
      <div className='container flex flex-col items-center justify-center gap-4 h-full'>
        <div className='flex flex-col items-center justify-center gap-4 w-full'>
          <div className='text-center'>
            <h1 className='text-xl'>ผลการการสมัครค่าย</h1>
            <h2 className='text-2xl bg-linear-90 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent font-bold'>Young Webmaster Camp ครั้งที่ 20</h2>
          </div>
          <div className='flex items-center justify-center gap-3 w-[450px]  max-w-full'>
            <input type="text" className='flex-1 outline-2 border-tertiary outline-transparent border h-9 rounded-md p-2 focus:outline-primary outline-offset-2' placeholder='สุวิจักขณ์ พรหมสถิตย์' />
            <button className='bg-linear-90 from-secondary via-tertiary to-quaternary h-9 px-4 font-bold rounded-md hover:scale-95 transition outline-2 outline-transparent focus:outline-primary outline-offset-2 hover:cursor-pointer'>ค้นหาด้วยชื่อ</button>
          </div>
          <div className='flex items-center justify-center gap-3 w-[450px] max-w-dvw'>
            <div className='h-[2px] w-[50px] bg-linear-90 from-secondary via-tertiary to-quaternary' />
            หรือค้นหาด้วยตัวเองผ่านรายชื่อ
            <div className='h-[2px] w-[50px] -bg-linear-90 from-secondary via-tertiary to-quaternary' />
          </div>
        </div>
        <div className='max-w-[220px] sm:max-w-md md:max-w-lg lg:max-w-4xl sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 w-[850px] items-center justify-center'>
          {camps.map((camp) => (
            <Link href={`/camp/${camp.path}`} key={camp.name} className={`flex p-4 text-center flex-col items-center justify-center gap-2 w-full aspect-square ${camp.bgcolor} border ${camp.border} rounded-md hover:scale-95 transition outline-2 outline-transparent focus:outline-primary outline-offset-2 hover:cursor-pointer`}>
              <img src={camp.image.src} alt={camp.name} className='w-full h-auto' />
              <h3 className={`text-lg font-bold text-white`}>{camp.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      {/* <p className='font-black text-4xl'>
        {JSON.stringify(data)}
      </p> */}
    </div>
  );
}
