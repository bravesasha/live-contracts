import { ContractFactory, ethers } from 'ethers'

export class FactoryV1 extends ContractFactory {
  constructor(signer: ethers.Signer) {
    super(
      [
        {
          inputs: [
            {
              internalType: 'address',
              name: '_mainModule',
              type: 'address'
            },
            {
              internalType: 'bytes32',
              name: '_salt',
              type: 'bytes32'
            }
          ],
          name: 'deploy',
          outputs: [
            {
              internalType: 'address',
              name: '_contract',
              type: 'address'
            }
          ],
          stateMutability: 'payable',
          type: 'function'
        }
      ],
      '0x608060405234801561001057600080fd5b506101c8806100206000396000f3fe60806040526004361061001e5760003560e01c806332c02a1414610023575b600080fd5b61005c6004803603604081101561003957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610085565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60008060405180606001604052806028815260200161016b602891398473ffffffffffffffffffffffffffffffffffffffff166040516020018083805190602001908083835b6020831061010857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016100cb565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052920193845250604080518085038152938201905282519294508693508401905034f594935050505056fe603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3a26469706673582212209b0bce93afab3297b9ebf4e58fa642ef123d74bcbd3bdb4e48b662eb12b430ca64736f6c63430007060033',
      signer
    )
  }
}
