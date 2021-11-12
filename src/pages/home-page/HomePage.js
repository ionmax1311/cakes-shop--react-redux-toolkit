import React from "react";
import { CakeItem } from "../../components/cake-item";
import "./home-page.css";

const CAKES = [
  {
    image: "/cake-covers/1.jpg",
    title: "Chocolate Wafer with Rainbow Buttons",
    price: 43,
    id: 1,
    description:
      "It's bright, it's colourful, it's perfect for chocolate lovers everywhere, it's a Chocolate Wafer with Rainbow Buttons cake.",
  },
  {
    image: "/cake-covers/2.jpg",
    title: "Pick and Mix Overloaded Candy Cake",
    price: 33,
    id: 2,
    description:
      "This is the perfect cake for those with a sweet tooth. Our classic cream cake is loaded with tasty and fun candy.",
  },
  {
    image: "/cake-covers/3.jpg",
    title: "Aqua Doughnut (Donut) Drip Cake",
    price: 21,
    id: 3,
    description:
      "It’s fantastic when you go aquatic! This Aqua Doughnut Drip Cake will definitely give you the ocean vibes. Made with vanilla sponge, vanilla cream and mixed fruit jam for the sweet base flavour, the cake is coated in turquoise and white icing fondant poured with chocolate drip icing.",
  },
  {
    image: "/cake-covers/4.jpg",
    title: "Oreo Drip Overload Cake",
    price: 89,
    id: 4,
    description:
      "For all those Oreo lovers! The perfect cake finally exists! With the ultimate chocolate drip, top with oreos and cookies and cream swirls, it will be hard to resist.",
  },
  {
    image: "/cake-covers/5.jpg",
    title: "Unicorn Fantasy Cake",
    price: 82,
    id: 5,
    description:
      "This fantastic Unicorn cake is brightly coloured and detailed to make any unicorn fan happy! The cake is made with layers of freshly baked vanilla sponge, that is spread with freshly whipped vanilla cream and mixed fruit jam.",
  },
  {
    image: "/cake-covers/6.jpg",
    title: "Sugar Rush Cake",
    price: 53,
    id: 6,
    description:
      "Everyone needs a little sugar rush every now and then, so our sugar rush cake is the perfect choice.",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {CAKES.map((cake) => (
        <CakeItem cake={cake} key={cake.id} />
      ))}
    </div>
  );
};
