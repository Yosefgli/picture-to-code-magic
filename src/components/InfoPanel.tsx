import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoPanelProps {
  title: { he: string; ru: string };
  children: ReactNode;
}

const InfoPanel = ({ title, children }: InfoPanelProps) => {
  const { isHebrew, isAnimating } = useLanguage();

  return (
    <div className="parchment-panel p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-right">
        {isHebrew ? title.he : title.ru}
      </h3>
      <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default InfoPanel;