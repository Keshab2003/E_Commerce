
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <ToastContainer />
                {children} {/* Corrected the typo from 'porps' to 'children' */}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {  // Corrected from defaultPorps to defaultProps
    title: 'Ecommerce webapp',
    description: 'Mern Stack Project',
    keywords: 'mern,react,node,mongoDB',
    author: 'Keshav',
};

export default Layout;
