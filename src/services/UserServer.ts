import * as grpc from '@grpc/grpc-js'
import { FindListReq, FindListRes, UserInfo } from '../../grpc/simple_pb'
import { IUserServer } from '../../grpc/simple_grpc_pb'

class Server implements IUserServer {
    [method: string]: grpc.UntypedHandleCall
    public findList(call: grpc.ServerUnaryCall<FindListReq, FindListRes>, callback: grpc.sendUnaryData<FindListRes>): void {
        const data: FindListReq.AsObject = call.request.toObject()
        console.log('FindListReq:', data)

        let userList: Array<UserInfo> = []
        for (let index = 0; index < data.limit; index++) {
            const id = index + 1
            const user: UserInfo = new UserInfo()
            user.setUid(id)
            user.setName(`quanquan-${id}`)
            user.setAvatar(`https://www.gaoquanquan.com/img/avatar-${id}.jpg`)
            userList.push(user)
        }

        const res = new FindListRes()
        res.setCode(200)
        res.setMsg('用户数据获取成功')
        res.setDataList(userList)
        callback(null, res)
    }
}

export { Server }
