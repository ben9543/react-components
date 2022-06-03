# 3. OnePageSlide

## Demo Usage

```jsx
import OnePageSlide from "./onepage-slide";

const DemoPage = ({content}) => {
  return (                
      <div className="rounded bg-gray-100 h-96 w-72 flex justify-center items-center">
          <p>{content}</p>
      </div>
  )
}

function App() {
  const pages = [
    <DemoPage content={"Page One"}/>, 
    <DemoPage content={"Page Two"}/>,
    <DemoPage content={"Page Three"}/>,
    <DemoPage content={"Page Four"}/>,
    <DemoPage content={"Page Five"}/>
  ]
  return (
    <div className="App">
      <OnePageSlide pages={pages}/>
    </div>
  );
}

export default App;

```
