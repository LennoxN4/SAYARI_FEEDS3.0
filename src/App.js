import React from "react";
import ProductList from "./ProductList";
import WhatsAppButton from "./WhatsAppButton";
import ProductSlideshow from "./ProductSlideshow";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/Images/logo.PNG"
          alt="Sayari Feeds Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      {/* Slideshow */}
      <ProductSlideshow />

      {/* Product list */}
      <ProductList />

      {/* WhatsApp contact button */}
      <WhatsAppButton
        phoneNumber="254715137212"
        message="Hi! I want to order Napier seedlings"
      />
    </div>
  );
}

export default App;
