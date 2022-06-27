// Example: Read file stream line-by-Line
// https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const filePath = 'C:\\Users\\Terje\\Desktop\\Node.js-prosjekter\\IntroNode.js\\testFilesSimple.js';
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
    }
}

processLineByLine();