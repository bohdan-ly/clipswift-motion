import Image from 'next/image';
import React from 'react';

export const Card = ({
  image = '',
  name = '',
  description = '',
  children = null,
}: {
  image: string;
  name: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="card-front group max-w-sm overflow-hidden h-[440px] relative flex flex-col my-6 bg-white shadow-sm border border-zinc-400 rounded-xl w-96">
      {/* <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md"> */}
      <Image
        width={400}
        height={500}
        className="absolute top-0 left-0 object-cover h-full z-0"
        src={`/img/${image}`}
        alt="card-image"
      />
      {/* </div> */}
      <div className="relative z-[1] mt-auto bg-gradient-to-b from-transparent to-black p-4">
        <h6 className="mb-2 text-xl font-semibold">{name}</h6>
        <p className="leading-normal font-light">{description}</p>
        {/* <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button>
        </div> */}
      </div>
      {children}
    </div>
  );
};
