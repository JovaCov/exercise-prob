const getUserId = async (req) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const decoded = jwt.decode(token)
    const findUserById = await User.find({ _id: decoded.userId }).select("-password");
    console.log(authHeader,token,decoded,findUserById);
    if(findUserById[0] !== undefined){
      const userId = findUserById[0]._id
      return userId
    }
    return undefined
}

module.exports = getUserId