import wikiService from "./wikiService";

async function GetWikiFishes(query:string) {
  let route = "/fishWiki/";
  if(query)
    route += query;

  console.log(route);

  const res = await wikiService.get(route);

  return res.data;
}

export { GetWikiFishes };