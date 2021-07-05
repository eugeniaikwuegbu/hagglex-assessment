# About
HaggleX Project

## Installation
To clone the project:
```bash
https://github.com/eugeniaikwuegbu/hagglex-assessment.git
```
`cd` into the `hagglex-assessment` directory
```bash
cd hagglex-assessment
```

install project dependencies
```
yarn install
```

compile Typescript files to Javascript (by continuously watching)
```bash
yarn tsc -w
```

open another terminal, and run the project
```bash
yarn start:dev
```
To view on GraphQL Playground, open the browser and paste this URL
```bash
localhost:3000/graphql
```
Link to Hosted project on Heroku
```bash
https://haggle-x-project.herokuapp.com
```
Testing on Postman

Create new products
```bash
{{base_url}}/products
```

Get all products
```bash
{{base_url}}/products
```

Get Products by query params
```bash
{{base_url}}/products/find?title={title}&desc={desc}&imageSize={imageSize}
```





