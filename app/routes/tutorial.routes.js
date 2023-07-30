module.exports = app =>{
    const tutorials = require("../controllers/tutorial.controller.js")

    const authController = require("../controllers/auth.controller");
    var router = require("express").Router();
    
    router.post("/" , tutorials.create)

    router.get("/" , tutorials.findAll)

    router.get("/published" , tutorials.findAllPublished);

    router.get("/:id" , tutorials.findOne);

    router.put("/:id" , tutorials.update)

    router.delete("/:id" , tutorials.delete);

    router.delete("/" , tutorials.deleteAll)

    app.post("/register", authController.register);

  // Login route
  app.post("/login", authController.login);

    app.use('/api/tutorials' , router)







    
}