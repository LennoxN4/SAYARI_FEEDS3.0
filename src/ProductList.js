// src/ProductList.js
import React, { useState } from "react";

const products = [
  {
    id: "p1",
    name: "Australian Red Napier",
    description: `Are you a livestock farmer looking to cut down feed costs and boost milk or meat production? Start growing your own high-quality Napier grass and other nutritious fodder today!

✅ Drought-tolerant & fast-growing
✅ Ideal for zero-grazing & free-range systems
✅ Increases milk yield and animal health
✅ One-time planting — harvest for years!`,
    image: "/Images/Austtralian.jpg",
    bundles: [
      { label: "50 Cuttings", price: 2500 },
      { label: "100 Cuttings", price: 4500 },
      { label: "1/8 Acre Bundle", price: 9000 },
      { label: "1/4 Acre Bundle", price: 16000 },
    ],
  },
  {
    id: "p2",
    name: "Juncao China Magic Grass",
    description: `High protein grass up to 18% CP, drought-resistant, high biomass yield, velvety leaves, fast regrowth.`,
    image: "/Images/Juncao.jpg",
    bundles: [
      { label: "100 Cuttings", price: 2500 },
      { label: "200 Cuttings", price: 4500 },
    ],
  },
  {
    id: "p3",
    name: "Super Napier Pakchong 1",
    description: `Hybrid Napier Grass from Thailand developed by Dr. Krailas Kiyothong.

✅ Highest crude protein in Kenya (16-18%)
✅ Yield up to 200 tons/acre/year
✅ Suitable for 15 cows/acre
✅ Excellent for silage without additives
✅ Smooth, hairless leaves, propagated via cuttings
✅ First cut 75-90 days after planting, subsequent cuts every 45-60 days
✅ 7-8 cuttings/year, 50-60 tons/cutting`,
    image: "/Images/Pakchong.jpg",
    bundles: [
      { label: "150 Cuttings", price: 3000 },
      { label: "300 Cuttings", price: 5500 },
    ],
  },
  {
    id: "p4",
    name: "Super Vine K (Sweet Potato Foliage)",
    description: `Sweet potato foliage (leaves & vines) — high protein livestock feed.

🍀 CP up to 30%
🍀 Suitable for cattle, goats, pigs, rabbits, and poultry
🍀 Can be fed fresh, wilted, ensiled, or sun-dried as hay
🍀 Supports milk production, growth, and body condition
🍀 Cost-effective & sustainable`,
    image: "/Images/superVineK.jpg",
    bundles: [
      { label: "200 Cuttings", price: 2500 },
      { label: "400 Cuttings", price: 4500 },
    ],
  },
  {
    id: "p5",
    name: "Brachiaria Grass",
    description: `Tropical forage grass ideal for pasture and silage.

✅ Perennial & dense growth
✅ Height 0.5–1.5 m
✅ Deep fibrous root system, drought-resistant
✅ High biomass yield
✅ Palatable & nutritious
✅ Suitable for rotational grazing
✅ Some species nitrogen-fixing`,
    image: "/Images/Brachiria.jpg",
    bundles: [
      { label: "400 Splits", price: 3500 },
      { label: "600 Splits", price: 5000 },
    ],
  },
  {
    id: "p6",
    name: "Trichantera Fodder Shrub",
    description: `High-protein shrub (23-28% CP) for cattle, goats, sheep, poultry & rabbits.

✅ Drought-tolerant & rapid growth
✅ 1st harvest after 8 months, subsequent every 2 months
✅ Can be used for shade, windbreaks, green manure
✅ Highly palatable & digestible`,
    image: "/Images/Trichantera.jpg",
    bundles: [
      { label: "4 Potted Plants", price: 2500 },
      { label: "8 Potted Plants", price: 4500 },
    ],
  },
  {
    id: "p7",
    name: "Indonesian Smart Dwarf Napier",
    description: `Boost your livestock nutrition with high-yield, resilient Napier!

✅ High-yield & fast-growing
✅ Nutritious & digestible
✅ Dwarf variety, easy to manage
✅ Resilient & drought-tolerant
✅ One-time planting, long-lasting fodder`,
    image: "/Images/Indonesian.jpg",
    bundles: [
      { label: "50 Cuttings", price: 5000 },
      { label: "100 Cuttings", price: 9000 },
    ],
  },
  {
    id: "p8",
    name: "Sorghum Forage (High-Protein Fodder)",
    description: `Boost your livestock\'s nutrition with our high-protein Sorghum Forage!

✅ High in protein for better growth and milk production
✅ Fast-growing and drought-tolerant
✅ Ideal for zero-grazing and cut-and-carry systems
✅ Easy to plant and maintain
✅ Suitable for dairy, goats, and beef cattle`,
    image: "/Images/SORGHUM FORAGE.jpg",
    bundles: [
      { label: "1kg Seeds", price: 2500 },
      { label: "2kg Seeds", price: 5000 },
      { label: "5kg Seeds", price: 12500 },
    ],
  },
];

const ProductList = () => {
  const [selectedBundles, setSelectedBundles] = useState({});

  const handleSelectChange = (productId, bundle) => {
    setSelectedBundles((prev) => ({ ...prev, [productId]: bundle }));
  };

  const handleWhatsAppClick = (product) => {
    const bundle = selectedBundles[product.id] || product.bundles[0];
    const message = `Hi! I want to order ${bundle.label} of ${product.name} priced at Ksh ${bundle.price}`;
    const url = `https://wa.me/254715137212?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCartOrder = () => {
    const items = Object.entries(selectedBundles)
      .map(([productId, bundle]) => {
        const product = products.find((p) => p.id === productId);
        return `${product.name} - ${bundle.label} (Ksh ${bundle.price})`;
      })
      .join("\n");

    if (!items) return alert("Please select at least one product in the cart.");

    const message = encodeURIComponent(
      `Hello Sayari Feeds! I would like to order the following:\n${items}`
    );
    window.open(`https://wa.me/254715137212?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "15px",
              width: "320px",
              textAlign: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "15px" }}
            />
            <h3>{product.name}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>

            <select
              style={{ padding: "8px", margin: "10px 0", width: "80%" }}
              onChange={(e) => {
                const bundle = product.bundles.find(
                  (b) => b.label === e.target.value
                );
                handleSelectChange(product.id, bundle);
              }}
              value={selectedBundles[product.id]?.label || ""}
            >
              <option value="">Select a bundle</option>
              {product.bundles.map((bundle, idx) => (
                <option key={idx} value={bundle.label}>
                  {bundle.label} — Ksh {bundle.price}
                </option>
              ))}
            </select>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#25D366",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleWhatsAppClick(product)}
            >
              Order via WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {Object.keys(selectedBundles).length > 0 && (
        <div
          style={{
            marginTop: "30px",
            border: "2px solid #25D366",
            borderRadius: "15px",
            padding: "20px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f0fff5",
          }}
        >
          <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#25D366"
            >
              <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 14h9.84l1.24-6H6l1.16 6zM6 4h15v2H6V4z" />
            </svg>
            Your Cart
          </h2>
          <ul>
            {Object.entries(selectedBundles).map(([productId, bundle]) => {
              const product = products.find((p) => p.id === productId);
              return (
                <li key={productId}>
                  {product.name} — {bundle.label} (Ksh {bundle.price})
                </li>
              );
            })}
          </ul>
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={handleCartOrder}
          >
            Order Cart via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
