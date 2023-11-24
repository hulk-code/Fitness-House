import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import Sectiontitle from '../Home/SharedPage/SectionTitle/SectionTitle';






const ClientReview = () => {
    const [reviews, setReviews] = useState([])
    const url = `http://localhost:5000/reviews`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setReviews(res.data)
            })
    }, [url])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
        <Sectiontitle heading="Happy Client"></Sectiontitle>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="hero min-h-screen bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={review.img} className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <h1 className="text-5xl font-bold">{review.name}</h1>
                                        <p className="py-6">{review.review}</p>
                                        
                                    </div>
                                </div>
                            </div>
                           

                                

                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </>
    );
};

export default ClientReview;
