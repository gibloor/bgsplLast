const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES//
app.post('/images', async (req, res) => {
  try {
    const { link } = req.body;
    const newImage = await pool.query("INSERT INTO images (link) VALUES($1) RETURNING *", [link]);
  
    res.json(newImage.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/images', async (req, res) =>{
  try {
    const allImages = await pool.query("SELECT * FROM images");
    res.json(allImages.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const image = await pool.query("SELECT * FROM images WHERE id = $1", [id])
 
    res.json(image.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.put('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { link, title } = req.body;
    const updateImage = await pool.query("UPDATE images SET link = $1, title = $2 WHERE id = $3", [link, title, id]);
    
    res.json("Image was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

app.delete('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteImage = await pool.query("DELETE FROM images WHERE id = $1", [id]);

    res.json("Image was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000');
});