import React from 'react'
import Banner from '../../assets/website/banner.jpg'
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}
const subscribe = () => {
  return (
    <div
    data-aos='zoom-in'
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}>
        <div className='container blackdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1
                className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Nhận thông báo về sản phẩm mới</h1>
                <input 
                data-aos='fade-up'
                type="text"
                placeholder='Nhập email của bạn để nhận thông báo'
                className='w-full p-3 text-black' />
            </div>
        </div>

    </div>
  )
}

export default subscribe