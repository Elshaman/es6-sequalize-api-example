//const db = require("./models/index");
module.exports = (sequelize, DataTypes)=> {
    return sequelize.define(
        'User',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                validate:{
                    isAlpha:{
                        args:true,
                        msg:"este campo solo debe tener letras" 
                    },
                    max:{
                        args: 10,
                        msg: "maximo 10"    
                    } ,
                    min:{
                        args: 2,
                        msg: "minimo 2"
                    },
                    notEmpty: true,        
                },
                allowNull: false,
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            // created_at and updated_at are required
            created_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        },
        {
            underscored: true,
        } 
    )
}



