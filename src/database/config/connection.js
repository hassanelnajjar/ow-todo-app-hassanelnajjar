const dbUrl =
  'postgres://ccsafunpiflsnv:1d0d8a971e68a7c4d49d40b890dc307904ae69b7a84eac44b9c4d60ba11a467c@ec2-79-125-64-18.eu-west-1.compute.amazonaws.com:5432/de74cho175i87q';

const { Pool } = require('pg');

const ssl = {
  rejectUnauthorized: false,
};

const option = {
  connectionString: dbUrl,
  ssl,
};

module.exports = new Pool(option);