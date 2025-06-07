import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 py-6">
      <a href="#home" className="relative px-3 py-1 rounded-md">Home</a>
      <a href="#about" className="relative px-3 py-1 rounded-md">About Me</a>
      <a href="#projects" className="relative px-3 py-1 rounded-md">Projects</a>
      <a href="#contact" className="relative px-3 py-1 rounded-md">Contact</a>
    </nav>

  );
};

export default Navbar;
