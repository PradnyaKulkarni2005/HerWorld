const axios = require('axios');

exports.getNews = async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const url = `https://newsapi.org/v2/everything?q=women&language=en&apiKey=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data.articles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching news", error });
    }
};
