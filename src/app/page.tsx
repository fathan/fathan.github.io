const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-8/12 justify-center text-center">
        <div className="text-3xl lg:text-6xl m-auto">
          Hello, I&apos;m&nbsp;
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Fathan Rohman
          </span>
        </div>
        <div className="text-xl">
          Web Developer from Indonesia. <br/><br/>
          I&apos;m Focusing in Frontend Ecosystem like a &nbsp;
          <span className="text-yellow-500 font-bold">Javascript</span> or <span className="text-blue-500 font-bold">TypeScript</span>. 
          and explored other framework javascript like a React, Vue, Svelte, Angular, Next, Nuxt and on Backend ecosystem I&apos;m exploring Nodejs, Express, MongoDB, and MySQL.
        </div>

        <div className="m-auto">
          email: <a href="mailto:karir.fathan@gmail.com" className="text-blue-300">karir.fathan@gmail.com</a>&nbsp;
          github: <a href="https://github.com/fathan" className="text-blue-300">@fathan</a>
        </div>
      </main>
    </div>
  );
}

export default Home;
