import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='flex-col'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout