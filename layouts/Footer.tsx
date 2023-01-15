import Link from 'next/link'
import React from 'react'
import facebook from "@/assets/icons/mdi_facebook.svg";
import linkedin from "@/assets/icons/mdi_linkedin.svg";
import twitter from "@/assets/icons/mdi_twitter.svg";
import Image from 'next/image';

type Props = {

}

export const Footer: React.FC<Props> = (props) => {
    return (
        <div className=" bg-secondary h-auto w-full overflow-x-hidden text-white">
            <div className="container mx-auto grid grid-cols-4 gap-3 py-10">
                <ul className="grid grid-rows-3 gap-4">
                    <h5 className="font-bold text-xl mb-3">Menus</h5>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>journal</Link></li>
                    <li><Link href={'/'}>worship</Link></li>
                </ul>
                <ul className="grid grid-rows-3 gap-4">
                    <h5 className="font-bold text-xl mb-3">WordofGod and The Message</h5>
                    <li><Link href={'/'}>About</Link></li>
                    <li><Link href={'/'}>Who is William Marrion Branham ?</Link></li>
                    <li><Link href={'/'}>Our Vision</Link></li>
                </ul>
                <ul className="grid grid-rows-3 gap-4">
                    <h5 className="font-bold text-xl mb-3">Policies and Privacy</h5>
                    <li><Link href={'/'}>Coockies</Link></li>
                    <li><Link href={'/'}>Privacy</Link></li>
                    <li><Link href={'/'}>Terms and services</Link></li>
                </ul>
                <div className="w-full">
                    <h5 className="font-bold text-xl mb-3">Subscribe to the newsletters</h5>
                    <div className="max-w-md mx-auto overflow-hidden md:max-w-full">
                        <div className=" flex md:flex">
                            <div>
                                <input type="email" name="email" id="email" className="focus:outline-none h-auto py-3 "/>
                            </div>
                            <div>
                                <button type="button" className="bg-primary py-3 px-10 text-red hover:bg-primary md:w-1/4" placeholder="Your mail address">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-4">
                <hr className="w-full" />
            </div>
            <div className="container mx-auto flex justify-between">
                <div>
                    <h6>Copyright © {new Date().getFullYear()} wordofgod.ru</h6>
                </div>
                <div className="flex">
                    <a href="#" className="p-8"><Image src={facebook} alt="facebook" /></a>
                    <a href="#" className="p-8"><Image src={linkedin} alt="linkedin" /></a>
                    <a href="#" className="p-8"><Image src={twitter} alt="twitter" /></a>
                </div>
            </div>

        </div>
    )
}
