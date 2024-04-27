import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/owner/jokes")
      .then((res) => {
        // handle success
        console.log(res.data);
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>jokes : {jokes.length}</p>
      {jokes.map((joke, id) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
