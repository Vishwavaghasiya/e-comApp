const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        categoryName : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        parentId : {
            type : String,
            trim : true
        },
        subCategory : {
            type : mongoose.Types.ObjectId,
            ref : "subCategory"
        },
        subChildCategory : {
            type : mongoose.Types.ObjectId,
            ref : "subChildCategory"
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Category = mongoose.model('category' , categorySchema);
module.exports = Category;