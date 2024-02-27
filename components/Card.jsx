import React from 'react'
import Image from 'next/image'
import middle from './middle.module.scss';
import arrow from './assets/arrow.png'
const Card = ({name,image,feedback,title,star,description,highlights,rating}) => {

  return (
    <div className={middle.card}>
        <div className={middle.cardfirst}>
          <div >
        <Image src={image} width='141px' height='103px'/>
       <p className={middle.between}>{name}</p>
        </div>
        </div>
        <div className={middle.cardmid}>
          <p className={middle.cardtitle}>{title} -</p>
          <p className={middle.carddescription}>{description}</p>
          
          <p className={middle.cardtitle}>Main highlights</p>
          <p className={middle.carddescription1}>[What You Get]:{highlights}</p>
          <div className={middle.extra}>
          <p>Show more</p>
          <Image src={arrow} width='16px' height='16px' />
          </div>
        </div>
        <div className={middle.cardside}>
            <div className={middle.rate}>
                <p className={middle.number}>{rating}</p>
                <p className={middle.feed}>{feedback}</p>
                <Image src={star} className={middle.star}/>
            </div>
            <div className={middle.viewbutton}>
                   <p className={middle.view}> View</p> 
            </div>
        </div>
        </div>
  )
}

export default Card