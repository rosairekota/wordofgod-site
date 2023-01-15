import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Navbar } from '@/layouts/Navbar'
import { Footer } from './Footer'

type BaseLayoutProps= PropsWithChildren<{
    
}>

const BaseLayout:React.FC<BaseLayoutProps> = ({children}) => {
    return (
        <>
            <Head>
                <meta charSet='UTF-8'/>
                <title>App</title>
            </Head>
            <main>
            <Navbar/>
             {children}
             <Footer/>
            </main>
        </>
    )
}

export default BaseLayout