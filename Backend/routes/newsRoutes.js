const express = require('express');
const router = express.Router();

// Sample News Data (Replace with Database Fetching if needed)
const newsData = [
    {
        title: "Women's Rights Movement Gains Momentum",
        description: "Activists push for stronger policies on gender equality.",
        link: "https://example.com/news1"
    },
    {
        title: "Women in Tech: Breaking Barriers",
        description: "More women are entering the tech industry and making an impact.",
        link: "https://example.com/news2"
    }
];

// Route to Fetch News
router.get('/', (req, res) => {
    res.json(newsData);
});

module.exports = router;
