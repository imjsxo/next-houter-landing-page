import React from "react";

const ProductCard = () => {
    const ListProduct = [{
        image: '/images/product1.png',
        name: 'Roselands House',
        price: '$ 35.000.000',
        photouser: '/images/photouser.png',
        userName: 'Dianne Russell',
        userCity: 'Manchester, Kentucky'
    },
    {
        image: '/images/product2.png',
        name: 'Woodlandside',
        price: '$ 20.000.000',
        photouser: '/images/photouser2.png',
        userName: 'Robert Fox',
        userCity: 'Dr. San Jose, South Dakota'
    },
    {
        image: '/images/product3.png',
        name: 'The Old Lighthouse',
        price: '$ 44.000.000',
        photouser: '/images/photouser3.png',
        userName: 'Ronald Richards',
        userCity: 'Santa Ana, Illinois'
    }]
    return (
        <>
            {
                ListProduct.map(product => {
                    return (
                        <div>
                            <img src={product.image} alt="" />
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