import React from 'react'
import Img1 from '../../assets/cake/CardCake.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center
    items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center'>
                {/* Image section */}
                <div data-aos='zoom-in'>
                    <img src={Img1} alt="" 
                    className='max-w-[400px] h-[350px] w-full
                    mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
                </div>
                {/* text detail section */}
                <div className='flex flex-col justify-center
                gap-6 sm:pt-0'>
                    <h1 data-aos='fade-up'
                    className='text-3xl sm:text-4xl font-bold'>Tháng 9 sale đến 50%</h1>
                    <p data-aos='fade-up'
                     className='text-gray-500 text-sm tracking-wide leading-5'>
                    Build and Deploy complete Ecommerce Website using ReactJS and Tailwind CSS. In this tutorial you will learn how to make modern complete responsive Ecommerce website, and also you will learn how to deploy it on the internet. 
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos='fade-up'
                        className='flex items-center gap-4'>
                            <GrSecure data-aos='fade-up'
                            className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                            <p>Đảm bảo chất lượng sản phẩm</p>
                        </div>
                        <div data-aos='fade-up'
                        className='flex items-center gap-4'>
                            <IoFastFood data-aos='fade-up'
                            className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                            <p>Vận chuyển nhanh</p>
                        </div>
                        <div data-aos='fade-up'
                        className='flex items-center gap-4'>
                            <GiFoodTruck data-aos='fade-up'
                            className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                            <p>Thanh toán dễ dàng</p>
                        </div>
                        <div data-aos='fade-up'
                        className='flex items-center gap-4'>
                            <GiFoodTruck data-aos='fade-up'
                            className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                            <p>Nhận nhiều ưu đãi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner