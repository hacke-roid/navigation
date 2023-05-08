
import Button from "./Button";


function App() {
  return (
    <div>
      <div className="button">
        <Button>Click me</Button>
      </div>
      <div>
        <Button danger outline>Buy now</Button>
      </div>
      <div>
        <Button>See Deal</Button>
      </div>
      <div>
        <Button>Hide Ads</Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>


    </div>
  );
}

export default App;
