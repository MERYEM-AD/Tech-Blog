const router = require('express').Router();
const {Comment, User, Post} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = postData.map((post) =>
    post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth,async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });

    const post = postData.get({ plain: true });


    const commentData = await Comment.findAll({
      include: [User],
      where:{

        post_id :req.params.id
      }
    });
  // serialize the data
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    


    //render the information to the post page
    res.render("post", {
      post,comments,
      loggedIn:req.session.loggedIn

    });
    // res.status(200).json({post})
  } catch (err) {
    res.status(500).json(err);
  }
});


//Get all posts user in dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where:{"user_id": req.session.userId},
      include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    //render the users dashboard with gathered data
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
      username : req.session.username
    });
    // res.json(user)
  } catch (err) {
    res.redirect('login');
  }
});


// add new Post 
router.get('/dashboard/newPost', withAuth, (req, res) => {
  res.render('newPost');
});
// Edit user's spost
router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('editPost', {post});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

//sign up route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
