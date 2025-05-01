const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const {v4: uuidv4} = require('uuid');
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

let posts = [
    {   
        id: uuidv4(),
        username: "John",
        content: "This is the first post",
        likes: 120,
        comments: 15,
        about: "John is an active community member who loves sharing his thoughts."
    },
    {   
        id: uuidv4(),
        username: "Mia bhai",
        content: "Loving this community!",
        likes: 195,
        comments: 10,
        about: "Mia bhai is known for his friendly attitude and positive vibes."
    },
    {   
        id: uuidv4(),
        username: "Elon Musk",
        content: "Just launched a new rocket 🚀",
        likes: 250,
        comments: 40,
        about: "Elon Musk is a tech entrepreneur and CEO of SpaceX and Tesla."
    },
    {
        id: uuidv4(),
        username: "MrBeast",
        content: "Giving away $10,000 today!",
        likes: 300,
        comments: 50,
        about: "MrBeast is a famous YouTuber known for his crazy challenges and giveaways."
    },
    {
        id: uuidv4(),
        username: "Taylor Swift",
        content: "New album dropping soon 🎶",
        likes: 200,
        comments: 25,
        about: "Taylor Swift is an award-winning singer-songwriter loved worldwide."
    },
    {
        id: uuidv4(),
        username: "Cristiano Ronaldo",
        content: "Feeling great after the match!",
        likes: 180,
        comments: 20,
        about: "Cristiano Ronaldo is one of the greatest footballers of all time."
    },
    {
        id: uuidv4(),
        username: "Emma Watson",
        content: "Reading a new book 📚",
        likes: 150,
        comments: 18,
        about: "Emma Watson is a celebrated actress and an advocate for women's rights."
    },
    {
        id: uuidv4(),
        username: "Dwayne Johnson",
        content: "Early morning workout done 💪",
        likes: 220,
        comments: 30,
        about: "Dwayne 'The Rock' Johnson is an actor and former WWE wrestler known for his motivation."
    },
    {
        id: uuidv4(),
        username: "Billie Eilish",
        content: "Thank you for all the support 🖤",
        likes: 170,
        comments: 22,
        about: "Billie Eilish is a Grammy-winning singer known for her unique music style."
    },
    {
        id: uuidv4(),
        username: "Lionel Messi",
        content: "Family time is the best time ❤️",
        likes: 190,
        comments: 28,
        about: "Lionel Messi is a legendary footballer admired for his incredible skills and humility."
    }
];

app.get('/', (req, res) => {
    res.render('landing.ejs');
})

app.get('/posts', (req, res) => {
    res.render('index.ejs',{posts});
})

app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/posts', (req, res) => {
    let { username, content, likes, comments } = req.body;
    let id = uuidv4();
    posts.push({
        id,
        username,
        content,
        likes: parseInt(likes),
        comments: parseInt(comments),
        about: "This is a new post created by the user."
    });
    // res.send('Post created successfully!');
    res.redirect('/posts');
})

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id == id);
    res.render('show.ejs', { post , id});
})

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id == id);
    res.render('edit.ejs', { post });
})

app.patch('/posts/:id', (req, res) => {
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => p.id == id);
    post.content = newcontent;
    console.log(post);
    res.redirect('/posts');
})

app.delete('/posts/:id', (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect('/posts');
})