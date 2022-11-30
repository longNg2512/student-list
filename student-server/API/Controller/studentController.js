import { studentModel } from "../Model/studentModel.js";

export const addStudent = async (req, res) => {
  try {
    const nameStudent = req.body.name;
    const gender = req.body.gender;
    await studentModel.create({ name: nameStudent, gender: gender });
    res.send({ message: "Create Student Success!" });
  } catch (error) {
    res.send({ error, message: "Create Student Failure!" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const idStudent = req.params.id;
    await studentModel.findByIdAndDelete(idStudent);
    res.send({ message: "Delete Student Success!" });
  } catch (error) {
    res.send({ error, message: "Delete Student Failure!" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const idStudent = req.params.id;
    const nameStudent = req.body.name;
    const gender = req.body.gender;
    await studentModel.findByIdAndUpdate(idStudent, {
      name: nameStudent,
      gender: gender,
    });
    res.send({ message: "Update Student Success!" });
  } catch (error) {
    res.send({ error, message: "Update Student Failure!" });
  }
};

export const paginationStudent = async (req, res) => {
  try {
    const activePage = parseInt(req.query.activePage);
    const limit = parseInt(req.query.limit);
    const skip = (activePage - 1) * limit;
    const totalStudent = await studentModel.countDocuments();
    const totalPage = Math.ceil(totalStudent / limit);
    const listStudent = await studentModel.find().skip(skip).limit(limit);
    res.send({
      listStudent,
      activePage,
      totalPage,
      skip,
      message: "Pagination Student Success!",
    });
  } catch (error) {
    res.send({ error, message: "Pagination Student Failure!" });
  }
};

export const searchPaginationStudent = async (req, res) => {
  try {
    const textSearchName = req.query.textSearchName;
    const textSearchGender = req.query.textSearchGender;
    const activePage = parseInt(req.query.activePage);
    const limit = parseInt(req.query.limit);
    const skip = (activePage - 1) * limit;
    if (textSearchName && textSearchGender) {
      const totalStudent = await studentModel.countDocuments({
        name: { $regex: textSearchName, $options: "i" },
        gender: textSearchGender,
      });
      const totalPage = Math.ceil(totalStudent / limit);
      const listStudent = await studentModel
        .find({
          name: { $regex: textSearchName, $options: "i" },
          gender: textSearchGender,
        })
        .skip(skip)
        .limit(limit);
      res.send({
        listStudent,
        textSearchName,
        textSearchGender,
        activePage,
        totalPage,
        skip,
        message: "Search Pagination Student Success!",
      });
    } else if (textSearchName) {
      const totalStudent = await studentModel.countDocuments({
        name: { $regex: textSearchName, $options: "i" },
      });
      const totalPage = Math.ceil(totalStudent / limit);
      const listStudent = await studentModel
        .find({
          name: { $regex: textSearchName, $options: "i" },
        })
        .skip(skip)
        .limit(limit);
      res.send({
        listStudent,
        textSearchName,
        activePage,
        totalPage,
        skip,
        message: "Search Pagination Student Success!",
      });
    } else if (textSearchGender) {
      const totalStudent = await studentModel.countDocuments({
        gender: textSearchGender,
      });
      const totalPage = Math.ceil(totalStudent / limit);
      const listStudent = await studentModel
        .find({
          gender: textSearchGender,
        })
        .skip(skip)
        .limit(limit);
      res.send({
        listStudent,
        textSearchGender,
        activePage,
        totalPage,
        skip,
        message: "Search Pagination Student Success!",
      });
    }
  } catch (error) {
    res.send({ error, message: "Search Pagination Student Failure!" });
  }
};
