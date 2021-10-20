import React from 'react';
import image from '../../images/footer/footer.jpg'

const Footer = () => {
    return (
      
    
        <div style={{backgroundColor:'#059669'}} class="bg-linear-pink-invert py-12 px-4">
            <div tabindex="0" aria-label="footer" class="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <div tabindex="0" aria-label="prodify logo" role="img">
                        <div>
                           
                        </div>
                  
                 
                </div>
                <div class="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 tabindex="0" class="focus:outline-none text-2xl font-black">Build your body with Yoga</h1>
                    <div class="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                        <h2  class=" md:mr-6 pb-4 md:py-0 cursor-pointer"><a  class="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">Download Now</a> </h2>
                        <h2  class="cursor-pointer"><a class="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">License</a> </h2>
                    </div>
                    <div class="my-6 text-base text-color f-f-l">
                        <ul class="md:flex items-center">
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">About </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">Features </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">Pricing </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">Careers </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">Help </a></li>
                            <li class="cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500">Privacy Policy </a></li>
                        </ul>
                    </div>
                    <div class="text-sm text-color mb-10 f-f-l">
                        <p tabindex="0" class="focus:outline-none">© 2020 Prodify. All rights reserved</p>
                    </div>
                </div>
                    </div>
                </div>
    );
};

export default Footer;