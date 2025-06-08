// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   const preloaderRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 4000); // 3 seconds for demonstration

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isLoaded) {
//       gsap.to(preloaderRef.current, {
//         y: "-100%",
//         duration: 1,
//         ease: "power3.out",
//       });
//     }
//   }, [isLoaded]);

//   return (
//     <div
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "#230e2a",
//         color: "white",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "2rem",
//         zIndex: 9999,
//       }}
//     >
//       <div>Loading...</div>
//     </div>
//   );
// };

// export default Preloader;





// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   const preloaderRef = useRef(null);
//   const loaderRef = useRef([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Animate dot loader
//     loaderRef.current.forEach((dot, i) => {
//       gsap.fromTo(
//         dot,
//         { y: 0 },
//         {
//           y: -10,
//           repeat: -1,
//           yoyo: true,
//           ease: "power1.inOut",
//           duration: 0.5,
//           delay: i * 0.2,
//         }
//       );
//     });

//     // Simulate loading complete
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 4000); // 4 seconds for demonstration

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isLoaded) {
//       const tl = gsap.timeline();

//       // Animate dot loader out
//       tl.to(loaderRef.current, {
//         opacity: 0,
//         y: -20,
//         stagger: 0.1,
//         duration: 0.3,
//         ease: "power2.in",
//       })

//       // Animate preloader up and away
//       .to(preloaderRef.current, {
//         y: "-100%",
//         duration: 1,
//         ease: "power4.inOut",
//       });
//     }
//   }, [isLoaded]);

//   return (
//     <div
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "linear-gradient(90deg, #14091a, hsl(294, 70%, 21%))",
//         color: "white",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "2rem",
//         zIndex: 9999,
//         flexDirection: "column",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Loading</div>
//       <div style={{ display: "flex", gap: "0.5rem" }}>
//         {[0, 1, 2].map((_, i) => (
//           <div
//             key={i}
//             ref={(el) => (loaderRef.current[i] = el)}
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               background: "white",
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Preloader;





// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   const preloaderRef = useRef(null);
//   const ringRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Rotate ring infinitely
//     gsap.to(ringRef.current, {
//       rotate: 360,
//       duration: 2,
//       repeat: -1,
//       ease: "linear",
//     });

//     // Simulate load complete
//     const timer = setTimeout(() => {
//       const tl = gsap.timeline();

//       // Scale ring out
//       tl.to(ringRef.current, {
//         scale: 1.5,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.in",
//       })
//       // Slide preloader away
//       .to(preloaderRef.current, {
//         y: "-100%",
//         duration: 1,
//         ease: "power4.inOut",
//         onComplete: () => setIsLoaded(true),
//       });
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoaded) return null;

//   return (
//     <div
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "linear-gradient(90deg, #14091a, hsl(294, 70%, 21%))",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999,
//       }}
//     >
//       <svg
//         ref={ringRef}
//         width="100"
//         height="100"
//         viewBox="0 0 100 100"
//         fill="none"
//       >
//         <circle
//           cx="50"
//           cy="50"
//           r="40"
//           stroke="white"
//           strokeWidth="4"
//           strokeDasharray="62.8 62.8"
//           strokeLinecap="round"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Preloader;




// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   const preloaderRef = useRef(null);
//   const spinnerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Rotate spinner
//     gsap.to(spinnerRef.current, {
//       rotate: 360,
//       duration: 1.2,
//       repeat: -1,
//       ease: "linear",
//     });

//     // Simulate loading
//     const timer = setTimeout(() => {
//       const tl = gsap.timeline();

//       // Animate spinner exit
//       tl.to(spinnerRef.current, {
//         scale: 2,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.inOut",
//       })
//       // Slide preloader up
//       .to(preloaderRef.current, {
//         y: "-100%",
//         duration: 0.8,
//         ease: "power4.inOut",
//         onComplete: () => setIsLoaded(true),
//       });
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoaded) return null;

//   return (
//     <div
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "linear-gradient(90deg, #14091a, hsl(294, 70%, 21%))",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         ref={spinnerRef}
//         style={{
//           width: "80px",
//           height: "80px",
//           border: "4px solid transparent",
//           borderTop: "4px solid #ff00ff",
//           borderRight: "4px solid #00ffff",
//           borderRadius: "50%",
//           background: "linear-gradient(45deg, #ff00ff, #00ffff)",
//           backgroundClip: "text",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//           boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5)",
//         }}
//       ></div>
      
//     </div>
//   );
// };

// export default Preloader;




// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   const preloaderRef = useRef(null);
//   const spinnerRef = useRef(null);
//   const welcomeRef = useRef(null);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     // Spinner rotation
//     gsap.to(spinnerRef.current, {
//       rotate: 360,
//       duration: 1.2,
//       repeat: -1,
//       ease: "linear",
//     });

//     // Spinner exit & Welcome message sequence
//     const timer = setTimeout(() => {
//       const tl = gsap.timeline();

//       // Exit spinner
//       tl.to(spinnerRef.current, {
//         scale: 2,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.inOut",
//       })

//       // Show Welcome message
//       .to(welcomeRef.current, {
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//       })

//       // Wait for 1.5 seconds
//       .to({}, { duration: 1.5 })

//       // Hide Welcome message & slide preloader up
//       .to(welcomeRef.current, {
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.in",
//       })
//       .to(preloaderRef.current, {
//         y: "-100%",
//         duration: 0.8,
//         ease: "power4.inOut",
//         onComplete: () => setShowContent(true),
//       });
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (showContent) return null; // Preloader removed, show actual content

//   return (
//     <div
//       ref={preloaderRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "linear-gradient(90deg, #14091a, hsl(294, 70%, 21%))",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         ref={spinnerRef}
//         style={{
//           width: "80px",
//           height: "80px",
//           border: "4px solid transparent",
//           borderTop: "4px solid #ff00ff",
//           borderRight: "4px solid #00ffff",
//           borderRadius: "50%",
//           boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5)",
//         }}
//       ></div>

//       <div
//         ref={welcomeRef}
//         style={{
//           marginTop: "20px",
//           fontSize: "2rem",
//           fontWeight: "bold",
//           color: "white",
//           opacity: 0,
//         }}
//       >
//         Welcome to my portfolio
//       </div>
//     </div>
//   );
// };

// export default Preloader;




import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const spinnerRef = useRef(null);
  const welcomeRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Spinner rotation
    gsap.to(spinnerRef.current, {
      rotate: 360,
      duration: 1.2,
      repeat: -1,
      ease: "linear",
    });

    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      // Spinner exit
      tl.to(spinnerRef.current, {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })

      // Show Welcome with scale-in effect
      .to(welcomeRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)", // bouncy pop-in
      })

      // Wait a bit
      .to({}, { duration: 1.5 })

      // Hide Welcome & remove preloader
      .to(welcomeRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(preloaderRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => setShowContent(true),
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showContent) return null;

  return (
    <div
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, #14091a, hsl(294, 70%, 21%))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <div
        ref={spinnerRef}
        style={{
          width: "80px",
          height: "80px",
          border: "4px solid transparent",
          borderTop: "4px solid #ff00ff",
          borderRight: "4px solid #00ffff",
          borderRadius: "50%",
          boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5)",
        }}
      ></div>

      <div
        ref={welcomeRef}
        style={{
          marginTop: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "white",
          opacity: 0,
          transform: "scale(0.8)", // Initial small scale
        }}
      >
        Welcome to my portfolio
      </div>
    </div>
  );
};

export default Preloader;

