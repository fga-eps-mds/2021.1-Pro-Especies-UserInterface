import wikiService from './wikiService';

async function GetWikiFishes() {
  const res = await wikiService.get('/fishWiki/');

  return res.data;
}

export { GetWikiFishes };
