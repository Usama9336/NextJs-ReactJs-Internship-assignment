import footer from './footer.module.scss'
import React from 'react'
import last from './assets/lastpic.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={footer.size}>
        <div className={footer.midpart}>
    <div >
    <p className={footer.categories}>CATEGORIES</p>
<p className={footer.subhead}>Web Builder</p>
<p className={footer.subhead}>Hosting</p>
<p className={footer.subhead}>Data Center</p>
<p className={footer.subhead}>Robotic-Automation</p>
    </div>
    <div className={footer.mainhead}>
    <p className={footer.categories}>CONTACT</p>
<p className={footer.subhead}>Contact</p>
<p className={footer.subhead}>Privacy Policy</p>
<p className={footer.subhead}>Terms Of Service</p>
<p className={footer.subhead}>Categories</p>
<p className={footer.subhead}>About</p>
    </div>
    <div className={footer.otherhead}>
    <p className={footer.subhead}>United States</p>
    <div className={footer.newimage}>
    <Image src={last}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer