"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-muted/50 py-12 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Bermet Brka
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Vinarija Aleks - Čuvar tradicije bermeta i lekovitog bilja
            </p>
            <p className="text-sm text-muted-foreground">
              Nenad Ratković &quot;Brka&quot; nastavlja porodičnu tradiciju od 1990. godine
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Naše lokacije</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Novi Sad</p>
                  <p className="text-muted-foreground">Paje Markovića Adamova 26</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Sremski Karlovci</p>
                  <p className="text-muted-foreground">Petrovaradinska 5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <Link
                href="tel:+381606338605"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+381 60 633 8605</span>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>Radno vreme: Pon-Sub 9-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Bermet Brka - Vinarija Aleks. Sva prava zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Izrada sajta:{" "}
              <span className="font-bold text-primary">ManikamWebSolutions</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
