import express from "express";
import cors from "cors"
import "dotenv/config";
import "express-async-errors";


const app = express()

app.use(cors())
app.use(express.json());

// app.use([])

// app.use(errorMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))