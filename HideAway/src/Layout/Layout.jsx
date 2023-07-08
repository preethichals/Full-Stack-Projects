import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from './Footer'
import Header from './Header'

function Layout({children,description,title,keywords}) {
  return (
   <>
   <HelmetProvider>
   <Helmet>
   <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
        </Helmet>
        <Header/>
        <main className='' style={{minHeight:"80vh"}}>
            {children}
        </main>
        <Footer/>
        </HelmetProvider>
   </>
  )
}

Layout.defaultProps = {
    title:"HideAway - Luxury Inn & Resort",
    description:"Luxury Resort",
    keywords:"Resort"
}

export default Layout

