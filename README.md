# webpack-bundler
## Webpack 📦 with Sass, React.js config ✨

Webpack is used to compile JavaScript modules — this 💜 repo is a full project setup for webpack with **Postcss**, **Sass**, **Babel** and **React**.

To use the preset — clone the repo and install all packages

![webpack](https://img.shields.io/static/v1?label=packages&message=16&color=green) ![webpack](https://img.shields.io/static/v1?label=total-files&message=>11K&color=yellowgreen) ![webpack](https://img.shields.io/static/v1?label=total-size&message=65MB&color=blue)
```
npm install
```

## How to setup? 🔮

Initialize the project folder by `npm init -y` and install `webpack` and `webpack-cli` as dev-dependencies.

[![webpack](https://img.shields.io/static/v1?label=webpack&message=v5.66.0&color=green)](https://www.npmjs.com/package/webpack) [![webpack-cli](https://img.shields.io/static/v1?label=webpack-cli&message=v4.9.1&color=blue)](https://www.npmjs.com/package/webpack-cli)
```
npm install --save-dev webpack webpack-cli
```
You can also setup a ✨ development server by installing `webpack-dev-server`

[![webpack-dev-server](https://img.shields.io/static/v1?label=webpack-dev-server&message=v4.7.3&color=red)](https://www.npmjs.com/package/webpack-dev-server)
```
npm install --save-dev webpack-dev-server
```
By default, webpack will 🔍 look for all JavaScript code in `src/index.js` and all html in `dist/index.html` for 📡 serving on localhost.
```
.
├── node_modules
├── dist/
│   └── index.html
└── src/
    └── index.js
```
Now, add a `webpack.config.js` file in the project folder.
```js
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
}
```
Finally, in the `package.json` add these scripts.
```json
{
    "dev": "webpack serve",
    "build": "webpack --mode=production",
    "build-dev": "webpack",
}
```

## Installing Babel.js 💪

🔗 Babel is a great tool to convert modern JavaScript code into a backwards compatible version, read the documentation [here](https://babeljs.io/docs/en/).

To use ✨ babel.js in webpack you need a loader `babel-loader`, `@babel/core` and `@babel/preset-env` 💜

[![babel-loader](https://img.shields.io/static/v1?label=babel-loader&message=v8.2.3&color=green)](https://www.npmjs.com/package/babel-loader) [![@babel/core](https://img.shields.io/static/v1?label=@babel/core&message=v7.16.10&color=blue)](https://www.npmjs.com/package/@babel/core) [![@babel/preset-env](https://img.shields.io/static/v1?label=@babel/preset-env&message=v7.16.10&color=red)](https://www.npmjs.com/package/@babel/preset-env)

```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```
Now, add a **module object** in `webpack.config.js`
```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
}
```

## Installing CSS Pre-processors ✨

🔗 Sass is a preprocessor which allows you to use variables, nested rules, mixins, functions, and more, read the documentation [here](https://sass-lang.com/documentation/syntax).

To use ✨ Sass in webpack you need some loaders `css-loader`, `sass-loader`, `sass` and a plugin `mini-css-extract-plugin` 🧡

[![css-loader](https://img.shields.io/static/v1?label=css-loader&message=v6.5.1&color=blue)](https://www.npmjs.com/package/css-loader) [![sass-loader](https://img.shields.io/static/v1?label=sass-loader&message=v12.4.0&color=blue)](https://www.npmjs.com/package/sass-loader) [![sass](https://img.shields.io/static/v1?label=sass&message=v1.49.0&color=green)](https://www.npmjs.com/package/sass) [![mini-css-extract-plugin](https://img.shields.io/static/v1?label=mini-css-extract-plugin&message=v2.5.2&color=red)](https://www.npmjs.com/package/mini-css-extract-plugin)

```
npm install --save-dev css-loader sass-loader sass mini-css-extract-plugin
```

🔗 Postcss is a postprocessor which lets you convert modern CSS into something most browsers can understand, read the documentation [here](https://postcss.org/).

To use ✨ Postcss in webpack you need to install `postcss`, `postcss-loader` and `postcss-preset-env` 🧡

[![postcss](https://img.shields.io/static/v1?label=postcss&message=v8.4.5&color=green)](https://www.npmjs.com/package/postcss) [![postcss-loader](https://img.shields.io/static/v1?label=postcss-loader&message=v6.2.1&color=blue)](https://www.npmjs.com/package/postcss-loader) [![postcss-preset-env](https://img.shields.io/static/v1?label=postcss-preset-env&message=v7.2.3&color=red)](https://www.npmjs.com/package/postcss-preset-env)
```
npm install --save-dev postcss postcss-loader postcss-preset-env
```
Now, import the plugin and add in **module.exports** in webpack.config.js.
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

plugins: [new MiniCssExtractPlugin()]
```
Finally, add a new **rule object** in rules array.
```js
{
  test: /\.s?[ac]ss$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '' },
    },
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    'sass-loader',
  ],
},
```

## Browser support configuration 🌐

So forth, you've setup all ✨ processors and transpiler, but as your 🎯 goal to make use of modern JavaScript and CSS code to an older compatible version that most browsers can understand — you need to specify your target browser.

🔗 Read the full documentation [here](https://github.com/browserslist/browserslist) on Browserslist 💜

You can specify your target browser in `package.json` or in `.browserslistrc` file.
```json
{
  "dependencies": {
    ...
  },
  "browserslist": [
    "last 2 versions",
    "> 0.5%",
    "IE 10"
  ]
}
```

## Installing React.js 🤜🤛

To use ✨ React in webpack you need to install `react` and `react-dom` as project dependencies 🔮
```
npm install react react-dom
```
And you also required a transpiler `@babel/preset-react` as dev-dependencies.

[![@babel/preset-react](https://img.shields.io/static/v1?label=@babel/preset-react&message=v7.16.7&color=red)](https://www.npmjs.com/package/@babel/preset-react)
```
npm install --save-dev @babel/preset-react
```
Now, in the `webpack.config.js` change the `test` and `preset` properties accordingly.
```js
test: /\.jsx?$/,
exclude: /node_modules/,
use: {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  },
},
```
Finally, add a `resolve` object in `webpack.config.js`
```js
resolve: {
  extensions: ['.js', '.jsx'],
},
```

## Image resources 🔗

Adding an Image using relative path causes ⚠️ broken URLs — because relative paths will be changed from `src` to `dist` folder, but thanks to the ✨ **new** Webpack-v5 built-in feature, you can now bundled your images too.

Add a new **rule object** in rules array.
```js
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset/resource',
},
```
Finally, add a **output object** in `module.exports`
```js
output: {
  assetModuleFilename: 'images/[hash][ext][query]',
},
```

## Congratulations! 🥳🎉
You have setup the full **Webpack** project.

🔗 But there's more you can read on https://webpack.js.org/guides/