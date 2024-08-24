import React from 'react'
import Logo from '../../assets/LogoCake.png'
import Banner from '../../assets/website/footer-pattern.jpg'

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
    <div className='text-white mb-20'
    style={BannerImg}>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-44 pt-5'>
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

            </div>
        </div>
    </div>
  )
}

export default Footer