// import { useEffect, useRef } from "react";

// const Inpostad = () => {
//   const adLoaded = useRef(false); // Prevent duplicate ad loading

//   useEffect(() => {
//     if (adLoaded.current) return; // Ensure ads are only loaded once
//     adLoaded.current = true;

//     try {
//       // Check if AdSense script is already in the document
//       if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
//         const script = document.createElement("script");
//         script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
//         script.async = true;
//         script.crossOrigin = "anonymous";
//         script.setAttribute("data-ad-client", "ca-pub-2256137690928370");

//         document.body.appendChild(script);

//         script.onload = () => {
//           if (window.adsbygoogle) {
//             window.adsbygoogle.push({});
//           }
//         };
//       } else {
//         if (window.adsbygoogle) {
//           window.adsbygoogle.push({});
//         }
//       }
//     } catch (error) {
//       console.error("Google Ads Error:", error);
//     }
//   }, []);

//   return (
//     <div style={{ textAlign: "center", margin: "20px 0" }}>
//       {/* Google AdSense Ad Slot */}
//       <ins
//         className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client="ca-pub-2256137690928370"
//         data-ad-slot="6193219313" // Replace with your actual Ad Slot ID
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       ></ins>
//     </div>
//   );
// };

// export default Inpostad;


import { useEffect } from "react";

const HighPerformanceAd = () => {
  useEffect(() => {
    // Create script element for ad configuration
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : 'de8ffb892ac5890839efa901542d652d',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    // Create script element for ad script
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//www.highperformanceformat.com/de8ffb892ac5890839efa901542d652d/invoke.js";

    // Append scripts to the document body
    document.body.appendChild(configScript);
    document.body.appendChild(adScript);

    return () => {
      // Cleanup scripts when the component unmounts
      document.body.removeChild(configScript);
      document.body.removeChild(adScript);
    };
  }, []);

  return <div id="ad-container" style={{ width: "728px", height: "90px" }}></div>;
};

export default HighPerformanceAd;
