import wikiService from "./wikiService";

const getWikiFishes = async () => {
    try {
        const res = await wikiService.get("/fishWiki/");
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export {getWikiFishes};