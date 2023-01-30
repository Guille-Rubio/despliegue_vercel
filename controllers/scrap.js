const { getProductNames } = require('../utils/scraping/scraper');



const scrapProducts = async (req, res) => {
    try {
        const h2s = await getProductNames();
        res.status(200).json({ test: h2s })

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
};

const scrapers = {
    scrapProducts
};

module.exports = scrapers;