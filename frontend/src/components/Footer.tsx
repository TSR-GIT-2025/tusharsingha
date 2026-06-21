'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/tusharlegacy' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/tsrhub' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/tusharlegacy' },
  { name: 'Discord', icon: FaDiscord, url: 'https://discord.com/users/tusharlegacy' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/legacytushar' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/tusharlegacy' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
          <div className="text-gray-400">
            2024 Developer. All rights reserved.
          </div>
          <div className="hidden md:block text-indigo-400 font-medium">
            DO IT ALL ALONE
          </div>
          <div className="flex space-x-[1.620rem]">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ 
                  y: -2,
                  scale: 1.1
                }}
                whileTap={{ y: 0 }}
                title={social.name}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
