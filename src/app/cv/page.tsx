import Image from "next/image";

const CuriculumVitae = () => {
  const skills = [
    "Javascript", "Typescript", "Node.js", "React.js", "Vue.js", "Next.js", "Nuxt.js", 
    "React Native", "Ionic", "HTML", "CSS", "SCSS", "SASS", "BEM", "Git", "Bootstrap", 
    "TailwindCSS", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Electron", "WebSocket",
    "Responsive Web Design", "Progressive Web Apps (PWA)", "Cross-Browser Compatibility",
    "Version Control/Git", "Agile and Scrum Methodologies"
  ];

  return (
    <div className="bg-white min-h-screen p-8 text-[#333333]">
      <section className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-row gap-4">
          <div className="w-20 sm:w-24 md:w-28 lg:w-32">
            <Image
              src="https://avatars.githubusercontent.com/u/4404526?v=4"
              alt="Fathan Rohman"
              width={200}
              height={200}
              className="w-full h-auto rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <div className="font-bold text-xl lg:text-3xl text-[#333333]">
              Fathan Rohman
            </div>

            <div className="text-[#333333]">
              Frontend Web Developer
            </div>
          </div>
        </div>

        <div className="text-left lg:text-right mt-8">
          <div className="flex flex-col gap-1">
            <a href="tel:+6281282951768">+62 812 8295 1768</a>
            <a href="mailto:karir.fathan@gmail.com">karir.fathan@gmail.com</a>
            <div>Sukabumi, West Java, Indonesia</div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Career Objective
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <p className="">
            As an ambitious and skilled frontend developer, my objective is to leverage my expertise in crafting seamless user experiences and cutting-edge web applications to contribute significantly to a dynamic and innovative team. With a solid foundation in HTML, CSS, JavaScript or Typescript, coupled with a passion for staying abreast of emerging technologies, I aim to drive digital innovation and elevate user engagement through intuitive and visually stunning interfaces.
          </p>
          <p>
            By combining my technical proficiency with a keen eye for design and usability, I aspire to collaborate with like-minded professionals to deliver impactful solutions that exceed client expectations and propel the organization towards its strategic goals. Eager to embark on new challenges and embrace continuous learning, I am committed to delivering excellence in every project while fostering a culture of creativity, collaboration, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Experiences
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Software Developer, Frontend
            </div>
            <div className="text-base">
              PT. Am Badar & Am Badar IP Law Firm - Jakarta - <span className="text-orange-400 italic">Feb 2025 – Present</span> (Hybrid)
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop AFMS 2.0 (Application Filing Management System) application Web Dashboard with stack like a Vue 3 composition API, Vite, WebSocket, Pinia state management, TailwindCSS.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Inovasi Niaga Integrasi (Waizly) - Jakarta - <span className="text-orange-400 italic">Jan 2023 – Jan 2025</span> (Freelance/Remote)
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop CRM (Customer Relationship Management) application Web Dashboard & Mobile version with stack like a Vue 3 composition API, Vite, WebSocket, Pinia state management, TailwindCSS, Ionic Framework, Capacitor.
              </li>
              <li>
                Create architecture frontend from scratch and slicing all UI design from figma to page component.
              </li>
              <li>
                Develop feature master data, chart & table reporting, Realtime Chatting User on CMS & Mobile App integration with WhatsApp Meta collaborate with Backend Service Golang and kata.ai. For communication client & agent.
              </li>
              <li>
                Develop feature Customer, Product, Analytic, User management.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Depoguna Bangunan Online (DBC Djabesmen Group) - Jakarta - <span className="text-orange-400 italic">Sep 2023 – Feb 2024</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop Mobile Android Salesman App DBC with stack Like a React, React Native, RealmDB, Firebase, Pusher.
              </li>
              <li>
                Enhancement feature Salesman App DBC in synchronize Data offline to online with pusher.
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Global Loket Sejahtera (LOKET) - Jakarta - <span className="text-orange-400 italic">Jan 2019 – Nov 2022</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop LPOS Desktop with framework Vue.js, Xinix, Electron, SQLite with integrate hardware system like a Fingerprint, RFID, Barcode Scanner for Themepark client.
              </li>
              <li>
                Develop CRM EBP for event management system with Vue.js.
              </li>
              <li>
                Develop Live Streaming App with Vue.js, WebRTC, WebSocket.
              </li>
              <li>
                Develop Landing Page Builder with Vue.js for static minisite generator from Dashboard.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
            PT. Wmotion Global Teknologi (Wmotion) - Jakarta – <span className="text-orange-400 italic">Mei 2018 – Okt 2018</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop product Portal Customer, Saviory, Regia app for client.
              </li>
              <li>
                Develop Mobile app Patrajasa app with Stack ionic Framework, Angular.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Apecsa Optima Solusi - Jakarta – <span className="text-orange-400 italic">April 2016 – Jan 2018</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Slicing PSD to HTML Page with stack Bootstrap version 2/3.
              </li>
              <li>
                Develop Microbiz mobile app with Angular 2, Ionic.
              </li>
              <li>
                Develop Skillagogo App for startup education client. With stack jQuery, Codeigniter, Bootstrap.
              </li>
              <li>
                Develop Site Goverment Bekasi City, Library department.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Education
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">
            University Muhammadiyah of Sukabumi
          </div>
          <ul className="text-base list-disc ml-12">
            <li>
              Informatics Engineering
            </li>
            <li>
              GPA: 3.52
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Skills
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">
            Software Skills
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-[#009d5c] font-medium rounded-md border border-[#009d5c] hover:bg-[#009d5c] hover:text-white transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="font-bold text-lg">
            Language
          </div>
          <div>
            English, Indonesia, Sundanese
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Portfolio
          </span>
        </div>
      </section> */}
    </div>
  )
};

export default CuriculumVitae;
