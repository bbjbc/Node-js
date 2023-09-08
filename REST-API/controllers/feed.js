exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    // 201은 리소스 생성을 나타냄
    message: "Post created successfully!",
    post: { id: new Date(), title: title, content: content },
  });
};
