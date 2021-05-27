import OrgUserModel from '../models/orguser.model'
import { IOrgUser} from '../interfaces/orgUser.interface'

class OrganizationUser{

    async insert(req, res){
        try{
            
            const newOrganizationUser:IOrgUser = req.body;
            const result = await OrgUserModel.create(newOrganizationUser)
            res.code(200).send({
                success : true,
                data : result,
                message : "Organization User Created !"
            })
        }catch(err){
            res.code(500).send({
                success : false,
                data : null,
                message : "Oraganization User Creation Failed !"
            })  
        }
    }

   

}

export default new OrganizationUser();