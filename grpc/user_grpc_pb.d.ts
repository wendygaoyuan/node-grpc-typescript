// GENERATED CODE -- DO NOT EDIT!

// package: server
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findAll: grpc.MethodDefinition<user_pb.FindAllReq, user_pb.FindAllRes>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  findAll: grpc.handleUnaryCall<user_pb.FindAllReq, user_pb.FindAllRes>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findAll(argument: user_pb.FindAllReq, callback: grpc.requestCallback<user_pb.FindAllRes>): grpc.ClientUnaryCall;
  findAll(argument: user_pb.FindAllReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.FindAllRes>): grpc.ClientUnaryCall;
  findAll(argument: user_pb.FindAllReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.FindAllRes>): grpc.ClientUnaryCall;
}
