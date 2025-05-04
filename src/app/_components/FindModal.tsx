"use client"

import Design from "@/../public/images/branding/camp/design.png"
import Programming from "@/../public/images/branding/camp/programming.png"
import Marketing from "@/../public/images/branding/camp/marketing.png"
import Content from "@/../public/images/branding/camp/content.png"
import Image from "next/image"

import { motion } from "framer-motion"

export default function FindModal({ data, setOpen }: { data: { firstName: string, lastName: string, interviewRefNo: string, major: string } | null, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const camps = {
        web_design: {
            name: "Web Design",
            image: Design,
            path: "/design",
            color: "bg-rose-500",
            text: "text-rose-500",
            border: "border-rose-500",
            bgcolor: "bg-rose-500/20",
        },
        web_programming: {
            name: "Web Programming",
            image: Programming,
            path: "/programming",
            color: "bg-orange-500",
            text: "text-orange-500",
            border: "border-orange-500",
            bgcolor: "bg-orange-500/20",
        },
        web_marketing: {
            name: "Web Marketing",
            image: Marketing,
            path: "/marketing",
            color: "bg-amber-500",
            text: "text-amber-500",
            bgcolor: "bg-amber-500/20",
            border: "border-amber-500",
        },
        web_content: {
            name: "Web Content",
            image: Content,
            path: "/content",
            color: "bg-yellow-500",
            text: "text-yellow-500",
            bgcolor: "bg-yellow-500/20",
            border: "border-yellow-500",
        }
    }

    return (
        <div className="fixed top-0 left-0 w-dvw h-dvh z-50">
            <div className="w-full h-full relative">
                <motion.div initial={{ backdropFilter: "blur(0px)" }} animate={{ backdropFilter: "blur(10px)" }} className="w-dvw h-dvh bg-zinc-950/50" onClick={() => { setOpen(false) }} />
                <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-[90dvw] w-[450px] rounded-lg bg-background border border-primary p-6 translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 flex flex-col items-start justify-start z-50">
                    {data === null ? (
                        <>
                            <div className="flex items-start justify-between w-full pb-4">
                                <h1 className="text-xl sm:text-2xl font-bold">ขอแสดงความเสียใจ</h1>
                                <button onClick={() => { setOpen(false) }} className="text-nowrap bg-primary/20 border border-primary py-1 px-2 rounded-lg hover:bg-primary/50 transition">ปิดหน้าต่าง</button>
                            </div>
                            <p className="text-base text-zinc-50 mb-2">ขอแสดงความเสียใจเราไม่พบรายชื่อของท่าน <span className="font-bold text-primary">ท่านสามารถตรวจสอบรายชื่อของท่านด้วยตนเองอีกครั้ง</span></p>

                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between w-full pb-4">
                                <h1 className="text-xl sm:text-2xl font-bold">ขอแสดงความยินดี</h1>
                                <button onClick={() => { setOpen(false) }} className="bg-primary/20 border border-primary py-1 px-2 rounded-lg hover:bg-primary/50 transition">ปิดหน้าต่าง</button>
                            </div>
                            <p className="text-base text-zinc-50 mb-2">คุณได้รับการตอบรับเข้าร่วมค่าย <span className="font-bold text-primary">Young Webmaster Camp</span> ครั้งที่ 20</p>
                            <h2 className="font-black text-2xl pb-4">คุณ<span className="bg-linear-90 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent">{data.firstName} {data.lastName}</span></h2>
                                <div className={`w-full border  rounded-md flex items-center gap-2 ${camps[data.major as keyof typeof camps]?.border} ${camps[data.major as keyof typeof camps]?.bgcolor} p-2`}>
                                <Image src={camps[data.major as keyof typeof camps]?.image} alt="Icon" className="w-22" />
                                <div>
                                    <h3 className="text-4xl mb-2 font-black bg-linear-210 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent">{data.interviewRefNo}</h3>
                                    <h3 className="font-bold uppercase">{camps[data.major as keyof typeof camps]?.name}</h3>
                                </div>
                            </div>
                        </>
                    )}


                </motion.div>
            </div>
        </div>
    )
}