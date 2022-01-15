const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// create new user's post
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

// Update user's post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const PostUpdated = await Post.update(
      {
        title :req.body.title,
        content : req.body.content,
        // user_id: req.session.userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(PostUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user's post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postDeleted = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });
    res.status(200).json(postDeleted);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
