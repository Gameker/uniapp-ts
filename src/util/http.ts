
const BASE_URL = "http://localhost:8080"; //开发时使用本地接口，在上线时只需要修改此处接口为线上地址即可
interface Args {
    method?: any
    data?: any
    dataType?: string
    header?: any
    timeout?: number
}

export enum Code {
    /** 发送数据失败(前端定义) */
    Network = -1,
    /** 接口执行成功 */
    Success = 0,
    /** 接口执行出错 */
    ExecErr = 1,
    /** 传入参数有误 */
    ArgErr = 2,
    /** 用户未登录 */
    NoLogin = 3,
    /** 用户长时间未操作,登录退出 */
    LoginExpire = 4,
    /** 帐号已经在其他地方登录 */
    LoginOther = 5,
    /** 没有权限访问接口 */
    Deny = 6,
    /** 密码过期 */
    LoginPsdExpire = 7,
    /** 审核超时 */
    AuditOverTime = 8,
  }
class Result {
    public code!: Code;
    public msg?: string;
    public data?: any;
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
                if (res.data.status !== 0) {
                    reject(res)
                    // return uni.showToast({
                    //     title: "获取数据失败"
                    // })
                }
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
            method: arg?.method || "get",
            data: arg || {},
            header: arg?.header,
            timeout: arg?.timeout || 6000,
            dataType: arg?.dataType || "json",
            success: (res: any) => {
                if (res.data.status == 0) {
                    // console.log(`获取数据失败:${res}`)
                    let data = res.data
                    data = new Result()
                    data.msg= '获取数据失败'
                    data.code = Code.Network
                    resolve(data)
                    // return uni.showToast({
                    //     title: "获取数据失败"
                    // })
                }
                resolve(res)
            },
            fail: (err) => {
                // uni.showToast({
                //     title: "接口请求失败"
                // })
                console.log(`接口请求失败:${err}`)
                reject(err)
            }
        })
    })
}