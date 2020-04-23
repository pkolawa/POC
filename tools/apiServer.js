const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "mockData.json"));
const middlewares = jsonServer.defaults();

server.unsubscribe(middlewares);
server.use(jsonServer.bodyParser);

server.get("/", function(req, res, next){
    res.status(200).send("OK GET");
});

server.post("/", function(req, res, next) {
    const error = validateRequestBody(req.body);
    if(!error){
        res.status(200).send("OK POST");
        next();
    }else{
        res.status(400).send(error);
    }
});

server.use(router);

const port = 3001;
server.listen(port, () => console.log(`API server is running on port ${port}`));

function validateRequestBody(requestsBody){
    return "";
}