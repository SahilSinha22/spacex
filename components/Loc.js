"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const GlobeWithPins = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, country: "" });
  const [positions, setPositions] = useState({});

  // Function to determine positions based on screen size
  const calculatePositions = () => {
    const screenWidth = window.innerWidth;

    let pinPositions;

    if (screenWidth <= 640) {
      // Mobile view positions
      pinPositions = {
        africa: { top: "55%", left: "28%" },
        canada: { top: "35%", left: "20%" },
        usa: { top: "42%", left: "55%" },
        russia: { top: "22%", left: "64%" },
      };
    } else if (screenWidth > 640 && screenWidth <= 1024) {
      // Tablet view positions
      pinPositions = {
        africa: { top: "60%", left: "27%" },
        canada: { top: "30%", left: "20%" },
        usa: { top: "40%", left: "50%" },
        russia: { top: "20%", left: "60%" },
      };
    }
    else if (screenWidth > 1024 && screenWidth <= 1280) {
      // Tablet view positions
      pinPositions = {
        africa: { top: "60%", left: "32%" },
        canada: { top: "30%", left: "23%" },
        usa: { top: "40%", left: "52%" },
        russia: { top: "20%", left: "65%" },
      };
    } 
    else if (screenWidth > 1280 && screenWidth <= 1530) {
      // Tablet view positions
      pinPositions = {
        africa: { top: "60%", left: "34%" },
        canada: { top: "30%", left: "28%" },
        usa: { top: "40%", left: "50%" },
        russia: { top: "20%", left: "60%" },
      };
    } else {
      // Desktop view positions
      pinPositions = {
        africa: { top: "58%", left: "38%" },
        canada: { top: "32%", left: "32%" },
        usa: { top: "42%", left: "52%" },
        russia: { top: "18%", left: "58%" },
      };
    }

    setPositions(pinPositions);
  };

  useEffect(() => {
    calculatePositions(); // Call on initial load

    // Recalculate positions when window is resized
    window.addEventListener("resize", calculatePositions);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  // Function to show the tooltip near the pin
  const handleMouseEnter = (countryName, pinPosition) => {
    setTooltip({
      visible: true,
      x: pinPosition.left,
      y: pinPosition.top,
      country: countryName,
    });
  };

  // Function to hide the tooltip when the mouse leaves the pin area
  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, country: "" });
  };

  return (
    <div className="b-2 text-center py-8 lg:pt-12">
      <span className='border-black border-b py-1 text-lg md:text-2xl lg:text-3xl playfair_displays font-bold'> Location we are Catering</span>
      <div className="relative flex justify-center items-center py-10 lg:py-16 w-full">
        <Image src="/World.png" alt="Globe" width={1000} height={1000} />

        {/* Pins */}
        <div>
          {/* Pin for Africa */}
          <Image
            src="/pin.svg"
            alt="Pin"
            className="absolute h-6 w-4 md:h-10 md:w-10"
            style={positions.africa} // Dynamically set position
            width={1000}
            height={1000}
            onMouseEnter={() => handleMouseEnter("Africa", positions.africa)}
            onMouseLeave={handleMouseLeave}
          />

          {/* Pin for Canada */}
          <Image
            src="/pin.svg"
            alt="Pin"
            className="absolute h-6 w-4 md:h-10 md:w-10"
            style={positions.canada}
            width={1000}
            height={1000}
            onMouseEnter={() => handleMouseEnter("Canada", positions.canada)}
            onMouseLeave={handleMouseLeave}
          />

          {/* Pin for U.S.A */}
          <Image
            src="/pin.svg"
            alt="Pin"
            className="absolute h-6 w-4 md:h-10 md:w-10"
            style={positions.usa}
            width={1000}
            height={1000}
            onMouseEnter={() => handleMouseEnter("U.S.A", positions.usa)}
            onMouseLeave={handleMouseLeave}
          />

          {/* Pin for Russia */}
          <Image
            src="/pin.svg"
            alt="Pin"
            className="absolute h-6 w-4 md:h-10 md:w-10"
            style={positions.russia}
            width={1000}
            height={1000}
            onMouseEnter={() => handleMouseEnter("Russia", positions.russia)}
            onMouseLeave={handleMouseLeave}
          />

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="text-xs absolute"
              style={{
                left: tooltip.x,
                top: `calc(${tooltip.y} - 20px)`,
                backgroundColor: "#000000",
                padding: "5px",
                borderRadius: "5px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                color:"white",
              }}
            >
              {tooltip.country}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobeWithPins;
