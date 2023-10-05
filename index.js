"use strict";

app.use(express.json());

app.all("/", (req, res) => {
  res.send("Welcome To BlogApi");
});

/* ------------------------------------------------------- */
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
