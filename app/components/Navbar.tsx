"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

interface University {
  name: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

const universities: University[] = [
  { name: "University of Oxford", location: "Australia", type: "Public", description: "Top-Ranked", image: "/universities/image-1.jpg" },
  { name: "University of Toronto", location: "Canada", type: "Public", description: "Research-Focused", image: "/universities/image-2.jpg" },
  { name: "University of Birmingham", location: "UK", type: "Public", description: "Russell Group", image: "/universities/image-3.jpg" },
  { name: "Monash University", location: "Australia", type: "Public", description: "Global Recognition", image: "/universities/image-1.jpg" },
  { name: "University of Leeds", location: "UK", type: "Public", description: "Russell Group", image: "/universities/image-2.jpg" },
  { name: "University of Sydney", location: "Australia", type: "Public", description: "World Top University", image: "/universities/image-4.jpg" },
  { name: "Deakin University", location: "Australia", type: "Public", description: "Career-Oriented", image: "/universities/image-5.jpg" },
  { name: "University of Hertfordshire", location: "UK", type: "Public", description: "International Student Friendly", image: "/universities/image-6.jpg" },
  { name: "University of Nottingham", location: "UK", type: "Public", description: "Global Campus Network", image: "/universities/image-5.jpg" },
  { name: "University of Waterloo", location: "Canada", type: "Public", description: "Innovation & Technology Focus", image: "/universities/image-4.jpg" },
];

const destinations = [
  { name: "Study in Malaysia", path: "/destinations/malaysia" },
  { name: "Study in Germany", path: "/destinations/germany" },
  { name: "Study in Dubai", path: "/destinations/dubai" },
  { name: "Study in Canada", path: "/destinations/canada" },
  { name: "Study in UK", path: "/destinations/uk" },
  { name: "Study in USA", path: "/destinations/usa" },
  { name: "Study in Ireland", path: "/destinations/ireland" },
  { name: "Study in Turkey", path: "/destinations/turkey" },
  { name: "Study in Australia", path: "/destinations/australia" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileUniversitiesOpen, setIsMobileUniversitiesOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);

  const universitiesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  const isLinkActive = (href: string) => {
    const normalizedPathname = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
    const normalizedHref = href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;
    return normalizedPathname === normalizedHref;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (universitiesRef.current && !universitiesRef.current.contains(event.target as Node)) setIsUniversitiesOpen(false);
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) setIsDestinationsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);

  return (
    <nav className="w-full bg-[#990422]" key={pathname}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
       
      >
        {/* Top Bar */}
        <div className="bg-[#1a2b4a] dark:bg-[#0a0a0a] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+923344034596" className="flex items-center space-x-2 hover:text-gray-300 transition">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call: +92 300 9508035 , +92 326 9508034</span>
              </a>
              <a href="mailto:Info@windsorconsultancyservices.com" className="flex items-center break-all space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Info@windsorconsultancyservices.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`shadow-md transition-colors duration-300 ${isScrolled ? 'bg-[#990422]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <Link href="/">
                <img src={isScrolled ? "/logos/logo-white.png" : "/logos/logo-dark2.png"} alt="Logo" width={140} />
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                {["/", "/about", "/ourServices"].map((path) => (
                  <Link key={path} href={path} className={`transition font-bold ${isScrolled ? "text-white hover:text-gray-200" : isLinkActive(path) ? "text-[#002241]" : "text-[#990421] hover:text-[#002241]"}`}>
                    {path === "/" ? "Home" : path === "/about" ? "About" : "Services"}
                  </Link>
                ))}

                {/* Destinations Dropdown */}
                <div className="relative group" ref={destinationsRef}>
                  <button onClick={() => { setIsDestinationsOpen(!isDestinationsOpen); setIsUniversitiesOpen(false); }} className={`flex items-center space-x-1 transition font-bold ${isScrolled ? "text-white" : "text-[#990421] hover:text-[#002241]"}`}>
                    <span>Destinations</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDestinationsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isDestinationsOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[31.25rem] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 z-50">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {destinations.map((d, i) => (
                          <Link key={i} href={d.path} className={`transition font-bold text-[15px] py-2 ${isLinkActive(d.path) ? "text-[#002241]" : "text-[#990421] hover:text-[#002241]"}`} onClick={() => setIsDestinationsOpen(false)}>{d.name}</Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Universities Dropdown */}
                <div className="relative group" ref={universitiesRef}>
                  <button onClick={() => { setIsUniversitiesOpen(!isUniversitiesOpen); setIsDestinationsOpen(false); }} className={`flex items-center space-x-1 transition font-bold ${isScrolled ? "text-white" : "text-[#990421] hover:text-[#002241]"}`}>
                    <span>Universities</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isUniversitiesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isUniversitiesOpen && (
                    <div className="absolute left-1/20 transform -translate-x-[54%] top-full mt-5 w-screen max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 z-50">
                      <div className="grid grid-cols-5 gap-3">
                        {universities.map((u, i) => (
                          <Link key={i} href={`/university/${u.name.toLowerCase().replace(/ /g, "-")}`} className="group/card" onClick={() => setIsUniversitiesOpen(false)}>
                            <div className="relative h-40 rounded-xl overflow-hidden mb-3"><img src={u.image} alt={u.name} className="object-cover h-full w-full" /></div>
                            <h3 className="text-[#990421] font-bold text-sm mb-1 group-hover/card:text-[#002241]">{u.name}</h3>
                            <p className="text-xs text-gray-600 italic">{u.location} · {u.type}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/contact" className={`transition font-bold ${isScrolled ? "text-white hover:text-gray-200" : isLinkActive("/contact") ? "text-[#002241]" : "text-[#990421] hover:text-[#002241]"}`}>Contact</Link>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/appointment">
                  <button className={`${isScrolled ? "bg-white text-[#990422]" : "bg-[#990422] text-white"} px-6 py-2 rounded-md transition font-bold`}>Get a Free Appointment</button>
                </Link>
                <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-white" : "text-gray-700"}`} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logos/logo-dark2.png" alt="Logo" width={120} />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-6 h-6 text-gray-700" /></button>
          </div>
          <div className="space-y-4">
            {["/", "/about", "/ourServices"].map((path) => (
              <Link key={path} href={path} className={`block py-3 border-b font-bold ${isLinkActive(path) ? "text-[#002241]" : "text-[#990421]"}`} onClick={() => setIsMobileMenuOpen(false)}>{path === "/" ? "Home" : path === "/about" ? "About" : "Services"}</Link>
            ))}
            {/* Mobile Destinations Accordion */}
            <div>
              <button onClick={() => setIsMobileDestinationsOpen(!isMobileDestinationsOpen)} className="flex justify-between items-center w-full py-3 font-bold text-[#990421]"><span>Destinations</span><ChevronDown className={isMobileDestinationsOpen ? "rotate-180" : ""} /></button>
              {isMobileDestinationsOpen && (
                <div className="pl-4 space-y-2">{destinations.map((d, i) => (
                  <Link key={i} href={d.path} className="block py-2 text-[#990421]" onClick={() => setIsMobileMenuOpen(false)}>{d.name}</Link>
                ))}</div>
              )}
            </div>
            <Link href="/contact" className="block py-3 border-b font-bold text-[#990421]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}