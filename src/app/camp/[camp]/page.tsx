"use client"

import Design from "@/../public/images/branding/camp/design.png"
import Programming from "@/../public/images/branding/camp/programming.png"
import Marketing from "@/../public/images/branding/camp/marketing.png"
import Content from "@/../public/images/branding/camp/content.png"

import { IoIosArrowRoundBack } from "react-icons/io";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { delay, motion } from "framer-motion";
import Logo from "@/../public/images/branding/ywc-logo.png"
import Image from "next/image";
import { use } from "react";
import Link from "next/link"

const camps = {
    design: {
        name: "Web Design",
        image: Design,
        path: "/design",
        color: "bg-rose-500",
        text: "text-rose-500",
        border: "border-rose-500",
        bgcolor: "bg-rose-500/20",
    },
    programming: {
        name: "Web Programming",
        image: Programming,
        path: "/programming",
        color: "bg-orange-500",
        text: "text-orange-500",
        border: "border-orange-500",
        bgcolor: "bg-orange-500/20",
    },
    marketing: {
        name: "Web Marketing",
        image: Marketing,
        path: "/marketing",
        color: "bg-amber-500",
        text: "text-amber-500",
        bgcolor: "bg-amber-500/20",
        border: "border-amber-500",
    },
    content: {
        name: "Web Content",
        image: Content,
        path: "/content",
        color: "bg-yellow-500",
        text: "text-yellow-500",
        bgcolor: "bg-yellow-500/20",
        border: "border-yellow-500",
    }
}

export default function page({ params }: { params: Promise<{ camp: keyof typeof camps }> }) {
    const { camp } = use(params) as { camp: keyof typeof camps };

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
        <div className="w-full h-full flex flex-col justify-center items-center ">
            {isLoading && (
                <motion.div exit={{ opacity: 0 }} className='animate-pulse flex flex-col items-center justify-center gap-4'>
                    <Image src={Logo} alt='YWC Logo' className='h-12 w-auto' />
                    <p>กำลังดึงข้อมูล...</p>
                </motion.div>
            )}
            {data && (
                <div className="max-w-xl h-full w-full">
                    <motion.div initial={{ x: -10 , opacity : 0 }} animate={{x:0, opacity:1}} transition={{delay : 0.2 , duration : 0.4}}  className="pb-10">
                        <Link href={"/"} className="flex gap-2 items-center w-fit bg-linear-90 from-secondary via-tertiary to-quaternary text-white py-2 px-4 font-bold rounded-md transition hover:scale-95">
                            <IoIosArrowRoundBack size={"1.3em"} />
                            กลับหน้าหลัก
                        </Link>
                    </motion.div>
                    <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="mb-4 flex items-center gap-4">
                        <Image src={camps[camp].image} alt={camps[camp].name} className="h-24 w-auto" />
                        <h1 className="text-2xl font-black">{ camps[camp].name}</h1>
                    </motion.div>
                    {data && (
                    <div className="grid grid-cols-1 gap-4 py-10">
                            {data[camp].map((camper: { interviewRefNo: string; firstName: string; lastName: string }, key: number) => (
                            <motion.div initial={{ opacity :0 , x:-10}} animate={{opacity:1,x:0}} transition={{delay : 0.6 + (key*0.2)}} key={key} className="w-full items-center flex gap-4 bg-linear-90 from-secondary via-tertiary to-quaternary rounded-xl p-2">
                                <div className="bg-white aspect-square flex items-center justify-center rounded-xl p-2">
                                    <h2 className="text-2xl bg-linear-90 from-secondary via-tertiary to-quaternary bg-clip-text text-transparent font-black">{camper.interviewRefNo}</h2>
                                </div>
                                <div>
                                    <h2 className="font-bold w-full max-w-[220px] sm:max-w-[500px] truncate text-2xl">{camper.firstName} {camper.lastName}</h2>
                                    <h2>{camps[camp].name}</h2>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    )}
                    
                    {/* {JSON.stringify(data[camp])} */}
                </div>
            )}
        </div>
    )
}