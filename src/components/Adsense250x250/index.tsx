import React, { useEffect } from "react";

import { Container } from './styles';

export default function Adsense250x250() {
  let adsbygoogle: any;

  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch(err) {
      console.log(err);
    }
  }, [adsbygoogle]);

  return (
    <Container>
      <ins
        className="adsbygoogle"
        style={{
          display: "display:inline-block;width:250px;height:250px"
        }}
        data-ad-client="ca-pub-0338836461603030"
        data-ad-slot="3167829446"
      />
    </Container>
  );
};
