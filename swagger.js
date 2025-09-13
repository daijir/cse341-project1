const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Contacts API",
    description: "A simple Express Contacts API",
  },
  host: "cse341-project1-f02z.onrender.com",
  schemes: ["https"],
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);