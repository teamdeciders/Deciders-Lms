import React from 'react';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const OffersAndAccouncment = () => {
    const addOffers = (e) => {
        e.preventDefault()
        const offerTitle = e.target.title.value
        const offerDetails = e.target.details.value
        const offerData = {
            offerTitle, offerDetails
        }
        fetch('http://localhost:5000/addoffers', {
            method: 'POST',
            body: JSON.stringify(offerData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Swal.fire(
                'Offer Published!',
                'A Good Deal For All',
                'success'
            ));
        e.target.reset()
    }
    const addAccouncment = (e) => {
        e.preventDefault()
        const Announcmenttitle = e.target.Announcmenttitle.value
        const Announcmentdetails = e.target.details.value
        const AnnouncmentData = {
            Announcmenttitle, Announcmentdetails
        }
        fetch('http://localhost:5000/addannouncment', {
            method: 'POST',
            body: JSON.stringify(AnnouncmentData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Swal.fire(
                'Announcmen Published!',
                'A Good Deal For All',
                'success'
            ));
        e.target.reset()
    }
    return (
        <div>
            <Helmet>
                <title>Add Offers - Deciders LMS</title>
            </Helmet>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Offers And Accouncment</h1>
            </div>
            <form onSubmit={addOffers}  >
                <div>
                    <h1 className='text-xl font-bold text-orange-500 mb-4'> Add A Offer</h1>
                    <div>
                        <input name='title' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Offer Title' required />
                        <textarea name="details" className='w-full  pl-3 rounded-md in-bord mb-3 bg-blue-50 h-[250px]' placeholder='Offer Details'></textarea>
                        <button type='submit' className='m-2  px-4 py-2 bg-blue-700 text-white font-bold rounded-md'>Publish</button>
                    </div>


                </div>
            </form>
            <form onSubmit={addAccouncment} >
                <div className='mt-6'>
                    <h1 className='text-xl font-bold text-red-500 mb-4'> Add A Accouncment</h1>
                    <div>
                        <input name='Announcmenttitle' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Offer Title' required />
                        <textarea placeholder='Offer Details' name="details" className='w-full  pl-3 rounded-md in-bord mb-3 bg-blue-50 h-[250px]'></textarea>
                        <button type='submit' className='m-2 px-4 py-2 bg-blue-700 text-white font-bold rounded-md'>Publish</button>
                    </div>


                </div>
            </form>

        </div>
    );
};

export default OffersAndAccouncment;