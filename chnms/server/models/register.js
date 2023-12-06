const mongoose=require('mongoose')

const Register = new mongoose.Schema({
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
   role: { type: String, required: true },
   
});
Register.add({
    workbench: { type: String, required: function () { return this.role === 'technician'; } },
    workload: { type: Number, required: function () { return this.role === 'technician'; } }
});

const register = mongoose.model('Register', Register);

module.exports = register;