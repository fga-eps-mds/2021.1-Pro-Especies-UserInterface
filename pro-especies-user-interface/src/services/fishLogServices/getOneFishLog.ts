import { fishLogService } from './fishLogService';


async function GetOneFishLog(
    log_id: string,
) {
    const res = await fishLogService.get(`/fishLog/${log_id}`);
    return res.data;
}

export { GetOneFishLog };