import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // ✅ Fixed duplicate json middleware

// Set default port if .env is missing
const PORT = process.env.PORT || 7000;

// Register Route
app.post("/api/v1/user/register", (req, res) => {
    const { name, email, password } = req.body;
    
    console.log({ name, email, password });

    res.status(200).json({
        success: true,
        message: "Account created successfully",
    });
});

// Login Route
app.post("/api/v1/user/login", (req, res) => {
    const { email, password } = req.body;
    
    console.log({ email, password }); // ✅ Removed undefined `name`

    res.status(200).json({
        success: true,
        message: "Login successfully",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
