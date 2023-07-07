import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent render={(content) => <h1>{content}</h1>} />
    </div>
  );
}

export default App;
