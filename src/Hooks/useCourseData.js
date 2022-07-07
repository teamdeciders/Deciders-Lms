import React, { useEffect } from 'react';
import { useState } from 'react';

const useCourseData = (id) => {

    const [course, setCourse] = useState({})


    useEffect(() => {
        const url = `http://localhost:5000/course/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [id, course])

    return [course]

};

export default useCourseData;