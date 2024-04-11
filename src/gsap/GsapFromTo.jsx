import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const GsapFromTo = () => {
    useGSAP(() => {
        gsap.fromTo('#yello-box', {
            x: 0,
            rotation: 0,
            borderRadius: '0%'
        }, {
            x: 250,
            repeat: -1,
            yoyo: true,
            borderRadius: '100%',
            rotation: 360,
            duration: 2,
            ease: 'bounce.out'
        })
    }, []);

    return (
        <div>
            <div id='yello-box' className='w-20 h-20 bg-yellow-500 mt-10 ml-10 rounded-lg'></div>
        </div>
    )
}

export default GsapFromTo