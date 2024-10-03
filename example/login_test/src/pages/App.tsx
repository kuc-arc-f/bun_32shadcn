import * as React from 'react';
import Layout from './Layout';
import Head from '../components/Head'

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
    <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
      {(process.env.NODE_ENV !== "production") ? (
          <link href="/static/style.css" rel="stylesheet" />
      ): (
        <link href="/public/static/style.css" rel="stylesheet" />
      )} 
    </head>
    <body>
      <main>
        <div id="root"></div>
      </main>
      {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/entry-client.js"></script>
      ): (
        <script type="module" src="/public/static/entry-client.js"></script>
      )}  
    </body>
  </html>
  );
}
/*
<script type="module" src="/static/entry-client.js"></script>
*/

