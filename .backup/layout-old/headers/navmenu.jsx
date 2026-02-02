import Link from 'next/link';
import React from 'react';
import nav_menus_list from '../../data/headernav/nav-menus';
import {IoIosCall} from 'react-icons/io'

const NavMenu = () => {
    return (
        <>
            <ul>
                {nav_menus_list?.map((item, index) => {
                    return (
                        <li key={index} className={`${item.hasDropdown && !item.megamenu ? 'active menu-item-has-children'
                            : item.megamenu && 'mega-menu menu-item-has-children'}`}>
                            <Link href={`${item.link}`}>{`${item.title}`}</Link>

                            {item?.hasDropdown && !item.megamenu && <ul className="sub-menu">
                                {item?.dropdownItems?.map((menu, index) => (
                                    <li key={index}><Link href={`${menu.link}`}>{menu.title}</Link></li>
                                ))}
                            </ul>}
                            
                        </li>
                        
                    )
                })}
                 <span className="call">
                 Call for Pickup or Delivery: 
                                                       
                                                               <span><a href="tel:+16145820234" > <IoIosCall/>+1(614)582-0234</a></span>
                                                               </span>                                
            </ul>
        </>
    );
};

export default NavMenu;