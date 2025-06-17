import "@/styles/globals.css";

export const metadata = {
  title: "Rohit Kumar | Portfolio",
  description:
    "Personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer.",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
