import { useEffect, useRef } from "react";

const Inpostad = () => {
  const adLoaded = useRef(false); // Prevent duplicate ad loading

  useEffect(() => {
    if (adLoaded.current) return; // Ensure ads are only loaded once
    adLoaded.current = true;

    try {
      // Check if AdSense script is already in the document
      if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.setAttribute("data-ad-client", "ca-pub-2256137690928370");

        document.body.appendChild(script);

        script.onload = () => {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
          }
        };
      } else {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      }
    } catch (error) {
      console.error("Google Ads Error:", error);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      {/* Google AdSense Ad Slot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2256137690928370"
        data-ad-slot="6193219313" // Replace with your actual Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Inpostad;
