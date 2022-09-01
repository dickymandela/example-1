import React from 'react'

export default function SectionHero() {
  return (
    <>
    <section id="Hero" className="bg-[#FE5E44]/10 md:mt-16 lg:mt-4 mt-20">
          <div className="lg:flex md:flex-wrap lg:p-20">
            <div className="lg:w-6/12 p-8">
              <h1 className="lg:text-5xl text-4xl text-slate-900 font-bold  ">
                Sebuah cara mudah mengatur jadwal kuliah kamu
              </h1>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Datang kuliah terlambat karena ketiduran itu tidak masalah;
                datang kuliah karena lupa jadwal itu sangatlah tidak keren.
                Aplikasi ini adalah sahabat kamu sekarang, brodie~
              </p>
              <div className="space-x-4 flex ">
                <a
                  href="#"
                  className="inline-block bg-[#FE5E44] text-white px-7 py-3 mt-5 rounded-lg "
                >
                  View Portfolio
                </a>
              </div>
              <img
                src="hero1.png"
                alt="chat"
                className="lg:-ml-14 md:mx-auto"
              />
            </div>
            <div className="lg:w-6/12 ">
              <img
                src="hero.png"
                alt="hero"
                className=" md:mx-auto md:w-[400px] w-[400px] mx-auto "
              />
            </div>
          </div>
        </section>
    </>
  )
}
