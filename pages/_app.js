import React from 'react';
import '../styles/globals.css';
import {Layout} from '../components/main';
import { StateContext } from '../context/StateContext';
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
      </StateContext>
    
  )
}

export default MyApp 

// getStripe.js inside api is our backend
