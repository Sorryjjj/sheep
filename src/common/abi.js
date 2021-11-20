export const abi = [
    {
        type: 'constructor',
        stateMutability: 'nonpayable',
        inputs: [
            { type: 'string', name: 'name', internalType: 'string' },
            { type: 'string', name: 'symbol', internalType: 'string' },
            { type: 'string', name: 'baseURI', internalType: 'string' }
        ]
    },
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            { type: 'address', name: 'owner', internalType: 'address', indexed: true },
            { type: 'address', name: 'approved', internalType: 'address', indexed: true },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256', indexed: true }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'ApprovalForAll',
        inputs: [
            { type: 'address', name: 'owner', internalType: 'address', indexed: true },
            { type: 'address', name: 'operator', internalType: 'address', indexed: true },
            { type: 'bool', name: 'approved', internalType: 'bool', indexed: false }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'OwnershipTransferred',
        inputs: [
            { type: 'address', name: 'previousOwner', internalType: 'address', indexed: true },
            { type: 'address', name: 'newOwner', internalType: 'address', indexed: true }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            { type: 'address', name: 'from', internalType: 'address', indexed: true },
            { type: 'address', name: 'to', internalType: 'address', indexed: true },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256', indexed: true }
        ],
        anonymous: false
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'MAX_RESERVE',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'MAX_SUPPLY',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'SALE_START_TIMESTAMP',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'acceptBidForPunk',
        inputs: [
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' },
            { type: 'uint256', name: 'minPrice', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'approve',
        inputs: [
            { type: 'address', name: 'to', internalType: 'address' },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'balanceOf',
        inputs: [{ type: 'address', name: 'owner', internalType: 'address' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'string', name: '', internalType: 'string' }],
        name: 'baseURI',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'payable',
        outputs: [],
        name: 'buyPunk',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'changeBaseURI',
        inputs: [{ type: 'string', name: 'baseURI', internalType: 'string' }]
    },
    {
        type: 'function',
        stateMutability: 'payable',
        outputs: [],
        name: 'enterBidForPunk',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'address', name: '', internalType: 'address' }],
        name: 'getApproved',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'getNFTPrice',
        inputs: [{ type: 'uint256', name: 'amount', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'string', name: '', internalType: 'string' }],
        name: 'imageHash',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
        name: 'isApprovedForAll',
        inputs: [
            { type: 'address', name: 'owner', internalType: 'address' },
            { type: 'address', name: 'operator', internalType: 'address' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'payable',
        outputs: [],
        name: 'mintNFT',
        inputs: [{ type: 'uint256', name: 'amount', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'string', name: '', internalType: 'string' }],
        name: 'name',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'offerPunkForSale',
        inputs: [
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' },
            { type: 'uint256', name: 'minSalePriceInWei', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'address', name: '', internalType: 'address' }],
        name: 'owner',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'address', name: '', internalType: 'address' }],
        name: 'ownerOf',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'pendingWithdrawals',
        inputs: [{ type: 'address', name: '', internalType: 'address' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            { type: 'bool', name: 'hasBid', internalType: 'bool' },
            { type: 'uint256', name: 'punkIndex', internalType: 'uint256' },
            { type: 'address', name: 'bidder', internalType: 'address' },
            { type: 'uint256', name: 'value', internalType: 'uint256' }
        ],
        name: 'punkBids',
        inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'punkNoLongerForSale',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            { type: 'bool', name: 'isForSale', internalType: 'bool' },
            { type: 'uint256', name: 'punkIndex', internalType: 'uint256' },
            { type: 'address', name: 'seller', internalType: 'address' },
            { type: 'uint256', name: 'minValue', internalType: 'uint256' },
            { type: 'address', name: 'onlySellTo', internalType: 'address' }
        ],
        name: 'punksOfferedForSale',
        inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'punksRemainingToAssign',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'reserveNFTs',
        inputs: [{ type: 'uint256', name: 'amount', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'reserved',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'safeTransferFrom',
        inputs: [
            { type: 'address', name: 'from', internalType: 'address' },
            { type: 'address', name: 'to', internalType: 'address' },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'safeTransferFrom',
        inputs: [
            { type: 'address', name: 'from', internalType: 'address' },
            { type: 'address', name: 'to', internalType: 'address' },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' },
            { type: 'bytes', name: '_data', internalType: 'bytes' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'setApprovalForAll',
        inputs: [
            { type: 'address', name: 'operator', internalType: 'address' },
            { type: 'bool', name: 'approved', internalType: 'bool' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'setSaleTimestamp',
        inputs: [{ type: 'uint256', name: 'new_SALE_START_TIMESTAMP', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
        name: 'supportsInterface',
        inputs: [{ type: 'bytes4', name: 'interfaceId', internalType: 'bytes4' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'string', name: '', internalType: 'string' }],
        name: 'symbol',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'tokenByIndex',
        inputs: [{ type: 'uint256', name: 'index', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'tokenOfOwnerByIndex',
        inputs: [
            { type: 'address', name: 'owner', internalType: 'address' },
            { type: 'uint256', name: 'index', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'string', name: '', internalType: 'string' }],
        name: 'tokenURI',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
        name: 'totalSupply',
        inputs: []
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'transferFrom',
        inputs: [
            { type: 'address', name: 'from', internalType: 'address' },
            { type: 'address', name: 'to', internalType: 'address' },
            { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
        ]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'transferOwnership',
        inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'withdraw',
        inputs: [{ type: 'uint256', name: 'amount', internalType: 'uint256' }]
    },
    { type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'withdraw', inputs: [] },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'withdrawBidForPunk',
        inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
    }
];
