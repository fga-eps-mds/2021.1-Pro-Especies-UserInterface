import { fishLogService } from './fishLogService';


async function GetOneFishLog(
    log_id: string, token: string,
) {
    const userToken = `Bearer ${token}`;
    const res = await fishLogService.get(`/fishLog/${log_id}`, { headers: { Authorization: userToken } });
    return res.data;
}

export { GetOneFishLog };