exports.options = {
    routePrefix: "/documentation",
    exposeRoute: true,
    swagger: {
      info: {
        title: "Node.js Fastify API",
        description: "Node.js Fastify API",
        version: "1.0.0",
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "Find more info here",
      },
      host: "localhost:3000",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  };