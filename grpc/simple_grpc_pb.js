// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var simple_pb = require('./simple_pb.js');

function serialize_example_FindListReq(arg) {
  if (!(arg instanceof simple_pb.FindListReq)) {
    throw new Error('Expected argument of type example.FindListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_FindListReq(buffer_arg) {
  return simple_pb.FindListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_FindListRes(arg) {
  if (!(arg instanceof simple_pb.FindListRes)) {
    throw new Error('Expected argument of type example.FindListRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_FindListRes(buffer_arg) {
  return simple_pb.FindListRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// ------------- 用户服务 ------------ //
//
var UserService = exports.UserService = {
  findList: {
    path: '/example.User/FindList',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.FindListReq,
    responseType: simple_pb.FindListRes,
    requestSerialize: serialize_example_FindListReq,
    requestDeserialize: deserialize_example_FindListReq,
    responseSerialize: serialize_example_FindListRes,
    responseDeserialize: deserialize_example_FindListRes,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
