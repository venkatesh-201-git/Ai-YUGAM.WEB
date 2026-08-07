export const bsGrid = {
  id: 'grid',
  title: 'BS5 Grid System',
  content: `
    <p>Bootstrap's grid system builds responsive layouts using a 12-column system, with rows and columns. It's based on flexbox!</p>
  `,
  codeExample: `<!-- A simple 2-column layout -->
<div class="container overflow-hidden">
  <div class="row g-2">
    <div class="col-6 p-3 bg-primary text-white">1 of 2</div>
    <div class="col-6 p-3 bg-secondary text-white">2 of 2</div>
  </div>
</div>`
};

export const bsCards = {
  id: 'cards',
  title: 'BS5 Cards',
  content: `
    <p>A card in Bootstrap 5 is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, and contextual background colors.</p>
  `,
  codeExample: `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Ai-Yugam Card</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
};

export const bsAlerts = {
  id: 'alerts',
  title: 'BS5 Alerts',
  content: `
    <p>Alert clips are used for providing contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
  `,
  codeExample: `<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>`
};
