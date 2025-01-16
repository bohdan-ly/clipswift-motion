'use client';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import { useNav } from '@/context/nav-context';
import { useIntersectionObserver } from '@/hooks/use-intersector';
import { useThrottle } from '@/hooks/useThrottle';
import { Particles } from 'components/particles';
import { Button } from '@/components/ui/button';

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, -0.5]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 7750]);
  const throttleY = useThrottle<MotionValue<number>>(translateY, 200);
  const throttleScale = useThrottle<MotionValue<number>>(scale, 200);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    initialIsIntersecting: true,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav('Home');
  }

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const heroItem = {
    hidden: { opacity: 0, translateY: -50 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden" id="home" ref={ref}>
      <div className="relative w-screen">
        <motion.div
          style={isMobile ? {} : { translateY: throttleY }}
          className="absolute inset-0 -z-10 h-full w-full will-change-transform"
        />
        <Particles className="absolute inset-0 -z-10" quantity={70} />
        <motion.div
          style={isMobile ? {} : { scale: throttleScale, translateY: throttleY }}
          className="will-change-transform"
        >
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="h-screen w-full flex justify-center items-center flex-col gap-8"
          >
            <Button variant="pill" size="default" className="">
              <span className="w-3 h-3 relative mr-4">
                <span className="size-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="size-full block rounded-full bg-green-400 animate-ping" />
                </span>
                <span className="size-[70%] rounded-full bg-green-500 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
              </span>
              <p className="text-base font-thin">
                Now Accepting Clients{' '}
                <span className="hidden sm:inline-block ml-2.5 tracking-tight text-zinc-400 [word-spacing: 2rem]">
                  1 Opening per Month in Q1 2025
                </span>
              </p>
            </Button>
            <motion.h1
              variants={heroItem}
              className="text-heading font-semibold text-center leading-[105%]"
            >
              Unlock Explosive Growth
              <br />
              <span className="bg-gradient-to-b from-white to-white text-transparent bg-clip-text">
                with strategic video
              </span>
            </motion.h1>
            <motion.p variants={heroItem} className="opacity-75 text-para text-center">
              that turn viewers into high-value customers
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
