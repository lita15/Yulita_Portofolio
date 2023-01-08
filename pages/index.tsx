import React from "react";

export default function index() {
  return (
    <div>
      <header>
        <nav className="border-b-2 border-babypink bg-babypink fixed top-0 left-0 right-0 shadow-sm ">
          <div className="flex md:justify-end justify-center container mx-auto py-5 font-sans font-semibold">
            {/* <!-- <div className="mr-10 text-magenta underline underline-offset-8">
            <a href="#">Home</a>
          </div> --> */}
            <div className="md:mr-10 mr-5 text-semiblack ">
              <a href="#about">About Me</a>
            </div>
            <div className="md:mr-10 mr-5 text-semiblack">
              <a href="#education">Education</a>
            </div>
            <div className="md:mr-10 mr-5 text-semiblack">
              <a href="#project">Portofolio</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="introduction py-28 bg-babypink">
          <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
            <div className="title-intro mx-auto my-auto text-center md:text-start">
              <h4 className="font-sans text-2xl md:text-3xl font-semibold tracking-widest text-magenta mt-3">
                Hello
              </h4>
              <h4 className="font-serif text-5xl lg:text-7xl font-bold tracking-wide text-magenta mt-3">
                I am Lita
              </h4>
              <h6 className="font-sans text-2xl md:text-3xl font-semibold tracking-widest text-magenta mt-5">
                This is my Portofolio
              </h6>
              <a
                href="#about"
                type="button"
                className="outline-magenta mt-5 font-sans font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-lg"
              >
                Let`s Start
              </a>
            </div>
            <div className="img-intro w-0 h-0 lg:w-auto lg:h-auto">
              <img src="img-intro.svg" className="w-9/12" alt="" />
            </div>
          </div>
        </section>
        <section className="about container mx-auto md:py-20 py-10" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="mx-auto">
              <img
                src="img-about.svg"
                className="w-56 md:w-72 lg:w-80 rounded-full"
                alt=""
              />
            </div>
            <div className="content-about mx-auto my-auto font-sans font-medium text-lg tracking-wide px-5 text-semiblack">
              <h1 className="font-bold text-2xl md:text-3xl text-center md:text-start mt-10 md:mt-0 tracking-wider">
                Noor Yulita Apsari
              </h1>
              <p className="mt-5 text-justify text-base md:text-lg">
                I am a third-year student studying Informatics Engineering at
                Universitas Negeri Semarang. My main interest in programming has
                been in Web Programming, UI Design, and Data Analyst. I am a
                person that is constantly growing and expanding my abilities. I
                have good time management skills and can work well in a group or
                on my own.
              </p>
              <button
                type="button"
                className="mt-8 outline-magenta font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-base"
              >
                Download CV
              </button>
            </div>
          </div>
        </section>
        <section className="riwayat-sekolah bg-babypink py-20" id="education">
          <div className="container mx-auto">
            <h1 className="font-serif text-4xl font-bold tracking-wider text-center text-magenta md:mb-10">
              Education
            </h1>
            <div className="lg:px-30 px-5">
              <div className="lg:flex lg:justify-between md:gap-10 container">
                <div className="">
                  <h1 className="font-bold text-xl text-start mt-10 text-semiblack tracking-wider">
                    SMP Negeri 3 Kudus
                  </h1>
                  <p className="font-light text-start mt-3 text-semiblack">
                    (2014 - 2017)
                  </p>
                </div>
                <div className="">
                  <h1 className="font-bold text-xl text-start mt-10 text-semiblack tracking-wider">
                    SMA Negeri 1 Bae Kudus
                  </h1>
                  <p className="font-light text-start mt-3 text-semiblack">
                    (2017 - 2020)
                  </p>
                </div>
                <div className="">
                  <h1 className="font-bold text-xl text-start mt-10 text-semiblack tracking-wider">
                    Universitas Negeri Semarang
                  </h1>
                  <p className="font-light text-start mt-3 text-semiblack">
                    (2020 - Now)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portofolio bg-white py-20" id="project">
          <div className="container mx-auto">
            <h1 className="font-serif text-4xl font-bold tracking-wider text-center text-magenta md:mb-0 mb-5">
              Portofolio
            </h1>
            <div className="lg:px-30 px-5">
              <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-10 container">
                {/* <!-- 1 --> */}
                <div className="grid grid-cols-1 rounded-3xl shadow-2xl lg:mt-20 md:mt-15 mt-10 outline outline-offset-1 outline-magenta">
                  <div className="mx-auto my-auto font-sans font-medium text-semiblack text-lg tracking-wide">
                    <div className="object-cover w-fit h-30 px-8 py-6 ">
                      <img src="porto1.png" alt="" className="rounded-3xl" />
                    </div>
                    <div className="bg-babypink py-8 rounded-b-3xl">
                      <h2 className="font-bold text-2xl tracking-widest text-center">
                        Conference Paper
                      </h2>
                      <p className="mt-5 text-justify px-10 text-base lg:text-lg">
                        Conference paper is a website that is used to organize
                        seminar paper activities. In designing the display using
                        tools Figma. This website is built using Next JS,
                        Bootstrap CSS, Express JS, Node JS, and Mongo DB as the
                        database
                      </p>
                      <div className="text-center">
                        <a
                          href="https://conference-paper.vercel.app/"
                          type="button"
                          className="mt-5 outline-magenta font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-base"
                        >
                          View Portofolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 2 --> */}

                <div className="grid grid-cols-1 rounded-3xl shadow-2xl lg:mt-20 md:mt-15 mt-10 outline outline-offset-1 outline-magenta">
                  <div className="mx-auto my-auto font-sans font-medium text-semiblack text-lg tracking-wide">
                    <div className="object-cover h-30 w-full px-10 py-8">
                      <img src="porto3.png" alt="" className="rounded-3xl" />
                    </div>
                    <div className="bg-babypink py-8 rounded-b-3xl">
                      <h2 className="font-bold text-2xl tracking-widest text-center">
                        SIAAP
                      </h2>
                      <p className="mt-5 text-justify px-10 text-base lg:text-lg">
                        SIAAP (Sistem Informasi Akademik dan Pembayaran) is a
                        website for Junior High Schools that focuses on academic
                        information systems and payment management. Students,
                        teachers, and administrators all have roles on the
                        website. The website o
                      </p>
                      <div className="text-center">
                        <a
                          href="https://siaap-school-project-lita15.vercel.app/"
                          type="button"
                          className="mt-5 outline-magenta font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-base"
                        >
                          View Portofolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 3 --> */}
                <div className="grid grid-cols-1 rounded-3xl shadow-2xl lg:mt-20 md:mt-15 mt-10 outline outline-offset-1 outline-magenta">
                  <div className="mx-auto my-auto font-sans font-medium text-semiblack text-lg tracking-wide">
                    <div className="object-cover w-fit h-30 px-8 py-6 ">
                      <img src="porto1.png" alt="" className="rounded-3xl" />
                    </div>
                    <div className="bg-babypink py-8 rounded-b-3xl">
                      <h2 className="font-bold text-2xl tracking-widest text-center">
                        DS Sukses Akademik
                      </h2>
                      <p className="mt-5 text-justify px-10 text-base lg:text-lg">
                        DS Sukses Akasemik is a program presented to assist high
                        school students in preparing for further studies. DS
                        Sukses Akademik has an active website with several
                        features such as an academic and officer e-sisfo system
                        that displays user information in it. As well as the
                        e-CBT system, which is an online exam system that will
                        display student scores at the end.
                      </p>
                      <div className="text-center">
                        <a
                          href="http://dipo-sri.my.id/"
                          type="button"
                          className="mt-5 outline-magenta font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-base"
                        >
                          View Portofolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 4 --> */}
                <div className="grid grid-cols-1 rounded-3xl shadow-2xl lg:mt-20 md:mt-15 mt-10 outline outline-offset-1 outline-magenta">
                  <div className="mx-auto my-auto font-sans font-medium text-semiblack text-lg tracking-wide">
                    <div className="object-cover h-30 w-full px-10 py-8">
                      <img src="porto4.png" alt="" className="rounded-3xl" />
                    </div>
                    <div className="bg-babypink py-8 rounded-b-3xl">
                      <h2 className="font-bold text-2xl tracking-widest text-center">
                        RoBRT (Resourceful Online BRT)
                      </h2>
                      <p className="mt-5 text-justify px-10 text-base lg:text-lg">
                        RoBRT is a mobile application that helps the user in
                        ordering and paying for BRT and Buses online, as well as
                        providing real-time maps to user points, directions to
                        the nearest bus stops and travel estimates, integration
                        of BRT and Buses in Indonesia, and can find out the
                        contents and crowd of passengers and buses. I used the
                        Figma application to make it.
                      </p>
                      <div className="text-center">
                        <a
                          href="https://www.figma.com/proto/SVyeT8gifVop5PzrenIzXM/RoBRT?node-id=452%3A2962&scaling=scale-down&starting-point-node-id=332%3A158"
                          type="button"
                          className="mt-5 outline-magenta font-semibold text-white bg-magenta px-5 py-1.5 shadow-lg rounded-r-lg rounded-l-lg text-base"
                        >
                          View Portofolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- <section className="contact container mx-auto">
        <h3>Form</h3>
        <div className="img-contact">
          <img src="" alt="" />
        </div>
        <form action="">
          <div className="">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="">
            <label>Subject</label>
            <input type="text" />
          </div>
          <div className="">
            <label>Message</label>
            <input type="text" />
          </div>
          <button type="button">Submit</button>
        </form>
      </section> --> */}
      </main>
      <footer>
        <section className="footer py-8 bg-babypink">
          <div className="container mx-auto text-center">
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/noor-yulita-apsari/">
                <img src="linkedin.svg" alt="" className="w-8" />
              </a>
              <a href="https://github.com/lita15">
                <img src="github.svg" alt="" className="w-8" />
              </a>
              <a href="#">
                <img src="gmail.svg" alt="" className="w-8" />
              </a>
              <a href="#">
                <img src="whatsapp.svg" alt="" className="w-8" />
              </a>
              <a href="#">
                <img src="twitter.svg" alt="" className="w-8" />
              </a>
            </div>
            <div className="made-footer mt-3 text-magenta font-semibold">
              Made by Noor Yulita Apsari - 2023
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
