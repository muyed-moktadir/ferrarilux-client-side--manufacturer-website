import React from "react";

const Blog = () => {
  return (
    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            at first need to Using Immutable Data Structures. which has some
            benifits.Like Zero side effects,Immutable data objects are simpler
            to create, test, and use,it helps to prevent prevent temporal
            coupling,Easier to track changes.Avoid Inline Function Definition in
            the Render Function ,third one Avoid the using Index as Key for
            map.if the data has a unique property, such as an ID, then it's
            better to use that property. the other one is Avoiding Props in
            Initial States.and the fourth one is Memoization is an optimization
            technique used primarily to speed up computer programs by storing
            the results of expensive function calls and returning the cached
            result when the same inputs occur again.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are several ways to manage state​s in React.Hooks,React
            Context Api,Apollo Link State.when dealing with complex state
            involve with large objects. The useReducer hook is a powerful
            provided React hook for dealing with complex state management that
            doesn’t require third-party dependencies. Also, it reduces the
            amount of data recreated with each render.Global State Management is
            another way to manage a state in a react application
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            prototypal inheritance means that objects and the methods can be
            shared, extended, and copied.When an inherited function is executed,
            the value of this points to the inheriting object, not to the
            prototype object where the function is an own property.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            usinf filter method to find by name.let productNames =
            products.filter(product => product.name === "ferrari");
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is a technique using which individual modules are
            tested to determine if there are any issues by the developer
            himself. It is concerned with functional correctness of the
            standalone modules. Unit tests are usually written in the form of
            functions and check the value and behavior of these functions in
            various scenarios.and also reduce cyclomatic complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
