const express = require('express');
const router = express.Router();

router.get('/:folderName/:fileName', (req, res) => {
    var folderName = req.params.folderName;
    var fileName = req.params.fileName;
    var path = 'C:\\dev\\recipe\\upload\\' + folderName + '\\' + fileName;

    res.sendFile(path);
});

module.exports = router