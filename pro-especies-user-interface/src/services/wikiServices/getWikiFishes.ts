import wikiService from "./wikiService";

async function GetWikiFishes(name: string) {
  let url = "/fishWiki/";

  if (name) {
        url += `?commonName=${name}`;      
  } 

  const res = await wikiService.get(url);
  console.log(url);

  return res.data;
}

export { GetWikiFishes };
