// import React from 'react'
import Layout from '../components/layout/Layout'
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import Layout from "./../Component/Layout/Layout";

const PageNotFound = () => {
    // return (
    // <Layout><h1>PageNotFound</h1></Layout>
    // )
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

export default PageNotFound