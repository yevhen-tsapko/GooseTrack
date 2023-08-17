const googlehandleAnswer = (req, res) => {
  const { accessToken, refreshToken } = req.query.params;
  console.log("accessToken", accessToken, "refreshToken", refreshToken);

  return res.status(200).json({ accessToken, refreshToken });
};
module.exports = googlehandleAnswer;
