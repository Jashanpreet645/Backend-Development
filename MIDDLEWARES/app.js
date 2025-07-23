const express = require('express');
const app = express();

// app.use((req,res,next)=>{
//     console.log('Middleware is running');
//     next();
// });

// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toISOString();
//   console.log(req.method,req.hostname,req.path, req.time);
//   next();
// });

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
    res.send();
});