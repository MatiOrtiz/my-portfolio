import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div id="home" >
      <main className="snap-y snap-mandatory">
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
          <h2 className="text-2xl font-bold text-primary mb-4">ABOUT ME</h2>
          <br />
          <p className="text-text">
            I'm a backend developer focused on Java stack. Passionate about creating efficient, scalable software.
            Currently learning AI and exploring new technologies to enhance my skills.
          </p>
          <br />
          <br />
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <img src="/icons/java.svg" alt="Java" className="h-12 w-12" />
            <img src="/icons/spring.svg" alt="Spring" className="h-12 w-12" />
            <img src="/icons/python.svg" alt="Python" className="h-12 w-12" />
            <img src="/icons/kotlin.svg" alt="Kotlin" className="h-12 w-12" />
            <img src="/icons/mysql.svg" alt="MySQL" className="h-12 w-12" />
            <img src="/icons/html.svg" alt="HTML" className="h-12 w-12" />
            <img src="/icons/css.svg" alt="CSS" className="h-12 w-12" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full max-w-5xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">PROJECTS</h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <a
              href="https://github.com/MatiOrtiz/AYDS25-SongInfo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Song Info</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/surveyingg-app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Surveying App</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/products-register"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Products Itinerary</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/sistema-bancario-java-sql"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">ATM - Bank Employee Simulator</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/proyecto-yoyo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Yoyo's Physical Data Analysis</h3>
            </a>
            
            <a
              href="https://github.com/MatiOrtiz/Rest-API-with-Spring-Boot"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">REST Api</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/CandyCrush"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Candy Crush</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/BankSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Banking System Simulator</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/SimpleCalculator"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer block aspect-square"
            >
              <h3 className="text-xl font-semibold mb-2 text-center w-full">Calculator</h3>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">CONTACT</h2>
          <p className="text-text">Let's get in touch! Email me at: <a href="mailto:matiasnortiz.dev@gmail.com" className="text-gray-300 underline">matiasnortiz.dev@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}