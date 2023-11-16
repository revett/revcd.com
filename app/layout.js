import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Charlie Revett",
  description: "TODO",
};

const font = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex bg-neutral-950">
        <div className={`mx-auto ${font.variable} font-serif`}>
          <div className="md:max-w-[640px] m-6 md:m-20 text-neutral-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
