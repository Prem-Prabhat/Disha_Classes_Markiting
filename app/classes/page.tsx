
"use client"; // Required for using hooks like useEffect

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' if you're in the 'pages' directory

export default function ClassesRedirectPage() {
  const router = useRouter();
  const externalClassesUrl = 'https://dishaclasses.akamai.net.in/';

  useEffect(() => {
    // Redirect the user to the external URL as soon as the component loads
    window.location.href = externalClassesUrl;
  }, []); // The empty array ensures this effect runs only once

  // This content will be briefly displayed while the page redirects.
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      fontSize: '1.2rem',
      color: '#555'
    }}>
      <p>Loading our courses... Please wait.</p>
    </div>
  );
}