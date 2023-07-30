import React from 'react';
import { Link } from 'react-router-dom'


const Index = () => {
    return (
        <>
            <Link to={'/sign-in'} >
                Sign In
            </Link>
            <Link to={'/sign-up'} >
                Sign Up
            </Link>
            <Link to={'/dashboard'} >
                Dashboard
            </Link>
        </>
    )
}

export default Index