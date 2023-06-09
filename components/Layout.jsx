import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

const Layout=({children})=> {
  return (
    <div className='layout'>
        <Head>
            <title>Shopping-Hopping</title>
        </Head>
        <header>
            <Navbar />

        </header>
        <main className='main-container'>
        {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default Layout