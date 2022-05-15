const express = require("express");
const data = require("./data/data");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running....");
});

// GET DATA

app.get("/api/data", (req, res) => {
  res.json(data);
});

// POST DATA

app.post("/api/data", (req, res) => {
  const data1 = req.body;
  data.push(data1);
  res.send(data);
});

// DELETE DATA

app.delete("/api/data", (req, res) => {
  const id = req.body;
  const test = data.filter((t) => {
    t._id == id;
  });
  if (test) {
    data.pop(test);
  } else {
    res.send("data not found");
  }
  res.send("Data deleted");
});


// UPDATE DATA


app.put("/api/data/:id", (req, res) => {
  const data1 = req.body;
  const re = data.find((c) => c._id == req.params.id);
  console.log(re);
  if (!re) {
    res.send("no course");
  } else {
    data.pop(data.includes(re._id));
    (re._id = req.params.id),
      (re.category = data1.category),
      (re.content = data1.content),
      (re.title = data1.title);

    data.push(re);
    res.send("data is updated");
    res.send("data");
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
