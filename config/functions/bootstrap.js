"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

const dotenv = require("dotenv");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production" || NODE_ENV === "development") {
  dotenv.config({
    path: path.resolve(
      __dirname,
      `../../.env.${process.env.NODE_ENV.toLowerCase()}`
    )
  });
}

module.exports = async () => {
  console.log("Env vars are set.");
};
