/**
 * Utility functions for preloading and optimizing assets
 */

// Preload multiple video files
export const preloadVideos = (videoSources) => {
  if (typeof window === 'undefined') return;

  videoSources.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'video';
    link.type = 'video/mp4';
    document.head.appendChild(link);
  });
};

// Preload images (useful for gallery or important images)
export const preloadImages = (imageSources) => {
  if (typeof window === 'undefined') return;
  
  imageSources.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Optimize video element for better performance
export const optimizeVideoElement = (videoElement) => {
  if (!videoElement) return;
  
  // Set attributes for better performance
  videoElement.setAttribute('playsinline', '');
  videoElement.setAttribute('preload', 'metadata');
  videoElement.setAttribute('disablePictureInPicture', '');
  
  // Set lower resolution for mobile
  if (window.innerWidth < 768) {
    videoElement.setAttribute('width', '360');
  }
};

// Decode images before displaying them
export const decodeImageBeforeShow = async (imgElement) => {
  if (!imgElement || !imgElement.decode) return;
  
  try {
    await imgElement.decode();
    imgElement.style.opacity = '1';
  } catch (err) {
    console.error('Image failed to decode:', err);
  }
};
