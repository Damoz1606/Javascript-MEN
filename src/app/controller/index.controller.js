class Controller {
  getAll = (req, res) => {
    try {
      return res.status(200).json({ message: "Get All" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };
  post = (req, res) => {
    try {
      return res.status(200).json({ message: "Post" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };

  deleteAll = (req, res) => {
    try {
      return res.status(200).json({ message: "Delete All" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };

  getByID = (req, res) => {
    try {
      return res.status(200).json({ message: "Get by ID" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };

  put = (req, res) => {
    try {
      return res.status(200).json({ message: "Put" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };

  deleteByID = (req, res) => {
    try {
      return res.status(200).json({ message: "Delete by ID" });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  };
}

module.exports = new Controller();
