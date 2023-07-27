const db = require("../models");
// console.log(db ,"arbazzzz");
const Tutorial = db.tutorials;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            massage :"content can be empty!"
        })
        return
    }

    const tutorial ={
        title: req.body.title,
        description :req.body.description,
        published :req.body.published ? req.body.published:false
    }

    Tutorial.create(tutorial)
    .then(data=>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            massage:
            err.massage || "some error occuerred while creating the tutorial ."
        })
    })

  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: {[Op.like] : `% ${title}`}} :null
    
    Tutorial.findAll({where : condition})
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            massage:
            err.massage || "some error occuerred while creating the tutorial ."
        })
    })
}
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            massage:"enter retrieving tutorial with id " +id 
        })
    })
  
};
 
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id  = req.params.id

    Tutorial.update(req.body ,{
        where:{id :id}
    })
    .then( num =>{
            if(num ==1){
                res.send({
                    massage: "Tutorial was updatedn successfully"
                })
            }else{
                res.send({
                    massage: `can not update tutorial with id - ${id} , Mybe tutorial was not found or req.body is emp`
                })
            }
    })
    .catch(err =>{
        res.status(500).send({
            massage:"Enter updating tuorial with id"+id
        })
    })
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id =req.params.id ;

    Tutorial.destroy({
        where:{id: id}
    })
    .then(num=>{
        if( num == 1){
            res.send({
                massage: "Tutorial was deleted succesfuliy"
            })
        }else{
            res.send({
                massage: 'can not delet tutorial with id =${id}.Maybe tutorial was  not found '
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            massage: "could not delete tutorial with id "+ id 
           
            
        })
    })
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where:{},
        trumscate: false 
    })
    .then(num =>{
        res.send({massage: `${num} tutorials was deleted successfully`})

    })
    .catch(err =>{
        res.status(500).send({
            massage:
            err.massage || "some error occurred while removing all tutorials "

        })
    }) 
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({where:{published : true}})
    .then(data => {
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            massage:
            err.massage || "some error occurred  while retrieving tutorials"


        })
    })
  
};