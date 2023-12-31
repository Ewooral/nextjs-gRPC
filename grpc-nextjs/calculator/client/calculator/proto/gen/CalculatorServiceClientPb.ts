/**
 * @fileoverview gRPC-Web generated client stub for calculator
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: calculator.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as calculator_pb from './calculator_pb';


export class CalculatorClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetTotal = new grpcWeb.MethodDescriptor(
    '/calculator.Calculator/GetTotal',
    grpcWeb.MethodType.UNARY,
    calculator_pb.TotalRequest,
    calculator_pb.TotalResponse,
    (request: calculator_pb.TotalRequest) => {
      return request.serializeBinary();
    },
    calculator_pb.TotalResponse.deserializeBinary
  );

  getTotal(
    request: calculator_pb.TotalRequest,
    metadata: grpcWeb.Metadata | null): Promise<calculator_pb.TotalResponse>;

  getTotal(
    request: calculator_pb.TotalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: calculator_pb.TotalResponse) => void): grpcWeb.ClientReadableStream<calculator_pb.TotalResponse>;

  getTotal(
    request: calculator_pb.TotalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: calculator_pb.TotalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/calculator.Calculator/GetTotal',
        request,
        metadata || {},
        this.methodDescriptorGetTotal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/calculator.Calculator/GetTotal',
    request,
    metadata || {},
    this.methodDescriptorGetTotal);
  }

}

