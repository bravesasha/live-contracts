import { ContractFactory, ethers } from 'ethers'

export class MainModuleUpgradableV2 extends ContractFactory {
  constructor(signer: ethers.Signer) {
    super(
      [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_space',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_provided',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_current',
              type: 'uint256'
            }
          ],
          name: 'BadNonce',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_code',
              type: 'bytes'
            }
          ],
          name: 'CreateFailed',
          type: 'error'
        },
        {
          inputs: [],
          name: 'EmptySignature',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            }
          ],
          name: 'HookAlreadyExists',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            }
          ],
          name: 'HookDoesNotExist',
          type: 'error'
        },
        {
          inputs: [],
          name: 'ImageHashIsZero',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_implementation',
              type: 'address'
            }
          ],
          name: 'InvalidImplementation',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_hash',
              type: 'bytes32'
            },
            {
              internalType: 'address',
              name: '_addr',
              type: 'address'
            },
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'InvalidNestedSignature',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            },
            {
              internalType: 'bytes32',
              name: '_s',
              type: 'bytes32'
            }
          ],
          name: 'InvalidSValue',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_hash',
              type: 'bytes32'
            },
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'InvalidSignature',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_flag',
              type: 'uint256'
            }
          ],
          name: 'InvalidSignatureFlag',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'InvalidSignatureLength',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes1',
              name: '_type',
              type: 'bytes1'
            }
          ],
          name: 'InvalidSignatureType',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            },
            {
              internalType: 'uint256',
              name: '_v',
              type: 'uint256'
            }
          ],
          name: 'InvalidVValue',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            },
            {
              internalType: 'uint256',
              name: 'threshold',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_weight',
              type: 'uint256'
            }
          ],
          name: 'LowWeightChainedSignature',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_index',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_requested',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_available',
              type: 'uint256'
            }
          ],
          name: 'NotEnoughGas',
          type: 'error'
        },
        {
          inputs: [],
          name: 'OnlyDelegatecall',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_sender',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '_self',
              type: 'address'
            }
          ],
          name: 'OnlySelfAuth',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'SignerIsAddress0',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            },
            {
              internalType: 'uint256',
              name: '_type',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: '_recoverMode',
              type: 'bool'
            }
          ],
          name: 'UnsupportedSignatureType',
          type: 'error'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_current',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '_prev',
              type: 'uint256'
            }
          ],
          name: 'WrongChainedCheckpointOrder',
          type: 'error'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: '_contract',
              type: 'address'
            }
          ],
          name: 'CreatedContract',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            },
            {
              indexed: false,
              internalType: 'address',
              name: '_implementation',
              type: 'address'
            }
          ],
          name: 'DefinedHook',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'bytes32',
              name: '_hash',
              type: 'bytes32'
            }
          ],
          name: 'IPFSRootUpdated',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'bytes32',
              name: 'newImageHash',
              type: 'bytes32'
            }
          ],
          name: 'ImageHashUpdated',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'newImplementation',
              type: 'address'
            }
          ],
          name: 'ImplementationUpdated',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: '_space',
              type: 'uint256'
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: '_newNonce',
              type: 'uint256'
            }
          ],
          name: 'NonceChange',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: '_imageHash',
              type: 'bytes32'
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: '_expiration',
              type: 'uint256'
            }
          ],
          name: 'SetExtraImageHash',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: '_tx',
              type: 'bytes32'
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: '_index',
              type: 'uint256'
            }
          ],
          name: 'TxExecuted',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: '_tx',
              type: 'bytes32'
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: '_index',
              type: 'uint256'
            },
            {
              indexed: false,
              internalType: 'bytes',
              name: '_reason',
              type: 'bytes'
            }
          ],
          name: 'TxFailed',
          type: 'event'
        },
        {
          stateMutability: 'payable',
          type: 'fallback'
        },
        {
          inputs: [],
          name: 'SET_IMAGE_HASH_TYPE_HASH',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            },
            {
              internalType: 'address',
              name: '_implementation',
              type: 'address'
            }
          ],
          name: 'addHook',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32[]',
              name: '_imageHashes',
              type: 'bytes32[]'
            }
          ],
          name: 'clearExtraImageHashes',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_code',
              type: 'bytes'
            }
          ],
          name: 'createContract',
          outputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          stateMutability: 'payable',
          type: 'function'
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: 'bool',
                  name: 'delegateCall',
                  type: 'bool'
                },
                {
                  internalType: 'bool',
                  name: 'revertOnError',
                  type: 'bool'
                },
                {
                  internalType: 'uint256',
                  name: 'gasLimit',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: 'target',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'value',
                  type: 'uint256'
                },
                {
                  internalType: 'bytes',
                  name: 'data',
                  type: 'bytes'
                }
              ],
              internalType: 'struct IModuleCalls.Transaction[]',
              name: '_txs',
              type: 'tuple[]'
            },
            {
              internalType: 'uint256',
              name: '_nonce',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'execute',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_imageHash',
              type: 'bytes32'
            }
          ],
          name: 'extraImageHash',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'imageHash',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'ipfsRoot',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'ipfsRootBytes32',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_hash',
              type: 'bytes32'
            },
            {
              internalType: 'bytes',
              name: '_signatures',
              type: 'bytes'
            }
          ],
          name: 'isValidSignature',
          outputs: [
            {
              internalType: 'bytes4',
              name: '',
              type: 'bytes4'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes'
            },
            {
              internalType: 'bytes',
              name: '_signatures',
              type: 'bytes'
            }
          ],
          name: 'isValidSignature',
          outputs: [
            {
              internalType: 'bytes4',
              name: '',
              type: 'bytes4'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'nonce',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            },
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            },
            {
              internalType: 'bytes',
              name: '',
              type: 'bytes'
            }
          ],
          name: 'onERC1155BatchReceived',
          outputs: [
            {
              internalType: 'bytes4',
              name: '',
              type: 'bytes4'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '',
              type: 'bytes'
            }
          ],
          name: 'onERC1155Received',
          outputs: [
            {
              internalType: 'bytes4',
              name: '',
              type: 'bytes4'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'address',
              name: '',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '',
              type: 'bytes'
            }
          ],
          name: 'onERC721Received',
          outputs: [
            {
              internalType: 'bytes4',
              name: '',
              type: 'bytes4'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            }
          ],
          name: 'readHook',
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
              internalType: 'uint256',
              name: '_space',
              type: 'uint256'
            }
          ],
          name: 'readNonce',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_signature',
              type: 'bytes4'
            }
          ],
          name: 'removeHook',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: 'bool',
                  name: 'delegateCall',
                  type: 'bool'
                },
                {
                  internalType: 'bool',
                  name: 'revertOnError',
                  type: 'bool'
                },
                {
                  internalType: 'uint256',
                  name: 'gasLimit',
                  type: 'uint256'
                },
                {
                  internalType: 'address',
                  name: 'target',
                  type: 'address'
                },
                {
                  internalType: 'uint256',
                  name: 'value',
                  type: 'uint256'
                },
                {
                  internalType: 'bytes',
                  name: 'data',
                  type: 'bytes'
                }
              ],
              internalType: 'struct IModuleCalls.Transaction[]',
              name: '_txs',
              type: 'tuple[]'
            }
          ],
          name: 'selfExecute',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_imageHash',
              type: 'bytes32'
            },
            {
              internalType: 'uint256',
              name: '_expiration',
              type: 'uint256'
            }
          ],
          name: 'setExtraImageHash',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_digest',
              type: 'bytes32'
            },
            {
              internalType: 'bytes',
              name: '_signature',
              type: 'bytes'
            }
          ],
          name: 'signatureRecovery',
          outputs: [
            {
              internalType: 'uint256',
              name: 'threshold',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'weight',
              type: 'uint256'
            },
            {
              internalType: 'bytes32',
              name: 'imageHash',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: 'subdigest',
              type: 'bytes32'
            },
            {
              internalType: 'uint256',
              name: 'checkpoint',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: '_interfaceID',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'pure',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_hash',
              type: 'bytes32'
            }
          ],
          name: 'updateIPFSRoot',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_imageHash',
              type: 'bytes32'
            }
          ],
          name: 'updateImageHash',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '_imageHash',
              type: 'bytes32'
            },
            {
              internalType: 'bytes32',
              name: '_ipfsRoot',
              type: 'bytes32'
            }
          ],
          name: 'updateImageHashAndIPFS',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: '_implementation',
              type: 'address'
            }
          ],
          name: 'updateImplementation',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          stateMutability: 'payable',
          type: 'receive'
        }
      ],
      '0x60a060405234801561001057600080fd5b50306080526080516137666100306000396000610be201526137666000f3fe6080604052600436106101a55760003560e01c80637a9a1628116100e1578063a4ab5f9f1161008a578063bc197c8111610064578063bc197c8114610603578063c71f1f961461064b578063d0748f7114610660578063f23a6e6114610680576101ac565b8063a4ab5f9f146105ae578063affed0e0146105ce578063b93ea7ad146105e3576101ac565b80638efa6441116100bb5780638efa64411461055957806390042baf1461057b578063a38cef191461058e576101ac565b80637a9a1628146104d1578063853c5068146104f15780638c3f556314610539576101ac565b806320c13b0b1161014e5780634fcf3eca116101285780634fcf3eca1461043a57806351605d801461045a57806357c56d6b1461047d57806361c2926c146104b1576101ac565b806320c13b0b146103da57806329561426146103fa5780634598154f1461041a576101ac565b8063150b7a021161017f578063150b7a02146102ff5780631626ba7e146103755780631a9b233714610395576101ac565b806301ffc9a71461028a578063025b22bc146102bf578063038dbaac146102df576101ac565b366101ac57005b600436106102885760006101e36000357fffffffff00000000000000000000000000000000000000000000000000000000166106c6565b905073ffffffffffffffffffffffffffffffffffffffff811615610286576000808273ffffffffffffffffffffffffffffffffffffffff1660003660405161022c929190612bc4565b600060405180830381855af49150503d8060008114610267576040519150601f19603f3d011682016040523d82523d6000602084013e61026c565b606091505b50915091508161027e57805160208201fd5b805160208201f35b505b005b34801561029657600080fd5b506102aa6102a5366004612c02565b61071a565b60405190151581526020015b60405180910390f35b3480156102cb57600080fd5b506102886102da366004612c48565b610725565b3480156102eb57600080fd5b506102886102fa366004612caf565b610777565b34801561030b57600080fd5b5061034461031a366004612d33565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016102b6565b34801561038157600080fd5b50610344610390366004612da2565b610882565b3480156103a157600080fd5b506103b56103b0366004612c02565b6108cf565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102b6565b3480156103e657600080fd5b506103446103f5366004612dee565b6108da565b34801561040657600080fd5b50610288610415366004612e5a565b61093f565b34801561042657600080fd5b50610288610435366004612e73565b610989565b34801561044657600080fd5b50610288610455366004612c02565b610a4e565b34801561046657600080fd5b5061046f610b16565b6040519081526020016102b6565b34801561048957600080fd5b5061046f7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d181565b3480156104bd57600080fd5b506102886104cc366004612caf565b610b45565b3480156104dd57600080fd5b506102886104ec366004612e95565b610bcb565b3480156104fd57600080fd5b5061051161050c366004612da2565b610cd0565b604080519586526020860194909452928401919091526060830152608082015260a0016102b6565b34801561054557600080fd5b5061046f610554366004612e5a565b610e98565b34801561056557600080fd5b5061056e610ec4565b6040516102b69190612f6c565b6103b5610589366004612fae565b610f45565b34801561059a57600080fd5b506102886105a9366004612e5a565b61102f565b3480156105ba57600080fd5b5061046f6105c9366004612e5a565b611079565b3480156105da57600080fd5b5061046f611084565b3480156105ef57600080fd5b506102886105fe36600461307d565b611090565b34801561060f57600080fd5b5061034461061e3660046130b2565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561065757600080fd5b5061046f61115b565b34801561066c57600080fd5b5061028861067b366004612e73565b611185565b34801561068c57600080fd5b5061034461069b36600461316d565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006107147fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff0000000000000000000000000000000000000000000000000000000084166111d8565b92915050565b600061071482611236565b33301461076b576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b61077481611292565b50565b3330146107b8576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b8060005b8181101561087c5760008484838181106107d8576107d86131e5565b905060200201359050610838816000604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606090920190925280519101208190555050565b807f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c600060405161086b91815260200190565b60405180910390a2506001016107bc565b50505050565b60008061089085858561134d565b50905080156108c257507f1626ba7e0000000000000000000000000000000000000000000000000000000090506108c8565b50600090505b9392505050565b6000610714826106c6565b6000806108ff86866040516108f0929190612bc4565b6040518091039020858561134d565b509050801561093157507f20c13b0b000000000000000000000000000000000000000000000000000000009050610937565b50600090505b949350505050565b333014610980576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6107748161138b565b3330146109ca576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b604080517f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de602080830191909152818301859052825180830384018152606083019384905280519101208390559082905282907f804f6171d6008d9e16ee3aa0561fec328397f4ba2827a6605db388cfdefa3b0c9060800160405180910390a25050565b333014610a8f576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6000610a9a826106c6565b73ffffffffffffffffffffffffffffffffffffffff1603610b0b576040517f1c3812cc0000000000000000000000000000000000000000000000000000000081527fffffffff0000000000000000000000000000000000000000000000000000000082166004820152602401610762565b61077481600061141b565b6000610b407fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf85490565b905090565b333014610b86576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6000610bb98383604051602001610b9e9291906133bc565b604051602081830303815290604052805190602001206114db565b9050610bc6818484611560565b505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c3a576040517f0a57d61d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c43836116e8565b600080610c7b858888604051602001610c5e93929190613404565b60405160208183030381529060405280519060200120858561134d565b9150915081610cbc578084846040517f8f4a234f00000000000000000000000000000000000000000000000000000000815260040161076293929190613427565b610cc7818888611560565b50505050505050565b60008060008060008087876000818110610cec57610cec6131e5565b909101357fff00000000000000000000000000000000000000000000000000000000000000169150819050610d4257610d24896114db565b9250610d318389896117e5565b92985090965094509150610e8d9050565b7fff0000000000000000000000000000000000000000000000000000000000000081811601610d8157610d74896114db565b9250610d31838989611836565b7ffe000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610dd357610d7489611862565b7ffd000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821601610e3757610e278989896118cf565b9550955095509550955050610e8d565b6040517f6085cd820000000000000000000000000000000000000000000000000000000081527fff0000000000000000000000000000000000000000000000000000000000000082166004820152602401610762565b939792965093509350565b60006107147f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836111d8565b6060610f21610f1c610ed461115b565b6040517f017012200000000000000000000000000000000000000000000000000000000060208201526024810191909152604401604051602081830303815290604052611a4c565b611c65565b604051602001610f319190613441565b604051602081830303815290604052905090565b6000333014610f88576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b81516020830134f0905073ffffffffffffffffffffffffffffffffffffffff8116610fe157816040517f0d2571910000000000000000000000000000000000000000000000000000000081526004016107629190612f6c565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b333014611070576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b61077481611c8e565b600061071482611ce7565b6000610b406000610e98565b3330146110d1576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b60006110dc836106c6565b73ffffffffffffffffffffffffffffffffffffffff161461114d576040517f5b4d6d6a0000000000000000000000000000000000000000000000000000000081527fffffffff0000000000000000000000000000000000000000000000000000000083166004820152602401610762565b611157828261141b565b5050565b6000610b407f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d0335490565b3330146111c6576040517fe1258894000000000000000000000000000000000000000000000000000000008152336004820152306024820152604401610762565b6111cf8261138b565b61115781611c8e565b60008083836040516020016111f7929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f2e74b92a000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161128957506001919050565b61071482611d13565b73ffffffffffffffffffffffffffffffffffffffff81163b6112f8576040517f0c76093700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610762565b611300813055565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03906020015b60405180910390a150565b6000806000806000611360888888610cd0565b5096509194509250905082821080159061137e575061137e81611d6f565b9450505050935093915050565b806113c2576040517f4294d12700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113eb7fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8829055565b6040518181527f307ed6bd941ee9fc80f369c94af5fa11e25bab5102a6140191756c5474a30bfa90602001611342565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401819052835180840385018152606084018086528151919093012073ffffffffffffffffffffffffffffffffffffffff8616908190559152608082015290517f0d7fc113eaf016db4681a1ba86d083ce3e0961f321062a75ac2b0aeb33deeed19181900360a00190a15050565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201524660228201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b166042820152605681018290526000906076015b604051602081830303815290604052805190602001209050919050565b8060005b818110156116e1573684848381811061157f5761157f6131e5565b90506020028101906115919190613486565b90506040810135805a10156115e65782815a6040517f2bb3e3ba000000000000000000000000000000000000000000000000000000008152600481019390935260248301919091526044820152606401610762565b60006115f560208401846134c4565b156116345761162d61160d6080850160608601612c48565b8315611619578361161b565b5a5b61162860a08701876134df565b611d7a565b905061166f565b61166c6116476080850160608601612c48565b60808501358415611658578461165a565b5a5b61166760a08801886134df565b611d95565b90505b80156116b457877f5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7856040516116a791815260200190565b60405180910390a26116d6565b6116d66116c760408501602086016134c4565b89866116d1611db2565b611dd1565b505050600101611564565b5050505050565b606081901c6bffffffffffffffffffffffff8216600061170783610e98565b9050818114611753576040517f9b6514f4000000000000000000000000000000000000000000000000000000008152600481018490526024810183905260448101829052606401610762565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830186905282518083038401815260609092019092528051910120600183019081905560408051858152602081018390527f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881910160405180910390a15050505050565b6000808080611800876117fb876006818b613544565b611e1f565b6000908152873560f01c6020818152604080842084526002909a013560e01c908190529890912090999198509695509350505050565b60008080806118518761184c876001818b613544565b6117e5565b935093509350935093509350935093565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526000602282018190527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660428301526056820183905290607601611543565b6000808080806004600188013560e81c826118ea838361359d565b90506118fc8b61050c83868d8f613544565b939b50919950975095509350878710156119545761191c81848b8d613544565b89896040517fb006aba000000000000000000000000000000000000000000000000000000000815260040161076294939291906135b0565b8092505b88831015611a3e5760038301928a013560e81c9150611977838361359d565b90506000611999611987886122b5565b8c8c8790869261050c93929190613544565b939c50919a50985090915050888810156119f1576119b982858c8e613544565b8a8a6040517fb006aba000000000000000000000000000000000000000000000000000000000815260040161076294939291906135b0565b848110611a34576040517f37daf62b0000000000000000000000000000000000000000000000000000000081526004810182905260248101869052604401610762565b9350915081611958565b505050939792965093509350565b8051606090600381901b60006005600483010467ffffffffffffffff811115611a7757611a77612f7f565b6040519080825280601f01601f191660200182016040528015611aa1576020820181803683370190505b5090506000806000805b86811015611bb557888181518110611ac557611ac56131e5565b01602001516008948501949390931b60f89390931c92909217915b60058410611bad576040805180820190915260208082527f6162636465666768696a6b6c6d6e6f707172737475767778797a323334353637818301527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb90950194601f85871c16908110611b5657611b566131e5565b602001015160f81c60f81b858381518110611b7357611b736131e5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600190910190611ae0565b600101611aab565b508215611c59576040518060400160405280602081526020017f6162636465666768696a6b6c6d6e6f707172737475767778797a3233343536378152508360050383901b601f1681518110611c0c57611c0c6131e5565b602001015160f81c60f81b848281518110611c2957611c296131e5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b50919695505050505050565b606081604051602001611c7891906135d7565b6040516020818303038152906040529050919050565b611cb77f0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d033829055565b6040518181527f20d3ef1b5738a9f6d7beae515432206e7a8e2740ca6dcf46a952190ad01bcb5190602001611342565b60006107147f849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de836111d8565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601611d6657506001919050565b610714826122e9565b60006107148261242a565b60006040518284823760008084838989f49695505050505050565b6000604051828482376000808483898b8af1979650505050505050565b60603d604051915060208201818101604052818352816000823e505090565b8315611ddf57805160208201fd5b827fab46c69f7f32e1bf09b0725853da82a211e5402a0600296ab499a2fb5ea3b4198383604051611e1192919061361c565b60405180910390a250505050565b60008060005b838110156122ac57600181019085013560f81c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101611ec657601582019186013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff81169074ff000000000000000000000000000000000000000016811785611eac5780611ebb565b60008681526020829052604090205b955050505050611e25565b80611f5c5760018201918681013560f81c906043016000611ef28a611eed84888c8e613544565b612461565b60ff841697909701969194508491905060a083901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff82161786611f415780611f50565b60008781526020829052604090205b96505050505050611e25565b60028103612084576000808784013560f881901c9060581c73ffffffffffffffffffffffffffffffffffffffff16601586019550909250905060008885013560e81c600386018162ffffff169150809650819250505060008186019050611fd58b848c8c8a908692611fd093929190613544565b612724565b61201d578a83611fe783898d8f613544565b6040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016107629493929190613635565b60ff8416979097019694508460a084901b74ff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617876120685780612077565b60008881526020829052604090205b9750505050505050611e25565b600381036120b75760208201918601358361209f57806120ae565b60008481526020829052604090205b93505050611e25565b60048103612103576003808301928781013560e81c91908201016000806120e48b6117fb85898d8f613544565b60009889526020526040909720969097019650909350611e2592505050565b6006810361220b5760008287013560f81c60018401935060ff16905060008784013560f01c60028501945061ffff16905060008885013560e81c600386018162ffffff1691508096508192505050600081860190506000806121718d8d8d8b9087926117fb93929190613544565b9398508893909250905084821061218757988501985b604080517f53657175656e6365206e657374656420636f6e6669673a0a0000000000000000602080830191909152603882018490526058820188905260788083018a90528351808403909101815260989092019092528051910120896121ed57806121fc565b60008a81526020829052604090205b99505050505050505050611e25565b60058103612277576020820191860135878103612246577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94505b60006122518261290b565b90508461225e578061226d565b60008581526020829052604090205b9450505050611e25565b6040517fb2505f7c00000000000000000000000000000000000000000000000000000000815260048101829052602401610762565b50935093915050565b7f8713a7c4465f6fbee2b6e9d6646d1d9f83fec929edfc4baf661f3c865bdd04d16000908152602082905260408120610714565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061237c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806123c857507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b8061241457507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561242157506001919050565b61071482612946565b6000612435826129a2565b1561244257506001919050565b600061244d83611ce7565b905080158015906108c85750421092915050565b6000604282146124a15782826040517f2ee17a3d000000000000000000000000000000000000000000000000000000008152600401610762929190613675565b60006124ba6124b1600185613689565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561252e578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016107629392919061369c565b8260ff16601b1415801561254657508260ff16601c14155b15612583578686846040517fe578897e000000000000000000000000000000000000000000000000000000008152600401610762939291906136c0565b600184036125f0576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa1580156125df573d6000803e3d6000fd5b5050506020604051035194506126c8565b6002840361268d576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a0016125bd565b86868560016040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161076294939291906136e7565b73ffffffffffffffffffffffffffffffffffffffff85166127195786866040517f6c1719d2000000000000000000000000000000000000000000000000000000008152600401610762929190613675565b505050509392505050565b600081810361275f576040517fac241e1100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838361276e600182613689565b81811061277d5761277d6131e5565b919091013560f81c91505060018114806127975750600281145b156127dc578473ffffffffffffffffffffffffffffffffffffffff166127be878686612461565b73ffffffffffffffffffffffffffffffffffffffff16149150612902565b600381036128c75773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e8786600087612810600182613689565b9261281d93929190613544565b6040518463ffffffff1660e01b815260040161283b93929190613427565b602060405180830381865afa158015612858573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061287c9190613713565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150612902565b83838260006040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161076294939291906136e7565b50949350505050565b6040517f53657175656e636520737461746963206469676573743a0a0000000000000000602082015260388101829052600090605801611543565b60007ffda4dd44000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161299957506001919050565b610714826129d5565b600081158015906107145750507fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8541490565b60007fe4a77bbc000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612a2857506001919050565b6107148260007f1cbec625000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612a7f57506001919050565b6107148260007fae9fa280000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612ad657506001919050565b6107148260007fffffffff0000000000000000000000000000000000000000000000000000000082167fac6a444e000000000000000000000000000000000000000000000000000000001480612b6d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15612b7a57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610714565b8183823760009101908152919050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461077457600080fd5b600060208284031215612c1457600080fd5b81356108c881612bd4565b803573ffffffffffffffffffffffffffffffffffffffff81168114612c4357600080fd5b919050565b600060208284031215612c5a57600080fd5b6108c882612c1f565b60008083601f840112612c7557600080fd5b50813567ffffffffffffffff811115612c8d57600080fd5b6020830191508360208260051b8501011115612ca857600080fd5b9250929050565b60008060208385031215612cc257600080fd5b823567ffffffffffffffff811115612cd957600080fd5b612ce585828601612c63565b90969095509350505050565b60008083601f840112612d0357600080fd5b50813567ffffffffffffffff811115612d1b57600080fd5b602083019150836020828501011115612ca857600080fd5b600080600080600060808688031215612d4b57600080fd5b612d5486612c1f565b9450612d6260208701612c1f565b935060408601359250606086013567ffffffffffffffff811115612d8557600080fd5b612d9188828901612cf1565b969995985093965092949392505050565b600080600060408486031215612db757600080fd5b83359250602084013567ffffffffffffffff811115612dd557600080fd5b612de186828701612cf1565b9497909650939450505050565b60008060008060408587031215612e0457600080fd5b843567ffffffffffffffff80821115612e1c57600080fd5b612e2888838901612cf1565b90965094506020870135915080821115612e4157600080fd5b50612e4e87828801612cf1565b95989497509550505050565b600060208284031215612e6c57600080fd5b5035919050565b60008060408385031215612e8657600080fd5b50508035926020909101359150565b600080600080600060608688031215612ead57600080fd5b853567ffffffffffffffff80821115612ec557600080fd5b612ed189838a01612c63565b9097509550602088013594506040880135915080821115612ef157600080fd5b50612d9188828901612cf1565b60005b83811015612f19578181015183820152602001612f01565b50506000910152565b60008151808452612f3a816020860160208601612efe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108c86020830184612f22565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215612fc057600080fd5b813567ffffffffffffffff80821115612fd857600080fd5b818401915084601f830112612fec57600080fd5b813581811115612ffe57612ffe612f7f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561304457613044612f7f565b8160405282815287602084870101111561305d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561309057600080fd5b823561309b81612bd4565b91506130a960208401612c1f565b90509250929050565b60008060008060008060008060a0898b0312156130ce57600080fd5b6130d789612c1f565b97506130e560208a01612c1f565b9650604089013567ffffffffffffffff8082111561310257600080fd5b61310e8c838d01612c63565b909850965060608b013591508082111561312757600080fd5b6131338c838d01612c63565b909650945060808b013591508082111561314c57600080fd5b506131598b828c01612cf1565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561318657600080fd5b61318f87612c1f565b955061319d60208801612c1f565b94506040870135935060608701359250608087013567ffffffffffffffff8111156131c757600080fd5b6131d389828a01612cf1565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80358015158114612c4357600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260006020808501808196508560051b810191508460005b878110156133af57828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418836030181126132c657600080fd5b870160c06132d382613214565b151586526132e2878301613214565b15158688015260408281013590870152606073ffffffffffffffffffffffffffffffffffffffff613314828501612c1f565b16908701526080828101359087015260a080830135368490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe101811261335a57600080fd5b90920187810192903567ffffffffffffffff81111561337857600080fd5b80360384131561338757600080fd5b82828901526133998389018286613224565b9c89019c97505050928601925050600101613287565b5091979650505050505050565b60408152600560408201527f73656c663a000000000000000000000000000000000000000000000000000000606082015260806020820152600061093760808301848661326d565b83815260406020820152600061341e60408301848661326d565b95945050505050565b83815260406020820152600061341e604083018486613224565b7f697066733a2f2f00000000000000000000000000000000000000000000000000815260008251613479816007850160208701612efe565b9190910160070192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126134ba57600080fd5b9190910192915050565b6000602082840312156134d657600080fd5b6108c882613214565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261351457600080fd5b83018035915067ffffffffffffffff82111561352f57600080fd5b602001915036819003821315612ca857600080fd5b6000808585111561355457600080fd5b8386111561356157600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156107145761071461356e565b6060815260006135c4606083018688613224565b6020830194909452506040015292915050565b7f620000000000000000000000000000000000000000000000000000000000000081526000825161360f816001850160208701612efe565b9190910160010192915050565b8281526040602082015260006109376040830184612f22565b84815273ffffffffffffffffffffffffffffffffffffffff8416602082015260606040820152600061366b606083018486613224565b9695505050505050565b602081526000610937602083018486613224565b818103818111156107145761071461356e565b6040815260006136b0604083018587613224565b9050826020830152949350505050565b6040815260006136d4604083018587613224565b905060ff83166020830152949350505050565b6060815260006136fb606083018688613224565b60208301949094525090151560409091015292915050565b60006020828403121561372557600080fd5b81516108c881612bd456fea26469706673582212200b3ca2780c0956acf3c3ac0565452b20ff7214a6f5538fcc261e6fc29c7ca98764736f6c63430008120033',
      signer
    )
  }
}
