const { subChildCategoryService } = require('../services');

/**create category */
const createSubChildCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const subChildCategory = await subChildCategoryService.createSubChildCategory(reqBody);
        if (!subChildCategory) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully !",
            data: { subChildCategory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**get list */
const getSubChildCategoryList = async (req, res) => {
    try {
        const getList = await subChildCategoryService.getSubChildCategoryList(req, res);

        if (!getList) {
            throw new Error("SubChildCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get subChildCategory list successfullYy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get details by id */
const getSubChildCategoryDetails = async (req, res) => {
    try {
        const getDetails = await subChildCategoryService.subChildCategoryById(req.params.subChildCategoryId);

        if (!getDetails) {
            throw new Error("SubChildCategory not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get subChildCategory details by id successfullYy !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const subChildCategoryId = req.params.subChildCategoryId;

        const subChildCategoryExist = await subChildCategoryService.subChildCategoryById(subChildCategoryId);
        if (!subChildCategoryExist) {
            throw new Error("SubChildCategory not found !");
        }

        await subChildCategoryService.updateRecord(subChildCategoryId, req.body);

        res.status(200).json({
            success: true,
            data: "SubChildCategory is update successfullYy !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const subChildCategoryId = req.params.subChildCategoryId;

        const subChildCategoryEx = await subChildCategoryService.getSubChildCategoryList(subChildCategoryId);
        if (!subChildCategoryEx) {
            throw new Error("SubChildCategory not found !")
        }

        await subChildCategoryService.deleteRecord(subChildCategoryId);

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
    createSubChildCategory,
    getSubChildCategoryList,
    getSubChildCategoryDetails,
    updateRecord,
    deleteRecord
}