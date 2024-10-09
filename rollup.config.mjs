import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs-extra'
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const packageJson = fs.readJSONSync(path.join(__dirname, './package.json'))

const postbuild = () => {
    return {
        async writeBundle() {
            console.log(`yalc publish --push`);
            execSync(`yalc publish --push`, {
                cwd: path.join(__dirname, './build-out'),
                stdio: 'inherit'
            });
        }
    };
};

const config = [
    {
        input: path.join(__dirname, './build-out/src/index.d.ts'),
        output: [
            {
                file: path.join(__dirname, `./build-out/index.bundle.d.ts`),
                format: 'es'
            }
        ],
        plugins: [dts()],
        // watch: {
        //   chokidar: true,
        //   clearScreen: false
        // }
    },
    {
        input: path.join(__dirname, './build-out/src/index.js'),
        output: [
            {
                inlineDynamicImports: true,
                file: path.join(__dirname, `./build-out/index.bundle.js`),
                format: 'cjs',
                interop: 'auto',
                // assetFileNames: "[name]-[hash][extname]",
                assetFileNames: "[name][extname]",
            }
        ],
        external: [
            'react', 'react-is', 'react/jsx-runtime',
            'universal-env',
            ...Object.keys(packageJson.dependencies),
            ...Object.keys(packageJson.devDependencies)
        ].filter(d => d !== 'react-colors-beauty'),
        plugins: [
            nodeResolve(),
            json(),
            image(),
            styles({
                mode: ["extract", "assets/react-colors-beauty.css"],
            }),
            //   terser(),
            postbuild(),
        ]
    }
];

export default config;
