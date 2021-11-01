// GENERATED CODE -- DO NOT EDIT!

// package: example
// file: simple.proto

import * as simple_pb from "./simple_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findList: grpc.MethodDefinition<simple_pb.FindListReq, simple_pb.FindListRes>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  findList: grpc.handleUnaryCall<simple_pb.FindListReq, simple_pb.FindListRes>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findList(argument: simple_pb.FindListReq, callback: grpc.requestCallback<simple_pb.FindListRes>): grpc.ClientUnaryCall;
  findList(argument: simple_pb.FindListReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<simple_pb.FindListRes>): grpc.ClientUnaryCall;
  findList(argument: simple_pb.FindListReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<simple_pb.FindListRes>): grpc.ClientUnaryCall;
}
