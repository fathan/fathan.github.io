import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-300 items-center border-x border-(--border) px-8 py-16"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Introduction */}
          <div className="order-2 justify-self-center md:order-1 md:w-full md:max-w-xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--primary)">
              Hello, I'm Fathan Rohman
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-(--foreground) md:text-5xl lg:text-6xl">
              Frontend Web
              <span className="block bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-(--muted) md:text-lg">
              I build modern, responsive, and user-friendly websites with a
              focus on clean design, great user experience, and maintainable code.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="rounded-lg bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-(--border) px-6 py-3 text-sm font-semibold text-(--foreground) transition-all hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="order-1 mt-10 md:mt-0 flex justify-self-center md:order-2">
            <div className="relative">

              {/* Background Glow */}
              <div className="absolute -inset-6 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/10" />

              {/* Decorative Circle */}
              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-blue-400/30 bg-blue-400/5 backdrop-blur-sm" />

              {/* Decorative Dots */}
              <div className="absolute -bottom-4 -left-4 z-20 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-(--primary)/50"
                  />
                ))}
              </div>

              {/* Main Frame */}
              <div className="relative z-10">
                
                {/* Offset Gradient Border */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 opacity-70" />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem_0.75rem_2rem_0.75rem] border border-white/10 bg-(--card) p-1.5 shadow-2xl shadow-blue-500/10">

                  <Image
                    src="/fathan.jpg"
                    alt="Fathan Rohman"
                    width={320}
                    height={320}
                    className="h-64 w-64 object-cover transition-transform duration-500 hover:scale-105 md:h-72 md:w-72"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-1.5 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] bg-linear-to-t from-blue-950/20 via-transparent to-white/10" />
                </div>
              </div>

              {/* Available Badge */}
              <div className="absolute -bottom-6 right-2 z-30 flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/90 px-4 py-2 text-xs font-medium text-(--foreground) shadow-lg backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                Available for work
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
