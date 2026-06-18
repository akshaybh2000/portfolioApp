const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, budget, projectRequirement } = req.body;

    if (!name || !email || !phone || !projectRequirement) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const query = `
      INSERT INTO inquiries
      (name,email,phone,budget,project_requirement)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *
    `;

    const values = [name, email, phone, budget, projectRequirement];

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM inquiries ORDER BY created_at DESC",
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
