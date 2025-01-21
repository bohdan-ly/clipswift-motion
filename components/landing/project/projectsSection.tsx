'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import { projects } from '@/config/project';
import { Button } from '@/ui/button';
import StaggerText from '@/ui/staggerText';
import RevealBox from '@/ui/revealBox';
import ProjectCard from './projectCard';
import { useIntersectionObserver } from '@/hooks/use-intersector';
import { useNav } from '@/context/nav-context';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-10, 1000]);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const horizontalScroll = useScroll({
    target: targetRef,
  });
  const x = useTransform(horizontalScroll.scrollYProgress, [0, 1], ['1%', `-65%`]);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav('Showcases');
  }

  return (
    <div className="border-t-[0.5px] border-white/20 relative z-10">
      <div className="overflow-hidden whitespace-nowrap px-2 my-4 select-none">
        <motion.div className="gap-12 hidden md:flex" style={!isMobile ? { translateX } : {}}>
          {['binance', 'u1core', 'lunar', 'dizarm', 'youtube', 'mindai', 'inbuco', 'coinbound'].map(
            (it, idx) => (
              <span aria-disabled="true" className="text-para-sm opacity-40 uppercase" key={idx}>
                <Image
                  width={100}
                  height={26}
                  alt={`${it} logo`}
                  src={`/svg/clients/${it}.svg`}
                  className="h-[26px] w-auto"
                />
              </span>
            ),
          )}
        </motion.div>
        <Marquee gradient gradientColor="#121212" gradientWidth={100} className="">
          {['binance', 'u1core', 'lunar', 'dizarm', 'youtube', 'mindai', 'inbuco', 'coinbound'].map(
            (it, idx) => (
              <div aria-disabled="true" className="opacity-40 px-8" key={idx}>
                <Image
                  width={100}
                  height={26}
                  alt={`${it} logo`}
                  src={`/svg/clients/${it}.svg`}
                  className="h-[26px] w-auto"
                />
              </div>
            ),
          )}
        </Marquee>
      </div>
      <div ref={ref} className="bg-white">
        <div
          id="showcases"
          className={'px-5 md:px-0 relative md:h-[calc(40vh*12)] bg-background rounded-b-3xl'}
          ref={targetRef}
        >
          <div className="md:sticky top-0 flex md:h-screen items-center overflow-hidden">
            <div className="absolute bottom-0 -left-32 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_-40%,#0140e0_0%,transparent)] to-15%" />
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px]"></div> */}
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_90%_65%,#0140E0,transparent)]"></div> */}
            <motion.div
              style={isMobile ? {} : { x }}
              className="flex flex-col md:flex-row gap-6 md:gap-[3vw] z-10"
            >
              <div className="pr-12 md:pr-32 flex flex-col">
                <StaggerText
                  className="text-heading font-medium mb-4 md:mb-8 mt-6 md:mt-0"
                  text="Our Cases"
                />
                <RevealBox>
                  <p className="text-para-sm opacity-80">See how top brands use ClipSwift</p>
                </RevealBox>
                <Button size="lg" variant="cfa" asChild>
                  <Link
                    className="mt-8 mb-10 md:mb-0 md:mt-auto w-fit"
                    href={'https://www.youtube.com/@clip_swift1'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore all our work
                  </Link>
                </Button>
              </div>
              {projects.map((project) => (
                <div key={project.id} className={'md:h-[70vh] md:w-[38vw]'}>
                  <ProjectCard project={project} key={project.id} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
