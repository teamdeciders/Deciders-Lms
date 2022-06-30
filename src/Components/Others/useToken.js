
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useToken = (user) => {
    const [token, setToken] = useState('')
    const [user2] = useAuthState(auth)
    useEffect(() => {

        const email = user?.user?.email
        const displayName = user?.user2?.displayName
        console.log(displayName);
        const currentUser = {
            email: email
        }
        console.log(user);

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }


    }, [user])
    return [token]
};

export default useToken;