import { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email
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
                    let role = data[0]?.role
                    if (role === 'admin') {
                        setAdmin(true)
                        setAdminLoading(false)
                    }

                })
        }
    }, [user])
    return [admin, adminLoading]
};

export default UseAdmin;