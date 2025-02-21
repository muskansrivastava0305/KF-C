
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AboutPage", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Our Brands", path: "/our-brands" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-gray-700/80 backdrop-blur-md shadow-lg" : "bg-[#b71c22]"
      }`}
    >
      <nav className="container mx-auto h-20 py-4 flex gap-20 items-center">
        {/* Logo */}
        <div className="w-64">
          <img src="/logo1.png" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium gap-7">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="hover:text-gray-300 transition font-bold text-lg">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}














// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Change navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <nav className="container mx-auto px-6 py-4 flex gap-20 items-center">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">Kan-Vi Foods</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white font-medium gap-7">
//           {["Home", "About Us", "Blog", "Our Brands", "Why Choose Us", "Contact Us"].map((item, index) => (
//             <li key={index}>
//               <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-gray-300 transition font-bold text-lg">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg md:hidden">
//           <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
//             {["Home", "About Us", "Blog", "Our Brands", "Why Choose Us", "Contact Us"].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
//                   className="hover:text-gray-300 transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
