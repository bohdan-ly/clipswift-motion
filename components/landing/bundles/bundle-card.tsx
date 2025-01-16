import { cn } from '@/lib/utils';
import { useState } from 'react';
// import Marquee, { Motion } from 'react-marquee-slider';
import RevealBox from '@/components/ui/revealBox';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MarqueeUp } from './marquee-up';
import { CheckIcon } from 'lucide-react';

// import '@devnomic/marquee/dist/index.css';

const features = [
  {
    id: 'team',
    title: 'White-Label Video Team',
  },
  {
    id: 'strategy',
    title: 'Data-Driven Video Strategy',
  },
  {
    id: 'profitMaximize',
    title: 'Profit-Maximizing Program',
  },
  {
    id: 'templates',
    title: 'Templates and Tools for Project Tracking',
  },
  { id: 'sprint', title: '48-Hour Video Sprint' },
];

const bundles = [
  {
    logo: 'star',
    id: 'growth',
    title: (
      <>
        <span className="bg-gradient-to-r from-csmint to-cslime bg-clip-text text-transparent">
          Growth
        </span>{' '}
        Skybreak
      </>
    ),
    description: `Build a strong video foundation with the essential resources you need to grow and impress 
      your clients. This level is crafted to give you a starting point that guarantees success.`,
    features: ['Unlimited videos', 'Partner ecosystem', features[0].title, features[3].title],
  },
  {
    logo: 'lightning',
    id: 'supercharger',
    title: (
      <span className="bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
        Supercharger
      </span>
    ),
    description: `Build a strong video foundation with the essential resources you need to grow and impress 
    your clients. This level is crafted to give you a starting point that guarantees success.`,
    features: [
      'Unlimited videos',
      'Partner ecosystem',
      features[0].title,
      features[1].title,
      features[3].title,
      features[4].title,
    ],
  },
  {
    logo: 'fire',
    id: 'dominator',
    title: (
      <span className="bg-gradient-to-r from-purple-400 to-red-700 bg-clip-text text-transparent">
        Dominator
      </span>
    ),
    description: `Build a strong video foundation with the essential resources you need to grow and impress 
    your clients. This level is crafted to give you a starting point that guarantees success.`,
    features: [
      'Unlimited videos',
      'Partner ecosystem',
      features[0].title,
      features[1].title,
      features[2].title,
      features[3].title,
      features[4].title,
    ],
  },
  {
    logo: 'cloud',
    id: 'custom',
    title: (
      <>
        Dream{' '}
        <span className="bg-gradient-to-r from-csblue to-cyan-400 bg-clip-text text-transparent">
          Team
        </span>
      </>
    ),
    description: `Build a strong video foundation with the essential resources you need to grow and impress 
    your clients. This level is crafted to give you a starting point that guarantees success.`,
    features: ['Partner ecosystem'],
  },
];

export const variants = {
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 320,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
  hide: {
    scale: 0.1,
    y: 200,
    x: 400,
    opacity: 0,
  },
};

const keys = features
  .values()
  .reduce((a, v) => ({ ...a, [v.id]: bundles[0].features.includes(v.title) }), {});

type BundleSetupProps = {
  projectsAmount: number;
} & Record<keyof typeof keys, boolean>;

const getFeatureKey = (title: string): keyof BundleSetupProps | undefined =>
  features.find((f) => f.title === title)?.id as keyof BundleSetupProps;

