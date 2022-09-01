import React from 'react'

export default function SectionDownload() {
  return (
    <div>
        <section id="download" className="bg-white">
          <div className="mt-20 p-8 ">
            <div className=" text-center">
              <h1 className="font-bold text-3xl text-slate-900">
                Download Aplikasi Keren Ini Sekarang!
              </h1>
              <p className="mt-4 lg:text-base text-sm text-slate-500  leading-relaxed">
                Please download lah aplikasi ini, udah susah-susah buat, mana
                pas bikin sampe begadang, terus juga ditambah weekend. Jadi,
                please download lah ya.
              </p>
              <div className="flex  space-x-6 justify-center mt-8">
                <img src="playstore.png" alt="playstore" className="w-36" />
                <img src="appstore.png" alt="appstore" className="w-36" />
              </div>
            </div>
            <div className="lg:flex lg:flex-nowrap lg:justify-center lg:items-center mt-10">
              <div className="lg:w-6/12 lg:px-8">
                <img src="logo.png" alt="logo" className="w-24 lg:mt-0 mt-10" />
                <p className="mt-4 text-sm  lg:text-base text-slate-500 leading-relaxed ">
                  Sebuah aplikasi yang membantu kamu untuk membuat jadwal
                  kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan
                  jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami
                  sudah berusaha semaksimal mungkin.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 grid grid-cols-3 p-4">
                <div className="w-full mx-auto">
                  <h3 className="font-bold text-lg">partner</h3>
                  <ul className="space-y-2  text-slate-500 text-sm  lg:text-base mt-8">
                    <li>Beranda</li>
                    <li>Fitur</li>
                    <li>Harga</li>
                    <li>Testimoni</li>
                    <li>Download</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg">partner</h3>
                  <ul className="space-y-2  text-slate-500 text-sm  lg:text-base mt-8">
                    <li>Beranda</li>
                    <li>Fitur</li>
                    <li>Harga</li>
                    <li>Testimoni</li>
                    <li>Download</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Tetap Terhubung</h3>
                  <p className="text-sm  lg:text-base text-slate-500 mt-8">
                    Lihat kami Pansos di social media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
