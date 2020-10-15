router.post("api/user", (req, res) => {
    db.User.create({
        name: req.body.name
    })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch(() => {
        console.log();
      });
  });

  router.put("api/user", (req, res) => {
    db.User.update({
        age: req.body.age,
        gender: req.body.gender
    }, {
        where: {
            id: req.body.id
        }
    })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch(() => {
        console.log();
      });
  });

  router.delete("/api/ghosts/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });