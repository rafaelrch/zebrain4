"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    {
      title: "Início",
      href: "#hero",
    },
    {
      title: "O que são agentes?",
      href: "#feature3",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
    {
      title: "Agendar",
      href: "#contato",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white/40 backdrop-blur-md border-b px-4 ">
      <div className="container relative mx-auto min-h-17 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        
        {/* Menu Desktop */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row ">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex lg:justify-center">
          <Link href="#hero">
            <Image
              src="/logooBRANCO.png"
              alt="Zebrain Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Botão de contato (desktop) */}
        <div className="flex justify-end w-full gap-4">
          <Button>Fale conosco</Button>
        </div>

        {/* Menu Mobile */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex justify-between items-center"
                    onClick={handleCloseMenu}
                  >
                    <span className="text-lg">{item.title}</span>
                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};