import React from 'react';
import { Link } from 'react-router-dom'


const Index = () => {
    return (
        <>
            <div className='w-100 d-flex justify-content-evenly p-5 bg-light' style={{ height: '100vh'}}>
                <Link to={'/sign-in'}  className="btn btn-primary" style={{ height: 'fit-content'}} >
                    Login
                </Link>
                <Link to={'/sign-up'}  className="btn btn-primary" style={{ height: 'fit-content'}} >
                    Sign Up
                </Link>
                <Link to={'/dashboard'} className="btn btn-primary" style={{ height: 'fit-content'}} >
                    Dashboard
                </Link>
            </div>
        </>
    )
}

export default Index