import { ContractFactory, type ethers } from 'ethers'
import type { VerificationRequest } from 'scripts/types'

const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_duration',
        type: 'uint256'
      }
    ],
    name: 'addressOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_duration',
        type: 'uint256'
      }
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'contract Trust',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'trustCreationCode',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
]

export class TrustFactory extends ContractFactory {
  constructor(signer: ethers.Signer) {
    super(
      abi,
      '608060405234801561001057600080fd5b50611a85806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631b3671bf14610046578063809be40d146100835780639a9c2ef814610096575b600080fd5b61005961005436600461032c565b6100ab565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61005961009136600461032c565b610114565b61009e6102ae565b60405161007a919061038c565b60008060001b8484846040516100c0906102f6565b73ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015260408201526060018190604051809103906000f590508015801561010b573d6000803e3d6000fd5b50949350505050565b6040516000907fff00000000000000000000000000000000000000000000000000000000000000903090839061014c602082016102f6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081815273ffffffffffffffffffffffffffffffffffffffff8a8116602084015289169082015260608101879052608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526101e892916020016103dd565b6040516020818303038152906040528051906020012060405160200161027094939291907fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6060604051806020016102c0906102f6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604052919050565b6116438061040d83390190565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032757600080fd5b919050565b60008060006060848603121561034157600080fd5b61034a84610303565b925061035860208501610303565b9150604084013590509250925092565b60005b8381101561038357818101518382015260200161036b565b50506000910152565b60208152600082518060208401526103ab816040850160208701610368565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600083516103ef818460208801610368565b835190830190610403818360208801610368565b0194935050505056fe60e060405260001960005534801561001657600080fd5b506040516116433803806116438339810160408190526100359161006c565b6001600160a01b03928316608052911660a05260c0526100a8565b80516001600160a01b038116811461006757600080fd5b919050565b60008060006060848603121561008157600080fd5b61008a84610050565b925061009860208501610050565b9150604084015190509250925092565b60805160a05160c05161152761011c6000396000818160ac0152610a7f0152600081816101640152818161036701528181610450015281816107de01526109ce0152600081816101bd015281816102f3015281816103db015281816104be015281816107a1015261098d01526115276000f3fe6080604052600436106100915760003560e01c80638da5cb5b11610063578063d97771421161004b578063d977714214610201578063e5e288e514610217578063f669fa631461024457005b80638da5cb5b146101ab578063a4e2d634146101df57005b80630fb5a6b41461009a5780631626ba7e146100e157806320c13b0b1461013257806338af3eed1461015257005b3661009857005b005b3480156100a657600080fd5b506100ce7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100ed57600080fd5b506101016100fc36600461103f565b610264565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100d8565b34801561013e57600080fd5b5061010161014d36600461108b565b610657565b34801561015e57600080fd5b506101867f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d8565b3480156101b757600080fd5b506101867f000000000000000000000000000000000000000000000000000000000000000081565b3480156101eb57600080fd5b50600054421060405190151581526020016100d8565b34801561020d57600080fd5b506100ce60005481565b34801561022357600080fd5b506102376102323660046110f7565b610787565b6040516100d891906111c4565b34801561025057600080fd5b5061009861025f3660046111de565b610975565b600081810361029f576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808085856102b06001826111f7565b8181106102bf576102bf611237565b909101357fff0000000000000000000000000000000000000000000000000000000000000016915050600081900361031c577f000000000000000000000000000000000000000000000000000000000000000092504691506104bb565b7fff0000000000000000000000000000000000000000000000000000000000000081167f010000000000000000000000000000000000000000000000000000000000000003610390577f000000000000000000000000000000000000000000000000000000000000000092504691506104bb565b7fff0000000000000000000000000000000000000000000000000000000000000081167f020000000000000000000000000000000000000000000000000000000000000003610405577f00000000000000000000000000000000000000000000000000000000000000009250600091506104bb565b7fff0000000000000000000000000000000000000000000000000000000000000081167f03000000000000000000000000000000000000000000000000000000000000000361047a577f00000000000000000000000000000000000000000000000000000000000000009250600091506104bb565b8585826040517f6c1547a60000000000000000000000000000000000000000000000000000000081526004016104b2939291906112af565b60405180910390fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610519575060005442105b15610556576000546040517fd69e0d530000000000000000000000000000000000000000000000000000000081526004016104b291815260200190565b6040805130602082015290810187905260608101829052600090608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090506105d18184886000896105bf6001826111f7565b926105cc939291906112f5565b610b1b565b61062b57868184886000896105e76001826111f7565b926105f4939291906112f5565b6040517f4ad591080000000000000000000000000000000000000000000000000000000081526004016104b295949392919061131f565b507f1626ba7e000000000000000000000000000000000000000000000000000000009695505050505050565b6000803073ffffffffffffffffffffffffffffffffffffffff16631626ba7e8787604051610686929190611366565b6040519081900381207fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1682526106c89188908890600401611376565b602060405180830381865afa1580156106e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107099190611399565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f1626ba7e000000000000000000000000000000000000000000000000000000001461075c5761075c6113db565b507f20c13b0b0000000000000000000000000000000000000000000000000000000095945050505050565b60603373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610879573373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610837576040517f245aecd30000000000000000000000000000000000000000000000000000000081523360048201526024016104b2565b600054421015610879576000546040517fd69e0d530000000000000000000000000000000000000000000000000000000081526004016104b291815260200190565b6000808673ffffffffffffffffffffffffffffffffffffffff168686866040516108a4929190611366565b60006040518083038185875af1925050503d80600081146108e1576040519150601f19603f3d011682016040523d82523d6000602084013e6108e6565b606091505b50915091508161092c5786868686846040517fbf8cfdf50000000000000000000000000000000000000000000000000000000081526004016104b295949392919061140a565b7fabc60ff1b7e86602892345b3c6bbf996122378275ce8a919881e580f7975873a878787878560405161096395949392919061140a565b60405180910390a19695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015906109f157503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614155b15610a2a576040517f245aecd30000000000000000000000000000000000000000000000000000000081523360048201526024016104b2565b600080610a374284610d02565b915091508115610a7d576040517f4abceb3400000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016104b2565b7f0000000000000000000000000000000000000000000000000000000000000000811015610ae1576040517f74ae1ce600000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016104b2565b6040518381527fa9746ae027b7ef47c63b1f52298f217c87f5301bc6995023e74608efa725cfa09060200160405180910390a15050600055565b6000818103610b56576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008383610b656001826111f7565b818110610b7457610b74611237565b919091013560f81c9150506001811480610b8e5750600281145b15610bd3578473ffffffffffffffffffffffffffffffffffffffff16610bb5878686610d3a565b73ffffffffffffffffffffffffffffffffffffffff16149150610cf9565b60038103610cbe5773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e8786600087610c076001826111f7565b92610c14939291906112f5565b6040518463ffffffff1660e01b8152600401610c3293929190611376565b602060405180830381865afa158015610c4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c739190611399565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150610cf9565b83838260006040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016104b2949392919061145e565b50949350505050565b60008082841115610d22576001610d1984866111f7565b91509150610d33565b6000610d2e85856111f7565b915091505b9250929050565b600060428214610d7a5782826040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016104b292919061148a565b6000610d93610d8a6001856111f7565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610e07578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016104b2939291906114a6565b8260ff16601b14158015610e1f57508260ff16601c14155b15610e5c578686846040517fe578897e0000000000000000000000000000000000000000000000000000000081526004016104b2939291906114ca565b60018403610ec9576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015610eb8573d6000803e3d6000fd5b505050602060405103519450610fa1565b60028403610f66576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001610e96565b86868560016040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016104b2949392919061145e565b73ffffffffffffffffffffffffffffffffffffffff8516610ff25786866040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016104b292919061148a565b505050509392505050565b60008083601f84011261100f57600080fd5b50813567ffffffffffffffff81111561102757600080fd5b602083019150836020828501011115610d3357600080fd5b60008060006040848603121561105457600080fd5b83359250602084013567ffffffffffffffff81111561107257600080fd5b61107e86828701610ffd565b9497909650939450505050565b600080600080604085870312156110a157600080fd5b843567ffffffffffffffff808211156110b957600080fd5b6110c588838901610ffd565b909650945060208701359150808211156110de57600080fd5b506110eb87828801610ffd565b95989497509550505050565b6000806000806060858703121561110d57600080fd5b843573ffffffffffffffffffffffffffffffffffffffff8116811461113157600080fd5b935060208501359250604085013567ffffffffffffffff81111561115457600080fd5b6110eb87828801610ffd565b6000815180845260005b818110156111865760208185018101518683018201520161116a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006111d76020830184611160565b9392505050565b6000602082840312156111f057600080fd5b5035919050565b81810381811115611231577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6040815260006112c3604083018587611266565b90507fff0000000000000000000000000000000000000000000000000000000000000083166020830152949350505050565b6000808585111561130557600080fd5b8386111561131257600080fd5b5050820193919092039150565b85815284602082015273ffffffffffffffffffffffffffffffffffffffff8416604082015260806060820152600061135b608083018486611266565b979650505050505050565b8183823760009101908152919050565b838152604060208201526000611390604083018486611266565b95945050505050565b6000602082840312156113ab57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146111d757600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152608060408201526000611440608083018587611266565b82810360608401526114528185611160565b98975050505050505050565b606081526000611472606083018688611266565b60208301949094525090151560409091015292915050565b60208152600061149e602083018486611266565b949350505050565b6040815260006114ba604083018587611266565b9050826020830152949350505050565b6040815260006114de604083018587611266565b905060ff8316602083015294935050505056fea26469706673582212207e10951cc8784967e11fe46015840b940a1127aab0a54dc9a28a98c2e327b5c564736f6c63430008120033a264697066735822122086da39146e8d4a9ba9628b4689e7eb6ae4440ab2681b9379b2631a98a0d1aa3964736f6c63430008120033',
      signer
    )
  }
}

