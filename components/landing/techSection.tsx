'use client';

import PROCESS from '@/config/process';
import { useNav } from '@/context/nav-context';
import { useIntersectionObserver } from '@/hooks/use-intersector';
import StaggerText from '@/ui/staggerText';
import Marquee from 'react-fast-marquee';
import { Card } from 'components/ui';
import Image from 'next/image';

function Tech() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: false,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav('Our process');
  }
  return (
    <>
      <Marquee className="bg-white">
        <div className="bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          Positioning
        </div>
        <div className="px-6 md:px-12 bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          ⎯
        </div>
        <div className="bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          Strategy
        </div>
        <div className="px-6 md:px-12 bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          ⎯
        </div>
        <div className="bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          Result
        </div>
        <div className="px-6 md:px-12 bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          ⎯
        </div>
        {/* <div className="px-8 bg-gradient-to-b from-black to-zinc-200 bg-clip-text text-transparent font-extrabold tracking-tighter text-9xl py-10">
          Showreel
        </div> */}
      </Marquee>

      <section ref={ref} className="container px-6 pb-24 md:px-12 flex flex-col bg-white">
        {/* <div className="absolute left-0 -top-20 z-[5] w-full h-56 bg-gradient-to-b from-black via-zinc-500 to-transparent" /> */}

        <div
          id="vidalytics_embed_lWxyJvde0Q1x5wHJ"
          style={{ width: '100%', position: 'relative', paddingTop: '60%' }}
        />
        <div className="mb-10 mt-20 relative">
          <StaggerText
            text={`How we’ll help you position and grow`}
            className="text-center text-heading text-zinc-900 font-medium relative z-[1]"
          />
          <h2 className="absolute z-0 left-[50%] -translate-x-[50%] -top-12 md:-top-28 text-black/5 text-8xl md:text-[12rem] font-semibold leading-[105%]">
            Process
          </h2>
        </div>
        <div id="our_process" className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          <Card {...PROCESS[0]}>
            <Image
              width={30}
              height={30}
              alt="Silver logo"
              src="/img/cone.png"
              className="absolute animate-[spin_5s_ease-in-out_infinite] top-[42.5%] left-[48.5%]"
            />
          </Card>
          <Card {...PROCESS[1]}>
            <div className="absolute top-20 left-0 h-auto w-full pb-10">
              <Marquee direction="right" className="py-2">
                {[
                  'Motion Design',
                  'Video Editing',
                  'Scripting',
                  'Storyboard',
                  'Graphic Elements',
                ].map((i) => (
                  <div key={i} className="mx-2 px-4 py-2 overflow-hidden bg-white/50 rounded-full">
                    <span className="text-black text-sm">{i}</span>
                  </div>
                ))}
              </Marquee>
              <Marquee direction="right" className="py-2 mt-4">
                {[
                  'Ideation',
                  'Marketing Ads',
                  'Custom Animations',
                  'Unique Style',
                  'Project Management',
                ].map((i) => (
                  <span
                    key={i}
                    className="mx-2 px-4 py-2 overflow-hidden bg-white/50 text-black rounded-full text-sm"
                  >
                    {i}
                  </span>
                ))}
              </Marquee>
              <Marquee direction="right" className="py-2 mt-4">
                {['AI technology', 'Automation', 'Analytics', 'Reporting', 'Improving'].map((i) => (
                  <span
                    key={i}
                    className="mx-2 px-4 py-2 overflow-hidden bg-white/50 text-black rounded-full text-sm"
                  >
                    {i}
                  </span>
                ))}
              </Marquee>
              <Image
                width={120}
                height={120}
                alt="Silver logo"
                src="/img/logo-silver.png"
                className="group-hover:scale-105 transition-all duration-500 border border-zinc-100/5 absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] overflow-hidden rounded-3xl drop-shadow-2xl"
              />
            </div>
          </Card>
          <Card {...PROCESS[2]} />
          {/* {PROCESS.map((p) => (
          <Card key={p.id} {...p} />
        ))} */}
          {/* {TECH.map((it) => (
          <div className="border-b py-4 hover:border-white/25 group transition-all" key={it.id}>
            <div className="h-7 overflow-hidden">
              <p className="opacity-90 mb-2 text-xl select-none -translate-y-14 group-hover:translate-y-0 transition-all duration-500">
                {it.name}
              </p>
              <p className="opacity-50 mb-2 text-xl select-none -translate-y-9 group-hover:translate-y-0 transition-all duration-500">
                {it.name}
              </p>
            </div>
            <p className="text-para group-hover:text-yellow-400 transition-all duration-500">
              {it.techs.map((it) => it).join(', ')}
            </p>
          </div>
        ))} */}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 md:mt-20 w-full">
          {['zapier', 'ga', 'ae', 'figma', 'notion'].map((i) => (
            <div key={i} className="w-auto h-8">
              <Image
                width={130}
                height={80}
                alt={`${i} logo`}
                src={`/svg/tools/${i}.svg`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tech;
