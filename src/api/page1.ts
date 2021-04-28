import { myRequest } from '@/util/http'

export const getSwiper = async (data: any, method: string, url?: string) => {
    const res = await myRequest({ data, method, url });
    console.log(res, 222);
}

/** 重置登录超时退出时间 */
export async function reset(url?: string) {
    const res: any = await myRequest({ url });
    if (res.code == 200) { throw res; }
    return res.data;
}