import React from 'react';

export function renderWithLogo(text: string) {
  if (!text) return text;
  const parts = text.split(/Uptaskers|TASKup/);
  if (parts.length === 1) return text;
  
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i !== parts.length - 1 && (
            <img 
              src="/uptaskers.png" 
              alt="Uptaskers" 
              className="inline-block h-[3.5em] w-auto object-contain align-middle mx-1.5 drop-shadow-sm" 
              style={{ transform: 'translateY(-0.15em)' }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export const LogoText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (typeof children === 'string') {
    return <>{renderWithLogo(children)}</>;
  }
  return <>{children}</>;
};
