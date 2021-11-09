import { fishLogService } from './fishService';

async function GetAllFishLogs(token: string, query: string) {
  let route = "/fishLog/";
  if(query)
    route += query;
  
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(route, {
    headers: { Authorization: userToken },
  });
  return res.data;
}

export { GetAllFishLogs };
