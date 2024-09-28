import React from 'react';
//
const Layout = ({ children }) => {
  return (
  <html>
    <head>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
    </head>
    <body>
      <main>
        {children}
      </main>
      {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/entry-client.js"></script>
      ): (
        <script type="module" src="/public/static/entry-client.js"></script>
      )}  
    </body>
  </html>    
  );
};
export default Layout;
