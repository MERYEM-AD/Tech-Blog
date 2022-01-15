const router = require('express').Router();
const { Comment ,User} = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 try{ 
  const commentData = await Comment.findAll({
    include: [User],
  });
// serialize the data
  const comments = commentData.map((comment) => comment.get({ plain: true }));

  console.log(comments);
  
  res.render('post', {comments, loggedIn: req.session.loggedIn});
  // res.json(comments);
} catch(err) {
    res.status(500).json(err);
}
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
 
      commentContent:req.body.commentContent,
      user_id: req.session.userId,
      post_id :req.body.postId
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
