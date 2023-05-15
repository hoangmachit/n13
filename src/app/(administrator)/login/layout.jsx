import Provider from "../../Provider";
export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <header>Header Login Page</header>
          {children}
          <footer>Footer Login Page</footer>
        </Provider>
      </body>
    </html>
  );
}
