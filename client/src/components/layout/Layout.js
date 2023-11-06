import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = (porps) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '70vh' }}>


                {porps.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;