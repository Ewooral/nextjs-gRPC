# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: calculator.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10\x63\x61lculator.proto\x12\ncalculator\"*\n\x0cTotalRequest\x12\x0c\n\x04num1\x18\x01 \x01(\x02\x12\x0c\n\x04num2\x18\x02 \x01(\x02\"/\n\rTotalResponse\x12\r\n\x05total\x18\x01 \x01(\x02\x12\x0f\n\x07success\x18\x02 \x01(\x08\x32M\n\nCalculator\x12?\n\x08GetTotal\x12\x18.calculator.TotalRequest\x1a\x19.calculator.TotalResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'calculator_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_TOTALREQUEST']._serialized_start=32
  _globals['_TOTALREQUEST']._serialized_end=74
  _globals['_TOTALRESPONSE']._serialized_start=76
  _globals['_TOTALRESPONSE']._serialized_end=123
  _globals['_CALCULATOR']._serialized_start=125
  _globals['_CALCULATOR']._serialized_end=202
# @@protoc_insertion_point(module_scope)
