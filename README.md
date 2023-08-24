

<div align="center">
  <h1>Dynamic PDF Certificate</h1>
  <p>A Node.js library to dynamically fill PDF forms.</p>
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/npm/v/dynamic-pdf-certificate.svg" alt="npm version" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="npm version" />

</div>

<br>

## 📖 About

The Dynamic PDF Form Filler is a Node.js library that allows you to easily fill PDF forms with dynamic data. It uses the pdf-lib package for PDF manipulation.

## 🚀 Usage

Install the library using npm:

```bash
npm install dynamic-pdf-certificate
```
Import the library and use it to fill a PDF form:

```javascript

const { fillCertificate } = require('dynamic-pdf-certificate');

const templatePath = 'path/to/your/template.pdf'; //include form elements to be filled in your pdf. use adobe pdf or similar tools.
const outputPath = 'path/to/output/filled_certificate.pdf';

const fieldValues = {
  nameinput: 'John Doe',
  dateinput: 'August 23, 2023',
  courseinput: 'Advanced PDF Editing'
};

fillCertificate(templatePath, outputPath, fieldValues)
  .then(() => {
    console.log('PDF Certificate filled & generated successfully.');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```
## 📄 License
This project is licensed under the MIT License.

<div align="center">
  Made with ❤️ by Kalyan Raju.
</div>
