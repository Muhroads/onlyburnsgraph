import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer,
  Deposit,
  Withdraw,
  LogTransfer,
  LogFeeTransfer,
  OwnershipTransferred
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.from = event.params.from
  entity.to = event.params.to

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.totalSupply(...)
  // - contract.transferWithSig(...)
  // - contract.decimals(...)
  // - contract.parent(...)
  // - contract.parentOwner(...)
  // - contract.balanceOf(...)
  // - contract.currentSupply(...)
  // - contract.ecrecovery(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.networkId(...)
  // - contract.symbol(...)
  // - contract.EIP712_TOKEN_TRANSFER_ORDER_SCHEMA_HASH(...)
  // - contract.disabledHashes(...)
  // - contract.getTokenTransferOrderHash(...)
  // - contract.CHAINID(...)
  // - contract.EIP712_DOMAIN_HASH(...)
  // - contract.EIP712_DOMAIN_SCHEMA_HASH(...)
  // - contract.token(...)
}

export function handleDeposit(event: Deposit): void {}

export function handleWithdraw(event: Withdraw): void {}

export function handleLogTransfer(event: LogTransfer): void {}

export function handleLogFeeTransfer(event: LogFeeTransfer): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
