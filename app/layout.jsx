import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import backgroundImg from "../public/assets/images/background-img.jpg";
import previewImg from "../public/assets/work/portfolio.jpg";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// Set the base metadata URL
export const metadata = {
  title: "Derrick Munkhbat's Portfolio",
  description: "Code by Derrick Munkhbat",
  metadataBase: new URL("https://derrick-munkhbat-portfolio.vercel.app"),
  openGraph: {
    title: "Derrick Munkhbat's Portfolio",
    description: "Code by Derrick Munkhbat",
    images: [
      {
        url: previewImg.src,
        width: 800,
        height: 600,
      },
    ],
    site_name: "Derrick Munkhbat's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <div
          className="absolute h-screen w-full"
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.3",
          }}
        >
          {/* Empty element for the background image */}
        </div>

        <div
          style={{
            position: "relative", // Add this line
            opacity: "1",
          }}
        >
          {/* Children elements will be rendered on top of the background image */}
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
