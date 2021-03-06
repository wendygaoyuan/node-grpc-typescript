### 
 # @Description: proto to js&ts
 # @Author: wendygaoyuan
### 
# grpc-tools安装成功后自动生成
NODE_PROTOC_PATH="./node_modules/.bin/grpc_tools_node_protoc"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

# ts-protoc-gen安装成功后自动生成
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# 输出文件目录地址
OUT_DIR="./grpc"
# proto文件目录地址
PRORO_DIR="./proto"

${NODE_PROTOC_PATH} \
	--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc_out="grpc_js:${OUT_DIR}" \
    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
    -I ${PRORO_DIR} ${PRORO_DIR}/*.proto
