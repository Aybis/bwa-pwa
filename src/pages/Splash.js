import React from 'react';
import logo from '../images/content/logo.png';

export default function Splash() {
  return (
    <section>
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="w-full md:w-4/12 text-center">
            <img
              src={logo}
              alt="BatikKu | Temukan dan Dapatkan Batik yang Anda Inginkan"
              className="mx-auto mb-8"
            />
            <p className="mb-16 px-4">
              Kami menyediakan seluruh batik yang ada di Indonesia, sehingga
              tidak sekedar beli namun anda akan mengetahui seberapa banyak
              batik asli Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
