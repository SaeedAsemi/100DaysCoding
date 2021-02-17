const homePage = `<div class="main-data">
<div class="connect-section"><img src="../img/shopify.png" alt="shopify alexa">
  <h3>Hi, Alexa</h3>
  <p>First, grant Rubix access to your Shopify store.</p><a class="main-btn" href="#">Get Staerted</a>
</div>
</div>
<section class="general-section">
<h1>General</h1>
<p>Set up the basic information for your store.</p>
<div class="main-data">
  <div class="general-section__store">
    <label class="lbl-store" for="store-name">Store name</label>
    <input class="input-section" type="text">
    <label class="lbl-zone" for="time-zone">Time zone</label>
    <select class="input-section" name="time">
      <option value="Alaska">America/Alaska</option>
      <option value="California">America/California</option>
      <option value="Michigan">America/Michigan</option>
      <option value="New York">America/New York</option>
      <option value="New Mexico">America/New Mexico</option>
      <option value="Texas">America/Texas</option>
      <option value="Virginia">America/Virginia</option>
      <option value="Washington">America/Washington</option>
    </select>
  </div>
</div>
</section>
<section class="integ-section">
<h1>Integrations</h1>
<p>Link your ecommerce platforms and any essential apps:</p>
<div class="main-data">
  <div class="connect-section"><img src="../img/shopify.png" alt="shopify">
    <h3>Shopify</h3>
    <p>
      Rubix pulls order, customer, product, cart, and abandoned
      cart information from Shopify hourly.
    </p><a class="main-btn__disc" href="#">Disconnect</a>
  </div>
  <div class="connect-section"><img src="../img/facebook.png" alt="shopify facebook">
    <h3>Facebook Ads</h3>
    <p>Rubix pulls advertising spend from Facebook hourly.</p><a class="main-btn" href="#">Get Staerted</a>
  </div>
  <div class="connect-section"><img src="../img/google-ads.png" alt="Google Ads">
    <h3>Google Ads</h3>
    <p>Rubix pulls advertising spend from Google Ads hourly.</p><a class="main-btn" href="#">Get Staerted</a>
  </div>
  <div class="connect-section"><img src="../img/Google-Analytics.webp" alt="Google Analytics">
    <h3>Google Analytics</h3>
    <p>
      Rubix pulls visit, medium, source, campaign and transaction
      details from Google Analytics hourly.
    </p><a class="main-btn" href="#">Get Staerted</a>
  </div>
</div>
</section>
</div>`;

const overviewPage = `<h2>
  Overview
</h2>`;

const breakdownPage = `<h2>
  Breakdown
</h2>`;

const comparisonPage = `<h2>
  Comparison
</h2>`;

const settingPage = `<h2>
  Settings
</h2>`;

const accountPage = `<h2>
  Account
</h2>`;

const notfoundPage = `<h2>
Oh no, 404 Error
</h2>`;

export {
  homePage,
  breakdownPage,
  comparisonPage,
  settingPage,
  accountPage,
  notfoundPage,
  overviewPage
};
