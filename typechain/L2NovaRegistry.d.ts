/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface L2NovaRegistryInterface extends ethers.utils.Interface {
  functions: {
    "CROSS_DOMAIN_MESSENGER()": FunctionFragment;
    "L1_NovaExecutionManagerAddress()": FunctionFragment;
    "MAX_INPUT_TOKENS()": FunctionFragment;
    "MIN_UNLOCK_DELAY_SECONDS()": FunctionFragment;
    "areTokensRemoved(bytes32)": FunctionFragment;
    "areTokensUnlocked(bytes32)": FunctionFragment;
    "authority()": FunctionFragment;
    "claimInputTokens(bytes32)": FunctionFragment;
    "connectExecutionManager(address)": FunctionFragment;
    "execCompleted(bytes32,address,bool,uint256)": FunctionFragment;
    "getRequestCalldata(bytes32)": FunctionFragment;
    "getRequestCreator(bytes32)": FunctionFragment;
    "getRequestDeathTimestamp(bytes32)": FunctionFragment;
    "getRequestGasLimit(bytes32)": FunctionFragment;
    "getRequestGasPrice(bytes32)": FunctionFragment;
    "getRequestInputTokenRecipientData(bytes32)": FunctionFragment;
    "getRequestInputTokens(bytes32)": FunctionFragment;
    "getRequestNonce(bytes32)": FunctionFragment;
    "getRequestStrategy(bytes32)": FunctionFragment;
    "getRequestTip(bytes32)": FunctionFragment;
    "getRequestUncle(bytes32)": FunctionFragment;
    "getRequestUnlockTimestamp(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "relockTokens(bytes32)": FunctionFragment;
    "requestExec(address,bytes,uint256,uint256,uint256,tuple[])": FunctionFragment;
    "requestExecWithTimeout(address,bytes,uint256,uint256,uint256,tuple[],uint256)": FunctionFragment;
    "requestInputTokens(bytes32,uint256)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "speedUpRequest(bytes32,uint256)": FunctionFragment;
    "systemNonce()": FunctionFragment;
    "unlockTokens(bytes32,uint256)": FunctionFragment;
    "withdrawTokens(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CROSS_DOMAIN_MESSENGER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "L1_NovaExecutionManagerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_INPUT_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_UNLOCK_DELAY_SECONDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "areTokensRemoved",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "areTokensUnlocked",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimInputTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "connectExecutionManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "execCompleted",
    values: [BytesLike, string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestCalldata",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestCreator",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestDeathTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestGasLimit",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestGasPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestInputTokenRecipientData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestInputTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestNonce",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestStrategy",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestTip",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestUncle",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestUnlockTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "relockTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestExec",
    values: [
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      { l2Token: string; amount: BigNumberish }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestExecWithTimeout",
    values: [
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      { l2Token: string; amount: BigNumberish }[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestInputTokens",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "speedUpRequest",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "systemNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTokens",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "CROSS_DOMAIN_MESSENGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "L1_NovaExecutionManagerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_INPUT_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_UNLOCK_DELAY_SECONDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "areTokensRemoved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "areTokensUnlocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimInputTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectExecutionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestDeathTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestInputTokenRecipientData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestInputTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestTip",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestUncle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestUnlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "relockTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestExec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestExecWithTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestInputTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "speedUpRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
    "ClaimInputTokens(bytes32)": EventFragment;
    "ConnectExecutionManager(address)": EventFragment;
    "ExecCompleted(bytes32,address,bool,uint256)": EventFragment;
    "OwnerUpdated(address)": EventFragment;
    "RelockTokens(bytes32)": EventFragment;
    "RequestExec(bytes32,address)": EventFragment;
    "SpeedUpRequest(bytes32,bytes32,uint256,uint256)": EventFragment;
    "UnlockTokens(bytes32,uint256)": EventFragment;
    "WithdrawTokens(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimInputTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConnectExecutionManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelockTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestExec"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SpeedUpRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawTokens"): EventFragment;
}

export class L2NovaRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: L2NovaRegistryInterface;

  functions: {
    CROSS_DOMAIN_MESSENGER(overrides?: CallOverrides): Promise<[string]>;

    L1_NovaExecutionManagerAddress(
      overrides?: CallOverrides
    ): Promise<[string]>;

    MAX_INPUT_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_UNLOCK_DELAY_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>;

    areTokensRemoved(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & {
        tokensRemoved: boolean;
        changeTimestamp: BigNumber;
      }
    >;

    areTokensUnlocked(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { unlocked: boolean; changeTimestamp: BigNumber }
    >;

    authority(overrides?: CallOverrides): Promise<[string]>;

    claimInputTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    connectExecutionManager(
      newExecutionManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execCompleted(
      execHash: BytesLike,
      rewardRecipient: string,
      reverted: boolean,
      gasUsed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRequestCalldata(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRequestCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRequestDeathTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequestGasLimit(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequestGasPrice(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequestInputTokenRecipientData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { recipient: string; isClaimed: boolean }>;

    getRequestInputTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [([string, BigNumber] & { l2Token: string; amount: BigNumber })[]]
    >;

    getRequestNonce(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequestStrategy(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRequestTip(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequestUncle(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRequestUnlockTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    relockTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestExec(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestExecWithTimeout(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      autoUnlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestInputTokens(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { l2Token: string; amount: BigNumber }>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    speedUpRequest(
      execHash: BytesLike,
      gasPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    systemNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    unlockTokens(
      execHash: BytesLike,
      unlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CROSS_DOMAIN_MESSENGER(overrides?: CallOverrides): Promise<string>;

  L1_NovaExecutionManagerAddress(overrides?: CallOverrides): Promise<string>;

  MAX_INPUT_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_UNLOCK_DELAY_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

  areTokensRemoved(
    execHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber] & {
      tokensRemoved: boolean;
      changeTimestamp: BigNumber;
    }
  >;

  areTokensUnlocked(
    execHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber] & { unlocked: boolean; changeTimestamp: BigNumber }
  >;

  authority(overrides?: CallOverrides): Promise<string>;

  claimInputTokens(
    execHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  connectExecutionManager(
    newExecutionManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execCompleted(
    execHash: BytesLike,
    rewardRecipient: string,
    reverted: boolean,
    gasUsed: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRequestCalldata(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRequestCreator(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRequestDeathTimestamp(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequestGasLimit(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequestGasPrice(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequestInputTokenRecipientData(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, boolean] & { recipient: string; isClaimed: boolean }>;

  getRequestInputTokens(
    execHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<([string, BigNumber] & { l2Token: string; amount: BigNumber })[]>;

  getRequestNonce(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequestStrategy(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRequestTip(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getRequestUncle(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRequestUnlockTimestamp(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  relockTokens(
    execHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestExec(
    strategy: string,
    l1Calldata: BytesLike,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
    tip: BigNumberish,
    inputTokens: { l2Token: string; amount: BigNumberish }[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestExecWithTimeout(
    strategy: string,
    l1Calldata: BytesLike,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
    tip: BigNumberish,
    inputTokens: { l2Token: string; amount: BigNumberish }[],
    autoUnlockDelaySeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestInputTokens(
    arg0: BytesLike,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { l2Token: string; amount: BigNumber }>;

  setAuthority(
    newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  speedUpRequest(
    execHash: BytesLike,
    gasPrice: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  systemNonce(overrides?: CallOverrides): Promise<BigNumber>;

  unlockTokens(
    execHash: BytesLike,
    unlockDelaySeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokens(
    execHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CROSS_DOMAIN_MESSENGER(overrides?: CallOverrides): Promise<string>;

    L1_NovaExecutionManagerAddress(overrides?: CallOverrides): Promise<string>;

    MAX_INPUT_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_UNLOCK_DELAY_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    areTokensRemoved(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & {
        tokensRemoved: boolean;
        changeTimestamp: BigNumber;
      }
    >;

    areTokensUnlocked(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { unlocked: boolean; changeTimestamp: BigNumber }
    >;

    authority(overrides?: CallOverrides): Promise<string>;

    claimInputTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    connectExecutionManager(
      newExecutionManagerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    execCompleted(
      execHash: BytesLike,
      rewardRecipient: string,
      reverted: boolean,
      gasUsed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequestCalldata(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRequestCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRequestDeathTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestGasLimit(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestGasPrice(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestInputTokenRecipientData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { recipient: string; isClaimed: boolean }>;

    getRequestInputTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber] & { l2Token: string; amount: BigNumber })[]
    >;

    getRequestNonce(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestStrategy(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRequestTip(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestUncle(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRequestUnlockTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    relockTokens(execHash: BytesLike, overrides?: CallOverrides): Promise<void>;

    requestExec(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<string>;

    requestExecWithTimeout(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      autoUnlockDelaySeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    requestInputTokens(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { l2Token: string; amount: BigNumber }>;

    setAuthority(
      newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    speedUpRequest(
      execHash: BytesLike,
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    systemNonce(overrides?: CallOverrides): Promise<BigNumber>;

    unlockTokens(
      execHash: BytesLike,
      unlockDelaySeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AuthorityUpdated(
      authority?: string | null
    ): TypedEventFilter<[string], { authority: string }>;

    ClaimInputTokens(
      execHash?: BytesLike | null
    ): TypedEventFilter<[string], { execHash: string }>;

    ConnectExecutionManager(
      newExecutionManagerAddress?: null
    ): TypedEventFilter<[string], { newExecutionManagerAddress: string }>;

    ExecCompleted(
      execHash?: BytesLike | null,
      rewardRecipient?: string | null,
      reverted?: null,
      gasUsed?: null
    ): TypedEventFilter<
      [string, string, boolean, BigNumber],
      {
        execHash: string;
        rewardRecipient: string;
        reverted: boolean;
        gasUsed: BigNumber;
      }
    >;

    OwnerUpdated(
      owner?: string | null
    ): TypedEventFilter<[string], { owner: string }>;

    RelockTokens(
      execHash?: BytesLike | null
    ): TypedEventFilter<[string], { execHash: string }>;

    RequestExec(
      execHash?: BytesLike | null,
      strategy?: string | null
    ): TypedEventFilter<
      [string, string],
      { execHash: string; strategy: string }
    >;

    SpeedUpRequest(
      execHash?: BytesLike | null,
      newExecHash?: BytesLike | null,
      newNonce?: null,
      switchTimestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        execHash: string;
        newExecHash: string;
        newNonce: BigNumber;
        switchTimestamp: BigNumber;
      }
    >;

    UnlockTokens(
      execHash?: BytesLike | null,
      unlockTimestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { execHash: string; unlockTimestamp: BigNumber }
    >;

    WithdrawTokens(
      execHash?: BytesLike | null
    ): TypedEventFilter<[string], { execHash: string }>;
  };

  estimateGas: {
    CROSS_DOMAIN_MESSENGER(overrides?: CallOverrides): Promise<BigNumber>;

    L1_NovaExecutionManagerAddress(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAX_INPUT_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_UNLOCK_DELAY_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    areTokensRemoved(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    areTokensUnlocked(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    claimInputTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    connectExecutionManager(
      newExecutionManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execCompleted(
      execHash: BytesLike,
      rewardRecipient: string,
      reverted: boolean,
      gasUsed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRequestCalldata(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestDeathTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestGasLimit(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestGasPrice(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestInputTokenRecipientData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestInputTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestNonce(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestStrategy(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestTip(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestUncle(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestUnlockTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    relockTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestExec(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestExecWithTimeout(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      autoUnlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestInputTokens(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    speedUpRequest(
      execHash: BytesLike,
      gasPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    systemNonce(overrides?: CallOverrides): Promise<BigNumber>;

    unlockTokens(
      execHash: BytesLike,
      unlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CROSS_DOMAIN_MESSENGER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    L1_NovaExecutionManagerAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_INPUT_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_UNLOCK_DELAY_SECONDS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    areTokensRemoved(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    areTokensUnlocked(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimInputTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    connectExecutionManager(
      newExecutionManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execCompleted(
      execHash: BytesLike,
      rewardRecipient: string,
      reverted: boolean,
      gasUsed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRequestCalldata(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestDeathTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestGasLimit(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestGasPrice(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestInputTokenRecipientData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestInputTokens(
      execHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestNonce(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestStrategy(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestTip(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestUncle(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestUnlockTimestamp(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relockTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestExec(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestExecWithTimeout(
      strategy: string,
      l1Calldata: BytesLike,
      gasLimit: BigNumberish,
      gasPrice: BigNumberish,
      tip: BigNumberish,
      inputTokens: { l2Token: string; amount: BigNumberish }[],
      autoUnlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestInputTokens(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    speedUpRequest(
      execHash: BytesLike,
      gasPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    systemNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockTokens(
      execHash: BytesLike,
      unlockDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      execHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
