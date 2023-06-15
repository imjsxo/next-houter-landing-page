import React from "react";
import { AiFillClockCircle } from 'react-icons/ai'

const BlogCard2 = () => {
    const listbigBlog = [
        {
            imagethumb: '/images/blogimg4.png',
            userphoto: '/images/photouser3.png',
            username: 'Cameron Williamson',
            title: '12 Things to know before buying a house',
            desc: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
            time: '8 min read | 25 Apr 2021'
        }
    ]

    return (
        listbigBlog.map(blogs2 => {
            return (
                <>
                    <div className="flex flex-col mb-10">
                        <img src={blogs2.imagethumb} />
                        <div>
                            <div className="flex items-center mb-3 mt-6">
                                <img src={blogs2.userphoto} className="h-8 mr-4"/>
                                <p className="text-sm text-[#3C4563]">{blogs2.username}</p>
                            </div>
                            <h3 className="text-lg text-[#1B1C57] mb-3">{blogs2.title}</h3>
                            <p className="text-sm text-light text-[#626687] mb-4">{blogs2.desc}</p>
                            <div className="flex items-center text-[#888B97] text-sm">
                                <AiFillClockCircle className="mr-3"/>
                                {blogs2.time}
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    )
}

export default BlogCard2