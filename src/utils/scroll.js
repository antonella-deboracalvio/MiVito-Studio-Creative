export function resetWindowScroll() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  } catch {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  if (document.scrollingElement) {
    document.scrollingElement.scrollTop = 0;
    document.scrollingElement.scrollLeft = 0;
  }
}

export function resetElementScroll(element) {
  if (!element) {
    return;
  }

  element.scrollTop = 0;
  element.scrollLeft = 0;
}
