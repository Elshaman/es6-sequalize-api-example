const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize') 
const UserModel = require("../models/user")
const user = UserModel(sequelize , DataTypes )

exports.getBootcamps = async(req, res)=>{
    try {
        const users = await user.findAll();
        res.status(200).json({
            "success": true,
            "data": users
        })
    } catch (error) {
        res.status(400).json(error)
    }
    
   
}

exports.getBootcampById =  async(req, res)=>{
    try {
        const userbyId = await user.findByPk(1)
        res.status(200).json({
            "success": true,
            "data": userbyId
        })
    } catch (error) {
        res.status(400).json(error)
    }  
}

exports.createBootcamp =  async(req, res)=>{
        try {
            const jane = await user.create(req.body);
            res.status(201).json(
            {
                "success" : true,
                "data": jane
            })   
        } catch (error) {
            if(error instanceof ValidationError){
                res.status(400).json(
                    {
                        "success" : false,
                        "errors": [
                            error.errors[0].message,
                            error.errors[1].message
                        ]
                    }  
                ) 
            }else{
                res.status(400).json(
                    {
                        "success" : false,
                        "error": error 
                    }  
                ) 
            }
        }
}

exports.updateBootcamp =  async(req, res) => {
    const updateduser = await user.update(req.body, {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(
        {
            "sucess" : true,
            "data": updateduser
        }
    )
}

exports.deleteBootcamp =  async(req, res) => {
    const userdel = await user.destroy({
        where: {
          id: req.params.id
        }
      });
    
    res.status(200).json({
        "sucess": true, 
        "data": userdel
    })
}


 