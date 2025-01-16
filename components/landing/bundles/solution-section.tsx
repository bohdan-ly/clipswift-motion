'use client';

import Link from 'next/link';

import { useNav } from '@/context/nav-context';
import { useIntersectionObserver } from '@/hooks/use-intersector';
import { Button } from 'components/ui/button';
import StaggerText from 'components/ui/staggerText';
import BundleCard from './bundle-card';

function SolutionSection() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: false,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav('Solutions');
  }

  return (
    <section
      className="relative pt-[10vh] pb-[20vh] md:pt-20 overflow-hidden bg-white container px-6 md:px-12"
      id="resume"
      ref={ref}
    >
      <div className="w-full h-full rounded-t-3xl absolute left-0 top-0 bg-background z-0" />

      <StaggerText
        className="relative text-center text-heading font-medium mb-4 md:mb-8 mt-6 md:mt-0 text-white"
        text="Bundles"
      />
      <div className="md:absolute inset-0 bg-[radial-gradient(circle_300px_at_60%_30%,#465bfa9a,transparent)]" />
      <div className="md:absolute inset-0 bg-[radial-gradient(circle_400px_at_40%_50%,#6533ee75,transparent)]" />
      <BundleCard className="transition-all duration-700 group-hover:-rotate-1 md:rotate-0" />
    </section>
  );
}

export default SolutionSection;

{
  /* <Button
          variant="cfa"
          className="mx-auto"
          asChild
          onClick={() => track({ click: `resume` })}
        >
          <Link target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_RESUME ?? '#'}>
            View My Resume
          </Link>
        </Button> */
}
