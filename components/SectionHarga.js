import React from 'react'

export default function SectionHarga() {
  return (
    <div>
        <section id="harga" className="bg-[#FE5E44]/5">
        <div  className="lg:p-2">
          <div className="md:mt-20  w-full ">
            <div className="text-center " >
              <h1 className="text-4xl text-slate-900 font-bold pt-8">
                Main catur sambil bersepeda, beda harga beda fitur
              </h1>
              <p className="text-base tracking-tight text-slate-500 mt-4">
                Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar
                gapapa juga sih, untuk gantinya kami kasih fitur yang spesial
                buat kamu!
              </p>
            </div>

            <div className="lg:flex  gap-x-8 space-y-10 p-10">
              <div className="lg:w-4/12 w-full">
                <div className="bg-white rounded-xl p-8 mt-6 shadow-lg">
                  <h2 className="font-semibold uppercase text-[#FE5E44]">
                    Rindu Ratu
                  </h2>
                  <h1 className="font-bold text-4xl mt-4">Free</h1>
                  <p className="text-base text-slate-500 tracking-tight mt-4">
                    Akses ke semua fitur gratis tapi data lo dijual ke agen
                    khusus US.
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-600 text-sm">
                    <li>✅ Jadwal Tak Terbatas</li>
                    <li>✅ Fitur Notifikasi (Kadang Telat)</li>
                    <li>✅ Mode Gelap</li>
                    <li>✅ Bisa Top Up Pulsa </li>
                    <li>✅ Bisa Beli Listrik</li>
                    <li>✅ Data Lo di jual</li>
                    <div className="items-cener text-center pt-10">
                      <button className="bg-[#FE5E44] w-full h-10 text-white font-semibold tracking-wide hover:bg-[#FE5E44]/80 transtition duration-500 ease-in-out">
                        Download
                      </button>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="lg:w-4/12 w-full">
                <div className="bg-white rounded-xl mx-auto p-10 shadow-lg">
                  <h2 className="font-semibold uppercase text-[#FE5E44]">
                    sultan
                  </h2>
                  <h1 className="font-bold text-4xl mt-4">Rp 100K</h1>
                  <p className="text-base text-slate-500 tracking-tight mt-4">
                    Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang
                    lain.
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-600 text-sm">
                    <li>✅ Semua Fitur Sebelumnya</li>
                    <li>✅ Di ingatkan Makan</li>
                    <li>✅ Mode Gelap</li>
                    <li>✅ Bisa Top Up Pulsa </li>
                    <li>✅ Bisa Beli Listrik</li>
                    <li>✅ Bisa Top Up Pulsa </li>
                    <li>✅ Bisa Beli Listrik</li>
                    <li>✅ Data Lo di jual</li>
                    <div className="items-cener text-center pt-10">
                      <button className="bg-[#FE5E44] w-full h-10 text-white font-semibold tracking-wide hover:bg-[#FE5E44]/80 transtition duration-500 ease-in-out">
                        Download
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="lg:w-4/12 w-full">
                <div className="bg-white rounded-xl p-10  shadow-lg">
                  <h2 className="font-semibold uppercase text-[#FE5E44]">
                    Rafatar
                  </h2>
                  <h1 className="font-bold text-4xl mt-4">Rp 10000K</h1>
                  <p className="text-base text-slate-500 tracking-tight mt-4">
                    Akses ke semua fitur gratis tapi data lo dijual ke agen
                    khusus US.
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-600 text-sm">
                    <li>✅ Semua Fitur Sebelumnya</li>
                    <li>✅ Di ingatkan Makan</li>
                    <li>✅ Mode Gelap</li>
                    <li>✅ Bisa Top Up Pulsa </li>
                    <li>✅ Bisa Beli Listrik</li>
                    <li>✅ Data Lo di jual</li>
                    <li>✅ Mode Gelap</li>
                    <li>✅ Bisa Top Up Pulsa </li>
                    <li>✅ Bisa Beli Listrik</li>
                    <li>✅ Data Lo di jual</li>
                    <div className="items-cener text-center pt-10">
                      <button className="bg-[#FE5E44] w-full h-10 text-white font-semibold tracking-wide hover:bg-[#FE5E44]/80 transtition duration-500 ease-in-out">
                        Download
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4 text-center text-slate-500  leading-relaxed p-8">
              <span className="font-semibold">Harap Diingat:</span> Harga di
              atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah
              secara mendadak seperti pengumuman PPKM darurat.
            </p>
          </div>
        </div>
        </section>
    </div>
  )
}
