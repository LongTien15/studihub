'use client';
import { useState, useEffect } from 'react';
//
import { ServerHeader, ServerHeaderProps } from './server-header';

export const Header = (props: ServerHeaderProps) => {
  const shouldHideHeader = useHideWhileScrolling();
  return <ServerHeader {...props} shouldHideHeader={shouldHideHeader} />;
};

const useHideWhileScrolling = () => {
  const [oldScrollY, setOldScrollY] = useState(0);
  const [toHide, setToHide] = useState(false);
  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      setToHide(oldScrollY < window.scrollY);
      setOldScrollY(window.scrollY);
    };

    window.addEventListener('scroll', showHeaderOnScrollUp);

    return () => {
      window.removeEventListener('scroll', showHeaderOnScrollUp);
    };
  }, [oldScrollY]);

  return toHide;
};
