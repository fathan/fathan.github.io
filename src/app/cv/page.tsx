import Image from "next/image";

const CuriculumVitae = () => {
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
              Software Developer
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
            Frontend Engineer with 9+ years of experience building high-performance web and mobile applications across Legal
            Tech, Customer Relationship Management, Event Management, and Enterprise platforms. Strong technical
            background in Javascript, TypeScript, Vue.js, React.js, Ionic, WebSocket, Electron, and Next.js, with a deep focus on
            clean architecture, performance optimization, and user experience
          </p>
          <p>
            Proven ability to significantly improve product performance (FCP down to 1–1.5s, &gt;90% sync error reduction, 20–40%
            increase in user retention) and enhance development efficiency through reusable components, design systems, and
            scalable frontend architectures. Highly adaptable, collaborative, and capable of leading frontend development from
            concept to production.
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
              PT. Am Badar & Am Badar IP Law Firm - Jakarta - <span className="text-orange-400 italic">Mar 2025 – Present</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Built the Application Filing Management System (AFMS 2.0) that improved legal document processing efficiency by 40%.
              </li>
              <li>
                Optimized dashboard, patent management, report performance (Vue 3 + WebSocket), reducing First Contentful Paint (FCP) from 3.5s to 1.4s.
              </li>
              <li>
                Developed an internal design system, accelerating feature development speed by 30%.
              </li>
              <li>
                Delivered a high-fidelity Client Portal with 95% UI accuracy to Figma and improved user experience for internal teams.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer (Freelance Project)
            </div>
            <div className="text-base">
              Build Travel Umroh - <span className="text-orange-400 italic">June 2025 – Oct 2025</span>
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Developed a complete Umrah Travel Management System, consisting of a CMS dashboard (Vue 3 + Composition API + TailwindCSS) and a public-facing website (Next.js + React + TypeScript).
              </li>
              <li>
                Built CMS modules for package management, booking workflow, payment tracking, and customer data, improving admin operational efficiency by 40%.
              </li>
              <li>
                Implemented optimized page rendering and image handling on the Next.js website, resulting in LCP under 2 seconds and improved SEO performance.
              </li>
              <li>
                Improved user experience for pilgrims by simplifying package browsing, registration flows, and payment steps, increasing conversion rate by 25%.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-[#0f182b]">
              Frontend Engineer
            </div>
            <div className="text-base">
              PT. Inovasi Niaga Integrasi (Waizly) - Jakarta - <span className="text-orange-400 italic">Jan 2023 – Jan 2025</span> (Freelance)
            </div>
            <ul className="text-base list-disc ml-12">
              <li>
                Designed and implemented CRM frontend architecture from scratch.
              </li>
              <li>
                Reduced Largest Contentful Paint (LCP) from 4.2s to 1.9s through code-splitting and smart caching strategies.
              </li>
              <li>
                Built a Realtime Chat system (WebSocket + WhatsApp Meta) that increased customer support response rate by 60%.
              </li>
              <li>
                Developed Customer, Product, Analytics, and User Management modules, reducing onboarding time from 2 days to 5 hours.
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
                Developed a Salesman Mobile App (React Native + RealmDB) with 3× faster offline data input.
              </li>
              <li>
                Improved sync reliability, reducing data syncing errors from 12% to &lt;1%.
              </li>
              <li>
                Reduced application crash rate by 35% through optimization and memory management.
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
                Built the LPOS Desktop Application integrated with hardware systems (Fingerprint, RFID, Barcode)
              </li>
              <li>
                Developed a Live Streaming App (WebRTC + WebSocket) capable of handling 10,000+ concurrent viewers.
              </li>
              <li>
                Created a Landing Page Builder enabling the marketing team to generate minisites in under 5 minutes, reducing engineering dependency.
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
                Reduced UI/UX defects by 40% through improved collaboration workflows with designers and QA.
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
                Developed Microbiz Mobile App (Ionic/Angular) achieving 99% crash-free stability.
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
        <div className="border-b w-full border-[#e1e0e0] mb-4">
          <span className="font-semibold text-2xl text-[#333333]">
            Skills
          </span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Testing Tools */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Testing Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Jest
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Vitest
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Cypress
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Playwright
            </span>
          </div>
        </section>

        {/* Programming Languages */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Programming Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              PHP
            </span>
            <span className="bg-yellow-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Javascript
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Typescript
            </span>
            <span className="bg-green-300 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Node.js (Express.js, Nest.js)
            </span>
            <span className="bg-red-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Ruby (on Rails)
            </span>
          </div>
        </section>

        {/* Frontend Ecosystem */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Frontend Ecosystem
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              React.js (Next.js, React Native)
            </span>
            <span className="bg-green-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Vue.js (Nuxt.js, Ionic Vue)
            </span>
            <span className="bg-orange-300 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              Svelte (SvelteKit)
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              HTML5
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              CSS3
            </span>
            <span className="bg-teal-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              CSS Framework - TailwindCSS, Bootstrap, UIKit, Bulma
            </span>
            <span className="bg-purple-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              State Management - Redux, Pinia, Zustand
            </span>
          </div>
        </section>

        {/* Database */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Database</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-teal-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              SQL - MySQL, PostgreSQL
            </span>
            <span className="bg-green-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              NoSQL - Mongodb
            </span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              ORM - Prisma
            </span>
          </div>
        </section>

        {/* Other */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Other</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-rose-300 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">Redis</span>
            <span className="bg-green-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              API Documentation - Postman
            </span>
          </div>
        </section>

        {/* DevOps Tools */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">DevOps Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">Git</span>
            <span className="bg-blue-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">Docker</span>
            <span className="bg-green-200 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
              CI/CD - Github Actions
            </span>
          </div>
        </section>
      </div>

      <section className="flex flex-col w-full mt-10">
        <div className="border-b w-full border-[#e1e0e0] mb-8">
          <span className="font-semibold text-2xl text-[#333333]">
            Portfolios
          </span>
        </div>
      </section>

      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold">CRM</h3>
              <p className="text-sm text-gray-500 mt-1">CRM (Customer Relationship Management) is a software application that helps businesses manage their relationships with their customers.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-green-200 px-2 py-1 rounded">Vue 3</span>
                <span className="bg-red-200 px-2 py-1 rounded">Ionic Mobile</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">WebSocket</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://crm.ethos.co.id/" target="_blank" className="text-sm text-blue-600 hover:underline">View Demo</a>
                <a href="https://play.google.com/store/apps/details?id=com.waizly.crm&hl=id" target="_blank" className="text-sm text-blue-600 hover:underline">Playstore</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold">Sukabumi Explore (On Progress Developed)</h3>
              <p className="text-sm text-gray-500 mt-1">
                Website Geographic Information System (GIS) that displays various tourist attractions in Sukabumi Regency, Indonesia.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-teal-200 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TailwindCSS</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://sukabumi-explore.fathanrohman.com" target="_blank" className="text-sm text-blue-600 hover:underline">View Demo</a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold">Islamic App (On Progress Developed)</h3>
              <p className="text-sm text-gray-500 mt-1">
                Application of islamic for productivity and spiritual growth. Read quran, asmaulhusna, tasbih, sholat times, and other islamic features.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-teal-200 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TailwindCSS</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://quran.fathanrohman.com" target="_blank" className="text-sm text-blue-600 hover:underline">View Demo</a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold">TMDB Movie</h3>
              <p className="text-sm text-gray-500 mt-1">Simple movie information movies, TV Shows</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-teal-200 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TailwindCSS</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://tmdb-movie.fathanrohman.com" target="_blank" className="text-sm text-blue-600 hover:underline">View Demo</a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold">Simple TODO List App</h3>
              <p className="text-sm text-gray-500 mt-1">Simple to do list application for manage task</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-teal-200 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">TailwindCSS</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://todo-list.fathanrohman.com/todo" target="_blank" className="text-sm text-blue-600 hover:underline">View Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
};

export default CuriculumVitae;
