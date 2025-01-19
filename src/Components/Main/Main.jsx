import React, { useState, useEffect } from "react";

import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img1 from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';

import BookingForm from "./BookingForm";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Gói 1: Trăng mật ngắn ngày lãng mạn',
        location: 'Địa Trung Hải',
        grade: 'Romantic Short Trip',
        fees: '2.200.000 VNĐ/người',
        description: `Bao gồm:
        - 1 đêm nghỉ dưỡng tại khách sạn khu vực Địa Trung Hải
        - Bữa sáng, nước suối, trà và cà phê trong phòng
        - 1 ngày Tour Cano 3 Đảo có ăn trưa
        - Vé show Kiss Off The Sea
        Ưu đãi:
        - Nâng hạng phòng view biển miễn phí
        - Tour Sunset Town bằng xe điện miễn phí
        - Chụp ảnh cặp đôi bằng máy cơ và quay video flycam miễn phí
        - Trợ giá nâng cấp trên Tour Cano Đảo & Cáp treo chỉ thêm 400.000 VNĐ`
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Gói 2: Trăng mật ngắn ngày giá tốt',
        location: 'Địa Trung Hải',
        grade: 'Affordable Short Trip',
        fees: '2.000.000 VNĐ/người',
        description: `Bao gồm:
        - 1 ngày Tour Cano 3 Đảo có ăn trưa
        - Chụp ảnh cặp đôi và quay video flycam miễn phí trong ngày đi tour đảo
        - Bữa sáng tại khách sạn
        - Trà, cà phê & nước suối trong phòng
        Ưu đãi:
        - Tặng vé Cầu Hôn có chụp hình cặp đôi bằng máy cơ
        - Miễn phí đón hoặc tiễn bay, hoặc từ khách sạn khác đến khách sạn`
    },
    {
        id: 3,
        imgSrc: img4,
        destTitle: 'Gói 3: Du lịch trăng mật được yêu thích nhất',
        location: 'Sunset Beach Resort & Spa',
        grade: 'Popular Choice',
        fees: '4.800.000 VNĐ/người',
        description: `Bao gồm:
        - Vé máy bay khứ hồi TP HCM – Phú Quốc
        - 2 đêm nghỉ dưỡng tại phòng premium giường tròn
        - 2 bữa sáng buffet
        - Bãi biển riêng và hồ bơi lớn
        - 1 ngày Tour Cano 3 Đảo có ăn trưa
        Ưu đãi:
        - Tặng vé Cầu Hôn có chụp hình máy cơ
        - Miễn phí trang trí Honey Moon
        - Chụp ảnh máy cơ, ván SUP và quay video flycam miễn phí`
    },
    {
        id: 4,
        imgSrc: img5,
        destTitle: 'Gói 4: Trăng mật siêu lãng mạn',
        location: 'Địa Trung Hải',
        grade: 'Ultra Romantic',
        fees: '3.000.000 VNĐ/người',
        description: `Bao gồm:
        - 1 ngày Tour Cano 3 Đảo có ăn trưa
        - Chụp ảnh máy cơ, ván SUP và quay video flycam miễn phí
        - 2 bữa sáng tại khách sạn
        Ưu đãi:
        - Tặng tour Cáp treo, buffet & công viên nước Hòn Thơm
        - Tặng vé Cầu Hôn với chụp hình máy cơ
        - Miễn phí trang trí Honey Moon
        - Miễn phí đón hoặc tiễn bay`
    }
];

const Main = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
  
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  
    const handleBookClick = (packageData) => {
      setSelectedPackage(packageData);
      setIsFormVisible(true);
    };
  
    const handleCloseForm = () => {
      setIsFormVisible(false);
      setSelectedPackage(null);
    };
  
    return (
      <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" className="title">
            Phu Quoc Honeymoon Packages
          </h3>
        </div>
  
        <div className="secContent grid">
          {Data.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
  
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
  
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
  
                  <div className="desc">
                    <p>{description}</p>
                  </div>
  
                  <button
                    className="btn flex"
                    onClick={() =>
                      handleBookClick({
                        id,
                        destTitle,
                        location,
                        grade,
                        fees,
                        description
                      })
                    }
                  >
                    BOOK <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
  
        {isFormVisible && (
          <BookingForm
            selectedPackage={selectedPackage}
            onClose={handleCloseForm}
          />
        )}
      </section>
    );
  };
  
  export default Main;
