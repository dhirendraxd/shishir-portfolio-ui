/**
 * Shishir Joshi - Mobile Detection Hook
 * Responsive Design for Designer Portfolio & UI/UX Showcase
 * 
 * This hook provides mobile responsiveness for Shishir's portfolio website,
 * ensuring optimal display across all devices including smartphones, tablets,
 * and desktop computers. Critical for modern web design and user experience.
 */
import * as React from "react";

// Mobile breakpoint (768px) - Standard tablet/mobile threshold
// Ensures Shishir Joshi's graphic design and UI/UX portfolio displays perfectly on all screens
const MOBILE_BREAKPOINT = 768;

/**
 * useIsMobile - React Hook for Mobile Device Detection
 * 
 * Detects if the user is viewing Shishir Joshi's designer portfolio on a mobile device
 * or tablet. This custom hook ensures the responsive design works seamlessly across
 * different screen sizes - from iPhone to iPad to desktop monitors.
 * 
 * Used throughout the portfolio for:
 * - Navigation menu adaptation (hamburger vs full menu)
 * - Component layout adjustments
 * - Image optimization for mobile users
 * - Touch-friendly interface for smartphone visitors
 * 
 * Keywords: Responsive Design, Mobile First, Device Detection, UI/UX, Accessibility
 * 
 * @returns {boolean} True if viewing on mobile device (< 768px), false otherwise
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Create media query listener for mobile breakpoint
    // Monitors viewport width changes for responsive behavior
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      // Update mobile state when window is resized or device orientation changes
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Listen for media query changes (e.g., device rotation, window resize)
    mql.addEventListener("change", onChange);
    
    // Set initial mobile state based on current window size
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Cleanup: Remove event listener when component unmounts
    // Prevents memory leaks in Shishir's portfolio application
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return boolean: true for mobile, false for desktop
  // Used in navigation, layouts, and responsive components throughout the portfolio
  return !!isMobile;
}
