import React from 'react';
import styles from '../css/menu.module.css';

const firstRowMenus = [
  { label: 'A LA CARTE', url: '/pdfs/a-la-carte.pdf' },
  { label: 'TASTING MENU', url: '/pdfs/tasting-menu.pdf' },
  { label: 'SET MENU', url: '/pdfs/set-menu.pdf' },
  { label: 'SUNDAY LUNCH MENU', url: '/pdfs/sunday-lunch.pdf' },
  { label: 'VEGAN MENU', url: '/pdfs/vegan-menu.pdf' },
];

const secondRowMenus = [
  { label: 'VEGETARIAN MENU', url: '/pdfs/vegetarian-menu.pdf' },
  { label: 'CELEBRATION MENU', url: '/pdfs/celebration-menu.pdf' },
  { label: 'SAMPLE WINE LIST', url: '/pdfs/sample-wine-list.pdf' },
  { label: 'BAR MENU', url: '/pdfs/bar-menu.pdf' },
];

const MenuPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Title */}
        <h1 className={styles.title}>
          SAMPLE MENUS AT KABOUL GOURMET
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Spitalfields, The City of Paris
        </p>

        {/* Menu Grid */}
        <div className={styles.menuContainer}>
          {/* First Row */}
          <div className={`${styles.menuRow} ${styles.firstRow}`}>
            {firstRowMenus.map((menu) => (
              <a
                key={menu.label}
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuLink}
                aria-label={`View ${menu.label} menu`}
              >
                {menu.label}
              </a>
            ))}
          </div>

          {/* Second Row */}
          <div className={`${styles.menuRow} ${styles.secondRow}`}>
            {secondRowMenus.map((menu) => (
              <a
                key={menu.label}
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuLink}
                aria-label={`View ${menu.label} menu`}
              >
                {menu.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />
      </main>
    </div>
  );
};

export default MenuPage;
