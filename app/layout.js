import "./globals.css";

export const metadata = {
  title: "Charlie Revett (@revcd) • Software Engineer",
  description: "Software engineer based in London.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
