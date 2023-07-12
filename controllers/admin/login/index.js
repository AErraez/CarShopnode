const express = require("express");
const router = express.Router();
const User = require("./../../../models/user");
const multer = require("multer");

const upload = multer();
const roles = ["admin", "operator"];

router.post("/", upload.none(), function (req, res) {
  const { username, password } = req.body;
  console.log(req.body);
  User.getUser(username, (error, user) => {
    if (error) {
      return res.status(502).json({ code: "UE", message: "Unknown Error!" });
    }
    console.log("User:", user);

    if (user == null) {
      return res
        .status(401)
        .json({ code: "PF", message: "Email or password is incorrect!" });
    }
    if (user.password == password && roles.includes(user.role)) {
      req.session.user = {
        name: user.name,
        username: user.username,
        role: user.role,
      };

      return req.session.save(function (err) {
        if (err)
          return res
            .status(502)
            .json({ code: "UE", message: "Unknown Error!" });
        console.log("Success:", user);
        // return res.json({ code: 'OK', message: 'Login successful!'})
        return res.redirect("/order");
      });
    
    }

    return res
      .status(421)
      .json({ code: "PF", message: "Email or password is incorrect!" });
  });
});

router.get("/", (req,res)=>{
    res.render('admin/login')
  })

module.exports = router;