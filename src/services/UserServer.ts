import * as grpc from '@grpc/grpc-js'
import { FindAllReq, FindAllRes, UserInfo } from '../../grpc/user_pb'
import { IUserServer } from '../../grpc/user_grpc_pb'

class Server implements IUserServer {
    [method: string]: grpc.UntypedHandleCall
    public findAll(call: grpc.ServerUnaryCall<FindAllReq, FindAllRes>, callback: grpc.sendUnaryData<FindAllRes>): void {
        const data: FindAllReq.AsObject = call.request.toObject()
        console.log('FindAllReq:', data)

        let userList: Array<UserInfo> = []
        for (let index = 0; index < data.limit; index++) {
            const id = index + 1
            const user: UserInfo = new UserInfo()
            user.setUid(id)
            user.setName(`quanquan-${id}`)
            user.setAvatar(`https://www.gaoquanquan.com/img/avatar-${id}.jpg`)
            userList.push(user)
        }

        const res = new FindAllRes()
        res.setCode(200)
        res.setMsg('用户数据获取成功')
        res.setDataList(userList)
        callback(null, res)
    }
}

export { Server }
