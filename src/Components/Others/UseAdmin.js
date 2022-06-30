import { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email
        console.log(email);
        if (email) {
            fetch(`http://localhost:5000/myprofile/${email}`, {

                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let userType = data[0]?.userType
                    console.log(data);
                    console.log(userType);
                    if (userType == 'admin') {
                        setAdmin(true)
                        setAdminLoading(false)
                    }
                    else {
                        console.log('This user not an admin');
                    }


                })
        }
    }, [user])
    return [admin, adminLoading]
};

export default UseAdmin;