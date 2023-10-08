import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTopTwo from './headertoptwo';
import {IoIosCall} from 'react-icons/io'

import NavMenu from './navmenu';

const HeaderTwo = () => {
    const [openCart,setOpenCart] = useState(false)
    const dispatch = useDispatch();
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();


    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.meta-header-area');
        const scrollTop = window.scrollY;
        scrollTop >= 140 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End

    return (
        <>
            <header className="header2">
           
                <div id="header-sticky" className="meta-header-area">
                    <div className="container">
                        <div className="meta-header-inner">
                            <div className="meta-header-left">
                                <div className="header-logo header2-logo">
                                    <Link href="/"><a className="logo-w"><img src="/assets/img/logo/logo1.png" alt="logo-img" style={{"maxHeight":"100px"}}/></a></Link>
                                </div>
                            </div>
                            <div className="meta-header-right">
                                <div className="meta-items meta-header-meta-items d-none d-lg-inline-flex">
                                    <div className="meta-item">
                                        
                                        <div className="meta-item-content">
                                            
                                            <div className="meta-title">Premium Mulch Supplies <br /> <div className="meta-item-content">
                                            <p>Available in Bulk</p>

    
                                            
                                        </div></div>
                                        </div>
                                        
                                    </div>
                                    <div className="meta-item d-none d-xl-inline-flex">
                                        <div className="meta-item-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="meta-item-content">
                                            <p>royalmulchllc@gmail.com</p>
                                            <div className="meta-title">Email Address</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu2">
                                    <nav id="mobile-menu-sticky">
                                        <NavMenu />
                                    </nav>
                                </div>
                                <Link href="#contact"><a className="border-btn-rounded d-none d-lg-inline-flex"><i className="fal fa-farm"></i><span>Contact Us</span></a></Link>
                                <div className="menu-bar d-lg-none">
                                    <span className="side-toggle" onClick={() => setShowSidebar(true)}>
                                        <div className="bar-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main header-main2 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header2">
                                        <div className="main-menu main-menu2 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}

            {/* sidebar cart start */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
            {/* sidebar cart end */}
        </>
    );
};

export default HeaderTwo;