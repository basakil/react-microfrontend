import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

// check if in development mode, running products outside of container app.
if (process.env.NODE_ENV == 'development') {
  const el = document.getElementById('dev-products');

  if (el) {
    mount(el);
  }
}

export { mount };

