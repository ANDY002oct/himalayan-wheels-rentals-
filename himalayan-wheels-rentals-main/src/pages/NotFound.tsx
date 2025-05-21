
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Helper function to ensure we're working with strings
  const getTranslationAsString = (key: string): string => {
    const translation = t(key);
    return Array.isArray(translation) ? translation.join(", ") : translation;
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center bg-nepal-light">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-nepal-primary mb-4">404</h1>
          <p className="text-2xl text-nepal-secondary mb-6 font-semibold">
            {getTranslationAsString('pages.not_found.title')}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            {getTranslationAsString('pages.not_found.subtitle')}
          </p>
          <Button 
            size="lg"
            className="bg-nepal-primary hover:bg-nepal-primary/90"
            onClick={() => navigate("/")}
          >
            {getTranslationAsString('pages.not_found.return_home')}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
