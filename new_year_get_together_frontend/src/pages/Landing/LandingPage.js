import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Festive landing page with hero, language picker, CTA.
 */
export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to the New Year Get-Together Event!</h1>
      <p>
        Celebrate, connect, and organize your resort experience.<br />
        <b>Festive, modern, easy to use.</b>
      </p>
      <a href="/register" className="btn btn-red">Get Started</a>
      <a href="/login" className="btn btn-outline ml-2">Login</a>
    </div>
  );
}
