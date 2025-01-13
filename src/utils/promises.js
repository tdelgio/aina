const productos = [
  {
    id: 1,
    title: "Rosemary Focaccia",
    price: "10",
    description: "Rosemary & Olive Oil",
    url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
    stock: 5,
    category: "Focaccia",
  },
  {
    id: 5,
    title: "Āina Focaccia",
    price: "10",
    description: "Tomatos - Onion - Black Olives - Olive Oil - Oregano ",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGQViNzf6ivBZe-kmRRTONzzVIzD22zk_sA&usqp=CAU",
    stock: 5,
    category: "Focaccia",
  },
  // {
  //   id: 2,
  //   title: "Pizza White",
  //   price: "10",
  //   description: "Garlic - Parmigiano - Oregano",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  // {
  //   id: 3,
  //   title: "Pizza Āina",
  //   price: "10",
  //   description:
  //     "Mozzarella - Parmesano - Ricotta - Arugula",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  // {
  //   id: 4,
  //   title: "Pizza Onion",
  //   price: "10",
  //   description:
  //     "Tomato Sauce - Mozzarella - Reggiano - Cebolla",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  // {
  //   id: 6,
  //   title: "Pizza White 2",
  //   price: "10",
  //   description:
  //     "Red Onion - Parmigiano - Rosemary - Pistachio ",
  //   url: "https://www.baking-sense.com/wp-content/uploads/2020/06/sourdough-pizza-19a.jpg",
  //   stock: 5,
  //   category: "Pizza",
  // },
  {
    id: 7,
    title: "Rosemary Sourdough Bread",
    price: "10",
    description:
      "Semi whole grain sourdough bread with a touch of rosemary on every toast.",
    url: "https://www.theperfectloaf.com/wp-content/uploads/2016/07/theperfectloaf-fifty-fifty-whole-wheat-sourdough-title-lighting.jpg",
    stock: 5,
    category: "Bread",
  },
  {
    id: 8,
    title: "Seeds Sourdough Bread",
    price: "10",
    description:
      "Semi whole grain sourdough bread with sesame & sunflower seeds.",
    url: "https://www.theperfectloaf.com/wp-content/uploads/2016/07/theperfectloaf-fifty-fifty-whole-wheat-sourdough-title-lighting.jpg",
    stock: 5,
    category: "Bread",
  },
  {
    id: 9,
    title: "Plain Sourdough Bread",
    price: "10",
    description: "Semi whole grain sourdough bread simple and delociuos.",
    url: "https://www.theperfectloaf.com/wp-content/uploads/2016/07/theperfectloaf-fifty-fifty-whole-wheat-sourdough-title-lighting.jpg",
    stock: 5,
    category: "Bread",
  },
];
export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
