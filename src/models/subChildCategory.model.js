const mongoose = require('mongoose');

const subChildCategorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        subCategory : {
            type : mongoose.Types.ObjectId,
            ref : "subCategory"
        },
        is_active : {
            type : String,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const SubChildCategory = mongoose.model('subChildCategory' , subChildCategorySchema);
module.exports = SubChildCategory;