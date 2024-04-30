import React from 'react';

const SquareWebPaymentsQuickstart = () => {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://sandbox.web.squarecdn.com/v1/square.js"
        ></script>
        <meta charset="utf-8" />
        <title>Square Web Payments Quickstart</title>
        <link href="app.css" rel="stylesheet" />
      </head>

      <body>
        <div id="landing-page-layout">
          

          <div id="example-container">
            <h3>Examples</h3>
            <ul id="example-list">
              <li>
                <a href="/examples/card-payment.html">Card Payment</a>
              </li>
    
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
};

export default SquareWebPaymentsQuickstart;