function BundleCard({ className }: { className?: string }) {
  const [selectedBundle, setSelectedBundle] = useState(bundles[0].id);
  const [bundleSetup, setBundleSetup] = useState<BundleSetupProps>({
    projectsAmount: 50,
    ...keys,
  });

  const curBundle = bundles.find((b) => b.id === selectedBundle);

  const handleBundleSetup = (val: string | boolean, key: keyof BundleSetupProps) => {
    const newSetup: BundleSetupProps = { ...bundleSetup, [`${key}`]: val };
    setBundleSetup(newSetup);
    const featuresCount = Object.values(newSetup).filter((i) => typeof i === 'boolean' && i).length;

    if (key === 'projectsAmount' && +val < 50) {
      setSelectedBundle(bundles[3].id);
    } else if ((curBundle?.features.length || 0) - 2 !== featuresCount) {
      const newBundle = bundles.find(
        (bundle) => (bundle.features.length - 2 || 0) === featuresCount,
      );
      if (newBundle?.id) setSelectedBundle(newBundle?.id);
    }
  };

  const handleSelectBundle = (id: string) => {
    const bundleFeatures = bundles.find((b) => b.id === id)?.features;

    const selectedFeatures = bundleFeatures?.reduce((a: Partial<BundleSetupProps>, v) => {
      const key: keyof BundleSetupProps | undefined = getFeatureKey(v);
      if (!key || key === 'projectsAmount') return a;
      return { ...a, [key]: true };
    }, {});

    setSelectedBundle(id);
    setBundleSetup({
      ...keys,
      projectsAmount: id === 'custom' ? bundleSetup.projectsAmount : 50,
      ...selectedFeatures,
    });
  };

  return (
    <div className="flex gap-8 md:mx-6 flex-wrap md:flex-nowrap">
      <RevealBox>
        <div className="relative group flex-1 size-full transition-all ease-in-out duration-500 md:min-w-[574px]">
          <div
            className={cn(
              'relative rounded-lg text-white shadow-xl overflow-hidden text-lg py-4',
              className,
            )}
          >
            <div className="absolute h-full w-full left-0 top-0 flex items-start gap-2 py-2">
              <MarqueeUp />
              <MarqueeUp dir="down" />
              <MarqueeUp />
            </div>
            <div className="absolute inset-0 z-1 bg-zinc-900/80" />

            <motion.div key={selectedBundle} variants={variants} animate={'show'} initial="hide">
              <Image
                width={230}
                height={230}
                alt={`${curBundle?.title} logo`}
                src={`/img/bundles/${curBundle?.logo}.png`}
                className="absolute -bottom-16 -right-10 rotate-0 transition-all duration-700 group-hover:rotate-6"
              />
            </motion.div>
            <div className="px-12 py-10 flex flex-col relative z-[2]">
              <h2 className="text-3xl font-semibold mt-10">{curBundle?.title}</h2>
              <p className="text-base text-zinc-400 mt-3">{curBundle?.description}</p>

              <p className="text-xl mt-4">Features</p>
              <div className="flex gap-4 w-full flex-wrap mt-2 -ml-1">
                {curBundle?.features.map((b) => (
                  <div
                    key={b}
                    className={cn(
                      'px-4 py-2 text-base border border-dashed border-zinc-400 rounded-full',
                    )}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealBox>
      <div
        className={cn(
          'relative rounded-lg px-5 py-6 text-white shadow-xl w-full max-w-[400px] overflow-hidden',
          className,
        )}
      >
        <div className="absolute inset-0 z-[-2] bg-zinc-900 bg-[radial-gradient(100%_100%_at_20%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
        <div className="flex gap-4 justify-center w-full flex-wrap">
          {bundles.map((b) => (
            <div
              key={b.id}
              className={cn(
                'px-4 py-2 border border-dashed border-zinc-400 rounded-full min-w-[133px] text-center',
                {
                  'button-filled': selectedBundle === b.id,
                },
              )}
              onClick={() => handleSelectBundle(b.id)}
            >
              {b.title}
            </div>
          ))}
        </div>
        <p className="text-xl font-medium text-center mt-16">
          Motion design, video ads,
          <br /> podcasts & more
        </p>

        <p className="text-base text-zinc-400 mt-3 text-center">
          All the things you need under one roof.
        </p>

        <div className="control-panel mt-10">
          <div className="relative w-full">
            <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-white">
              Count of projects
            </label>
            {/* <div
              className="h-2 bg-csmint -mb-4 relative z-10 rounded-lg pointer-events-none"
              style={{ width: `${(bundleSetup.projectsAmount / 10 - 1) * 25}%` }}
            /> */}
            <input
              id="steps-range"
              type="range"
              min="10"
              max="50"
              value={bundleSetup.projectsAmount}
              step="10"
              data-slider-value={`${(bundleSetup.projectsAmount / 10 - 1) * 25}%`}
              onChange={(e) => handleBundleSetup(e.target.value, 'projectsAmount')}
              className="relative w-full h-2 slider bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />

            <span className="text-sm text-gray-500 absolute start-0 -bottom-6">10</span>
            <span className="text-sm text-gray-500 absolute start-[27%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              15
            </span>
            <span className="text-sm text-gray-500 absolute start-[51%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              20
            </span>
            <span className="text-sm text-gray-500 absolute start-[74%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              30
            </span>
            <span className="text-sm text-gray-500 absolute -end-4 -bottom-6">Unlimited</span>
          </div>

          <div className="flex flex-wrap w-full mt-14 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center relative"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const value = bundleSetup[
                    feature.id as keyof BundleSetupProps
                  ] as unknown as boolean;
                  handleBundleSetup(!value, feature.id as keyof BundleSetupProps);
                }}
              >
                <input
                  id={feature.id}
                  type="checkbox"
                  checked={bundleSetup[feature.id as keyof BundleSetupProps] as unknown as boolean}
                  className="checked:bg-purple-600 checked:border-purple-600 peer cursor-pointer transition-all appearance-none pointer-events-none w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-csblue focus:ring-2"
                />
                <CheckIcon className="w-4 h-4 absolute left-0 top-[50%] -translate-y-[50%]" />
                <label htmlFor={feature.id} className="ms-2 text-sm tracking-wide text-white">
                  {feature.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BundleCard;
