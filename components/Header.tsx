"use client";

import Image from "next/image";
import Logo from "../public/banerNOV1.jpg";
import Link from "next/link";
import { MenuIcon, PhoneIcon, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const CartIcon = () => {
  const { getTotalItems } = useCart();
  const [mounted, setMounted] = useState(false);
  const totalItems = getTotalItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/korpa" className="relative">
      <motion.div whileHover={{ scale: 1.1 }} className="relative">
        <ShoppingCart className="text-primary cursor-pointer h-6 w-6" />
        {mounted && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </motion.div>
    </Link>
  );
};

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full text-primary font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="dm rustic 24"
            width={40}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-4">
          <CartIcon />
          <Link href="tel:+381606338605" className="hidden sm:block">
            <motion.button
              whileHover={{
                color: "hsl(var(--foreground))",
                backgroundColor: "hsl(var(--primary))",
              }}
              className=" items-center justify-center rounded-full text-primary border-primary border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex"
            >
              <PhoneIcon />
              <p className="">+38160 633 8605</p>
            </motion.button>
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
