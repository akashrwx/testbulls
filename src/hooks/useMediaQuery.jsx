import { useLayoutEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window === 'object' ? window.matchMedia(query).matches : false,
  );

  useLayoutEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addListener(onChange);
    return () => {
      mql.removeListener(onChange);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
