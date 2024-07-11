const verifyRole = (requiredRole) => (req, res, next) => {
  try {
    const { role } = req.auth;
    if (role === false || role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = verifyRole;
