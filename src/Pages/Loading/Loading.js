import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Loading = ({ props }) => {


    return (
<<<<<<< HEAD

        <div>
            <h1>{props?.title || <Skeleton />}</h1>
            {props?.body || <Skeleton count={10} />}
        </div>


=======
        <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
>>>>>>> 5791e7c9f9d2d3b6b57676f7efa623056b848ab3
    );
};

export default Loading;