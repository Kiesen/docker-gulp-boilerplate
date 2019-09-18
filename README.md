Docker-gulp-boilerplate
===========


[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Kiesen/docker-gulp-boilerplate/LICENSE) [![dependencies](https://david-dm.org/Kiesen/docker-gulp-boilerplate.svg)](https://david-dm.org/Kiesen/docker-gulp-boilerplate.svg) [![devDependencies](https://david-dm.org/Kiesen/docker-gulp-boilerplate/dev-status.svg)](https://david-dm.org/Kiesen/docker-gulp-boilerplate/dev-status.svg)

A very basic project setup for a html / js / sass frontend using node and/or docker for the development and build process.

## Note
These project is not under active development and maintenance.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and building purposes. 

### Prerequisites

* `node === 11.4.0` **(IF YOU WANT TO USE YOUR LOCAL NODE ENVIRONMENT)**
* `docker >= 18.09.0` **(IF YOU WANT TO USE DOCKER)**

Version below the prerequisites verions may work but are not tested

### Installation

#### With node

Install all node packages with npm:

```
npm install
``` 

#### With docker

With docker you first need to build the image. Execute in the project directory:

```
docker build -t docker-gulp . 
```

### Usage 

#### With node 
After a succesfull installation you are able to start a local development server
which will running on port 4000. The server has browser sync enabled and your browser should
live reload every time you will change the code base in the `src/` directory.

```
npm run watch
```

Also you are able to make a build of the project with:

```
npm run build
```

The output files will be located in the `public/` direcotry.  

#### With docker 
After the docker image is successfull build you are able to start an gulp build on the docker image:

```
docker run -it -v ${PWD}/public:/usr/src/public docker-gulp
```

Or to start the development server on the docker image with: 

```
docker run -ti -p 127.0.0.1:4000:4000 -v ${PWD}/src:/usr/src/src docker-gulp npm run watch
```

## Built With

* [node](http://www.dropwizard.io/1.0.2/docs/) - Node
* [docker](https://maven.apache.org/) - Docker
* [gulp](https://rometools.github.io/rome/) - Gulp
* [sass](https://sass-lang.com) - SASS

## Authors

* **Frederik Aulich** - *Initial work* - [Kiesen](https://github.com/Kiesen)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
