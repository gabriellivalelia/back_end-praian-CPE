const connectionn= require("../database/connection");

module.exports = {
async create() {
    const result = await connectionn("user").insert(user);
    return result;
},

async getById({user_id}){
   const result = await connectionn("user").where({user_id}).select("*");;
   return result;
},

async updateById(user_id, user){
    const result = await connectionn("user").where(user_id).update(user);
    return result;
},

async deleteByID(nome_id){
    const result = await connectionn("user").where({ user_id}).delete();
    return result;
},

}