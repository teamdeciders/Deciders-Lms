import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCourseData from '../../Hooks/useCourseData';

const Overview = () => {
    const { id } = useParams()
    const [course] = useCourseData(id)

    const { overView } = course
    useEffect(() => {
        let box = document.getElementById("overview")
        box.innerHTML = overView
    }, [overView])


    return (
        <div className='w-full p-2 min-h-max '>
            <div id='overview'>

            </div>

        </div>
    );
};

export default Overview;