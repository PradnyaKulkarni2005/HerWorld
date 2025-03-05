import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api';
import NewsCard from './NewsCard';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await fetchNews();
                console.log("Fetched News Data:", newsData); // Debugging
                setArticles(newsData);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        getNews();
    }, []);

    return (
        <div className="news-list">
            <h2>Latest Women's News</h2>
            <div className="news-grid">
                {articles.length === 0 ? <p>No news available</p> : 
                articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default NewsList;
