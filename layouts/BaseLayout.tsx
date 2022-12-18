import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Navbar } from '@/layouts/Navbar'

type BaseLayoutProps= PropsWithChildren<{
    
}>

const BaseLayout:React.FC<BaseLayoutProps> = ({children}) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet='UTF-8'/>
                <title>App</title>
            </Head>
            <main>
             {children}
            </main>
        </React.Fragment>
    )
}

export default BaseLayout