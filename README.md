
<div align="center">
  <h1>Dynamic PDF Form Filler</h1>
  <p>A Node.js library to dynamically fill PDF forms.</p>
</div>

<br>

<div align="center">
  <!-- Replace with your npm package version badge -->
  <img src="https://img.shields.io/npm/v/dynamic-pdf-certificate.svg" alt="npm version" />
  <!-- Replace with your license badge -->
  <img src="https://img.shields.io/npm/l/dynamic-pdf-certificate.svg" alt="license" />
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

const { fillPDFForm } = require('dynamic-pdf-form-filler');

const templatePath = 'path/to/your/template.pdf';
const outputPath = 'path/to/output/filled_form.pdf';

const fieldValues = {
  nameinput: 'John Doe',
  dateinput: 'August 23, 2023',
  courseinput: 'Advanced PDF Editing'
};

fillPDFForm(templatePath, outputPath, fieldValues)
  .then(() => {
    console.log('PDF form filled successfully.');
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
