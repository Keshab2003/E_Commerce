import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from "../components/context/auth"

const HomePage = () => {
    const [auth, setAuth] = useAuth()
    return (
        <Layout title={"Best Offer "}>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    )
}

export default HomePage