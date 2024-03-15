
const Info = () => {
    return (
        <div class="antialiased">
            <div class="flex flex-col items-center justify-center h-screen">
                <div class="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">

                    <div class="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                        <div class="flex gap-1">
                            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="1" fill="none" viewBox="0 0 24 24" class="fill-gray-300 rotate-[24deg]" height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                ></polygon>
                            </svg>
                        </div>
                    </div>

                    <div class="absolute rounded-full bg-blue-600 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300" />

                    <div class="para uppercase text-center leading-none z-40">
                        <p class="text-black font-semibold mb-1">Name</p>
                        <p class="font-bold text-xl tracking-wider text-gray-500">UName</p>
                    </div>
                    <div class="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">

                    </div>
                    <div class="container z-40 info">
                        <div class="flex-row gap-2">
                            <div class="inline-flex gap-2 items-center justify-center">
                            <div class="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../mail.svg" style={{height: '25px'}}/>
                                </div>
                                <p class="text-white">email@gmail.com</p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 mt-2">
                            <div class="inline-flex gap-2 items-center justify-center">
                                <div class="p-1 bg-white flex items-center justify-center rounded-full">
                                    <img src="../job.svg" style={{height: '25px'}}/>
                                </div>
                                <p class="text-white">Role</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info