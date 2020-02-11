import express from "express";
import axios from "axios";

export default (app, http) => {
  app.use(express.json());

  app.get("/event", (req, res) => {
    (async () => {
      console.log(req.url);
      const data = await axios
        .get("https://connpass.com/api/v1" + req.url)
        .then(response => {
          console.log("ok");
          return response.data;
        })
        .catch(err => {
          console.log(err.response);
          return err.response.message;
        });
      res.json(data);
    })().catch(err => console.log(err.message));
  });
};
