const db = require('./db')

const getData = ()=>{
    return db.User.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                data:result
            }
        }
        else{
            return {
                statusCode: 403,
                message: "no data",
              }
        }
    })
}

const newData = (id, name,mail,phn,zip) =>{
    return db.User.findOne({
        mail
    }).then((result)=>{
        if (result) {
            return {
                statusCode: 403,
                message: "Email already exists",
              }

            
        }
        else{
            const newUser = new db.User({
                id,
                name,
                email: mail,
                zipcode: zip,
                phone: phn
            })

            newUser.save()
            return{
                statusCode:200,
                message:"The data is updated"
            }


        }
    })
}

module.exports={
    getData,newData
}