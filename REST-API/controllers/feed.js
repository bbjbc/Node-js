exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/chatbot.jpg",
        creator: {
          name: "Boongranii",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    // 201은 리소스 생성을 나타냄
    message: "Post created successfully!",
    post: {
      _id: new Date(),
      title: title,
      content: content,
      creator: { name: "Boongranii" },
      createdAt: new Date(),
    },
  });
};
