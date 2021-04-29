import * as http from '@/util/http'

export const getSwiper = async (data: any, url?: string) => {
    const res = await http.post(url!, data);
    return res
}

/** 重置登录超时退出时间 */
export async function reset(url?: string) {
    const res: any = await http.get(url!);
    if (res.code !== 200) { throw res; }
    return res.data;
}