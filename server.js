const express = require("express");
const path = require("path");
const app = express();
const dbConnection = require("./Db/db");
app.use(express.json());

const port = 8000;
app.get("/", (req, res) => {
  res.send("hello");
});

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("Frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend/build/index.html"));
  });
}
app.use("/api/cars/", require("./Routes/carsRoutes"));
//refresh error
app.use("/booking/api/cars/", require("./Routes/carsRoutes"));
app.use("/editcar/api/cars/", require("./Routes/carsRoutes"));
app.use("/api/users/", require("./Routes/usersRoutes"));
app.use("/booking/api/bookings/", require("./Routes/bookingsRoute"));
app.use("/api/bookings/", require("./Routes/bookingsRoute"));

app.listen(port, () => {
  console.log(`Server is running at port: ${port} `);
});
