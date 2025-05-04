import Logo from "@/../public/images/branding/ywc-logo.png"
import Image from "next/image"
import Link from "next/link"

import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="bg-zinc-950 h-[65px] py-4 px-4 flex items-center justify-center">
            <div className="container  h-full flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2 h-full hover:scale-95 transition">
                    <Image src={Logo} alt="YWC Logo" className="h-full w-auto" />
                    <div className="h-full w-1 bg-linear-0 from-secondary via-tertiary to-quaternary" />
                    <div className="flex flex-col justify-center">
                        <h1 className="hidden md:block text-base bg-linear-90 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent font-black">Young Webmaster Camp</h1>
                        <h1 className="block md:hidden text-base bg-linear-90 from-secondary via-tertiary to-quaternary w-fit bg-clip-text text-transparent font-bold">YWC</h1>
                        <p className="text-sm text-white">ค่ายที่สร้างมืออาชีพ</p>
                    </div>
                </Link>
                <Link href={"https://ywc.in.th"} className="flex gap-2 items-center bg-linear-90 from-secondary via-tertiary to-quaternary text-white py-2 px-4 font-bold rounded-md transition hover:scale-95" target="_blank" >
                    <MdArrowOutward size={"1.3em"} />
                    ywc.in.th
                </Link>
            </div>
        </header>
    )
}