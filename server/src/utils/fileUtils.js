const fs = require("fs/promises");
const path = require("path");
const CONSTANTS = require("./constants");

exports.makeDataDir = async () => {
  const dir = path.join(CONSTANTS.DATA_DIR);
  await fs.mkdir(dir).then(() => dir);
};

exports.isFileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") {
      return false; // File does not exist
    }
    throw err; // Other errors
  }
};

exports.readFile = async (filePath) => {
  try {
    if (!(await this.isFileExists(filePath))) {
      this.writeToFile(filePath, {});
    }
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
};

exports.writeToFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    throw err;
  }
};
