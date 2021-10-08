import wikiService from "./wikiService";

const getWikiFishes = async () => {
        const res = await wikiService.get("/fishWiki/");
        return res.data;
}

export {getWikiFishes};