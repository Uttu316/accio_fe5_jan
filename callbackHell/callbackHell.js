const getUserData = (onSuccess) => {
  //assume this data from api call
  const data = {
    name: "Ajay",
    userId: "123",
  };
  onSuccess(data);
};

const getPosts = (userId, onSuccess) => {
  console.log({ userId });
  //assume this data from api call
  const data = [
    {
      title: "Prathik on Vacation",
      postId: "post_1",
    },
    {
      title: "Sujit got Job",
      postId: "post_2",
    },
  ];

  onSuccess(data);
};

const getComments = (postId, onSuccess) => {
  console.log({ postId });

  //assume the data coming from api
  const data = [
    {
      comment: "Ohh look awesome",
      commentId: "c_123",
    },
  ];

  onSuccess(data);
};

const getLikes = (commentId, onSuccess) => {
  console.log({ commentId });

  //assume this data coming form api
  const data = {
    likeCount: 111,
  };
  onSuccess(data);
};

getUserData((userData) => {
  const { userId } = userData;
  getPosts(userId, (posts) => {
    const firstPost = posts[0];
    const { postId } = firstPost;
    getComments(postId, (comments) => {
      const firstcomment = comments[0];
      const { commentId } = firstcomment;

      getLikes(commentId, (likes) => {
        console.log(likes);
      });
    });
  });
});
