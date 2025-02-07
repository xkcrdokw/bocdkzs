const ai = require('./scraper/ai');
const download = require('./scraper/downloader');
const search = require('./scraper/search');
const stalk = require('./scraper/stalk')

module.exports = {
    gpt: ai.openai,
    stalktt: stalk.tiktokStalk,
	stickerpack: search.searchSticker,
	tiktok: download.tiktok,
	wallpaper: search.wallpaper
}
