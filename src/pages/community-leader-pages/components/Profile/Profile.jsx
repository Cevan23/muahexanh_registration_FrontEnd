import axios from "~/api/axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const path = window.location.pathname;
    const paths = path.split('/');
    const gender = {
        true: "Male",
        false: "Female"
    }
    const [Data, setData] = useState({

    });

    useEffect(() => {
        axios.get(`http://localhost:8082/api/students/${paths[1]}`).then(res => {
            console.log(res);
            setData({ ...res.data.data });
            console.log(res.data.message);
        }).catch(res => {
            console.log(res);
            console.log(res.response.data);
        })
    }, []);

    return (
        <div className="antialiased">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="product-card w-[300px] rounded-md ring-1 ring-gray-200 shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-gray-300 hover:bg-black flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                    <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                        <div className="flex gap-1">
                            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" fill="none" viewBox="0 0 24 24" className="fill-amber-300 rotate-[24deg]" height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                ></polygon>
                            </svg>
                        </div>
                    </div>

                    <div className="absolute rounded-full bg-blue-600 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300" />

                    <div className="para uppercase text-center leading-none z-40">
                        <p className="font-bold text-xl tracking-wider text-gray-500 mb-1 group-hover:text-white lexend-normal">{Data.full_name}</p>
                        <p className="text-black font-semibold group-hover:text-gray-300 lexend-normal">{gender[Data.gender]}</p>
                    </div>
                    <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
                        <img src="https://pic.re/image" alt="avatar" className="aspect-square rounded-md object-cover group-hover:coin" />
                    </div>
                    <div className="container z-40 info">
                        <div className="flex-row gap-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../mail.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white lexend-normal">{Data.email}</p>
                            </div>
                        </div>

                        <div className="flex-row gap-2 mt-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../phone.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white lexend-normal">{Data.phone_number}</p>
                            </div>
                        </div>

                        <div className="flex-row gap-2 mt-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../address.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white break-words lexend-normal" style={{ maxWidth: '200px', maxHeight: '50px', overflowY: 'auto' }}>{Data.address}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 mt-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../job.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white lexend-normal">{Data.role}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 mt-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../school.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white lexend-normal">{Data.university_name}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 mt-2">
                            <div className="inline-flex gap-2 items-center justify-center">
                                <div className="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../text.svg" style={{ height: '25px' }} />
                                </div>
                                <p className="text-white break-words lexend-normal" style={{ maxWidth: '200px', maxHeight: '100px', overflowY: 'auto' }}>{Data.personal_description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile