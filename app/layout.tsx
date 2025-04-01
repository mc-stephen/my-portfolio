import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import LayoutUi from "./layout.ui";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap", // Ensure it loads properly
  preload: false, // Prevents Next.js from preloading it at build time
});

export const metadata: Metadata = {
  category: "portfolio",
  applicationName: "mc-stephen",
  creator: "Chukwuemeka Stephen Michael",
  title: "Chukwuemeka Stephen Michael | Software Engineer",
  description:
    "Welcome to the personal website of Chukwuemeka Stephen Michael, a forward-thinking software engineer specializing in cutting-edge web technologies, system architecture, and problem-solving.",
  keywords: [
    "Chukwuemeka Stephen Michael",
    "Software Engineer",
    "Web Development",
    "Full-Stack Development",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Engineer",
    "Backend Developer",
  ],
  authors: [
    {
      url: "https://mc-stephen.dev",
      name: "Chukwuemeka Stephen Michael",
    },
  ],
  openGraph: {
    type: "website",
    siteName: "mc-stephen",
    url: "https://mc-stephen.dev",
    title: "Chukwuemeka Stephen Michael | Software Engineer",
    description:
      "Explore the portfolio and thoughts of Chukwuemeka Stephen Michael, a software engineer passionate about building scalable, high-performance web applications.",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Chukwuemeka Stephen Michael",
        url: "https://mc-stephen.com/og-image.jpg", // Replace with your Open Graph image
      },
    ],
  },
  twitter: {
    site: "@mc-stephen", // Change to your Twitter handle if you have one
    creator: "@mc-stephen",
    card: "summary_large_image",
    title: "Chukwuemeka Stephen Michael | Software Engineer",
    images: ["https://mc-stephen.com/twitter-image.jpg"], // Replace with your Twitter card image
    description:
      "A software engineer specializing in modern web development, performance optimization, and scalable architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <LayoutUi>{children}</LayoutUi>
        <Script
          src="https://kit.fontawesome.com/7b9eb9d529.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
