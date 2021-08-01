import React from "react";
import './App.css';
import NYCate from "./NYCate.webp";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img 
        src={NYCate}
        height={200} 
        alt="I love New York Pizza."
      />
      <ul style={{ textAlign: "left" }}>
          {props.dishes.map((dish) => (
            <li key={dish.id}>{dish.title}</li>
          ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Pizza"
]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    // this can return only one fragment
    <div className="App">
      <Header name="Nadia" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
