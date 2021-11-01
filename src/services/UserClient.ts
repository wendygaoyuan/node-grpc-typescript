import * as grpc from '@grpc/grpc-js'
import { UserClient } from '../../grpc/simple_grpc_pb'
import { FindListReq, FindListRes } from '../../grpc/simple_pb'

class Client {
    private readonly userClient: UserClient = new UserClient('127.0.0.1:50051', grpc.credentials.createInsecure())

    /**
     * @description findList
     * @param {number} limit
     * @returns {*}
     * @memberof Client
     */
    public async findList(limit: number): Promise<FindListRes.AsObject | undefined> {
        return new Promise((resolve, reject) => {
            const request = new FindListReq()
            request.setLimit(limit)
            this.userClient.findList(request, (err, res: FindListRes | undefined) => {
                if (err != null) {
                    reject(err)
                    return
                }
                resolve(res?.toObject())
            })
        })
    }
}

export { Client }
