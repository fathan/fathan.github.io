import Image from "next/image";

const CuriculumVitae = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <section className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-4">
          <div>
            <Image
              src={'https://avatars.githubusercontent.com/u/4404526?v=4'}
              alt="Fathan Rohman"
              width={100}
              height={100}
              className="inline-block size-36 rounded-full ring-2 ring-white"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <div className="font-bold text-3xl">
              Fathan Rohman
            </div>

            <div>
              Frontend Developer
            </div>
          </div>
        </div>

        <div className="text-right mt-8">
          <div className="flex flex-col gap-1">
            <div>081282951768</div>
            <div>karir.fathan@gmail.com</div>
            <div>Sukabumi, West Java, Indonesia</div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#214c87] mb-4">
          <span className="font-semibold text-2xl text-[#214c87]">
            Career Objective
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            As an ambitious and skilled frontend developer, my objective is to leverage my expertise in crafting seamless user experiences and cutting-edge web applications to contribute significantly to a dynamic and innovative team. With a solid foundation in HTML, CSS, JavaScript or Typescript, coupled with a passion for staying abreast of emerging technologies, I aim to drive digital innovation and elevate user engagement through intuitive and visually stunning interfaces.
          </p>
          <p>
            By combining my technical proficiency with a keen eye for design and usability, I aspire to collaborate with like-minded professionals to deliver impactful solutions that exceed client expectations and propel the organization towards its strategic goals. Eager to embark on new challenges and embrace continuous learning, I am committed to delivering excellence in every project while fostering a culture of creativity, collaboration, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#214c87] mb-4">
          <span className="font-semibold text-2xl text-[#214c87]">
            Work Experience
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">
              Software Engineer, Frontend
            </div>
            <div className="text-base">
              PT. Am Badar & Am Badar - Jakarta - <span className="text-green-600 italic">Feb 2025 – Present</span> (Hybrid)
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Develop HRIS (Human Resource Management System) application Web Dashboard with stack like a Vue 3 composition API, Vite, WebSocket, Pinia state management, TailwindCSS.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Inovasi Niaga Integrasi (Waizly) - Jakarta - <span className="text-green-600 italic">Jan 2023 – Present</span> (Freelance/Remote)
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
            <div className="font-bold text-lg">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Depoguna Bangunan Online (DBC Djabesmen Group) - Jakarta - <span className="text-green-600 italic">Sep 2023 – Feb 2024</span>
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
            <div className="font-bold text-lg">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Global Loket Sejahtera (LOKET) - Jakarta - <span className="text-green-600 italic">Jan 2019 – Nov 2022</span>
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
            <div className="font-bold text-lg">
              Frontend Engineer
            </div>
            <div className="text-base">
            PT. Wmotion Global Teknologi (Wmotion) - Jakarta – <span className="text-green-600 italic">Mei 2018 – Okt 2018</span>
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
            <div className="font-bold text-lg">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Apecsa Optima Solusi - Jakarta – <span className="text-green-600 italic">April 2016 – Jan 2018</span>
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
        <div className="border-b w-full border-[#214c87] mb-4">
          <span className="font-semibold text-2xl text-[#214c87]">
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
        <div className="border-b w-full border-[#214c87] mb-4">
          <span className="font-semibold text-2xl text-[#214c87]">
            Skills
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">
            Software Skills
          </div>
          <div>
            Javascript, Typescript, Node.js, React.js, Vue.js, Next.js, Nuxt.js, React Native, Ionic, HTML, CSS, SCSS, SASS, BEM, Git, Bootstrap, TailwindCSS, Express.js, MySQL, Electron, WebSocket.
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

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#214c87] mb-4">
          <span className="font-semibold text-2xl text-[#214c87]">
            Portfolio
          </span>
        </div>
      </section>
    </div>
  )
};

export default CuriculumVitae;
