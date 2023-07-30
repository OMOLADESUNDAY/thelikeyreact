import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

const Dashboard = () => {
    return (
        <>
            <main className='container-scroller'>
                <Header />
                <Sidebar />
                Dashboard
                <Footer />
            </main>
        </>
    )
}

export default Dashboard