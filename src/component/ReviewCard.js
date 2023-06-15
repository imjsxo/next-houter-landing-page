import React from "react";
import { AiFillStar } from 'react-icons/ai'

const ReviewCard = () => {
    const listReview = [{
        image: '/images/review-image.png',
        summary: 'Best! I got the house I wanted through Hounter',
        desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
        userphoto: '/images/photouser.png',
        userName: 'Dianne Russell',
        userCity: 'Manchester, Kentucky',
        poin: '4.6'
    }]
    return (
        <>
            {
                listReview.map(reviews => {
                    return (
                        <div className="relative flex flex-col items-center">
                            <img src={reviews.image} />
                            <div className="w-3/4 p-8 bg-white absolute top-[65%]">
                                <h3 className="text-xl font-bold mb-4">{reviews.summary}</h3>
                                <p className="text-sm text-light text-[#626687] mb-6">{reviews.desc}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <img className="h-fit mr-6" src={reviews.userphoto} alt="" />
                                        <div>
                                            <p className="text-sm font-semibold mb-1">{reviews.userName}</p>
                                            <p className="text-sm text-light text-[#626687]">{reviews.userCity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xl">
                                        <AiFillStar className="mr-4 text-[#F59E0B]"/>
                                        {reviews.poin}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </>

    )
}

export default ReviewCard