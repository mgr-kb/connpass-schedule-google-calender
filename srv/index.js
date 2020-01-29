import express from "express";
import axios from "axios";

export default (app, http) => {
  app.use(express.json());

  app.get("/foo", (req, res) => {
    console.log("きたよfoo");
    res.json({ msg: "foo" });
  });
  app.get("/event", (req, res) => {
    (async () => {
      const data = await axios
        .get("https://connpass.com/api/v1/event/?nickname=mgr")
        .then(response => {
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
