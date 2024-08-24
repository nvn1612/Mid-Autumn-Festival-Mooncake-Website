import React from 'react'

import Img1 from '../../assets/cake/CardCake.jpg'
import {FaStar} from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        description: 'Bánh dẻo nhân đậu xanh',
    },
    {
        id: 1,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        description: 'Bánh dẻo nhân đậu xanh',
    },
    {
        id: 1,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        description: 'Bánh dẻo nhân đậu xanh',
    },

]
const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24'>
                <p data-aos='fade-up' className='text-sm text-primary'>Top sản phẩm được đánh giá cao</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Sản phẩm tốt nhất</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>
                    Sản phẩm bán chạy nhất của chúng tôi. Mua ngay hôm nay để nhận ưu đãi lớn.
                </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center' >
                {ProductsData.map((data)=>(
                    <div data-aos='zoom-in'
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                    hover:text-white relative shadow-xl duration-300  group max-w-[300px]'>
                        {/* image section */}
                        <div className='h-[100px]'>
                            <img src={data.img} alt=""
                            className='max-w-[140px] block mx-auto transform -translate-y-20 
                            group-hover:scale-105 duration-300 drop-shadow-md' />
                        </div>
                        {/* detail section */}
                        <div className='p-4 text-center'>
                            {/* star rating */}
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2'>{data.description}</p>
                            <button
                            className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                            rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>
                                Đặt hàng ngay
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts