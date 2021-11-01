import { Client as UserClient } from './services/UserClient'
import { FindListRes } from '../grpc/simple_pb'

const userClient = new UserClient()
const limit: number = 5
userClient.findList(limit).then((res: FindListRes.AsObject | undefined) => {
    console.log('findList res:', res)
})
