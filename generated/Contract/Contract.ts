// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get input1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get output1(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get input1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get output1(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LogTransfer extends ethereum.Event {
  get params(): LogTransfer__Params {
    return new LogTransfer__Params(this);
  }
}

export class LogTransfer__Params {
  _event: LogTransfer;

  constructor(event: LogTransfer) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get input1(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get input2(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get output1(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get output2(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class LogFeeTransfer extends ethereum.Event {
  get params(): LogFeeTransfer__Params {
    return new LogFeeTransfer__Params(this);
  }
}

export class LogFeeTransfer__Params {
  _event: LogFeeTransfer;

  constructor(event: LogFeeTransfer) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get input1(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get input2(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get output1(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get output2(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferWithSig(
    sig: Bytes,
    amount: BigInt,
    data: Bytes,
    expiration: BigInt,
    to: Address
  ): Address {
    let result = super.call(
      "transferWithSig",
      "transferWithSig(bytes,uint256,bytes32,uint256,address):(address)",
      [
        ethereum.Value.fromBytes(sig),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromFixedBytes(data),
        ethereum.Value.fromUnsignedBigInt(expiration),
        ethereum.Value.fromAddress(to)
      ]
    );

    return result[0].toAddress();
  }

  try_transferWithSig(
    sig: Bytes,
    amount: BigInt,
    data: Bytes,
    expiration: BigInt,
    to: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "transferWithSig",
      "transferWithSig(bytes,uint256,bytes32,uint256,address):(address)",
      [
        ethereum.Value.fromBytes(sig),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromFixedBytes(data),
        ethereum.Value.fromUnsignedBigInt(expiration),
        ethereum.Value.fromAddress(to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  parent(): Address {
    let result = super.call("parent", "parent():(address)", []);

    return result[0].toAddress();
  }

  try_parent(): ethereum.CallResult<Address> {
    let result = super.tryCall("parent", "parent():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  parentOwner(): Address {
    let result = super.call("parentOwner", "parentOwner():(address)", []);

    return result[0].toAddress();
  }

  try_parentOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("parentOwner", "parentOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentSupply(): BigInt {
    let result = super.call("currentSupply", "currentSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentSupply",
      "currentSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ecrecovery(hash: Bytes, sig: Bytes): Address {
    let result = super.call(
      "ecrecovery",
      "ecrecovery(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(hash), ethereum.Value.fromBytes(sig)]
    );

    return result[0].toAddress();
  }

  try_ecrecovery(hash: Bytes, sig: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ecrecovery",
      "ecrecovery(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(hash), ethereum.Value.fromBytes(sig)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  networkId(): Bytes {
    let result = super.call("networkId", "networkId():(bytes)", []);

    return result[0].toBytes();
  }

  try_networkId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("networkId", "networkId():(bytes)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH(): Bytes {
    let result = super.call(
      "EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH",
      "EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH",
      "EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  disabledHashes(param0: Bytes): boolean {
    let result = super.call(
      "disabledHashes",
      "disabledHashes(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_disabledHashes(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "disabledHashes",
      "disabledHashes(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTokenTransferOrderHash(
    spender: Address,
    tokenIdOrAmount: BigInt,
    data: Bytes,
    expiration: BigInt
  ): Bytes {
    let result = super.call(
      "getTokenTransferOrderHash",
      "getTokenTransferOrderHash(address,uint256,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(tokenIdOrAmount),
        ethereum.Value.fromFixedBytes(data),
        ethereum.Value.fromUnsignedBigInt(expiration)
      ]
    );

    return result[0].toBytes();
  }

  try_getTokenTransferOrderHash(
    spender: Address,
    tokenIdOrAmount: BigInt,
    data: Bytes,
    expiration: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getTokenTransferOrderHash",
      "getTokenTransferOrderHash(address,uint256,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(tokenIdOrAmount),
        ethereum.Value.fromFixedBytes(data),
        ethereum.Value.fromUnsignedBigInt(expiration)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CHAINID(): BigInt {
    let result = super.call("CHAINID", "CHAINID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_CHAINID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("CHAINID", "CHAINID():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  EIP712_DOMAIN_HASH(): Bytes {
    let result = super.call(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_DOMAIN_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  EIP712_DOMAIN_SCHEMA_HASH(): Bytes {
    let result = super.call(
      "EIP712_DOMAIN_SCHEMA_HASH",
      "EIP712_DOMAIN_SCHEMA_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_DOMAIN_SCHEMA_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_DOMAIN_SCHEMA_HASH",
      "EIP712_DOMAIN_SCHEMA_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class SetParentCall extends ethereum.Call {
  get inputs(): SetParentCall__Inputs {
    return new SetParentCall__Inputs(this);
  }

  get outputs(): SetParentCall__Outputs {
    return new SetParentCall__Outputs(this);
  }
}

export class SetParentCall__Inputs {
  _call: SetParentCall;

  constructor(call: SetParentCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetParentCall__Outputs {
  _call: SetParentCall;

  constructor(call: SetParentCall) {
    this._call = call;
  }
}

export class TransferWithSigCall extends ethereum.Call {
  get inputs(): TransferWithSigCall__Inputs {
    return new TransferWithSigCall__Inputs(this);
  }

  get outputs(): TransferWithSigCall__Outputs {
    return new TransferWithSigCall__Outputs(this);
  }
}

export class TransferWithSigCall__Inputs {
  _call: TransferWithSigCall;

  constructor(call: TransferWithSigCall) {
    this._call = call;
  }

  get sig(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get expiration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class TransferWithSigCall__Outputs {
  _call: TransferWithSigCall;

  constructor(call: TransferWithSigCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _childChain(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
