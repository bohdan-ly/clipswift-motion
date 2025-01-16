import { cn } from '@/lib/utils';
import Image from 'next/image';

export const MarqueeUp = ({ dir = 'up' }) => {
  return (
    <div className="relative flex flex-col overflow-y-hidden w-1/3 h-full">
      <div
        className={cn('gap-[1rem] flex flex-col w-full', {
          'animate-marquee-up': dir === 'up',
          'animate-marquee-up2 mb-4': dir === 'down',
        })}
      >
        {['1v', '2v', '3v', '4v', '5v'].map((i) => (
          <div key={i} className="w-full h-auto relative">
            <Image
              width={400}
              height={200}
              alt={`${i} logo`}
              src="/img/tail-track.png"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className={cn('gap-[1rem] flex flex-col w-full', {
          'animate-marquee-up mt-4': dir === 'up',
          'animate-marquee-up2': dir === 'down',
        })}
      >
        {['1v', '2v', '3v', '4v', '5v'].map((i) => (
          <div key={i} className="w-full h-auto relative">
            <Image
              width={400}
              height={200}
              alt={`${i} logo`}
              src="/img/tail-track.png"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
