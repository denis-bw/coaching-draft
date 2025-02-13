import { useContext, useEffect, useState, useCallback } from 'react';
import { 
  UNSAFE_NavigationContext as NavigationContext, 
  useNavigate, 
  useLocation 
} from 'react-router-dom';

export function useNavigationPrompt(when) {
  const navigate = useNavigate();
  const location = useLocation();
  const { navigator } = useContext(NavigationContext);
  const [showPrompt, setShowPrompt] = useState(false);
  const [pendingLocation, setPendingLocation] = useState(null);
  const [isNavigationConfirmed, setIsNavigationConfirmed] = useState(false);

  const normalizePath = useCallback((path) => {
    const basename = '/coaching-draft';
    let normalizedPath = path;
    
    if (normalizedPath.startsWith(basename)) {
      normalizedPath = normalizedPath.substring(basename.length);
    }
    
    normalizedPath = normalizedPath.replace(/\/+/g, '/');
    normalizedPath = normalizedPath.replace(/\/$/, '');
    
    return normalizedPath;
  }, []);

  const isSameLocation = useCallback((currentPath, nextPath) => {
    const normalizedCurrent = normalizePath(currentPath);
    const normalizedNext = normalizePath(nextPath);
    return normalizedCurrent === normalizedNext;
  }, [normalizePath]);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
    setPendingLocation(null);
    setIsNavigationConfirmed(false);
  }, []);

  const handleConfirmNavigation = useCallback(() => {
    if (pendingLocation) {
      setIsNavigationConfirmed(true);
      setShowPrompt(false);
      
      let path;
      if (typeof pendingLocation === 'string') {
        path = normalizePath(pendingLocation);
      } else {
        path = normalizePath(pendingLocation.pathname) + (pendingLocation.search || '');
      }
      
      setTimeout(() => {
        navigate(path);
        setPendingLocation(null);
        setIsNavigationConfirmed(false);
      }, 0);
    }
  }, [pendingLocation, navigate, normalizePath]);

  useEffect(() => {
    if (!when) return;

    let unblock = () => {};

    const block = () => {
      const originalPush = navigator.push;
      const originalReplace = navigator.replace;
      const originalGo = navigator.go;

      navigator.push = (to, ...args) => {
        if (isNavigationConfirmed) {
          return originalPush.apply(navigator, [to, ...args]);
        }

        const toPath = typeof to === 'string' ? to : to.pathname;
        

        if (isSameLocation(location.pathname, toPath)) {
          return originalPush.apply(navigator, [to, ...args]);
        }
        
        const normalizedTo = typeof to === 'string' 
          ? { pathname: normalizePath(to) }
          : { ...to, pathname: normalizePath(to.pathname) };

        setPendingLocation(normalizedTo);
        setShowPrompt(true);
        return;
      };

      navigator.replace = (to, ...args) => {
        if (isNavigationConfirmed) {
          return originalReplace.apply(navigator, [to, ...args]);
        }

        const toPath = typeof to === 'string' ? to : to.pathname;
        

        if (isSameLocation(location.pathname, toPath)) {
          return originalReplace.apply(navigator, [to, ...args]);
        }
        
        const normalizedTo = typeof to === 'string'
          ? { pathname: normalizePath(to) }
          : { ...to, pathname: normalizePath(to.pathname) };

        setPendingLocation(normalizedTo);
        setShowPrompt(true);
        return;
      };

      navigator.go = (delta) => {
        if (isNavigationConfirmed) {
          return originalGo.apply(navigator, [delta]);
        }
        setPendingLocation(location);
        setShowPrompt(true);
        return;
      };

      return () => {
        navigator.push = originalPush;
        navigator.replace = originalReplace;
        navigator.go = originalGo;
      };
    };

    unblock = block();

    const handleBeforeUnload = (e) => {
      if (when) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      unblock();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [when, navigator, location, isNavigationConfirmed, normalizePath, isSameLocation]);

  return [showPrompt, handleConfirmNavigation, cancelNavigation];
}