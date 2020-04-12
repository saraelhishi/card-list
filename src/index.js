import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

//1.create the <Card/> Component which returns JSX elements
/* function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://via.placeholder.com/600x250.png"
        alt="cap image"
      />
      <div className="card-body">
        <h5 className="card-title">Title placeholder</h5>
        <p className="card-text">Description Placeholder</p>
        <a href="#" className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}
 */
// 2. create a parent component that renders <Card/> three times. We can name it <CardList/>
/* function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
    </div>
  );
} */
// 3. Next, we need to include our own data into these cards, so pass some props into it.
function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          featureImage="/images/why-react-js.png"
          title="How To make Interactive React?"
          description="Let's write some interactive components with ReactJS"
          links="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="/images/front-back.jpg"
          title="Front End Development"
          description="Most important skills you need to have in order to begin your front end job"
          links="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="/images/large.jpeg"
          title="Top 10 JavaScript Frameworks"
          description="Get to know top JS frameworks"
          links="https://sebhastian.com/interactive-react-form"
        />
      </div>
    </div>
  );
}

// 4. use these props in our <Card/> component
function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt="cap image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}
ReactDOM.render(<CardList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
