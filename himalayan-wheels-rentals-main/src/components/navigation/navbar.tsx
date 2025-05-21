
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/contexts/LanguageContext";
import { Toggle } from "@/components/ui/toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Temporary state for auth status - to be replaced with actual auth later
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  const { locale, setLocale, t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ne' : 'en');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-nepal-primary">
                🏍️ {t('app.name')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-nepal-dark hover:text-nepal-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/bikes" className="text-nepal-dark hover:text-nepal-primary transition-colors">
              {t('nav.bikes')}
            </Link>
            <Link to="/locations" className="text-nepal-dark hover:text-nepal-primary transition-colors">
              {t('nav.locations')}
            </Link>
            <Link to="/about" className="text-nepal-dark hover:text-nepal-primary transition-colors">
              {t('nav.about')}
            </Link>
            
            {/* Language toggle */}
            <Toggle 
              pressed={locale === 'ne'} 
              onPressedChange={toggleLanguage} 
              aria-label="Toggle language"
              className="border border-nepal-primary/20 h-9 w-9 p-0"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Toggle>
            
            {isLoggedIn ? (
              <Button variant="outline" className="flex items-center" onClick={() => setIsLoggedIn(false)}>
                <User className="mr-2 h-4 w-4" />
                <span>{t('nav.profile')}</span>
              </Button>
            ) : (
              <Button className="bg-nepal-primary hover:bg-nepal-primary/90" onClick={() => setIsLoggedIn(true)}>
                <LogIn className="mr-2 h-4 w-4" />
                <span>{t('nav.login')}</span>
              </Button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language toggle for mobile */}
            <Toggle 
              pressed={locale === 'ne'} 
              onPressedChange={toggleLanguage} 
              aria-label="Toggle language"
              className="border border-nepal-primary/20 h-9 w-9 p-0"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Toggle>
            
            <Button variant="ghost" onClick={toggleMobileMenu} size="icon">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-2 animate-fade-in">
          <Container>
            <div className="flex flex-col space-y-3 py-3">
              <Link 
                to="/" 
                className="px-3 py-2 text-nepal-dark hover:bg-nepal-light rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/bikes" 
                className="px-3 py-2 text-nepal-dark hover:bg-nepal-light rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.bikes')}
              </Link>
              <Link 
                to="/locations" 
                className="px-3 py-2 text-nepal-dark hover:bg-nepal-light rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.locations')}
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 text-nepal-dark hover:bg-nepal-light rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>{t('nav.profile')}</span>
                </Button>
              ) : (
                <Button 
                  className="bg-nepal-primary hover:bg-nepal-primary/90 justify-start"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>{t('nav.login')}</span>
                </Button>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
