
import UserModel from '../models/user.model'
import { IUser} from '../interfaces/user.interface'

class User{

    async insert(req, res){
        try{
            
            const newUser:IUser = req.body;
            const result = await UserModel.create(newUser)
            res.code(201).send({
                success : true,
                data : result,
                message : "Users Created !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

    async getAllUsers(req, res){
        try{
            const users = await UserModel.find({});
            res.code(200).send({
                success : true,
                data : users,
                message : "Users Found !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

    async getSingleUser(req, res){
        try{
            const user = await UserModel.findOne    ({_id : req.params.id});
            if(user != null){
                return res.code(200).send({
                    success : true,
                    data : user,
                    message : "User Found !"
                })
            }else{
                return res.code(404).send({
                    success : false,
                    data : null,
                    message : "Users Not Found !"
                }) 
            }
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

    async update(req, res){
        try{
            
            const result = await UserModel.findOneAndUpdate({
                _id : req.params.id
            }, req.body, {upsert: true , new : true})

            return res.code(200).send({
                success : true,
                data : result,
                message : "Users updated !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

    async delete(req, res){
        try{
            const user = await UserModel.findOne({_id : req.params.id});
            if(user == null){
                return res.code(404).send({
                    success : false,
                    data : null,
                    message : "Users Not Found !"
                }) 
            }

            await UserModel.deleteOne({ _id : user._id })

            res.code(200).send({
                success : true,
                data : user,
                message : "User Deleted !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Failed !"
            })  
        }
    }

}

export default new User();

