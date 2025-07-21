import rateLimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my_rate_limit");
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later. Limit Reached" });
        }  

        next();
        
    } catch (error) {
        console.error("Rate Limiter Error:", error);
        res.status(500).json({ message: "Internal server error in Rate Limiter" });
    }
}

export default rateLimiter;