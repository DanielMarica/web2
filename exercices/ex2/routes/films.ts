import {Router} from "express";
import{ Films} from "../types";

const films: Films[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: "160 million USD",
      description: "A skilled thief is given a chance to erase his criminal history by performing an impossible task: planting an idea in someone's subconscious.",
      imageUr: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "The Wachowskis",
      duration: 136,
      budget: "63 million USD",
      description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      imageUr: "https://example.com/matrix.jpg"
    },
    {
      id: 3,
      title: "Spirited Away",
      director: "Hayao Miyazaki",
      duration: 125
    },
    {
      id: 4,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      duration: 175,
      description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son."
    },
    {
      id: 5,
      title: "Parasite",
      director: "Bong Joon-ho",
      duration: 132,
      budget: "11 million USD"
    }
  ];
  
  const router = Router();
  router.get("/",(_req,res) => {
    return res.json(films);
  })
  export default router;
  