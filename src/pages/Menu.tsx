import React from 'react';

const menus = [
  { label: 'A LA CARTE', url: '/pdfs/a-la-carte.pdf' },
  { label: 'TASTING MENU', url: '/pdfs/tasting-menu.pdf' },
  { label: 'SET MENU', url: '/pdfs/set-menu.pdf' },
  { label: 'SUNDAY LUNCH MENU', url: '/pdfs/sunday-lunch.pdf' },
  { label: 'VEGAN MENU', url: '/pdfs/vegan-menu.pdf' },
  { label: 'VEGETARIAN MENU', url: '/pdfs/vegetarian-menu.pdf' },
  { label: 'CELEBRATION MENU', url: '/pdfs/celebration-menu.pdf' },
  { label: 'SAMPLE WINE LIST', url: '/pdfs/sample-wine-list.pdf' },
  { label: 'BAR MENU', url: '/pdfs/bar-menu.pdf' },
];

const MenuPage: React.FC = () => {
  return (
    <div className="bg-repeat min-h-screen w-full flex items-center justify-center px-4" style={{color: '#1a1e25', backgroundImage: 'url(/textures/paper.png)'}}>
      <main className="text-center font-sans py-20 w-full max-w-6xl" style={{color: '#1a1e25'}}>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-4" style={{color: '#1a1e25 !important'}}>
          SAMPLE MENUS AT KABOUL GOURMET
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12" style={{color: '#1a1e25 !important'}}>
          Spitalfields, The City of Paris
        </p>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5 mb-16" style={{color: '#1a1e25 !important'}}>
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] md:text-[17px] font-medium tracking-wide"
              style={{color: '#1a1e25 !important'}}
            >
              {menu.label}
            </a>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="h-[1px] w-[85%] bg-[#b49c6e] mx-auto" />
      </main>
    </div>
  );
};

export default MenuPage;
