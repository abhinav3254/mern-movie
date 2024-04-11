import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

const GsapTimeLine = () => {
    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    });

    useGSAP(() => {
        timeline.to('#pink-box', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        });
        timeline.to('#pink-box', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        });
        timeline.to('#pink-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut'
        });
    }, []);

    return (
        <div>
            <button className='bg-blue-500 text-white py-5 px-10 mt-10 ml-10 rounded-md hover:cursor-pointer' onClick={() => {
                if (timeline.paused()) {
                    timeline.play();
                } else {
                    timeline.pause();
                }
            }}>play/pause</button>
            <div id='pink-box' className='w-20 h-20 bg-pink-500 rounded-lg mt-10 ml-10'></div>
        </div>
    )
}

export default GsapTimeLine