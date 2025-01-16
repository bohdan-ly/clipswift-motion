'use client';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { useRef } from 'react';

import StaggerText from '@/ui/staggerText';
import { useNav } from '@/context/nav-context';
import { useIntersectionObserver } from '@/hooks/use-intersector';
import { useThrottle } from '@/hooks/useThrottle';

import youtube from '@/public/svg/youtube.svg';
import instagram from '@/public/svg/instagram.svg';
import linkedin from '@/public/svg/linkedin.svg';
import twitter from '@/public/svg/twitter.svg';
import Booker from '../ui/booker';

function Footer() {
  const sections = [
    {
      name: 'Home',
      describe: 'Homepage of my portfolio.',
      href: '#home',
    },
    {
      name: 'Projects',
      describe:
        "Here's a curated section of my projects. Check it out the source code in github also!",
      href: '#projects',
    },
    {
      name: 'Skills',
      describe: 'Check out my skills and tech stack that I love to use.',
      href: '#skills',
    },
    {
      name: 'Resume',
      describe: 'See my work experience and projects curated in one place.',
      href: '#resume',
    },
  ];

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav('Contact');
  }

  const footerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [-100, (footerRef?.current?.clientHeight ?? 900) - 150],
  );
  const throttleY = useThrottle<MotionValue<number>>(translateY, 200);

  return (
    <>
      <div className="relative">
        <motion.div
          style={
            isMobile
              ? {}
              : {
                  translateY: throttleY,
                  left: '50%',
                  translateX: '-50%',
                  scale,
                }
          }
          className="absolute top-0 size-[10vw] z-10 hidden lg:block"
        >
          <div className="relative size-full">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-3xl size-full rounded-full bg-blue-500" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full size-[90%] bg-blue-500" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-60 size-1/3 blur-xl rounded-full bg-blue-300" />
          </div>
        </motion.div>
      </div>
      <footer
        ref={footerRef}
        id="contact"
        className="container px-6 md:px-12 py-10 min-h-[95vh] border-t-[0.5px] border-white/20 flex items-start relative overflow-hidden flex-col md:flex-row gap-6 mb-5 md:mb-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_95%_15%,#6533ee75,transparent)] -z-10"></div>
        <div className="flex flex-col flex-1 gap-6 md:gap-10 justify-start">
          <StaggerText
            text="See if ClipSwift is the right fit for you"
            className="text-heading font-medium md:w-[20vw] leading-[100%]"
          />
          <p className="text-para bg-gradient-to-r from-csmint to-cslime bg-clip-text text-transparent -mt-4">
            (it totally is)
          </p>
          <div>
            <p className="opacity-60">Email at: </p>
            <Link href="mailto:business@clip-swift.com">
              <p className="text-para-sm opacity-60 cursor-pointer">business@clip-swift.com</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full flex justify-center items-center"
              href="https://www.youtube.com/@clip_swift1"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtube} alt="YouTube" className="w-6" />
            </Link>
            <Link
              className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
              href="https://www.linkedin.com/company/clipswift"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="Linkedin" />
            </Link>
            <Link
              className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
              href="https://x.com/swift_clip37811"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="Twitter" />
            </Link>
            <Link
              className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
              href="https://www.instagram.com/clip.swift"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="Instagram" />
            </Link>
          </div>
          <p className="mt-4">Headquartered in Warsaw, Poland</p>
        </div>
        <div className="flex flex-1 w-full md:w-auto">
          <Booker />
        </div>
        {/* <div className="flex-[2_2_0%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 xl:gap-16 z-20">
          {sections.map((it) => (
            <div
              key={it.name}
              className="group cursor-pointer"
              onClick={() =>
                it.href && document?.querySelector(it.href)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <h3 className="relative w-fit text-para transition-colors group-hover:text-yellow-400 mb-2 after:bg-yellow-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 duration-500">
                {it.name}
              </h3>
              <p className="text-para-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {it.describe}
              </p>
            </div>
          ))}
        </div> */}
        <div ref={ref} />
      </footer>
    </>
  );
}

export default Footer;
