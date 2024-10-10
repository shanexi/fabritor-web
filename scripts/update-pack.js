const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('processing package.json...');

try {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    delete packageJson.scripts;
    delete packageJson.devDependencies;
    delete packageJson.description;
    delete packageJson.publishConfig;
    delete packageJson.license;
    delete packageJson.repository;

    packageJson.name = 'image-canvas';
    packageJson.version = '0.1.0';
    // packageJson.main = './index.bundle.js';
    // packageJson.types = './index.bundle.d.ts';
    packageJson.exports = {
        ".": {
            "types": "./index.bundle.d.ts",
            "default": "./index.bundle.js"
        },
        "./model": {
            "types": "./model.d.ts",
            "default": "./model.js"
        },
        "./index.css": {
            "default": "./index.css"
        },
        "./assets/react-colors-beauty.css": {
            "default": "./assets/react-colors-beauty.css"
        }
    }

    const buildOutDir = path.join(__dirname, '..', 'build-out');
    if (!fs.existsSync(buildOutDir)) {
        fs.mkdirSync(buildOutDir, { recursive: true });
    }

    const outputPath = path.join(buildOutDir, 'package.json');
    fs.writeFileSync(outputPath, JSON.stringify(packageJson, null, 2), 'utf8');

    console.log('package.json updated and copied');
} catch (error) {
    console.error('update-pack err', error);
    process.exit(1);
}
