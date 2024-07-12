import express from "express";
import { InstallReqModel } from "../models/InstallReq.js";

const createRequest = async (req, res) => {
  console.log(req.body);
  const { name, designation, purpose, department, mentor } = req.body;
  try {
    const newRequest = new InstallReqModel({
      name,
      designation,
      purpose,
      department,
      mentor,
      postedBy: req.user._id,
    });
    const result = await newRequest.save();
    console.log("=>", result);
  } catch (err) {
    return res.status(500).json(err.message);
  }

  return res.status(201).json({ success: true });
};

const getContacts = async (req, res) => {
  try {
    const contacts = await InstallReqModel.find({ postedBy: req.user._id });
    return res.status(200).json({ success: true, contacts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const records = await InstallReqModel.find();
    return res.json(records);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const setChanges = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = await InstallReqModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createChanges = (req, res) => {
  const { softwareUrl, downloadLocation } = req.body;

  const file = fs.createWriteStream(downloadLocation);
  const sendSuccessResponse = () => {
    console.log("Request submitted successfully.");
    res.status(200).send("Request not successfully completed.");
  };

  request
    .get(softwareUrl)
    .on("error", (err) => {
      console.error("Error requesting the gatepass:", err);
      res.status(500).send("Error requesting gatepass.");
    })
    .pipe(file)
    .on("close", sendSuccessResponse)
    .on("error", (err) => {
      console.error("Error saving the file:", err);
      res.status(500).send("Error saving the file.");
    });
};

export {
  createRequest,
  getContacts,
  getAllContacts,
  setChanges,
  createChanges,
};
