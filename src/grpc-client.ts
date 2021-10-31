import { Client as UserClient } from './services/UserClient'
import { FindAllRes } from '../grpc/user_pb'

const userClient = new UserClient()
const limit: number = 5
userClient.findAll(limit).then((res: FindAllRes.AsObject | undefined) => {
    console.log('findAll res:', res)
})
