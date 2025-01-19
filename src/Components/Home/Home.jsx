import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { IoListSharp } from "react-icons/io5";
import { TbAppsFilled } from "react-icons/tb";

const Home = () =>{
    return(
       <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop type = "video/mp4"></video>

        <div className = "homeContent container">
            <div className='textDiv'>
                <span className='smallText'>
                    Our Packages
                </span>
                <h1 className='homeTitle'>
                    Search your Holidays
                </h1>
            </div>

            <div className="cardDiv grid">
                <div className='destinationInput'>
                    <label htmlFor='city'>Search your destination:</label>
                    <div className="input flex">
                        <input type='text' placeholder='Enter name here...'></input>
                        <GrLocation className='icon'/>
                    </div>
                </div>

                <div className='dateInput'>
                    <label htmlFor='date'>Select your date</label>
                    <div className="input flex">
                        <input type='date' placeholder=''></input>
            
                    </div>
                </div>

                <div className='priceInput'>
                    <div className='label_total flex'>
                        <label htmlFor='price'>Max price</label>
                        <h3 className='total'>$1000</h3>
                    </div>
                    <div className="input flex">
                        <input type='range' max ="5000" min="5"></input>
                    </div>
                </div>

                <div className="searchOptions flex">
                <HiFilter className='icon'/>
                <span>MORE FILTERS</span>
                </div>
            </div>

            <div className="homeFooterIcons flex style = justify-content: space-between">
                <div className='rightIcons'>
                <a href="https://www.facebook.com/ngathinhtravel" target="_blank" rel="noopener noreferrer">
  <FiFacebook className='icon' />
</a>

                <AiFillInstagram className='icon' />
                <CgMail className='icon' />
                </div>
                
                <div className='leftIcons'>
                <IoListSharp className='icon'/>
                <TbAppsFilled className='icon'/>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Home