import fs from 'node:fs';
import path from 'node:path';

// Specify the directory containing the .woff files
const woffDirectory = path.join(import.meta.dirname, 'woff-v2');
const outputFilePath = path.join(import.meta.dirname, 'output.ts');

// Function to convert .woff files to base64
const convertWoffToBase64 = async () => {
  try {
    // Read all files in the directory
    const files = fs.readdirSync(woffDirectory);
    let jsMapping = 'export default {\n';

    // Process each .woff file
    for (const file of files) {
      if (path.extname(file) === '.woff') {
        const filePath = path.join(woffDirectory, file);
        const fileBuffer = fs.readFileSync(filePath);
        const base64String = fileBuffer.toString('base64');
        jsMapping += `  '${file}': 'data:application/octet-stream;base64,${base64String}',\n`;
      }
    }

    jsMapping += '};\n';

    fs.writeFileSync(outputFilePath, jsMapping);
    console.log(`Conversion complete! Base64 strings saved to ${woffDirectory}`);
  } catch (error) {
    console.error('Error:', error);
  }
};

convertWoffToBase64();
