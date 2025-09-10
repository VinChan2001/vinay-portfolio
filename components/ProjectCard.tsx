"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  blurb: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

const gradients = [
  "from-blue-600 to-purple-600",
  "from-emerald-500 to-teal-600", 
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600"
];

export default function ProjectCard({ title, blurb, tags, links }: Props) {
  const gradient = gradients[Math.abs(title.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ amount: 0.35, once: false }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>
      
      {/* Top gradient bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>
      
      <div className="relative p-8">
        {/* Header */}
        <div className="mb-6">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg mb-4`}>
            <span className="text-xl font-bold">{title.charAt(0)}</span>
          </div>
          
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200 transition-colors">
            {title}
          </h3>
          
          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            {blurb}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors
                  ${index % 2 === 0 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    : `bg-gradient-to-r ${gradient} bg-opacity-10 text-gray-800 dark:text-gray-200`
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {!!links?.length && (
          <div className="space-y-3">
            {links.map((link) => {
              const isExternal = link.href.startsWith('http://') || link.href.startsWith('https://');
              
              const LinkContent = () => (
                <div className={`group/link flex items-center justify-between rounded-xl border-2 border-gray-200 px-4 py-3 transition-all hover:border-transparent hover:bg-gradient-to-r hover:${gradient} hover:text-white dark:border-gray-600 dark:hover:border-transparent`}>
                  <span className="font-medium">{link.label}</span>
                  <div className="flex items-center gap-2">
                    {isExternal ? (
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                    ) : (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    )}
                  </div>
                </div>
              );

              return isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <LinkContent />
                </a>
              ) : (
                <Link key={link.href} href={link.href as any} className="block">
                  <LinkContent />
                </Link>
              );
            })}
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-8 right-8 opacity-20 transition-opacity group-hover:opacity-40">
          <div className={`h-24 w-24 rounded-full bg-gradient-to-r ${gradient} blur-2xl`}></div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 opacity-10 transition-opacity group-hover:opacity-20">
          <div className={`h-32 w-32 rounded-full bg-gradient-to-r ${gradient} blur-3xl`}></div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}></div>
    </motion.article>
  )
}