import React from 'react'
import middle from '../components/middle.module.scss';
import Image from 'next/image';
import tick from './assets/tick.png'
import info from './assets/info.png'
import top from './assets/top.png'
import vector from './assets/Vector.png'
import pc from './assets/pc.png'
import star from './assets/star.png'
import Card from './Card';
import Nextcard from './Nextcard'; 
const Middlesection = () => {

const cardsobj=[
  {
    name:'Builder 1',
    image:pc,
    title:'WixPro 72-Inch Responsive Website Builder',
    rating: 9.8,
    description:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
     highlights:'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
     feedback:'Exceptional',
     star:star
  },
  {
    name:'Builder',
    image:pc,
    title:'SiteCraft 68-Inch Ultimate Web Design Studio',
    rating: 9.5,
    description:'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
     highlights:'Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
     feedback:'Excellent',
     star:star
  },
  {
    name:'Builder 1',
    image:pc,
    title:'WixPro 72-Inch Responsive Website Builder',
    rating: 9.8,
    description:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
     highlights:'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
     feedback:'Exceptional',
     star:star
  },

  {
    name:'CDK',
    image:pc,
    title:'CDK Resposive Builder',
    rating: 9.1,
    description:' An extensive library of widgets and apps, and detailed step-by-step guides',
     highlights:'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
     feedback:'Very Good',
     star:star
  },
  
]



const newcardsobj=[
  {
    newname:'Builder 1',
    newimg:pc,
    time:'Limited time',
    price:'$39.96',
    newdescription:'Computer  Modern clasic with wix support',
     original:'$49.96',
     discount:'(20% off)'
  },
  {
    newname:'Builder 1',
    newimg:pc,
    time:'Limited time',
    price:'$39.96',
    newdescription:'Computer  Modern clasic with wix support',
     original:'$49.96',
     discount:'(20% off)'
  },
  {
    newname:'Builder 1',
    newimg:pc,
    time:'Limited time',
    price:'$39.96',
    newdescription:'Computer  Modern clasic with wix support',
     original:'$49.96',
     discount:'(20% off)'
  },
]
  return (
    <div className='w-[100%]'>
        <div className={middle.heading}>
            <p>Best Website builders in the US</p>
        </div>
        <br className={middle.line}/>
        <div className={middle.time}>
            <div className={middle.second}>
          <Image src={tick} width='20px' height='20px'/> Last Updated - February 22, 2020 <Image src={info} width='20px' height='20px'/> Advertising Disclosure
        </div>
        <div className={middle.top}>
        Top Relevant
          <Image src={top} width='20px' height='20px'/>
        </div>
        </div>
        <br className={middle.line}/>
        <div className={middle.option}>
         <p className={middle.rectangle}>Tools</p>
         <p className={middle.rectangle}>AWS Builder</p>
         <p className={middle.rectangle}>Start Build</p>
         <p className={middle.rectangle}>Build Supplies</p>
         <p className={middle.rectangle}>Tooling</p>
         <p className={middle.rectangle}>BlueHosting</p>
        </div>
        <div className={middle.nextopt}>
        Home <Image src={vector} width='10px' height='8.25px' color='#5C6874'/> Hosting for all <Image src={vector} width='10px' height='8.25px' color='#5C6874'/>  Hosting <Image src={vector} width='10px' height='8.25px' color='#5C6874'/> Hosting6 <Image src={vector} width='10px' height='8.25px' color='#5C6874'/> Hosting5
        </div>

        <div>
{
  cardsobj.map((obj)=>{
    return <Card 
    name={obj.name}
    image={obj.image}
    feedback={obj.feedback}
    title={obj.title}
    star={obj.star}
    description={obj.description}
    highlights={obj.highlights}
    rating={obj.rating}
    />
  })
}

        </div>
        <div className=''>
          <p className={middle.related}>Related deals you might like for</p>
         <div className={middle.newcard}>
          {
newcardsobj.map((newobj)=>{
  return <Nextcard
  newname={newobj.newname}
  newimg={newobj.newimg}
  newdescpription={newobj.newdescription}
  price={newobj.price}
  original={newobj.original}
  time={newobj.time}
  discount={newobj.discount}
  />
})
          }
          </div>
        </div>
        <div className={middle.flexsign}>
<div className={middle.newtext}>
Sign up and get exclusive special deals
</div>
<div className={middle.flexbox}>
  <input type='text' className={middle.inputtext}/>
  <div className={middle.newbutton}>
   <p className={middle.signtext}> Sign Up</p>
  </div>
</div>
        </div>
        </div>
  )
}

export default Middlesection