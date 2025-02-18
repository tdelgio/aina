const productos = [
  {
    id: 1,
    title: "Baguette",
    price: "3",
    description:
      "Handcrafted sourdough baguette with a crispy crust and soft, airy crumb.",
    url: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stock: 5,
    category: "Bread",
  },
  {
    id: 2,
    title: "Medialuna",
    price: "3", // Adjusted to a reasonable price for Maui
    description:
      "A buttery, flaky pastry with a slightly sweet flavor, perfect for breakfast or a snack.",
    url: "https://i.pinimg.com/474x/d7/7b/56/d77b562c9bce40a6f5cc95094bf63e1a.jpg",
    stock: 5,
    category: "Pastries",
  },
  {
    id: 3,
    title: "Rosemary Bread",
    price: "13",
    description:
      "Semi whole grain sourdough bread with a touch of rosemary on every toast.",
    url: "https://i.pinimg.com/474x/69/dd/bb/69ddbb8678c88799e3e0d523fd4dce9d.jpg",
    stock: 5,
    category: "Bread",
  },
  {
    id: 4,
    title: "Plain Bread",
    price: "13",
    description: "Semi whole grain sourdough bread simple and delicious.",
    url: "https://www.theperfectloaf.com/wp-content/uploads/2016/07/theperfectloaf-fifty-fifty-whole-wheat-sourdough-title-lighting.jpg",
    stock: 5,
    category: "Bread",
  },
  {
    id: 5,
    title: "Rosemary Focaccia",
    price: "10",
    description: "Rosemary & Olive Oil",
    url: "https://i.pinimg.com/474x/e8/43/be/e843be49403091cd946830dc8dbe09b6.jpg",
    stock: 5,
    category: "Focaccia",
  },
  {
    id: 6,
    title: "Āina Focaccia",
    price: "15",
    description: "Tomatoes - Onion - Black Olives - Olive Oil - Oregano",
    url: "https://i.pinimg.com/474x/7e/fb/5e/7efb5e9d31b88264161922c22bccdc37.jpg",
    stock: 5,
    category: "Focaccia",
  },
  // {
  //   id: 7,
  //   title: "Pizza White",
  //   price: "10",
  //   description: "Garlic - Parmigiano - Oregano",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  // {
  //   id: 8,
  //   title: "Pizza Āina",
  //   price: "10",
  //   description:
  //     "Mozzarella - Parmesano - Ricotta - Arugula",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  // {
  //   id: 9,
  //   title: "Pizza Onion",
  //   price: "10",
  //   description:
  //     "Tomato Sauce - Mozzarella - Reggiano - Cebolla",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
];
export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
