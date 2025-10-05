let jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, joke: "Why don't skeletons fight each other? They don't have the guts." }
];
exports.getalljokes =(req,res)=>{
    res.json(jokes);
};

exports.getRandomJoke =(req,res)=>{
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
};

exports.getJokesById =(req,res)=>{
    const joke = jokes.find(j => j.id === parseInt(req.params.id));
    if (!joke) return res.status(404).send("Joke not found");
    res.json(joke);
};

exports.addJokes =(req,res)=>{
    const newID = jokes[jokes.length - 1].id + 1;
    const joke = req.body.joke;
    jokes.push({ id: newID, joke: joke });
    res.json({ id: newID, joke: joke });
};
