const mongoose=require('mongoose');
const handleMongodbConnection=async(url)=>{
    return await mongoose.connect(url);
}
module.exports=handleMongodbConnection;