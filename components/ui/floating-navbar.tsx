"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-5 inset-x-0 max-w-fit mx-auto z-50"
      >
        <nav className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-neutral-800/50">
          <ul className="flex items-center gap-1">
            {navItems.map((item, idx) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors relative ${
                    pathname === item.link
                      ? "text-neutral-100"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {item.icon}
                  <span className="hidden sm:block">{item.name}</span>
                  {pathname === item.link && (
                    <motion.div
                      layoutId="active"
                      className="absolute inset-0 bg-neutral-800/50 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};