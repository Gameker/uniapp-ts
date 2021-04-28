import { myRequest } from '../util/http'



export const getSwiper = async (data: any, method: string, url?: string) => {
    const res = await myRequest({ url, data, method });
    console.log(res, 222);
}