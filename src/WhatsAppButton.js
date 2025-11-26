import React from "react";

export default function WhatsAppButton({ message }) {
  const url = `https://wa.me/254715137212?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "20px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          animation: "bounce 2s infinite",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 .04 5.33.04 12c0 2.11.55 4.14 1.6 5.93L0 24l6.29-1.63A11.91 11.91 0 0 0 12 24c6.63 0 12-5.33 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.84 0-3.63-.5-5.16-1.44l-.37-.23-3.74.97.99-3.64-.24-.38A10 10 0 0 1 2 12c0-5.52 4.48-10 10-10 2.66 0 5.15 1.04 7.03 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.5-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15s-.76.97-.93 1.17c-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.46.1-.17.05-.32-.02-.46-.07-.15-.66-1.59-.9-2.18-.23-.57-.47-.5-.66-.51l-.57-.01c-.2 0-.52.07-.8.32s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.11 3.22 5.11 4.52.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" />
        </svg>
        Contact us on WhatsApp
      </a>

      {/* Bouncing animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
