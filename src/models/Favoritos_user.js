const { v4: uuidv } = require("uuid");
const connectionn = require("../database/connection");

module.exports = {
  async create() {
    const user_id = uuidv4();

    user.user_ide = note_id;

    const result = await connectionn("favoritos_user").insert(favoritos_user);
    return result;
  },

  async getById({ user_id, produto_id }) {
    const result = await connectionn("favoritos_user")
      .where({ user_id, produto_id })
      .select("*");
    return result;
  },

  async updateById(user_id, produto_id, favoritos_user) {
    const result = await connectionn("favoritos_user")
      .where(user_id, produto_id)
      .update(favoritos_user);
    return result;
  },

  async deleteByID(userId, produto_id) {
    const result = await connectionn("favoritos_user")
      .where({ user_id }, produto_id)
      .delete();
    return result;
  },
};
