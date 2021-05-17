import * as fastify from "fastify";
import routeHandler from './routes/Routes'
import { MongoDB } from '../app/providers/Database.provider'
require( "dotenv" ).config();

// Configure HTTP server
const app = fastify.default({ logger: true });

//setup fastify cors
app.register(require("fastify-cors"),{
    origin: true,
});


//register a route
app.register(routeHandler, {
    prefix : "api/"
})

app.route({
    method : "GET" ,
    url : '/',
    handler : (req, res) => {
        res.code(200).send({message : "server is working!"})
    }
})

//Mongodb database
MongoDB.init();

const start = async () => {
    try {
      const PORT  = process.env.PORT || '3000'
      await app.listen(PORT)
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }

  start();
  export default app;