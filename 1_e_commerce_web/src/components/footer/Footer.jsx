import React from 'react'
import Logo from '../../assets/LogoCake.png'
import Banner from '../../assets/website/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaLocationArrow, FaLinkedin, FaMobileAlt } from 'react-icons/fa'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const FooterLinks = [
    {
        title:'Trang chủ',
        link: '#',

    },
    {
        title:'Về chúng tôi',
        link: '#',

    },
    {
        title:'Liên hệ',
        link: '#',

    },
    {
        title:'Diễn đàn',
        link: '#',
    },
    
]
const Footer = () => {
  return (
    <div className='text-white'
    style={BannerImg}>
        <div className='container'>
            <div data-aos='zoom-in'
             className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* company detail */}
                <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3
                    flex items-center gap-3'>
                        <img src={Logo} alt="" 
                        className='max-w-[50px]'/>
                        2TCake
                    </h1>
                    <p>
                        2TCake chuyên cung cấp các loại bánh trung thu chất lượng cao 
                    </p>
                </div>
                {/* footer links  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold
                            sm:text-left text-justify mb-3'>Liên kết với chúng tôi</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200'
                                        key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold
                            sm:text-left text-justify mb-3'>Liên kết</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200'
                                        key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* social links */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl text-gray-200 hover:text-primary'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl text-gray-200 hover:text-primary'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl text-gray-200 hover:text-primary'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Thành phố Bắc Ninh, Tỉnh Bắc Ninh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+84 345678901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer