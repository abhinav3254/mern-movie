import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const GsapFrom = () => {

    useGSAP(() => {
        gsap.from('#green-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'power1.inOut'
        })
    }, []);

    return (
        <div>
            <div id="green-box" className='h-20 w-20 bg-green-500 mt-20 ml-10 rounded-lg'></div>
        </div>
    )
}

export default GsapFrom