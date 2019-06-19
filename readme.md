## Introduction

A good template on how to set up webpack for react

Taken from 
https://medium.com/free-code-camp/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff



### Basic setup
1. Setting up Webpack 4 with Babel 7 for React
2. Support for .SCSS
3. Development environment with HMR [For both .js & .scss]
4. Production configuration
5. Dividing your Webpack configuration into chunks
6. Generating a visualizer in production build to check which chunk of code is how big and what are the dependencies of the chunks. Super useful.
7. Support for static files

### Advanced setup
1. Add support for async/await in our code
2. Create a NodeJS server using ExpressJS for our production build
3. Code Splitting (Not included even though it is in the tutorial) note if using codesplitting use  "@babel/plugin-syntax-dynamic-import", in the .babelrd