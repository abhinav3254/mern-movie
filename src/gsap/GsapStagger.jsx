import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const GsapStagger = () => {

    useGSAP(() => {
        gsap.to('.stagger-box', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            // stagger: 0.5
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        });
    }, []);

    return (
        <div className='flex'>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-200 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-300 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-400 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-500 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-600 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-700 stagger-box'></div>
            <div className='m-4 mt-[500px] h-20 w-10 bg-sky-800 stagger-box'></div>
        </div>
    )
}

export default GsapStagger