'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText 
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"  
        />
        <div className="absolute bottom-20 right-20">
          <img
            src="people-01a.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute -top-10 left-20">
          <img
            src="people-02a.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-40 left-[45%]">
          <img
            src="people-03a.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-[18%] left-[15%]">
          <img
            src="card1.png"
            alt="people"
            className="w-[400px] h-[350px]"
          />
        </div>
        <div className="absolute -top-[70px] right-[11%]">
          <img
            src="card2.png"
            alt="people"
            className="w-[400px] h-[350px]"
          />
        </div>
      </motion.div>
    </motion.div>
    </section>
);

export default World;
