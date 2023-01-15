import Link from 'next/link'
import React, { useState } from 'react'

type Props= {
    
}
export interface IMenu{
    name:string,
    href: string
}
const initialState:Array<IMenu> =[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Translation', href: '/translation' },
    { name: 'Vision', href: '/vision' },
    { name: 'Worship', href: '/worship' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]
export const Navbar:React.FC<Props> = (props) => {
    
    const [menus, setMenus] = useState<IMenu[]>(initialState)
    return (
        <div className='w-full h-15 flex justify-between z-5'>
           <div className="container mx-auto bg-amber-600 border border-1">
           <div className='bg-amber-600'>
            <a href="">Logo</a>
            </div>
            <div>
            { menus.map((item,index)=>(
                <Link href={item.href} key={index}>{item.name}</Link>
            ))}
            
            </div>
           </div>
        </div>
    )
}
