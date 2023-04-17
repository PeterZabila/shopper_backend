const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require("express").Router();
const User = require('../models/User')

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
try {
  const updatedUser = await User.findByIdAndUpdate()
  req.params.id,
  {
    $set: req.body,
  },
  { new: true }
} catch (err) {
  res.status(500).json(err)
}

})

module.exports = router;


