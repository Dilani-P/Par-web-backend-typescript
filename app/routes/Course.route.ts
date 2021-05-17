
export default function handler(server, options, next){
    
    //get all courses list
    server.route({
        method : "GET" ,
        url : '/list',
        handler : (req, res) => {
            res.code(200).send({message : "all courses !"})
        }
    })  

    next();
}