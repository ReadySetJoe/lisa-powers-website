import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'House Sitting', href: '/services/house-sitting' },
    { name: 'Pet Sitting', href: '/services/pet-sitting' },
    { name: 'Photo Archiving', href: '/services/photo-archiving' },
    { name: 'Bracelet Making', href: '/services/bracelet-making' },
    { name: 'Monogramming', href: '/services/monogramming' },
    { name: 'Weekday Meal Help', href: '/services/meal-help' },
    { name: 'Carpool Help', href: '/services/carpool-help' },
  ];

  return (
    <nav className="bg-card-bg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-primary hover:text-primary-hover transition-colors">
            Lisa&apos;s Local Services
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card-bg shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card-bg border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">
              About
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-primary">Services</div>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}