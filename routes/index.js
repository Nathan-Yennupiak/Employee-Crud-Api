const express = require ("express")
const router = express.Router()

const { Employee } = require('../models/employee')

//Get All Employees
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            res.send(data)
        }else {
            console.log(err)
        }
    })
}) 

//Save Employee
router.post('/api/employee/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    })
    emp.save((err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: "Employee Added Successfully", addEmployee:data})
        }else {
            console.log(err)
        }
        
    })
})

//Get A Single Employee
router.get('/api/employee/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})

//Update Employee
router.put('/api/employee/update/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new:true}, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: "Employee Updated Successfully",  updateEmployee:data })
        } else {
            console.log(err)
        }
    })
})
module.exports = router;

