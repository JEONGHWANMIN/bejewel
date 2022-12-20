import { useEffect, useRef, useState } from 'react';

function useDropDown() {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleDropClick = (value?: boolean) => {
    if (value !== undefined) {
      setIsDrop(value);
      return;
    }
    setIsDrop(!isDrop);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsDrop(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return {
    ref,
    isDrop,
    handleDropClick,
  };
}

export default useDropDown;
