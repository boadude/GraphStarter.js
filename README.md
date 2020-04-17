# GraphStarter.js

A Starter Project for Graph development.

- Apollo Graph
- Apollo Graph Manager
- PostgreSQL
- Sequelize ORM
- Domain-driver folder Structure
- Best Settings and Configurations for VSCode
- Best Linting configurations and complements.

# Table of Content

- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
  - [Querys](#querys)
    - [Get all Books](#get-all-books)
    - [Get specific Library](#get-specific-library)
  - [Mutation](#mutation)
    - [Create a Library](#create-a-library)
- [Configuration](#configuration)
  - [VSCode extensions](#vscode-extensions)
- [Folder Structure](#folder-structure)
- [Roadmap](#roadmap)
- [License](#license)

# Requirements

- Node 10+
- Docker

# Installation

## Part 1 - Install project and dependencies

    # Clone repository
    git clone git@github.com:codingandfitness/graph-starter.git --depth=1

    # Go to graphql-starter folder
    cd graph-starter

    # Install dependencies
    npm i

## Part 2 - Install Postgres

    # Config environment vars
    export DB_NAME=graph-starter
    export DB_PASS=123456

    # Start postgres, and create tables and data for testing
    docker-compose up -d

## Part 3 - Environment Variables configuration

    # Apollo Graph Manager (optional)
    APOLLO_KEY=<put-you-key-here>
    ENGINE_API_KEY=<put-you-key-here>

    # Postgres configuration
    DATABASE_HOST=localhost
    DATABASE_DB=graphql-starter
    DATABASE_USER=postgres
    DATABASE_PASS=123456

## Part 4 - Start project

    # Start the project with nodemon
    npm start

    # Open Graph Playground
    open http://localhost:4000

# Examples

## Querys

### Get all Books

    query{
      getBooks{
        name
        year
        createdAt
        updatedAt
        library{
          name
          createdAt
          updatedAt
        }
      }
    }

### Get specific Library

    query{
      getLibrary(id: 1){
        name
        createdAt
        updatedAt
        books{
          name
          year
          createdAt
          updatedAt
        }
      }
    }

## Mutations

### Create a Library

    mutation{
      createLibrary(post:{
        name: "California"
      }){
        code
        success
        message
        library{
          name
          createdAt
          updatedAt
          books{
            name
            year
            createdAt
            updatedAt
          }
        }
      }
    }

# Configuration

To ensure our work, we use Visual Studio Code and a few addons that will make our work much cleaner and professional.

- [VSCode](https://code.visualstudio.com/)
- [TablePlus](https://tableplus.com/)

## VSCode extensions

To install the add-ons necessary to work faster and cleaner we must go to the extension icon on the left panel and search all the add-on and installed.

- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Folder Structure

The repository use the Domain-Driven File Structure.

    graphql-starter/
     ├──.vscode/                          * configuration for vscode ide
     │   └──settings.json                 * configurations for vscode
     ├──configs/                          * configurations
     │   └──pg/                           * sql files for postgres migration
     ├──src/                              * source files
     │   ├──book/                         * book domain
     │   │   ├──book.js                   * book class
     │   │   ├──book.resolver.js          * book resolver
     │   │   ├──book.typeDef.js           * book typeDef
     │   │   └──index.js                  * book wrapper
     │   │
     │   ├──library/                      * library domain
     │   │   ├──library.js                * library class
     │   │   ├──library.resolver.js       * library resolver
     │   │   ├──library.typeDef.js        * library typeDef
     │   │   └──index.js                  * library wrapper
     │   │
     │   ├──utils/                        * utils
     │   │   ├──mutation/                 * mutation
     │   │   │  ├──index.js               * mutation wrapper
     │   │   │  ├──mutation.resolver.js   * mutation resolver
     │   │   │  └──mutation.typeDef.js    * mutation typeDef
     │   │   │
     │   │   ├──constants.js              * environment vars to constants
     │   │   └──responses.js              * responses
     │   │
     │   ├──context.js                    * context for apollo graph
     │   └──index.js                      * index server
     │
     ├──.editorconfig                     * configuration for vscode
     ├──.env                              * enviroments vars
     ├──.eslintrc                         * configuration for eslint
     ├──.gitignore                        * git ignore
     ├──.prettierignore                   * prettier ignore
     ├──.prettierrc                       * configuration for prettier
     ├──apollo.config.js                  * configuration for apollo graph manager
     ├──docker-compose.yml                * configuration for start postgres in container
     ├──App.js                            * initial configuration for start the project
     └──package.json                      * what npm uses to manage its dependencies

# Roadmap

- Apollo Graph Manager documentation
- Query Paginations
- Error Responses
- Protect with Auth0 Querys and Mutations.
- CI/CD with AWS CodePipeline in AWS Lambda
- Module Resolver for fixing Relative Paths.

# License

The MIT License (MIT)

Copyright (c) 2020 Miguel Meza,

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