export const TRUST_FACTORY_VERIFICATION: Omit<VerificationRequest, 'waitForSuccess'> = {
  contractToVerify: 'contracts/trust/TrustFactory.sol:TrustFactory',
  version: 'v0.8.18+commit.87f61d96',
  licenceType: 'Apache-2.0',
  compilerInput: {
    language: 'Solidity',
    sources: {
      'contracts/interfaces/IERC1271Wallet.sol': {
        content:
          '// SPDX-License-Identifier: Apache-2.0\npragma solidity 0.8.18;\n\n\ninterface IERC1271Wallet {\n\n  /**\n   * @notice Verifies whether the provided signature is valid with respect to the provided data\n   * @dev MUST return the correct magic value if the signature provided is valid for the provided data\n   *   > The bytes4 magic value to return when signature is valid is 0x20c13b0b : bytes4(keccak256("isValidSignature(bytes,bytes)")\n   *   > This function MAY modify Ethereum\'s state\n   * @param _data       Arbitrary length data signed on the behalf of address(this)\n   * @param _signature  Signature byte array associated with _data\n   * @return magicValue Magic value 0x20c13b0b if the signature is valid and 0x0 otherwise\n   */\n  function isValidSignature(\n    bytes calldata _data,\n    bytes calldata _signature)\n    external\n    view\n    returns (bytes4 magicValue);\n\n  /**\n   * @notice Verifies whether the provided signature is valid with respect to the provided hash\n   * @dev MUST return the correct magic value if the signature provided is valid for the provided hash\n   *   > The bytes4 magic value to return when signature is valid is 0x20c13b0b : bytes4(keccak256("isValidSignature(bytes,bytes)")\n   *   > This function MAY modify Ethereum\'s state\n   * @param _hash       keccak256 hash that was signed\n   * @param _signature  Signature byte array associated with _data\n   * @return magicValue Magic value 0x20c13b0b if the signature is valid and 0x0 otherwise\n   */\n  function isValidSignature(\n    bytes32 _hash,\n    bytes calldata _signature)\n    external\n    view\n    returns (bytes4 magicValue);\n}'
      },
      'contracts/trust/Trust.sol': {
        content:
          '// SPDX-License-Identifier: Apache-2.0\npragma solidity 0.8.18;\n\nimport "../interfaces/IERC1271Wallet.sol";\nimport "../utils/SignatureValidator.sol";\n\nfunction absDiff(uint256 a, uint256 b) pure returns (bool, uint256) {\n  if (a > b) {\n    return (true, a - b);\n  }\n\n  return (false, b - a);\n}\n\ncontract Trust is IERC1271Wallet {\n  error UnlockInThePast(uint256 _unlocksAt, uint256 _elapsed);\n  error UnlockTooEarly(uint256 _unlocksAt, uint256 _diff);\n\n  error NotOwner(address _sender);\n  error NotUnlocked(uint256 _unlocksAt);\n  error FailedTransaction(address payable _to, uint256 _value, bytes _data, bytes _result);\n\n  error EmptySignature();\n  error InvalidSignatureFlag(bytes _signature, bytes1 _flag);\n  error InvalidSignature(bytes32 _hash, bytes32 _rehash, address _signer, bytes _signature);\n\n  event SetUnlocksAt(uint256 _unlocksAt);\n  event SentTransaction(address payable _to, uint256 _value, bytes _data, bytes _result);\n\n  address immutable public owner;\n  address immutable public beneficiary;\n  uint256 immutable public duration;\n\n  uint256 public unlocksAt = type(uint256).max;\n\n  constructor (\n    address _owner,\n    address _beneficiary,\n    uint256 _duration\n  ) {\n    owner = _owner;\n    beneficiary = _beneficiary;\n    duration = _duration;\n  }\n\n  modifier onlyAllowed() {\n    if (msg.sender != owner) {\n      if (msg.sender != beneficiary) {\n        revert NotOwner(msg.sender);\n      }\n\n      if (isLocked()) {\n        revert NotUnlocked(unlocksAt);\n      }\n    }\n\n    _;\n  }\n\n  modifier onlyMember() {\n    if (msg.sender != owner && msg.sender != beneficiary) {\n      revert NotOwner(msg.sender);\n    }\n\n    _;\n  }\n\n  function isLocked() public view returns (bool) {\n    return block.timestamp < unlocksAt;\n  }\n\n  function setUnlocksAt(uint256 _unlocksAt) external onlyMember {\n    // Diff between the current time and the unlock time must be\n    // greater than the duration of the trust\n    (bool isPast, uint256 elapsed) = absDiff(block.timestamp, _unlocksAt);\n    if (isPast) {\n      revert UnlockInThePast(_unlocksAt, elapsed);\n    }\n\n    if (elapsed < duration) {\n      revert UnlockTooEarly(_unlocksAt, elapsed);\n    }\n\n    emit SetUnlocksAt(_unlocksAt);\n    unlocksAt = _unlocksAt;\n  }\n\n  function sendTransaction(\n    address payable _to,\n    uint256 _value,\n    bytes calldata _data\n  ) external onlyAllowed returns (bytes memory) {\n    (bool success, bytes memory result) = _to.call{value: _value}(_data);\n\n    if (!success) {\n      revert FailedTransaction(_to, _value, _data, result);\n    }\n\n    emit SentTransaction(_to, _value, _data, result);\n    return result;\n  }\n\n  bytes4 internal constant SELECTOR_ERC1271_BYTES_BYTES = 0x20c13b0b;\n  bytes4 internal constant SELECTOR_ERC1271_BYTES32_BYTES = 0x1626ba7e;\n\n  function isValidSignature(\n    bytes calldata _data,\n    bytes calldata _signature\n  ) external view returns (bytes4) {\n    bytes4 res = Trust(payable(address((this)))).isValidSignature(\n      keccak256(_data),\n      _signature\n    );\n\n    assert(res == SELECTOR_ERC1271_BYTES32_BYTES);\n    return SELECTOR_ERC1271_BYTES_BYTES;\n  }\n\n  function isValidSignature(\n    bytes32 _hash,\n    bytes calldata _signature\n  ) external view returns (bytes4) {\n    if (_signature.length == 0) {\n      revert EmptySignature();\n    }\n\n    // The last byte determines how the signature is going to be interpreted\n    // 0x00 -> Signed by the owner\n    // 0x01 -> Signed by the beneficiary\n    // 0x02 -> Signed by the owner for any network\n    // 0x03 -> Signed by the beneficiary for any network\n    address signer;\n    uint256 chainId;\n\n    {\n      bytes1 flag = _signature[_signature.length - 1];\n\n      if (flag == 0x00) {\n        signer = owner;\n        chainId = block.chainid;\n      } else if (flag == 0x01) {\n        signer = beneficiary;\n        chainId = block.chainid;\n      } else if (flag == 0x02) {\n        signer = owner;\n        chainId = 0;\n      } else if (flag == 0x03) {\n        signer = beneficiary;\n        chainId = 0;\n      } else {\n        revert InvalidSignatureFlag(_signature, flag);\n      }\n    }\n\n    if (signer != owner && isLocked()) {\n      revert NotUnlocked(unlocksAt);\n    }\n\n    // Re-hash the hash adding the address of the trust\n    // otherwise the signature will be valid for any trust\n    bytes32 rehash = keccak256(abi.encode(address(this), _hash, chainId));\n\n    // Validate the signature\n    if (!SignatureValidator.isValidSignature(rehash, signer, _signature[0:_signature.length - 1])) {\n      revert InvalidSignature(_hash, rehash, signer, _signature[0:_signature.length - 1]);\n    }\n\n    return SELECTOR_ERC1271_BYTES32_BYTES;\n  }\n\n  receive() external payable {}\n  fallback() external payable {}\n}\n'
      },
      'contracts/trust/TrustFactory.sol': {
        content:
          '// SPDX-License-Identifier: Apache-2.0\npragma solidity 0.8.18;\n\nimport "./Trust.sol";\n\n\ncontract TrustFactory {\n  function trustCreationCode() external pure returns (bytes memory) {\n    return type(Trust).creationCode;\n  }\n\n  function addressOf(\n    address _owner,\n    address _beneficiary,\n    uint256 _duration\n  ) external view returns (address) {\n    return address(uint160(uint(keccak256(abi.encodePacked(\n      bytes1(0xff),\n      address(this),\n      bytes32(0),\n      keccak256(abi.encodePacked(\n        type(Trust).creationCode,\n        abi.encode(_owner, _beneficiary, _duration)\n      ))\n    )))));\n  }\n\n  function deploy(\n    address _owner,\n    address _beneficiary,\n    uint256 _duration\n  ) external returns (Trust) {\n    return new Trust{ salt: bytes32(0) }( _owner, _beneficiary, _duration);\n  }\n}\n'
      },
      'contracts/utils/LibBytes.sol': {
        content:
          '// SPDX-License-Identifier: Apache-2.0\npragma solidity 0.8.18;\n\n\n/**\n * @title Library for reading data from bytes arrays\n * @author Agustin Aguilar (aa@horizon.io)\n * @notice This library contains functions for reading data from bytes arrays.\n *\n * @dev These functions do not check if the input index is within the bounds of the data array.\n *         Reading out of bounds may return dirty values.\n */\nlibrary LibBytes {\n\n  /**\n   * @notice Returns the bytes32 value at the given index in the input data.\n   * @param data The input data.\n   * @param index The index of the value to retrieve.\n   * @return a The bytes32 value at the given index.\n   */\n  function readBytes32(\n    bytes calldata data,\n    uint256 index\n  ) internal pure returns (\n    bytes32 a\n  ) {\n    assembly {\n      a := calldataload(add(data.offset, index))\n    }\n  }\n\n  /**\n   * @notice Returns the uint8 value at the given index in the input data.\n   * @param data The input data.\n   * @param index The index of the value to retrieve.\n   * @return a The uint8 value at the given index.\n   */\n  function readUint8(\n    bytes calldata data,\n    uint256 index\n  ) internal pure returns (\n    uint8 a\n  ) {\n    assembly {\n      let word := calldataload(add(index, data.offset))\n      a := shr(248, word)\n    }\n  }\n\n  /**\n   * @notice Returns the first uint16 value in the input data.\n   * @param data The input data.\n   * @return a The first uint16 value in the input data.\n   */\n  function readFirstUint16(\n    bytes calldata data\n  ) internal pure returns (\n    uint16 a\n  ) {\n    assembly {\n      let word := calldataload(data.offset)\n      a := shr(240, word)\n    }\n  }\n\n  /**\n   * @notice Returns the uint32 value at the given index in the input data.\n   * @param data The input data.\n   * @param index The index of the value to retrieve.\n   * @return a The uint32 value at the given index.\n   */\n  function readUint32(\n    bytes calldata data,\n    uint256 index\n  ) internal pure returns (\n    uint32 a\n  ) {\n    assembly {\n      let word := calldataload(add(index, data.offset))\n      a := shr(224, word)\n    }\n  }\n}\n'
      },
      'contracts/utils/SignatureValidator.sol': {
        content:
          '// SPDX-License-Identifier: Apache-2.0\npragma solidity 0.8.18;\n\nimport "../interfaces/IERC1271Wallet.sol";\n\nimport "./LibBytes.sol";\n\n/**\n * @dev Contains logic for signature validation.\n * Signatures from wallet contracts assume ERC-1271 support (https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md)\n * Notes: Methods are strongly inspired by contracts in https://github.com/0xProject/0x-monorepo/blob/development/\n */\nlibrary SignatureValidator {\n  // Errors\n  error InvalidSignatureLength(bytes _signature);\n  error EmptySignature();\n  error InvalidSValue(bytes _signature, bytes32 _s);\n  error InvalidVValue(bytes _signature, uint256 _v);\n  error UnsupportedSignatureType(bytes _signature, uint256 _type, bool _recoverMode);\n  error SignerIsAddress0(bytes _signature);\n\n  using LibBytes for bytes;\n\n  /***********************************|\n  |             Variables             |\n  |__________________________________*/\n\n  // bytes4(keccak256("isValidSignature(bytes,bytes)"))\n  bytes4 constant internal ERC1271_MAGICVALUE = 0x20c13b0b;\n\n  // bytes4(keccak256("isValidSignature(bytes32,bytes)"))\n  bytes4 constant internal ERC1271_MAGICVALUE_BYTES32 = 0x1626ba7e;\n\n  // Allowed signature types.\n  uint256 private constant SIG_TYPE_EIP712 = 1;\n  uint256 private constant SIG_TYPE_ETH_SIGN = 2;\n  uint256 private constant SIG_TYPE_WALLET_BYTES32 = 3;\n\n  /***********************************|\n  |        Signature Functions        |\n  |__________________________________*/\n\n /**\n   * @notice Recover the signer of hash, assuming it\'s an EOA account\n   * @dev Only for SignatureType.EIP712 and SignatureType.EthSign signatures\n   * @param _hash      Hash that was signed\n   *   encoded as (bytes32 r, bytes32 s, uint8 v, ... , SignatureType sigType)\n   */\n  function recoverSigner(\n    bytes32 _hash,\n    bytes calldata _signature\n  ) internal pure returns (address signer) {\n    if (_signature.length != 66) revert InvalidSignatureLength(_signature);\n    uint256 signatureType = _signature.readUint8(_signature.length - 1);\n\n    // Variables are not scoped in Solidity.\n    uint8 v = _signature.readUint8(64);\n    bytes32 r = _signature.readBytes32(0);\n    bytes32 s = _signature.readBytes32(32);\n\n    // EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature\n    // unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines\n    // the valid range for s in (281): 0 < s < secp256k1n ÷ 2 + 1, and for v in (282): v ∈ {27, 28}. Most\n    // signatures from current libraries generate a unique signature with an s-value in the lower half order.\n    //\n    // If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value\n    // with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or\n    // vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept\n    // these malleable signatures as well.\n    //\n    // Source OpenZeppelin\n    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/cryptography/ECDSA.sol\n\n    if (uint256(s) > 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0) {\n      revert InvalidSValue(_signature, s);\n    }\n\n    if (v != 27 && v != 28) {\n      revert InvalidVValue(_signature, v);\n    }\n\n    // Signature using EIP712\n    if (signatureType == SIG_TYPE_EIP712) {\n      signer = ecrecover(_hash, v, r, s);\n\n    // Signed using web3.eth_sign() or Ethers wallet.signMessage()\n    } else if (signatureType == SIG_TYPE_ETH_SIGN) {\n      signer = ecrecover(\n        keccak256(abi.encodePacked("\\x19Ethereum Signed Message:\\n32", _hash)),\n        v,\n        r,\n        s\n      );\n\n    } else {\n      // We cannot recover the signer for any other signature type.\n      revert UnsupportedSignatureType(_signature, signatureType, true);\n    }\n\n    // Prevent signer from being 0x0\n    if (signer == address(0x0)) revert SignerIsAddress0(_signature);\n\n    return signer;\n  }\n\n /**\n   * @notice Returns true if the provided signature is valid for the given signer.\n   * @dev Supports SignatureType.EIP712, SignatureType.EthSign, and ERC1271 signatures\n   * @param _hash      Hash that was signed\n   * @param _signer    Address of the signer candidate\n   * @param _signature Signature byte array\n   */\n  function isValidSignature(\n    bytes32 _hash,\n    address _signer,\n    bytes calldata _signature\n  ) internal view returns (bool valid) {\n    if (_signature.length == 0) {\n      revert EmptySignature();\n    }\n\n    uint256 signatureType = uint8(_signature[_signature.length - 1]);\n    if (signatureType == SIG_TYPE_EIP712 || signatureType == SIG_TYPE_ETH_SIGN) {\n      // Recover signer and compare with provided\n      valid = recoverSigner(_hash, _signature) == _signer;\n\n    } else if (signatureType == SIG_TYPE_WALLET_BYTES32) {\n      // Remove signature type before calling ERC1271, restore after call\n      valid = ERC1271_MAGICVALUE_BYTES32 == IERC1271Wallet(_signer).isValidSignature(_hash, _signature[0:_signature.length - 1]);\n\n    } else {\n      // We cannot validate any other signature type.\n      // We revert because we can say nothing about its validity.\n      revert UnsupportedSignatureType(_signature, signatureType, false);\n    }\n  }\n}\n'
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 500000
      },
      outputSelection: {
        '*': {
          '*': ['evm.bytecode', 'evm.deployedBytecode', 'devdoc', 'userdoc', 'metadata', 'abi']
        }
      },
      libraries: {}
    }
  }
}
