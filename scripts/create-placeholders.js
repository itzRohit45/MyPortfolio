"use strict";

const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// Create public/images folder if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder images
const placeholders = [
  "profile.jpg",
  "project1.jpg",
  "project2.jpg",
  "project3.jpg",
  "project4.jpg",
  "project5.jpg",
  "project6.jpg",
];

console.log("Creating placeholder images...");
placeholders.forEach((file) => {
  const outputPath = path.join(imagesDir, file);
  if (!fs.existsSync(outputPath)) {
    // Create a simple placeholder image using Node.js
    const width = 800;
    const height = 600;

    // Generate SVG placeholder with some text
    const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#4831D4" />
      <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${file.replace(".jpg", "")}
      </text>
    </svg>
    `;

    fs.writeFileSync(outputPath.replace(".jpg", ".svg"), svgContent);

    console.log(`Created placeholder: ${file.replace(".jpg", ".svg")}`);
  }
});

console.log("Placeholder images created successfully!");
