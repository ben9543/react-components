# 3. OnePageSlide

- [Live Demo](http://htmlserver-onepageslide.s3-website-us-east-1.amazonaws.com/)

## Demo Usage

```jsx
import OnePageSlide from "./onepage-slide";

const DemoPage = ({content}) => {
  return (                
      <div className="rounded bg-gray-100 h-96 w-72 p-3 py-5">
        <h3 className="text-3xl mb-10">{content}</h3>
        <div className="h-3/4 overflow-scroll flex-nowrap">
          <p className="text-gray-900">lorLorem Ipsum Ipsum Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularisede asdfsfdsfdsfsdfsdfdsfsdfsdfsdfsdfs sadfsdfsdfsdfsdfsdfsdfsfSzs</p>
        </div>
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
