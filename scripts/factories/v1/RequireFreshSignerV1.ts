import { ContractFactory, ethers } from 'ethers'
export class RequireFreshSignerV1 extends ContractFactory {
  constructor(signer: ethers.Signer) {
    super(
      [
        {
          inputs: [
            {
              internalType: 'contract RequireUtils',
              name: '_requireUtils',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          inputs: [],
          name: 'REQUIRE_UTILS',
          outputs: [
            {
              internalType: 'contract RequireUtils',
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
              name: '_signer',
              type: 'address'
            }
          ],
          name: 'requireFreshSigner',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      '0x60a060405234801561001057600080fd5b506040516102aa3803806102aa8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661023f61006b6000398060a352806101af525061023f6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630df0c4191461003b578063cfc63a4914610070575b600080fd5b61006e6004803603602081101561005157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100a1565b005b6100786101ad565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631cd05dc4826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561012857600080fd5b505afa15801561013c573d6000803e3d6000fd5b505050506040513d602081101561015257600080fd5b5051156101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806101d26038913960400191505060405180910390fd5b50565b7f00000000000000000000000000000000000000000000000000000000000000008156fe5265717569726546726573685369676e6572237265717569726546726573685369676e65723a204455504c4943415445445f5349474e4552a2646970667358221220e659f104be18ad6f797d1c0a2939307f47f1ba93ae17f15e4cdb46b8942173f964736f6c63430007060033',
      signer
    )
  }
}
