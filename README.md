# eventify

> A micro library built to handle JavaScript event dispatching.
> Does binding, unbinding, triggering and aliasing.
> It comes with support for CommonJS and AMD environments.

[![Build Status](https://travis-ci.org/geraldchecka/eventify.svg?branch=master)](https://travis-ci.org/geraldchecka/eventify) [![Coverage Status](https://coveralls.io/repos/geraldchecka/eventify/badge.svg?branch=master&service=github)](https://coveralls.io/github/geraldchecka/eventify?branch=master) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Dependencies](https://david-dm.org/geraldchecka/eventify.png?theme=shields.io)](https://david-dm.org/geraldchecka/eventify) [![devDependency Status](https://david-dm.org/geraldchecka/eventify/dev-status.svg)](https://david-dm.org/geraldchecka/eventify#info=devDependencies)

### Info
Make sure you have node and npm running on your machine. This tutorial uses node v0.12.4 and v2.10.1 of npm. In case you haven't installed it yet, read this to install <a href="https://github.com/joyent/node/wiki/Installation">Node<a/> and <a href="http://blog.npmjs.org/post/85484771375/how-to-install-npm">NPM<a/>

### Local build setup
```sh
$ git clone https://github.com/geraldchecka/eventify.git
$ cd eventify
$ npm install
$ npm run build
```

To generate annotated sourcecode documentation
```sh
npm run doc
```

Perform unit-testing and coverage. Also generates SpecRunner & Coverage reports. They can be found under **Reports** folder
```sh
npm run test
```

License
----
MIT