<!-- ![Logo of the project](https://raw.githubusercontent.com/jehna/readme-best-practices/master/sample-logo.png) -->

> Mofn a media manager

[![Travis branch](https://img.shields.io/travis/rust-lang/rust/master.svg)](https://travis-ci.org/omgimalexis/mofn/master) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Installing / Getting started

```shell
git clone https://github.com/OmgImAlexis/mofn.git && cd mofn
yarn install
yarn start
```

This should start Mofn on port 3000.
To change the config use CTRL+C to stop the server and then edit the `config.json` in the Mofn directory.

## Developing

To get started developing with Mofn first you'll need node 6+ and yarn installed.

```shell
git clone https://github.com/OmgImAlexis/mofn.git && cd mofn
yarn install
yarn start-dev
```

This will start Mofn in dev mode which allows the logger to use `DEBUG`.

<!-- ## Features

What's all the bells and whistles this project can perform?
* What's the main functionality
* You can also do another thing
* If you get really randy, you can even do this -->

<!-- ## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

#### Argument 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Example:
```bash
awesome-project "Some other value"  # Prints "You're nailing this readme!"
```

#### Argument 2
Type: `Number|Boolean`  
Default: 100

Copy-paste as many of these as you need. -->

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome. Make sure to run `yarn test-js`
and `yarn test-css` before opening a PR as it makes reviews a lot easier.
