// package: example
// file: simple.proto

import * as jspb from "google-protobuf";

export class UserInfo extends jspb.Message {
  getUid(): number;
  setUid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    uid: number,
    name: string,
    avatar: string,
  }
}

export class FindListReq extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindListReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindListReq): FindListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindListReq;
  static deserializeBinaryFromReader(message: FindListReq, reader: jspb.BinaryReader): FindListReq;
}

export namespace FindListReq {
  export type AsObject = {
    limit: number,
  }
}

export class FindListRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<UserInfo>;
  setDataList(value: Array<UserInfo>): void;
  addData(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindListRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindListRes): FindListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindListRes;
  static deserializeBinaryFromReader(message: FindListRes, reader: jspb.BinaryReader): FindListRes;
}

export namespace FindListRes {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<UserInfo.AsObject>,
  }
}

