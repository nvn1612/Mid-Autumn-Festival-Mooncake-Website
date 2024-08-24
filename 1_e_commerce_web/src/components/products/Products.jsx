import React from 'react'
import Img1 from '../../assets/cake/CardCake.jpg'
import {FaStar} from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        rating: 5.0,
        category: 'Bánh dẻo',
        aosDelay:'0'
    },
    {
        id: 2,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        rating: 5.0,
        category: 'Bánh dẻo',
        aosDelay:'200'
    },
    {
        id: 3,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        rating: 5.0,
        category: 'Bánh dẻo',
        aosDelay:'400'
    },
    {
        id: 4,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        rating: 5.0,
        category: 'Bánh dẻo',
        aosDelay:'600'
    },
    {
        id: 5,
        img: Img1,
        title: 'Bánh dẻo nhân đậu xanh',
        rating: 5.0,
        category: 'Bánh dẻo',
        aosDelay:'800'
    },

]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 maw-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary'>Sản phẩm bán chạy cho bạn</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Sản phẩm</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>
                    Sản phẩm bán chạy nhất của chúng tôi. Mua ngay hôm nay để nhận ưu đãi lớn.
                </p>
            </div>
            {/* Body section  */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
                lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {ProductsData.map((data) => (
                        <div key={data.id} 
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        className='space-y-3'>
                            <img src={data.img} alt=""
                            className='h-[220px] w-[150px] object-cover rounded-md'>
                            </img>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.category}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-primary'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products