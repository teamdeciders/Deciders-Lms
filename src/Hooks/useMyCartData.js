import React, { useEffect } from 'react';
import { useState } from 'react';


const useMyCartData = (email) => {
    const [myCart, setmyCart] = useState([])


    useEffect(() => {
        const url = `http://localhost:5000/myallcart/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setmyCart(data)
            })
    }, [email])

    return [myCart]

};

export default useMyCartData;