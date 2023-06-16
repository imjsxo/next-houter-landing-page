import React from "react";
import { AiFillFire, AiFillHome } from 'react-icons/ai'
import { MdBed } from 'react-icons/md'

const ProductCard = (props) => {
    const ListProduct = [{
        image: '/images/product1.png',
        name: 'Roselands House',
        price: '$ 35.000.000',
        photouser: '/images/photouser.png',
        userName: 'Dianne Russell',
        userCity: 'Manchester, Kentucky',
        label: 'Popular'
    },
    {
        image: '/images/product2.png',
        name: 'Woodlandside',
        price: '$ 20.000.000',
        photouser: '/images/photouser2.png',
        userName: 'Robert Fox',
        userCity: 'Dr. San Jose, South Dakota',
        label: 'New house'
    },
    {
        image: '/images/product3.png',
        name: 'The Old Lighthouse',
        price: '$ 44.000.000',
        photouser: '/images/photouser3.png',
        userName: 'Ronald Richards',
        userCity: 'Santa Ana, Illinois',
        label: 'Best Deals'
    }];

    function getIconlabel(label) {
        if (label == 'Popular'){
            return <AiFillFire className="mr-2" />
        } else if(label== 'New house'){
            return <AiFillHome className="mr-2"/>
        } else {
            return <MdBed className="mr-2"/>
        }
    }

    function getColorLabel(label) {
        if (label == 'Popular') {
            return 'text-[#EF4444] bg-[#FEE2E2]'
        } else if (label== 'New house') {
            return 'text-[#1D4ED8] bg-[#DBEAFE]'
        } else {
            return 'text-[#047857] bg-[#D1FAE5]'
        }
    }


    return (
        <>
            {
                ListProduct.map(product => {
                    return (
                        <div>
                            <div className="relative">
                                <img src={product.image} alt="" />
                                <div className="absolute left-[5%] bottom-[5%]">
                                    <p className={
                                        `flex ${getColorLabel(product.label)} 
                                        text-sm w-fit px-4 py-2 items-center rounded-3xl`}
                                        >
                                        {getIconlabel(product.label)}
                                        {product.label}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="font-medium text-2xl">{product.name}</p>
                                <p className="text-[#3C4563] text-xl font-medium mt-0.5">{product.price}</p>
                                <div className="flex items-center mt-6">
                                    <img src={product.photouser} alt="" className="h-fit mr-4" />
                                    <div>
                                        <p className="text-lg font-medium">{product.userName}</p>
                                        <p className="text-[#888B97] text-base">{product.userCity}</p>
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

export default ProductCard