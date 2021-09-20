const User = () => {
  const User = define("users", {
    Name: {
      type: STRING,
    },
    username: {
      type: STRING,
    },
    emailid: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
  });

  return User;
};
module.exports = User;
