const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        category : {
            type : mongoose.Types.ObjectId,
            ref : "category"
        },
        id_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const SubCategory = mongoose.model("subCategory", subCategorySchema);
module.exports = SubCategory