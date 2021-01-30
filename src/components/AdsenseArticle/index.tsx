import { Router } from "next/router";
import React from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function AdsenseArticle() {

  Router.events.on('routeChangeComplete', () => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  })

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block"
      }}
      data-ad-client="ca-pub-0338836461603030"
      data-ad-slot="7873909957"
    />
  );
};
