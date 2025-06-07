import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <main className="flex flex-col items-center justify-center p-8 space-y-16">
        {/* Hero Section */}
        <section className="w-full text-center">
          <h1 className="text-6xl font-bold text-center mt-20 mb-4">
            Hi, I'm Matías.
            <br />
            A Backend Developer.
          </h1>
          <p className="text-lg text-center max-w-xl mx-auto">
            I'm passionate about building robust and scalable backend systems that bring ideas to life.
          </p>
        </section>

        {/* About Me */}
        <section id="about" className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-text">
            I'm a backend developer focused on Java and Kotlin. Passionate about creating efficient, scalable software.
            Currently learning AI and exploring new technologies to enhance my skills.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example Project Card */}
            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Banking System Simulator</h3>
              <p className="text-text">A desktop application built with Java that simulates a banking system, including account management and transactions.</p>
            </div>
            {/* Agregar más tarjetas aquí */}
            <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-accent mb-2">Candy Crush Game</h3>
              <p className="text-text">A Java desktop game inspired by Candy Crush, featuring dynamic game logic and scoring.</p>
            </div>
            {/* Y así con tus demás proyectos */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-text">Let's get in touch! Email me at: <a href="mailto:youremail@example.com" className="text-accent underline">youremail@example.com</a></p>
        </section>
      </main>
    </div>
  );
}
