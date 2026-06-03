"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ClientScripts() {
  const typedInstancesRef = useRef<Map<Element, any>>(new Map());

  useEffect(() => {
    // Initialize Typed.js after all scripts are loaded
    const initTyped = () => {
      if (typeof window !== "undefined" && (window as any).Typed) {
        const typedElements = document.querySelectorAll(".typed");
        typedElements.forEach((element) => {
          // Check if this element already has a Typed instance
          if (!typedInstancesRef.current.has(element)) {
            try {
              const typedInstance = new (window as any).Typed(element, {
                stringsElement: ".typed-strings",
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 100000000000,
              });
              // Store the instance for cleanup
              typedInstancesRef.current.set(element, typedInstance);
            } catch (error) {
              console.warn("Failed to initialize Typed.js:", error);
            }
          }
        });
      }
    };

    // Cleanup function to destroy existing instances
    const cleanupTyped = () => {
      typedInstancesRef.current.forEach((instance, element) => {
        try {
          if (instance && typeof instance.destroy === "function") {
            instance.destroy();
          }
        } catch (error) {
          console.warn("Failed to destroy Typed.js instance:", error);
        }
      });
      typedInstancesRef.current.clear();
    };

    // Initialize Owl Carousel
    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).$ &&
        (window as any).$.fn.owlCarousel
      ) {
        (window as any)
          .$(".owl-carousel")
          .each(function (this: any, index: number) {
            const a = (window as any).$(this);
            // Skip if already initialized
            if (a.hasClass("owl-loaded")) return;
            const rtlVal = (window as any).$("html").attr("dir") === "rtl";
            const responsive = a.data("responsive") || {
              0: { items: a.data("items-xs") || 1 },
              576: { items: a.data("items-sm") || 1 },
              768: { items: a.data("items-md") || 1 },
              992: { items: a.data("items-lg") || 1 },
            };
            a.owlCarousel({
              rtl: rtlVal,
              autoplay: a.data("autoplay"),
              center: a.data("center"),
              autoplayTimeout: a.data("autoplaytimeout") || 5000,
              autoplayHoverPause: a.data("autoplayhoverpause"),
              loop: a.data("loop"),
              speed: a.data("speed"),
              nav: a.data("nav"),
              dots: a.data("dots"),
              margin: a.data("margin"),
              stagePadding: a.data("stagepadding"),
              items: a.data("items") || 1,
              responsive: responsive,
              navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>',
              ],
            });
          });
      }
    };

    // Initialize smooth scroll
    const initSmoothScroll = () => {
      if (typeof window !== "undefined" && (window as any).$) {
        (window as any)
          .$(".smooth-scroll")
          .on("click", function (this: any, event: Event) {
            event.preventDefault();
            const sectionTo = (window as any).$(this).attr("href");
            if (sectionTo) {
              (window as any)
                .$("html, body")
                .stop()
                .animate(
                  {
                    scrollTop: (window as any).$(sectionTo).offset().top - 50,
                  },
                  1500,
                  "easeInOutExpo"
                );
            }
          });
      }
    };

    // Initialize WOW.js with performance optimizations
    const initWOW = () => {
      if (typeof window !== "undefined" && (window as any).WOW) {
        new (window as any).WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
          callback: function (box: any) {
            // Optional callback for when animation completes
          },
          scrollContainer: null,
        }).init();
      }
    };

    // Try to initialize immediately
    initTyped();
    initCarousel();
    initSmoothScroll();
    initWOW();

    // Retry after delays to ensure scripts are loaded
    const timer1 = setTimeout(() => {
      initTyped();
      initCarousel();
      initSmoothScroll();
      initWOW();
    }, 1000);
    const timer2 = setTimeout(() => {
      initCarousel();
    }, 2500);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      cleanupTyped();
    };
  }, []);

  return (
    <>
      <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendor/jquery.easing/jquery.easing.min.js"
        strategy="lazyOnload"
      />
      <Script src="/vendor/wow/wow.min.js" strategy="lazyOnload" />
      <Script src="/vendor/typed/typed.min.js" strategy="lazyOnload" />
      <Script
        src="/vendor/jquery.appear/jquery.appear.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/vendor/owl.carousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
