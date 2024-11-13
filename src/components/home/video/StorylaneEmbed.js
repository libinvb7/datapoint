// components/StorylaneEmbed.js
import Script from 'next/script';

const StorylaneEmbed = () => {
  return (
    <div>
      {/* Async script for Storylane */}
      <Script
        src="https://js.storylane.io/js/v2/storylane.js"
        strategy="afterInteractive" // loads the script after page has loaded
      />
      {/* Embed container */}
      <div
        className="sl-embed"
        style={{
          position: 'relative',
          paddingBottom: 'calc(50.26% + 25px)',
          width: '100%',
          height: 0,
          transform: 'scale(1)',
        }}
      >
        <iframe
          loading="lazy"
          className="sl-demo"
          src="https://app.storylane.io/demo/6lngrcpkxznx?embed=inline"
          name="sl-embed"
          allow="fullscreen"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '1px solid rgba(63,95,172,0.35)',
            boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
            borderRadius: '10px',
            boxSizing: 'border-box',
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default StorylaneEmbed;
