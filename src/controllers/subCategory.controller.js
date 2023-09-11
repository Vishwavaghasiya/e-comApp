const { subCategoryService } = require('../services');

/**create category */
const createSubCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const subCategory = await subCategoryService.createSubCategory(reqBody);
        if (!subCategory) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully !",
            data: { subCategory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**get list */
const getSubCategoryList = async (req, res) => {
    try {
        const getList = await subCategoryService.getSubCategoryList(req, res);

        if (!getList) {
            throw new Error("SubCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get subCategory list successfullYy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get details by id */
const getSubCategoryDetails = async (req, res) => {
    try {
        const getDetails = await subCategoryService.subCategoryById(req.params.subCategoryId);

        if (!getDetails) {
            throw new Error("SubCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get subCategory details by id successfullYy !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const subCategoryId = req.params.subCategoryId;

        const subCategoryExist = await subCategoryService.subCategoryById(subCategoryId);
        if (!subCategoryExist) {
            throw new Error("SubCategory not found !");
        }

        await subCategoryService.updateRecord(subCategoryId, req.body);

        res.status(200).json({
            success: true,
            data: "SubCategory is update successfullYy !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const subCategoryId = req.params.subCategoryId;

        const subCategoryEx = await subCategoryService.getSubCategoryList(subCategoryId);
        if (!subCategoryEx) {
            throw new Error("SubCategory not found !")
        }

        await subCategoryService.deleteRecord(subCategoryId);

        res.status(200).json(
            {
                success: true,
                message: "Delete record successfully !"
            }
        );
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createSubCategory,
    getSubCategoryList,
    getSubCategoryDetails,
    updateRecord,
    deleteRecord
}