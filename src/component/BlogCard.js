import React from "react";
import { AiFillClockCircle } from 'react-icons/ai'

const BlogCard = () => {
    const listBlog = [{
        imagethumb: '/images/blogimg.png',
        userphoto: '/images/photouser.png',
        username: 'Dianne Russell',
        title: 'The things we need to check when we want to buy a house',
        time: '4 min read | 25 Apr 2021'
    },
    {
        imagethumb: '/images/blogimg2.png',
        userphoto: '/images/photouser2.png',
        username: 'Courtney Henry',
        title: '7 Ways to distinguish the quality of the house we want to buy',
        time: '6 min read | 24 Apr 2021'
    },
    {
        imagethumb: '/images/blogimg3.png',
        userphoto: '/images/photouser3.png',
        username: 'Darlene Robertson',
        title: 'The best way to know the quality of the house we want to buy',
        time: '2 min read | 24 Apr 2021'
    }]
    const listBlog2 = [
        {
            imagethumb: '/images/blogimg4.png',
            userphoto: '/images/photouser4.png',
            username: 'Cameron Williamson',
            title: '12 Things to know before buying a house',
            desc: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
            time: '8 min read | 25 Apr 2021'
        }
    ]

    return (
        listBlog.map(blogs => {
            return (
                <>
                    <div className="flex mb-10">
                        <img src={blogs.imagethumb} className="mr-8" />
                        <div>
                            <div className="flex items-center mb-3">
                                <img src={blogs.userphoto} className="h-8 mr-4"/>
                                <p className="text-sm text-[#3C4563]">{blogs.username}</p>
                            </div>
                            <h3 className="text-lg text-[#1B1C57] mb-4">{blogs.title}</h3>
                            <div className="flex items-center text-[#888B97] text-sm">
                                <AiFillClockCircle className="mr-3"/>
                                {blogs.time}
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    )
}

export default BlogCard