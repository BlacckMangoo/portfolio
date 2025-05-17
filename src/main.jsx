import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { preloadVideos } from './utils/assetLoader.js'

import App from './App.jsx'

// Preload critical assets
// This helps improve initial loading performance
const criticalVideos = [
  '/src/trailer.mp4',
  '/src/sierpinski.mp4',
  '/src/onlynands.mp4'
];

// Preload videos in the background
preloadVideos(criticalVideos);

// Add critical CSS optimization hint
if (document.head) {
  const criticalCssHint = document.createElement('meta');
  criticalCssHint.setAttribute('name', 'viewport-fit');
  criticalCssHint.setAttribute('content', 'cover');
  document.head.appendChild(criticalCssHint);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
