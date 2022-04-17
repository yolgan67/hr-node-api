var express = require('express');
var router = express.Router();


var candidateModel = require('../models/candidateModel')


router.get('/', function(req, res) {
  candidateModel.find()
    .then((candidate)=>{res.json(candidate)})
    .catch((err)=>{res.json(err)})
});

router.get('/:candidateId', function(req, res,next) {
  candidateModel.findById(req.params.candidateId)
    .then((candidate)=>{res.json(candidate)})
    .catch((err)=>{res.json(err)})
});


router.post('/',function(req,res){
  
  const newCandidate = new candidateModel(req.body)

  newCandidate.save()
    .then((candidate)=>{res.json(candidate)})
    .catch((err)=>{res.json(err)})
})


router.delete('/:candidateId', function(req, res) {
  candidateModel.findByIdAndRemove(req.params.candidateId)
    .then((candidate)=>{res.json(candidate)})
    .catch((err)=>{res.json(err)})
});

module.exports = router;
