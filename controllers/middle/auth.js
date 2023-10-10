// //import User from '../models/'
// import jwt from 'jsonwebtoken'
// const auth = async (req, res, next) => {
//   // check header
//   const authHeader = req.headers.authorization
//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     return res.status(401).json({
//       message: 'Unauthorized'
//     })
//   }
//   const token = authHeader.split(' ')[1]
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET)
//     // attach the user to the route
//     req.user = { userId: payload.userId, name: payload.name }
//     next()
//   } catch (error) {
//     res.status(401).json({
//       message: 'Unauthorized'
//     })
//   }
// }
// export default auth