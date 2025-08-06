import React from 'react';

/**
 * PUBLIC_INTERFACE
 * 404/fallback page.
 */
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>404 - Not Found</h2>
      <a href="/">Back to Home</a>
    </div>
  );
}
