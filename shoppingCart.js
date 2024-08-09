class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
    
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
      });
  
      console.log(`Cart Total: $${this.getCartTotal().toFixed(2)}`);
    }
  
    getCartTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }

  // Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Smartphone', 499.99);
const product3 = new Product(3, 'Headphones', 199.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again to see the updated contents
cart.displayCart();

// Product: Laptop, Quantity: 1, Total Price: $999.99
// Product: Smartphone, Quantity: 2, Total Price: $999.98
// Product: Headphones, Quantity: 1, Total Price: $199.99
// Cart Total: $2199.96

// Product: Laptop, Quantity: 1, Total Price: $999.99
// Product: Headphones, Quantity: 1, Total Price: $199.99
// Cart Total: $1199.98
