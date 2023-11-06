import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Layout from "./../Component/Layout/Layout";
// import PageNotFound from './../../pages/PageNotFound';

const Pagenotfound = () => {
    return (
        <Layout>
            <div className='pnf'>
                <h1 className='pnf-title'>404</h1>
                <h2 className='pnf-heading'>Oops ! Page Not found</h2>
                <Link to="" className='pnf-btn'>Go back</Link>
            </div>
        </Layout>
    )
}

export default Pagenotfound;