import {mount as mount_products} from 'products/ProductsIndex';
import {mount as mount_cart} from 'cart/CartShow';


const productsEl = document.getElementById('my-products');
mount_products(productsEl);

const cartEl = document.getElementById('my-cart');
mount_cart(cartEl);

console.log('Container!');
