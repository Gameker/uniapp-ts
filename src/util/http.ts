
const BASE_URL = "http://localhost:8080"; //开发时使用本地接口，在上线时只需要修改此处接口为线上地址即可
interface Args {
    method?: any
    data?: any
    dataType?: string
    header?: any
    timeout?: number
}
export const get = (url: string, arg?: Args) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + url,
            method: arg?.method || "GET",
            data: arg || {},
            header: arg?.header,
            timeout: arg?.timeout || 6000,
            dataType: arg?.dataType || "json",
            success: (res: any) => {
                // if (res.data.status !== 0) {
                //     return uni.showToast({
                //         title: "获取数据失败"
                //     })
                // }
                resolve(res)
            },
            fail: (err) => {
                // uni.showToast({
                //     title: "接口请求失败"
                // })
                console.log(err, 1111)
                reject(err)
            }
        })
    })
}

export const post = (url: string, arg?: Args) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + url,
            method: arg?.method || "POST",
            data: arg || {},
            header: arg?.header,
            timeout: arg?.timeout || 6000,
            dataType: arg?.dataType || "json",
            success: (res: any) => {
                // if (res.data.status !== 0) {
                //     return uni.showToast({
                //         title: "获取数据失败"
                //     })
                // }
                resolve(res)
            },
            fail: (err) => {
                // uni.showToast({
                //     title: "接口请求失败"
                // })
                console.log(err, 1111)
                reject(err)
            }
        })
    })
}