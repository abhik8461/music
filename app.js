const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    songs: [
      {
        title: "Alan Walker - Faded (Restrung)",
        song: 1,
        url: "http://localhost:8200/music/Alan Walker - Faded (Restrung) (128 kbps).mp3",
      },
      {
        title: "Alan Walker - Sing Me To Sleep",
        song: 2,
        url: "http://localhost:8200/music/Alan Walker - Sing Me To Sleep (Instrumental) (128 kbps).mp3",
      },
      {
        title: "Alan Walker vs Coldplay - Hymn For The Weekend",
        song: 3,
        url: "http://localhost:8200/music/Alan Walker vs Coldplay - Hymn For The Weekend [Remix] (128 kbps).mp3",
      },
      {
        title: "Alan Walker - Alone",
        song: 4,
        url: "http://localhost:8200/music/Alan Walker - Alone (128 kbps).mp3",
      },
    ],
  });
});

app.listen(8200, () => console.log(`server is running on 8200`));
