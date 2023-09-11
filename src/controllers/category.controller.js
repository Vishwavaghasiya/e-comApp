const { categoryService } = require('../services');

/**create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const catageory = await categoryService.createCategory(reqBody);
        if (!catageory) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully !",
            data: { catageory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**get list */
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList(req, res);

        if (!getList) {
            throw new Error("Something wents wrong , please try again or later!!");
        }

        res.status(200).json(
            {
                success: true,
                message: "Get Category list successfullYy !",
                data: { getList }
            }
        );
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**find by id */
const getCategoryDetails = async (req, res) => {
    try {
        const getDetails = await categoryService.categoryById(req.params.categoryId);
        if (!getDetails) {
            throw new Error("Category not found!");
        }

        res.status(200).json({
            success: true,
            message: "Get category details successfully !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update record */
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryEx = await categoryService.categoryById(categoryId);
        if (!categoryEx) {
            throw new Error("Category not found !");
        }

        await categoryService.updateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Your category record is update successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExist = await categoryService.getCategoryList(categoryId);
        if (!categoryExist) {
            throw new Error("Category not  found !");
        }

        await categoryService.deleteRecord(categoryId);

        res.status(200).json({
            success: true,
            message: "Category delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryDetails,
    updateCategory,
    deleteRecord
}