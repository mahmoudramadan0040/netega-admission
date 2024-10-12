"use client";

import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>نتيجة التنسيق الداخلي للاقسام</h1>
        </header>
    );
}

const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px", // Adjust height as needed
    backgroundColor: "#f8f9fa", // Light gray background color
    borderBottom: "2px solid #e0e0e0", // Light border at the bottom
};

const titleStyle = {
    fontSize: "2rem", // Font size for larger screens
    fontWeight: "bold",
    color: "#333", // Dark color for the text
    textAlign: "center",
    margin: 0,
};

export default Header;