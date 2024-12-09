import { useEffect, useState } from "react";
import "../components/news.css";

export default function News() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_61548f20c0a8eb88db3cab2b0f86564a2bbf3&q=cricket');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setNews(data?.results?.[3] || {});
            } catch (error) {
                console.error("Failed to fetch news:", error);
                setNews(null);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-container">
            <h1>News</h1>
            {loading ? (
                <p>Loading...</p>
            ) : news ? (
                <div className="news-card">
                    <img
                        className="news-image"
                        src={news.image_url || "placeholder.png"}
                        alt={news.title || "No title"}
                    />
                    <div className="news-content">
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-description">{news.description}</p>
                    </div>
                </div>
            ) : (
                <p>Failed to load news. Please try again later.</p>
            )}
        </div>
    );
}
