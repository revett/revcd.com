import "./globals.css";

export const metadata = {
  title: "Charlie Revett",
  description: "TODO",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
