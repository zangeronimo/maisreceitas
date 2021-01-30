import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function AdsenseSidebar() {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block"
      }}
      data-ad-client="ca-pub-0338836461603030"
      data-ad-slot="3167829446"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
