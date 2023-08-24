const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

async function fillCertificate(templatePath, outputPath, fieldValues) {
  try {
    const templateBuffer = await fs.promises.readFile(templatePath);
    const pdfDoc = await PDFDocument.load(templateBuffer);

    const form = pdfDoc.getForm();
    const fields = form.getFields();

    for (const fieldName in fieldValues) {
      if (fieldValues.hasOwnProperty(fieldName)) {
        const fieldValue = fieldValues[fieldName];
        const field = fields.find(f => f.getName() === fieldName);

        if (field) {
          field.setText(fieldValue);
        }
      }
    }
	form.flatten();
    const modifiedPdfBytes = await pdfDoc.save();
    await fs.promises.writeFile(outputPath, modifiedPdfBytes);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = {
  fillCertificate
};
