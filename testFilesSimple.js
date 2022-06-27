// https://nodejs.dev/learn/reading-files-with-nodejs

const fs = require('fs/promises');

async function example() {
  try {
    const filePath = 'C:\\Users\\Terje\\Desktop\\Node.js-prosjekter\\IntroNode.js\\testFilesSimple.js';
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();