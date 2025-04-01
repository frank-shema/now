
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-decofi-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">DeCoFi</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue px-1 pt-1 text-sm font-medium"
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-decofi-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Our Mission
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      How It Works
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('features')}
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue px-1 pt-1 text-sm font-medium"
                >
                  Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'features' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-decofi-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link
                      to="/features/savings"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Savings
                    </Link>
                    <Link
                      to="/features/loans"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Loans
                    </Link>
                    <Link
                      to="/features/governance"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Governance
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/cooperatives"
                className="text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue px-1 pt-1 text-sm font-medium"
              >
                Cooperatives
              </Link>
              <Link
                to="/faq"
                className="text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue px-1 pt-1 text-sm font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue px-1 pt-1 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-decofi-blue hover:bg-decofi-blue/90" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-decofi-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-decofi-dark">
            <button
              onClick={() => toggleDropdown('mobileAbout')}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
            >
              About
            </button>
            {activeDropdown === 'mobileAbout' && (
              <div className="pl-6 space-y-1">
                <Link
                  to="/about"
                  className="block pl-3 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Our Mission
                </Link>
                <Link
                  to="/how-it-works"
                  className="block pl-3 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  How It Works
                </Link>
              </div>
            )}
            <button
              onClick={() => toggleDropdown('mobileFeatures')}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
            >
              Features
            </button>
            {activeDropdown === 'mobileFeatures' && (
              <div className="pl-6 space-y-1">
                <Link
                  to="/features/savings"
                  className="block pl-3 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Savings
                </Link>
                <Link
                  to="/features/loans"
                  className="block pl-3 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Loans
                </Link>
                <Link
                  to="/features/governance"
                  className="block pl-3 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Governance
                </Link>
              </div>
            )}
            <Link
              to="/cooperatives"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cooperatives
            </Link>
            <Link
              to="/faq"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-decofi-blue dark:hover:text-decofi-blue hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between px-4">
              <div className="space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button className="bg-decofi-blue hover:bg-decofi-blue/90" size="sm" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
