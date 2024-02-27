import React from 'react'
import Image from 'next/image'
import pc from './assets/pc.png'
import middle from './middle.module.scss'
const Nextcard = ({newname,newimg,newdescpription,price,discount,original,time}) => {
  return (
    <div className={middle.newdiv}>
      <div className={middle.image}>
        <Image src={newimg} />
        </div>
        <div className={middle.newflex}>
            <p className={middle.newdiff}>{discount}</p>
            <p className={middle.newdiff}>{time}</p>
        </div>
        <p className={middle.newname}>{newname}</p>
        <p className={middle.newdescription}>{newdescpription}</p>
        <div className={middle.price}>
        <p>{price}</p>
        <p className={middle.original}>{original}</p>
        <p className={middle.discount}>{discount}</p>
        </div>
        <div className={middle.newviewbutton}>
            <p className={middle.viewdeal}>View Deal</p>
        </div>
        </div>
  )
}

export default Nextcard