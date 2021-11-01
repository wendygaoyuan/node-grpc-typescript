import { Server, ServerCredentials } from '@grpc/grpc-js'
import { UserService } from '../grpc/simple_grpc_pb'
import { Server as UserServer } from './services/UserServer'

function startServer() {
    const host = '127.0.0.1:50051'
    const server = new Server()
    server.addService(UserService, new UserServer())
    server.bindAsync(host, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
        if (err) {
            console.error('grpc server start error:', err)
        }
        console.log('grpc server started:', bindPort)
        server.start()
    })
}

startServer()
