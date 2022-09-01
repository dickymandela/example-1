import NavItem from "../components/NavItem";

export default function Home() {
  return (
    <>
      <div className=" mx-auto">
        <NavItem />
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

        <section id="profil" className="bg-white">
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:p-20">
            <div className="lg:row-span-3 p-8 ">
              <h1 className="lg:text-3xl text-3xl text-slate-900 font-bold ">
                Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
              </h1>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
              <div className="flex space-x-12 lg:mt-[200px] mt-8 justify-between">
                <div className="flex flex-col">
                  <p className="text-base tracking-tight text-slate-500 ">
                    Total Download
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    1.230.000
                  </h4>
                </div>
                <div className="flex flex-col">
                  <p className="text-base tracking-tight text-slate-500">
                    Total User
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    1.520.000
                  </h4>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4">
                <img src="icon4.png" alt="icon" className="w-10 h-10" />
                <h3 className="font-bold text-slate-900 text-lg">
                  Biasanya Error
                </h3>
              </div>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4">
                <img src="icon4.png" alt="icon" className="w-10 h-10" />
                <h3 className="font-bold text-slate-900 text-lg">
                  Biasanya Error
                </h3>
              </div>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
            </div>
            <div className=" p-8">
              <div className="flex items-center space-x-4">
                <img src="icon4.png" alt="icon" className="w-10 h-10" />
                <h3 className="font-bold text-slate-900 text-lg">
                  Biasanya Error
                </h3>
              </div>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4">
                <img src="icon4.png" alt="icon" className="w-10 h-10" />
                <h3 className="font-bold text-slate-900 text-lg">
                  Biasanya Error
                </h3>
              </div>
              <p className="text-base tracking-tight text-slate-500 mt-4 ">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
            </div>
          </div>
        </section>

        <section id="service">
         <br />
          <div className="mt-10">
          <div className=" lg:flex lg:p-16 p-8">
            <img
              src="section3.png"
              alt=""
              className="w-[568 px] h-[500px] mx-auto "
            />
            <div className="ml-8 3/12">
              <h2 className=" text-4xl text-slate-900 font-bold">
                Memangnya ada fitur apa aja sih di aplikasi yang katanya keren
                ini? Jadi penasaran nich~
              </h2>
              <p className="text-base tracking-tight text-slate-500 mt-4">
                Aplikasi sekeren ini akan membuat kamu tidak dapat memberi
                alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo
                kuliah tapi jarang masuk, titip absen doang!
              </p>
              <div className="lg:flex">
                <div className="mt-8 ">
                  <img src="video.png" alt="video" className="w-8 h-8" />
                  <h2 className="font-bold text-slate-900 text-base mt-2">
                    Si Rizal Gak Pernah Ngonten
                  </h2>
                  <p className="text-base tracking-tight text-slate-500 ">
                    Emang sih dia gak pernah ngonten, do’ain ya biar mau
                    ngonten.
                  </p>
                </div>
                <div className="mt-8 ">
                  <img src="video.png" alt="video" className="w-8 h-8" />
                  <h2 className="font-bold text-slate-900 text-base mt-2">
                    Si Rizal Gak Pernah Ngonten
                  </h2>
                  <p className="text-base tracking-tight text-slate-500 ">
                    Emang sih dia gak pernah ngonten, do’ain ya biar mau
                    ngonten.
                  </p>
                </div>
              </div>
              <div className="lg:flex">
                <div className="mt-8 ">
                  <img src="video.png" alt="video" className="w-8 h-8" />
                  <h2 className="font-bold text-slate-900 text-base mt-2">
                    Si Rizal Gak Pernah Ngonten
                  </h2>
                  <p className="text-base tracking-tight text-slate-500 ">
                    Emang sih dia gak pernah ngonten, do’ain ya biar mau
                    ngonten.
                  </p>
                </div>
                <div className="mt-8 ">
                  <img src="video.png" alt="video" className="w-8 h-8" />
                  <h2 className="font-bold text-slate-900 text-base mt-2">
                    Si Rizal Gak Pernah Ngonten
                  </h2>
                  <p className="text-base tracking-tight text-slate-500 ">
                    Emang sih dia gak pernah ngonten, do’ain ya biar mau
                    ngonten.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

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

        <section id="testimoni " className="bg-[#FE5E44]/10 ">
          <div className="lg:p-20 ">
            <div className=" p-8 text-center lg:space-x-8 mx-auto">
              <h1 className="font-bold text-4xl ">
                Apa kata umat manusia tentang aplikasi keren ini?
              </h1>
              <p className="text-sm text-slate-500 mt-4">
                Kami tidak memfilter semua review, males soalnya. Jadi semua
                yang ditampilkan di sini semuanya asli tanpa reksadana.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-10 p-8">
              <div className="p-4 lg:p-0 lg:p-0 ">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “Terima kasih untuk aplikasinya, karena aplikasi ini
                    murid-murid saya jadi rajin kuliah walaupun nggak ada adab.
                    Adab tidak perlu kuliah nomor satu! 👈😎👉”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <img src="porfil.png" alt="profil" className="w-8 h-8 " />
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-0 ">
                <div className="  bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal
                    cita-citaku ingin bolos kuliah dan menitipkan absen saja.
                    Huft.”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <div className="">
                      <img src="fp2.png" alt="profil" className="w-8 h-8 " />
                    </div>
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-0">
                <div className="  bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “Hanya di rezim ini ada aplikasi yang membuat anak saya
                    menjadi rajin kuliah walaupun tidak menjadi pandai. Terima
                    kasih Papa Zola!”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <div className="">
                      <img src="fp3.png" alt="profil" className="w-8 h-8 " />
                    </div>
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-0">
                <div className="  bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp
                    miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <div className="">
                      <img src="fp4.png" alt="profil" className="w-8 h-8 " />
                    </div>
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-0">
                <div className="  bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi
                    barangnya belom dicoba... saya kasih bintang satu dulu,,,,
                    nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo
                    udah peterpen jadi bintang di surga... xixixixi...
                    😀😀😀😀😀”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <div className="">
                      <img src="fp5.png" alt="profil" className="w-8 h-8 " />
                    </div>
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-0">
                <div className="  bg-white rounded-lg shadow-md p-4">
                  <img src="star.png" alt="start1" />
                  <p className="text-sm text-slate-600  leading-relaxed mt-4">
                    “aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ...
                    Jual Netflix Spotify disney plus Youtube prem Iqiyi
                    Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold
                    Aligh motion Vsco Lightroom get contact apple music amazon
                    prime resso iflix Microsoft 365 HBO GO zoom.”
                  </p>
                  <div className=" flex flex-wrap items-center mt-6 ">
                    <div className="">
                      <img src="fp6.png" alt="profil" className="w-8 h-8 " />
                    </div>
                    <div className="block">
                      <h3 className="text-sm font-semibold ml-4 ">
                        Sanusi Sulivan
                      </h3>
                      <p className="text-sm text-slate-500 ml-4">
                        Dosen di Boating School Ny. Puff{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
    </>
  );
}
