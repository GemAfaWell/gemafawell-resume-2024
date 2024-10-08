'use client'

import Image from 'next/image';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogComponent from "@/app/components/data/blog/BlogComponent";
import CVComponent from "@/app/components/template/CVComponent";
import PortfolioComponent from "@/app/components/template/PortfolioComponent";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className='text-left'>
                <div className='text-black bg-pink-400'>
                    <h1 className='pl-2 font-bold'>Blog</h1>
                    <BlogComponent />
                </div>
                <div className='text-white'>
                    <div className='block w-full'>
                        <h1 className='w-full py-2 pl-2 font-bold bg-purple-800'>Gemini S. Powell <span className='italic font-normal'>(she/her)</span></h1>
                    </div>
                    <CVComponent />
                </div>
                <div className='text-black bg-blue-400'>
                    <div className='pl-2 font-bold'>
                        <h1>Portfolio</h1>
                    </div>
                    <div className='w-11/12 m-auto'>
                        <PortfolioComponent />
                    </div>
                </div>
            </Slider>
        </div>
    );
}
