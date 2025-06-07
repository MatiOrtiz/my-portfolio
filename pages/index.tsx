import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div id="home" className="h-screen overflow-hidden">
      <main className="h-full snap-y snap-mandatory overflow-y-scroll">
        {/* Hero Section */}
        <section className="w-full text-center min-h-screen flex flex-col snap-start">
          <div className="mt-6">
            <Navbar /> {/* Navbar solo visible en la primera sección, cerca del top */}
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-center mb-4">
              Hi, I'm Matías.
              <br />
              Backend Developer.
            </h1>
            <br />
            <br />
            <br />
            <p className="text-lg text-center max-w-xl mx-auto">
              I'm passionate about building robust and scalable backend systems that bring ideas to life.
            </p>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-text">
            I'm a backend developer focused on Java stack. Passionate about creating efficient, scalable software.
            Currently learning AI and exploring new technologies to enhance my skills.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full max-w-5xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Candy Crush Game</h3>
              <p className="text-text">A Java desktop game inspired by Candy Crush, featuring dynamic game logic and scoring.</p>
            </div>
            {/* Y así con tus demás proyectos */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-text">Let's get in touch! Email me at: <a href="mailto:matiasnortiz.dev@gmail.com" className="text-accent underline">matiasnortiz.dev@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}