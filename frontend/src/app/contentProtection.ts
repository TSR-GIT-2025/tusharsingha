'use client';

export function enableContentProtection() {
  if (typeof window === 'undefined') return;

  try {
    // Disable right-click context menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Enhanced keyboard shortcuts prevention
  document.addEventListener('keydown', (e) => {
    // Prevent PrintScreen
    if (e.key === 'PrintScreen' || e.key === 'PrintScreen' || e.keyCode === 44) {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl/Cmd + Shift + C/I/J/K (Developer Tools)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && 
        (e.key === 'C' || e.key === 'I' || e.key === 'J' || e.key === 'K' || 
         e.key === 'c' || e.key === 'i' || e.key === 'j' || e.key === 'k')) {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl/Cmd + C/S/U (Copy, Save, View Source)
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 's' || e.key === 'u' || 
         e.key === 'C' || e.key === 'S' || e.key === 'U')) {
      e.preventDefault();
      return false;
    }

    // Prevent F12, F11 (Developer Tools, Full Screen)
    if (e.key === 'F12' || e.key === 'F11') {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  // Disable text selection and context menu
  document.addEventListener('selectstart', (e) => e.preventDefault(), { capture: true });
  document.addEventListener('dragstart', (e) => e.preventDefault(), { capture: true });
  
  // Block screen capture API and recording
  if (navigator.mediaDevices) {
    Object.defineProperty(navigator.mediaDevices, 'getDisplayMedia', {
      value: async () => {
        throw new Error('Screen recording is not allowed');
      },
      configurable: false
    });
  }

  // Add subtle watermark
  const watermark = document.createElement('div');
  watermark.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 12px;
    color: rgba(128, 128, 128, 0.15);
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    z-index: 10000;
  `;
  watermark.textContent = '';
  document.body.appendChild(watermark);

  // Enhanced CSS protection for media elements only
  const style = document.createElement('style');
  style.textContent = `
    img, video {
      pointer-events: none !important;
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      position: relative !important;
    }

    img::after, video::after {
      content: '' !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background: transparent !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);

  // Prevent debugging in a less intrusive way
  const debugPreventInterval = setInterval(() => {
    const devtools = /./;
    devtools.toString = function() {
      return 'Protected Content';
    }
    console.log('%c', devtools);
  }, 2000);

  // Cleanup function
  return () => {
    clearInterval(debugPreventInterval);
  };
  } catch (error) {
    console.error('Error in content protection:', error);
  }
}