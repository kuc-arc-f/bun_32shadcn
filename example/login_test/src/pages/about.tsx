//
export default function Page(props: any) { 
  return (
    <html>
        <head>
        <title>welcome</title>
        </head>
        <div id="root"></div>
        {(process.env.NODE_ENV !== "production") ? (
            <script type="module" src="/static/about.js"></script>
        ): (
            <script type="module" src="/public/static/about.js"></script>
        )}        
    </html>
    );
}
/*
{(process.env.NODE_ENV !== "production") ? (
    <link href="/static/main.css" rel="stylesheet" /> 
): (
    <link href="/public/static/main.css" rel="stylesheet" /> 
)}
*/
