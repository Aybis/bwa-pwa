import React from 'react';

import imageOne from '../images/content/logo-ikea.svg';
import imageTwo from '../images/content/logo-hermanmiller.svg';
import imageThree from '../images/content/logo-adobe.svg';
import imageFour from '../images/content/logo-miele.svg';

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={imageOne} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={imageTwo} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={imageThree} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={imageFour} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
