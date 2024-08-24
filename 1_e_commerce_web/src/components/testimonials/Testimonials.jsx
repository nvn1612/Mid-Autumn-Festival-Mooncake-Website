import React from "react";
import Slider from "react-slick";
const TestimonialsData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    text: "Sản phẩm rất tốt, tôi rất hài lòng với sản phẩm này",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    text: "Sản phẩm rất tốt, tôi rất hài lòng với sản phẩm này",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
  },
  {
    id: 3,
    name: "Trần Văn C",
    text: "Sản phẩm rất tốt, tôi rất hài lòng với sản phẩm này",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
  },
  {
    id: 4,
    name: "Lê Văn C",
    text: "Sản phẩm rất tốt, tôi rất hài lòng với sản phẩm này",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
  },
  {
    id: 5,
    name: "Thái Phương Tuấn",
    text: "Sản phẩm rất tốt, tôi rất hài lòng với sản phẩm này",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinity: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 maw-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Khách hàng nói gì về sản phẩm
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Nhận xét
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Đây là những nhận xét từ khách hàng đã sử dụng sản phẩm của chúng
            tôi.
          </p>
        </div>
        {/* Testimonial card  */}
        <div 
        data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                        dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
