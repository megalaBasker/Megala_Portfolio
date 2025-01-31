import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="bg-primary text-white w-100 fixed-top row">
            <h1 className="display-4 d-md-inline text-center text-md-start col-12 col-md-6">MY BLOG</h1>
            <ul className="list-inline col-12 col-md-6 d-flex justify-content-around justify-content-md-end gap-5 align-items-center mt-4">
                <li className="list-inline-item"><a className="text-white text-decoration-none" href="#">Home</a></li>
                <li className="list-inline-item"><a className="text-white text-decoration-none" href="#">About</a></li>
                <li className="list-inline-item"><a className="text-white text-decoration-none" href="#">Contact</a></li>
            </ul>
        </header>
    );
};


export default Header