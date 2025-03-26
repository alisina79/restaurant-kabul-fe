import { useEffect, useState } from 'react';

export default function useScrollNavbarStyles({
  upClass = 'translate-y-0',
  downClass = '-translate-y-full',
  initialClass = 'translate-y-0',
} = {}) {
  const [navbarClass, setNavbarClass] = useState(initialClass);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollStyle = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setNavbarClass(downClass);
      } else if (currentScrollY < lastScrollY) {
        setNavbarClass(upClass);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollStyle);

    return () => {
      window.removeEventListener('scroll', updateScrollStyle);
    };
  }, [upClass, downClass]);

  return navbarClass;
}
