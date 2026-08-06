import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // MutationObserver to handle dynamically added elements with .reveal class
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("reveal")) {
              observer.observe(node);
            }
            node.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
          }
        });
      });
    });

    // Initial observation
    const items = document.querySelectorAll(".reveal");
    items.forEach((el) => observer.observe(el));

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}