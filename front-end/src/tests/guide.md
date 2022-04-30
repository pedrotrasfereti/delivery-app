# Testing a React Application 

## Resources

### React Docs
["You can test React components similar to testing other JavaScript code."][react-testing-overview-url]

<br />

---

### Test Driven Development (TDD)

**Test-driven development** is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.

#### **Steps**:

1. Create a test case;
2. Check for false positives by running the test (it should fail);
3. Implement the features;
4. Your test should now pass 🎉;
5. Repeat;

<br />

---

### Types of Testing

The three most common types of testing include:

- **Unit Tests**: involve testing a single isolated part of an application (in this context, a React Component);

- **Integration Tests**: involve testing how parts of the application work together as a whole;

- **End-to-End (E2E) Tests**: involve testing an application's workflow from beginning to end by emulating common user interactions;

<br />

---

## Dependencies

To get started, we will need to install the essencial tools:

- ### 🐙 [React Testing Library][rtl-url]
  **React Testing Library** is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

  To get it, run:
  > `npm install --save-dev @testing-library/react`

<br />

- ### 🃏 [Jest][jest-url]
  **Jest** is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue, and more!

  To get it, run:
  > `npm install --save-dev jest`

<br />

> **Note:** The `--save-dev` (or `-D`) flag is used to save a package as a development dependency, that is, a package whose absence will not affect the work of an application.

<br />

---

## Jest

Before we start writing our test cases, we must first create a Jest *configuration file*. This will allow us to manage important rules related to our tests. To do that, run:

> `npx jest --init`

The first message should look you something like this:

> `The following questions will help you create a suitable configuration for you project`

Once you're finished answering, a new **jest.config.js** file should appear in your project directory.

<br />

---

### Babel

In order for Jest to understand your React code, we will need to transform it into common JS.

Luckily, we can use [Babel][jest-babel-url] to do that job for us:

1. Make sure you have the following Babel presets installed:

    - [`@babel/preset-env`][npm-babel-preset-env]
    - [`@babel/preset-react`][npm-babel-preset-react]

2. Create a new "babel.config.js" file in your project directory.

3. Add the following code to your "babel.config.js" file:
    ```
    module.exports = {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    };
    ```
4. Voilà! You can now stop worrying about ".jsx" syntax errors.

<br />

---

### TypeScript

Support for TypeScript syntax:

- If your configuration file uses TypeScript, you will need the [`ts-node`][npm-ts-node] package installed.

- If your test files use TypeScript, you will need the [`@types/jest`][npm-types-jest] package installed.

- If your project uses TypeScript, you have two options:
  - Install and add [`@babel/preset-typescript`][npm-babel-preset-ts] to your Babel's configuration "presets" section. All this will do is transpile your TS code.

  - Add [`ts-jest`][ts-jest-url] to your project. This is ideal if you want Jest to type-check your tests as they run.

<br />

---

## Tests

You may start by creating a new `tests` directory inside your `src` directory. All your new test files should go there.

Your test files names can either use the *.test* sufix or the *.spec* sufix. The latter is usually used when the test itself serves as a documentation for your project.

<br />

### Example #1

```
// import dependencies
import React from 'react'

// import custom matchers
import '@testing-library/jest-dom'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// the component to test
import Counter from '../Counter'

describe('Counter component', () => {
  test('Value is initially "0"', () => {
    // Arrange
    render(<Couter />)

    // Act
    const text = screen.findByText("0")

    // Assert
    expect(text).toBeInTheDocument()
  })
})
```

#### <ins>Jest</ins>:
- The **"describe"** global is used to create a group of related tests. The name parameter should specify what component is being tested;

- The **"test"** (or **"it"**) global is to used to create a single test. The name parameter should specify what behavior is being tested;

- The **"expect"** method can be used to make assertions and determine whether or not a condition was met;

#### <ins>RTL</ins>: 
- The **"render"** method renders a React element into the DOM;

- The **"screen"** object provides methods for querying the rendered elements of the DOM;

- **"get"**, **"find"** and **"query"** are types of queries in RTL. The difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry;

#### <ins>Jest DOM</ins>:
[`jest-dom`][jest-dom-url] is a companion library for Testing Library that provides custom DOM element matchers for Jest.

- The **"toBeInTheDocument"** matcher can be used to assert that an element is in the body of the document, or not; 

<br />

---

### Example #2: Introducting Data Attributes
The [`data-*`][mdn-data-att] global attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

#### **React Component**:
```
export default function ExampleComponent() {
  return (
    <form>
      <input type="text">

      <button type="submit" data-testid="example-btn">
        Submit
      </button>
    </form>
  )
}
```
  - Here, we are giving the `data-testid` attribute on our button the "example-btn" value.

#### **Test**:
```
  ...

  test('Button is present in the document', () => {
    // Arrange
    render(<ExampleComponent />);

    // Act
    const btn = screen.getByTestId('example-btn');

    // Assert
    expect(btn).toBeInTheDocument();
  });
```
  - The **"getByTestId"** matcher is used to find and return the node that has a matching `data-testid`. This way, we can use the **"btn"** variable to make assertions.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[jest-url]: https://jestjs.io/
[jest-babel-url]: https://jestjs.io/docs/getting-started#using-babel
[jest-dom-url]: https://testing-library.com/docs/ecosystem-jest-dom/
[mdn-data-att]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
[npm-babel-preset-env]: https://www.npmjs.com/package/@babel/preset-env
[npm-babel-preset-react]: https://www.npmjs.com/package/@babel/preset-react
[npm-babel-preset-ts]: https://www.npmjs.com/package/@babel/preset-typescript
[npm-ts-node]: https://www.npmjs.com/package/ts-node
[npm-types-jest]: https://www.npmjs.com/package/@types/jest
[react-testing-overview-url]: https://reactjs.org/docs/testing.html
[rtl-url]: https://testing-library.com/docs/react-testing-library/intro/
[ts-jest-url]: https://github.com/kulshekhar/ts-jest
