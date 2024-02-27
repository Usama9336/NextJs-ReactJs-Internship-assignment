"use client"

import React from 'react'
import Image from 'next/image'
import navbar from './navbar.module.scss'
import img from './assets/IMAGE.png';
import { useState } from 'react';
import menu from './assets/menu-bar-icon.png'
const Navbar = () => {
  const [toggledropdown, settoggledropdown] = useState(false)
  return (
    <div className={navbar.title}>
     <div className={navbar.box}>
     <div className={navbar.search}>
      <Image src={img} width='24px' height='24px' />
      <input type="text" className={navbar.newinput} />
     </div>
     <div className={navbar.type}>
<p>Categories</p>
<p>Website Builders</p>
<p>Today's Deals</p>
</div>
     </div>
     </div>
  )
}

export default Navbar