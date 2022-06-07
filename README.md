<div id="top"></div>
<!--
***
*** This readme template was inspired by: https://github.com/othneildrew/Best-README-Template/
***
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## Full-Stack Delivery App using React and Express

Welcome to the _GitHub repository_ of my **Delivery App**!
Here you can find information about the project's development, such as which technologies were used, how to install and run the project, usage and more.

This full-stack application was developed during my time at [Trybe](https://www.betrybe.com/) to practice the lessons learned on both front-end and back-end modules.
<!-- The API is a sales management system, where you can create, view, delete and update products and sales. -->

<br>

---

### Endpoints

<!-- A list of all endpoints and supported methods.

* **/products** - Using the `POST` HTTP method, allows the user to create a product with the following JSON structure:
```
{
  "name": "product_name",
  "quantity": "product_quantity"
}
```

The user may also list all products using the `GET` HTTP method;

<br />

* **/products/:id**

  * Using the `PUT` HTTP method, allows the user to edit a product with the provided `id` param and the following JSON structure:
  ```
  {
    "name": "new_product_name",
    "quantity": "new_product_quantity"
  }
  ```

  * The owner of the post may also delete a product using the `DELETE` HTTP method.

<br />

* **/sales** - Using the `POST` HTTP method, allows the user to create (multiple) sales with the following JSON structure:
```
[
  {
    "product_id": "product_id",
    "quantity": "product_quantity",
  }
]
```

The user may also list all sales using the `GET` HTTP method;

<br />

* **/sales/:id**

  * Using the `PUT` HTTP method, allows the user to edit a sale with the provided `id` param and the following JSON structure:
  ```
  [
    {
      "product_id": "id",
      "quantity": "new_quantity"
    }
  ]
  ```

  * The owner of the post may also delete a sale using the `DELETE` HTTP method. -->

<br />

### Tables

<!-- The MySQL schema will contain three tables: **products**, **sales** and **sales_products**. -->

<br />

---

### Built With

List of major frameworks/libraries used to bootstrap this project:

* [React](https://reactjs.org/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Stitches](https://stitches.dev/)
* [Redux](https://redux.js.org/)
* [Axios](https://axios-http.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com/)
* [Joi](https://joi.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrotrasfereti/delivery-app.git
   ```
2. Enter project directory
   ```sh
   cd delivery-app/
   ```
3. Checkout into development branch
   ```sh
   git checkout development
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Start the server
   ```sh
   cd server/
   npm start
   ```
6. Start the client app
   ```sh
   cd client/
   npm start
   ```
7. App should now be running on **localhost:3000**!


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Trasfereti - [LinkedIn](https://www.linkedin.com/in/pedro-trasfereti/) - pedrotrasfereti@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to:

* [SonarCloud](https://sonarcloud.io/) - clean code
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - design system
* [Img Shields](https://shields.io) - docs
* [SwaggerHub](https://swagger.io/tools/swaggerhub/) - docs
* [Dotenv](https://www.npmjs.com/package/dotenv) - development
* [Nodemon](https://nodemon.io/) - development
* [PedroTech](https://www.youtube.com/watch?v=lwOsI8LtVEQ) - heroku tutorial
* [ESLint](https://eslint.org/) - linter
* [Hong Ly](https://www.youtube.com/watch?v=7ujSgXRnyig) - redux tutorial
* [Pedro Duarte](https://ped.ro/writing/why-i-build-design-systems-with-stitches-and-radix) - stitches
* [Rocketseat](https://www.youtube.com/watch?v=uraRXlkknRo) - stitches
* [The Futur Academy](https://www.youtube.com/watch?v=eXcKOqviLE0) - ui design tutorial

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/pedrotrasfereti/delivery-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pedrotrasfereti/delivery-app/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/pedrotrasfereti/delivery-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/pedrotrasfereti/delivery-app/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pedro-trasfereti/

