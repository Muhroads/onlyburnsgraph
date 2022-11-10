import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Deposit,
  Withdraw,
  LogTransfer,
  LogFeeTransfer,
  OwnershipTransferred
} from "../generated/Contract/Contract"

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createDepositEvent(
  token: Address,
  from: Address,
  amount: BigInt,
  input1: BigInt,
  output1: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("input1", ethereum.Value.fromUnsignedBigInt(input1))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "output1",
      ethereum.Value.fromUnsignedBigInt(output1)
    )
  )

  return depositEvent
}

export function createWithdrawEvent(
  token: Address,
  from: Address,
  amount: BigInt,
  input1: BigInt,
  output1: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("input1", ethereum.Value.fromUnsignedBigInt(input1))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "output1",
      ethereum.Value.fromUnsignedBigInt(output1)
    )
  )

  return withdrawEvent
}

export function createLogTransferEvent(
  token: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  input1: BigInt,
  input2: BigInt,
  output1: BigInt,
  output2: BigInt
): LogTransfer {
  let logTransferEvent = changetype<LogTransfer>(newMockEvent())

  logTransferEvent.parameters = new Array()

  logTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam("input1", ethereum.Value.fromUnsignedBigInt(input1))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam("input2", ethereum.Value.fromUnsignedBigInt(input2))
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam(
      "output1",
      ethereum.Value.fromUnsignedBigInt(output1)
    )
  )
  logTransferEvent.parameters.push(
    new ethereum.EventParam(
      "output2",
      ethereum.Value.fromUnsignedBigInt(output2)
    )
  )

  return logTransferEvent
}

export function createLogFeeTransferEvent(
  token: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  input1: BigInt,
  input2: BigInt,
  output1: BigInt,
  output2: BigInt
): LogFeeTransfer {
  let logFeeTransferEvent = changetype<LogFeeTransfer>(newMockEvent())

  logFeeTransferEvent.parameters = new Array()

  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("input1", ethereum.Value.fromUnsignedBigInt(input1))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam("input2", ethereum.Value.fromUnsignedBigInt(input2))
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam(
      "output1",
      ethereum.Value.fromUnsignedBigInt(output1)
    )
  )
  logFeeTransferEvent.parameters.push(
    new ethereum.EventParam(
      "output2",
      ethereum.Value.fromUnsignedBigInt(output2)
    )
  )

  return logFeeTransferEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
