import React from 'react';
import { easeOut, motion } from "framer-motion";


const AboutUs = () => {
    return (
        <div className="hero text-white min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
<motion.img
                        src="https://i.ibb.co/v40XrWnJ/about1.jpg"
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-md w-full rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                        style={{ maxWidth: '400px', height: 'auto' }}
                    />
                    <motion.img
                        src="https://i.ibb.co/S7BfHPks/team1.jpg"
                        animate={{ x: [90, 140, 90] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-md w-full rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                        style={{ maxWidth: '400px', height: 'auto' }}
                    />
                    </div>
                <div className='flex-1'>
                    <h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <span className='text-[#00CED1]'
                            

                        >Clients Success is </span> Our Focus</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className=" border border-[#00CED1] text-[#00CED1] text-xl font-medium py-2 px-8 rounded-2xl">Collaborate With Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;