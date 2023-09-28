import React from 'react'
import styles from '../Slide/page.module.css'
import { motion } from 'framer-motion'
import Image from "next/image";


const Slider = ({images}) => {
  return (
    <motion.div className={styles.sliderContainer}>
        <motion.div className={styles.slider} drag='x' 
        dragConstraints={{right: 0, left:-3700}} >
        {images.map(image => (
            <motion.div key={image} className={styles.item}>
                <Image src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider