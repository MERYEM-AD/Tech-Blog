const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// create new post's user
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title :req.body.title,
      content : req.body.content,
      user_id: req.session.userId });
    console.log("Here is the new post: ",  newPost);
    res.json(newPost);
     } catch (err) {
       console.log('IT FAILED!', err);
    res.status(500).json(err);
  }
});



module.exports = router;
