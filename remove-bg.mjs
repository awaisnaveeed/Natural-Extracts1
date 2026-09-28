import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function processImage(inputFilename, outputFilename) {
  try {
    console.log(`Processing ${inputFilename}...`);
    const inputPath = path.join(process.cwd(), 'public', inputFilename);
    const outputPath = path.join(process.cwd(), 'public', outputFilename);
    
    const buffer = fs.readFileSync(inputPath);
    const blob = new Blob([buffer]);
    
    // Note: The node version of imgly/background-removal has specific configuration
    const imageBlob = await removeBackground(blob, {
        debug: true,
        progress: (key, current, total) => {
            console.log(`Downloading ${key}: ${current} / ${total}`);
        }
    });
    
    const arrayBuffer = await imageBlob.arrayBuffer();
    const outputBuffer = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(outputPath, outputBuffer);
    console.log(`Saved ${outputFilename}`);
  } catch (err) {
    console.error(`Error processing ${inputFilename}:`, err);
  }
}

async function main() {
  await processImage('1.jpeg', '1-nobg.png');
  await processImage('2.jpeg', '2-nobg.png');
  await processImage('3.jpeg', '3-nobg.png');
  console.log("All done!");
}

main();
