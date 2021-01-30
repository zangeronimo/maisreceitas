

declare global {
  interface Window {
    gtag: any;
  }
}

export const load = () => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch {}
};
