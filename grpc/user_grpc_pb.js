// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_server_FindAllReq(arg) {
  if (!(arg instanceof user_pb.FindAllReq)) {
    throw new Error('Expected argument of type server.FindAllReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_FindAllReq(buffer_arg) {
  return user_pb.FindAllReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_server_FindAllRes(arg) {
  if (!(arg instanceof user_pb.FindAllRes)) {
    throw new Error('Expected argument of type server.FindAllRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_FindAllRes(buffer_arg) {
  return user_pb.FindAllRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// ------------- 用户服务 ------------ //
//
var UserService = exports.UserService = {
  findAll: {
    path: '/server.User/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.FindAllReq,
    responseType: user_pb.FindAllRes,
    requestSerialize: serialize_server_FindAllReq,
    requestDeserialize: deserialize_server_FindAllReq,
    responseSerialize: serialize_server_FindAllRes,
    responseDeserialize: deserialize_server_FindAllRes,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
