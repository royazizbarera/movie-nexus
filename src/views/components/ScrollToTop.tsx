import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas
  }, [pathname]); // Terpanggil setiap kali rute berubah

  return null;
}

export function ScrollToTopHere() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas
  }, []); // Terpanggil setiap kali rute berubah
  return null;
}