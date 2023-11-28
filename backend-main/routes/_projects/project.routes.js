const router = require("express").Router();
const multer = require("multer");
const {
	createProject,
	getAllProjects,
	getProject,
	deleteProject,
	updateProject,
} = require("../../controllers/projects/project.controller");
const { checkRole } = require("../../middleware/checkRole");
const addWatermark = require("../../middleware/addWaterMark");


const storage = multer.memoryStorage();
const upload = multer({
	storage,
	limits: { fileSize: 300 * 1024 * 1024 },
});
router.post(
	"/",
	createProject
);
// router.post(
//   "/",
//   checkRole(["ADMIN", "MODERATOR"]),
//   upload.array("images", 5),
//   createProject
// );


router.get("/", getAllProjects);


router.get("/:id", getProject);


router.delete("/:id", checkRole(["ADMIN"]), deleteProject);


router.patch(
	"/:id",
	checkRole(["ADMIN", "MODERATOR"]),
	upload.array("images", 5),
	updateProject
);

module.exports = router;
