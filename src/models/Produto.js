const connectionn= require("../database/connection");

module.exports = {
async create() {
    const result = await connectionn("produto").insert(produto);
    return result;
},

async getById({produto_id}){
   const result = await connectionn("produto").where({produto_id}).select("*");;
   return result;
},

async updateById(produto_id, produto){
    const result = await connectionn("produto").where(produto_id).update(produto);
    return result;
},

async deleteByID(produto_id){
    const result = await connectionn("produto").where({ produto_id}).delete();
    return result;
},

}