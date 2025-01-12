import { ReactNode } from 'react';

interface InfoPanelProps {
  title: string;
  children: ReactNode;
}

const InfoPanel = ({ title, children }: InfoPanelProps) => {
  return (
    <div className="parchment-panel p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2 hebrew-text">{title}</h3>
      <div className="hebrew-text">{children}</div>
    </div>
  );
};

export default InfoPanel;