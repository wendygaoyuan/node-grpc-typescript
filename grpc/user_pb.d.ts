// package: server
// file: user.proto

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

export class FindAllReq extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAllReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindAllReq): FindAllReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAllReq;
  static deserializeBinaryFromReader(message: FindAllReq, reader: jspb.BinaryReader): FindAllReq;
}

export namespace FindAllReq {
  export type AsObject = {
    limit: number,
  }
}

export class FindAllRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<UserInfo>;
  setDataList(value: Array<UserInfo>): void;
  addData(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAllRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindAllRes): FindAllRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAllRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAllRes;
  static deserializeBinaryFromReader(message: FindAllRes, reader: jspb.BinaryReader): FindAllRes;
}

export namespace FindAllRes {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<UserInfo.AsObject>,
  }
}

