import * as grpc from '@grpc/grpc-js'
import { UserClient } from '../../grpc/user_grpc_pb'
import { FindAllReq, FindAllRes } from '../../grpc/user_pb'

class Client {
    private readonly userClient: UserClient = new UserClient('127.0.0.1:50051', grpc.credentials.createInsecure())

    /**
     * @description findAll
     * @param {number} limit
     * @returns {*}
     * @memberof Client
     */
    public async findAll(limit: number): Promise<FindAllRes.AsObject | undefined> {
        return new Promise((resolve, reject) => {
            const request = new FindAllReq()
            request.setLimit(limit)
            this.userClient.findAll(request, (err, res: FindAllRes | undefined) => {
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
