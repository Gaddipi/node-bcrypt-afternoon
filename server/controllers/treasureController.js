module.exports = {
  dragonTreasure: async (req, res) => {
    const getTreasure = await req.app.get("db").get_dragon_treasure(1);
    return res.status(200).send(getTreasure);
  },
  getUserTreasure: async (req, res) => {
    const userTreasure = await req.app
      .get("db")
      .get_user_treasure([req.session.user.id]);
    return res.status(200).send(userTreasure);
  },
  addUserTreasure: async (req, res) => {
    const { image_url } = req.body;
    const { user_id } = req.session.user;
    const userTreasure = await req.app
      .get("db")
      .add_user_treasure([image_url, user_id]);
    return res.status(200).send(userTreasure);
  },
  getAllTreasure: async (req, res) => {
    const allTreasure = await req.app.get("db").get_all_treasure();
    return res.status(200).send(allTreasure);
  }
};
