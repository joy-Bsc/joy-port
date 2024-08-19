"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                duration:0.4,
                delay:2,
                ease:'easeIn'
            }
        }}>
            <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    duration:0.4,
                    delay:2,
                    ease:'easeInOut'
                }
            }}
             className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
                <Image src='/assets/photo.png'
                property
                quality={100}
                layout='fill'
                alt=""
                className='object-contain'
                />
            </motion.div>
        </motion.div>
    </div>
  )
}
