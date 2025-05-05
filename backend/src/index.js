import app from "./app.js";

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
