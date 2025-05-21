
import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();
  
  // Helper function to ensure we're working with strings
  const getTranslationAsString = (key: string): string => {
    const translation = t(key);
    return Array.isArray(translation) ? translation.join(", ") : translation;
  };
  
  // Helper function for rendering array translations as list items
  const renderListItems = (translationKey: string) => {
    const items = t(translationKey);
    if (Array.isArray(items)) {
      return items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-nepal-primary font-bold mr-2">•</span>
          <span>{item}</span>
        </li>
      ));
    }
    return null;
  };
  
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-nepal-light py-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-nepal-secondary mb-4">
                  {getTranslationAsString('nav.about')}
                </h1>
              </div>
              
              <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-nepal-secondary">
                  {getTranslationAsString('pages.about.our_story.title')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {getTranslationAsString('pages.about.our_story.content1')}
                </p>
                <p className="text-gray-600">
                  {getTranslationAsString('pages.about.our_story.content2')}
                </p>
              </div>
              
              <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-nepal-secondary">
                  {getTranslationAsString('pages.about.our_mission.title')}
                </h2>
                <p className="text-gray-600">
                  {getTranslationAsString('pages.about.our_mission.content')}
                </p>
              </div>
              
              <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-nepal-secondary">
                  {getTranslationAsString('pages.about.why_choose_us.title')}
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {renderListItems('pages.about.why_choose_us.reasons')}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-nepal-secondary">
                  {getTranslationAsString('pages.about.contact.title')}
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p><strong>{getTranslationAsString('pages.about.contact.office')}</strong> {getTranslationAsString('pages.about.contact.office_address')}</p>
                  <p><strong>{getTranslationAsString('pages.about.contact.phone')}</strong> {getTranslationAsString('pages.about.contact.phone_number')}</p>
                  <p><strong>{getTranslationAsString('pages.about.contact.email')}</strong> {getTranslationAsString('pages.about.contact.email_address')}</p>
                  <p><strong>{getTranslationAsString('pages.about.contact.hours')}</strong> {getTranslationAsString('pages.about.contact.hours_value')}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
