import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#003366] dark:bg-gray-900 text-white py-2.5 px-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm">
          {/* Phone */}
          <a
            href="tel:+923440345966"
            className="flex items-center gap-2 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="whitespace-nowrap">Call: +92 344 0345966</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@windsor.edu.pk"
            className="flex items-center gap-2 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="whitespace-nowrap">
              Email: info@windsor.edu.pk
            </span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 dark:hover:text-blue-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 dark:hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 dark:hover:text-sky-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 dark:hover:text-red-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
