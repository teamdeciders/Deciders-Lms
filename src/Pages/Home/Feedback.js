import React from 'react';
import { FaStar } from "react-icons/fa";
const Feedback = () => {
    return (
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 mt-24'>
            <div className='lg:flex lg:justify-between md:gap-6'>

                <div className='lg:w-[450px] md:w-[400px] bg-[#B3EAFF] rounded-md lg:p-6 md:p-4 p-3'>
                    <div className='flex justify-between mt-10 ml-6'>

                        <div className='flex'>
                            <div>
                                <img className='w-10 h-10 rounded-full' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAxQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIGAwQFB//EADoQAAEDAwMCAwYDBAsAAAAAAAEAAgMEBRESITEGQRNRYRQiI3GBwWKRsRUzoeEHJDI1QlJyc6Li8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABBAID/8QAHREBAQEAAwADAQAAAAAAAAAAAAERAgMhEjFBIv/aAAwDAQACEQMRAD8A9oQhCikhCEAkmkgChCEDTCQTQCCha9ZW0lDGJKypigYeDI8Nz8vND7Z0iuBL1pYIzpNe0n8LSfsupQ3OhuMPi0NVDUM7mN4OPmOyksq5W0kUalEuVQ0lAvS1BBNCjlCBpJoUVEpFSKiUECEJkIQbqEIVQIQhAkIQgSEJoAJpBSCDl9S3ZljslVcXsD/BA0tJxlxIAH5leNY6h6olkr5XvlG4aXHSwejQvTf6TKd1X0z7Mw/vamNpOPLJ+yxWmiZT0UFLEAGRxgDAWbu5WfTT0cZfa8gqrF1DCc1lM5zAd3NHZaza642yVlTQSTwzRnJc3Y+vzHova6qJzGkdj5qo3+NoYDpHywvGdtl9e96tnixdC9bQ9T0BDx4dbA0eMzgH1HorKanJ5/ivE+i2C2dYVLoRpilgcSB8wvQxdmZwHbrZxuxi5ccq0+Pk8qbZFwaauD8e8ujDNq7rpzjpByllazHZWYHZEZAmohSRSKipFRQJCaSDdSTSVQIQhAJJoQJCZSQAUgkEwgrvVUrJzS0WoiTx2k7dsH+a4k3UVPbqhwnpqowMGDNHGXD8huu/1FGW1VLOQPD1NYR65wP1K4t5sUVyYNUk0YI04ieWjnPZY+2/163dUnw8Z4LnQ3OAz0szzH+Nhb+oVC6m6htet8UdR4kjdtLGElW2vt37O6ZrKaCQ+IInEP7j5Kox9MNq7dBNTTSRODPiO1A6jnOeNyvL+d2vXOWeONFUxsrKeojkwJY3NBO2TtstptdM2QEuPKwSUwZcKWCJoeGue5xI3AAG/wCeFKVmly1dd8Y+yZVstNYXtGSVaKOXVhUW0HACt9vdsF6x5LBC7IW00rRp3e6ttiqM4UlAcKXZAFIppFAkIQg3EIQqgTSTQJCEIBCEIAJhATQcjqlp/Yk0jWhzoXMkGfwvBP8ADK8/vHV0wkggp4nmAtMkrxtsDgjPYcZ+a9SqoY6mmlgm/dyMLXfIheJUldL0/fXUtyc18UeturGRKx+Nx6HAK8O7ht1o6OeeO7U9SzxUtVBVWicO0HSQ8Bp+pKotl6ouFulmY+na+N7wHRRu1aBwrrduqWQxeyxNuLonAaHNw9p25aTuqBcb02njm9jaRPK7Y5Bdnvn13Xlx475jTz5Z7qx2N4uF0uEjWkshZpDiOSXf9UV8OHbBdPoqhbSdMMdIc1M73STHOcHOAPy/VY7i0ZK0cZkyMfK23ahaxwrZb+yrNsjIwrVRNwG4VcV2KfjC3o1pU7dlvRjC6iMoCaQTQCEIKBZQooQbyEIVQIQhAIQhAIQpIAJpJE7IFIwSRuY7hwLT9V53cOnae829kE50VdMDGJWjcObt9V6K053CqdbDUMvU1dbm+0UUoxUhhHuSDbOO+2OPJePdLmx7dNm5XmVd071JQRPZDJBNE3hweQWj5FcGHp2ek/rEzfFmbuABsD917bJHBXt0g5H6rUkoaOhqG1NWwGGLHhsxu93njyH6rxnLlbjR8eMm1wLbRz2+zRQVJzPuZPQk8fRaNXBM0tdLGQx2wd2VmubmyQyzQ+8HN1M9V1qSjhqqBrJIgdW5B9AtUjJqnW5gHKstE0bKM3TgY8PopMZ30EKFO6SB+mZhYQcJia7lO3ZbbAtClma4creY4FWIyhCAUIBIppFBFCaEG6hCFUCEIQCEJoBIuwEzsFEd0ES4kHKk3gJ42RhFYLjHLNRSRQP0SOGA7yUaGgjpKcMZyd3EHkraQmJqvXO3mnucdRSH3JB8WFo3LuxHbdYI7TPWy+PXjTg+7HnhWTT8Yux25UXt+Ft5rn4SXXd7OVmVoyWyB8LY9Aw3cJ0kXh1TIxwxpJ+ZW2w527rHCMVcpPOAQunIMbah0jeA3YEdnLnVkQ0a5QC9oIPqulb92PHlIcrm3GUSvLQcMBy4+g/mQg4Ht3gy7jAJxgcArrUlc2QDDlX7nA4s4x4zNbPQrl2m6HUGuOCDgrlXoscoPdZg7K4dDVawN11Yn5AVRs5QVEFSCBIUkkG2hCSqGmkgIGmkmgTjhJpTcARusefPkKjL3TUWcb8qSAUJDpYSprFP/YQZBvwo493CI9R0luNOnfzQUGtL8Nwc36ocQXh7TvhZX4wQQtGSSJkjmB+MHcHsUVsUB+JOCOTqVdkm8VlDTR7vdGHSfJp+7sfkuhX3entNMamY5zsGjly4lmqBS00tZUNL3nEcbByT2aPqSorP1HGyGGlazcw6WOx21A4/ReeVT/Aus2nYeIeF6LfInxWmH2ggzzz+K/HoNgvM7mc3Cf8A3Cuaq6WWq1Mbv2VopZMtCodil9xquNDJloRHYY5ZAVrRuyszSqjJlNY8oQbyEIVQISQgkmooQNxA5UHty3IUnfwQPdCpGtK8xuY5rsBxDcHjJ4W0HEgLRmLDUxtc52SdeCecLcYQRsi1kysFUTjA7rONlgc0veXFEbDNmADjCxrKBhuPRYJHBmSeyEYpHYdp9Fy7jDokE42DtnfNdNrcufNIMA8DyCp3VF59pkNNSuLYmHcg8lRWt1ZJTTW0MEgdMJWmMD/Nn/1dHpen9sc2qkYDHD7sAJ2J7u+yp1ypnS08UpcWuhlDgR6gtJ+gdn6L0ewsFLa4wIywNZtqxnhI6/HK6vn1VUcGc+EzLseZ3x+S81ujXMuNQHDGXkj1Cu1WX1lXJJu4veT6lV3q+kNHPSxvHxHMc5xH+r7Lmidids1XOgd7oVFsknCutufloRHciOyzgrVhOy2G8KoyISCEHQQhCqBBQhAIQhA/8KHcFJCo5NT/AHtbj+KQfTQV1GbHbzQhSLWY8LF2QhVEiT7QBnbQVgdu9gO+6EIOd1XNJDbXeE8tyMHColM0OflwyhC5rqfTF1C4tt8jWnAJaP8AkFf3Ei0SEHGIyhCpXPt8UcdG+VjQHjGHdwqh/SP7txoo27MFKCB6knKEKU/XFtJIxjzV1tZOgIQoO/BwFtN4QhVEihCEH//Z"
                                    alt='' />
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-xl font-bold text-black'>কামরুল হক</h1>
                                <p>গ্রাফিক ডিজাইনার</p>
                            </div>
                        </div>

                        <div className='flex gap-2 text-[#FBAE5C]'>
                            <h1> <FaStar /></h1>
                            <h1> <FaStar /></h1>
                            <h1> <FaStar /></h1>
                            <h1> <FaStar /></h1>
                            <h1> <FaStar /></h1>
                        </div>

                    </div>
                    <p className='ml-6 mt-4 mb-3'>মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে
                        পুনরায় সংজ্ঞায়িত করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান
                        পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।</p>
                </div>

                <div className='lg:w-2/4 md:w-2/4 w-full mt-2'>
                    <h1 className='lg:text-3xl md:text-2xl text-2xl'>আমাদের স্টুডেন্ট ফিডব্যাক</h1>
                    <p className='mt-6'>মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে
                        পুনরায় সংজ্ঞায়িত করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান
                        পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।</p>
                </div>

            </div>

        </div>
    );
};

export default Feedback;