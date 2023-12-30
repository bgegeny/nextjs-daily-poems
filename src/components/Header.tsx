'use client';
import Link from 'next/link';
import React from 'react';
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className='header'>
            <div className="top">
                <div className="logo">
                    <Link href="/">Versindító</Link>
                </div>
                <div
                    className="hamburger-icon"
                >
                    <FaBars
                        size={30}
                        onClick={() => {
                            setIsOpen((prevState) => !prevState);
                        }}
                    />
                </div>
            </div>
            <div
                className={`mobile-menu ${isOpen ? 'active' : ''}`}
            >
                <Link href="/admin">Admin</Link>
                <Link href="/contact">Kapcsolat</Link>
            </div>
            <div className="nav-menu">
                <Link href="/admin">Admin</Link>
                <Link href="/contact">Kapcsolat</Link>
            </div>
        </nav>
    );
};

export default Header;
