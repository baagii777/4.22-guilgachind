const todoSchema = require('../module/todo')
exports.getTodo = async(req,res)=>{
    let data = await todoSchema.find();
    res.status(200).json({
        success:true,
        data:data
    })
}
exports.postTodo = async (req,res)=>{
    try {
        let data = await todoSchema.create(req.body)
    res.status(200).json({
        success:true,
        data:data
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            data:error
        })
    }
    
}