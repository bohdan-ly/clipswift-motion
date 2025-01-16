import Script from 'next/script';

import * as gtag from '../lib/gtag';

function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        defer
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        defer
        id="vid-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (v, i, d, a, l, y, t, c, s) {
          y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
          if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
          };}
          vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
          })(window, document, 'Vidalytics', 'vidalytics_embed_lWxyJvde0Q1x5wHJ', 'https://fast.vidalytics.com/embeds/quPJhHrS/lWxyJvde0Q1x5wHJ/');
          `,
        }}
      />
    </>
  );
}
export default Analytics;
