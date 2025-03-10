'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2b89b73359ce3f6e5ed3471457e947be",
".git/config": "8f9dab7aae84d61906850720ff9af6c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0fc038b8d12b6cd2ec0b5781fe5e57e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0aa44765a79723e29e5de5bbfc9153b",
".git/logs/refs/heads/master": "d0aa44765a79723e29e5de5bbfc9153b",
".git/logs/refs/remotes/origin/master": "1f655ce285a434b4ffb8534fcb805432",
".git/objects/00/3725df400c5ac866ade917c58147921c8dfa81": "bffa9d3be3c9087af1d3e185d79d7b55",
".git/objects/04/1ccb1a3e536b1f404620f0c8b0eb1bfcc2662a": "2ab4e1496c40dbbbc38d70db97ab9f24",
".git/objects/04/7b84b2bbb05bcf0abc1aacd8220c430d5b293c": "3989d2cb3635f2f8ffe21ff29452538d",
".git/objects/05/029e91b5b9a72d94d78cafe1a8ba2f011aaa0c": "785eb1f3285e4c75cb07b0f0d126ff97",
".git/objects/06/c94f4de56359784f4728415aba4ffa97c33a1e": "0eef55e63beae1b91a010576b071a9dc",
".git/objects/06/e23573b6b19415562feb7f4cc7d5249a20ef8e": "20f16fbcf4da2d29d05bb4fb58c1b0df",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/fa07d277b32bd376d04a9c0ef352bc888178fc": "5e2675eb3bb20d93c62580ab343b56bf",
".git/objects/10/bc122c0d4bbd48b2ef2b478c10b937be5a098f": "7af79e2892a6ff8a2974ab2f686ce9e9",
".git/objects/11/5013436ff9f5b5f094dbc2368a517da03bacb6": "84335862748871fc35765bf8bd852799",
".git/objects/11/5f5395063c632dd36bebbac67f8e3063ef0d8a": "95ebccdc5a8b7dc311f8ba41233ee93c",
".git/objects/13/09dc8517995a065a8c3b36e14ff5a05781c0a7": "85d9db3b822a54123c12b672e55aae63",
".git/objects/13/bb4c0f0ac9f4e69ff4ba864fc68f76fc4ac93a": "8ae3012f066a0b3f43615f90c7f04c41",
".git/objects/15/5af04ede741e93d1c90835ea987b1cea28eeb1": "a501d6587a7df4c3dd2dabd751d5ed1a",
".git/objects/19/468d4454bd9707b927bb7aa6ac948087693160": "e47b01256adbd1fcd546a94e69857489",
".git/objects/1a/9b15380c4f1b2e151cce02769220d516bf1ee0": "3f485f750c099d8d9eba977b9f1bc1c0",
".git/objects/1b/2425ea572a5c63cd90e47e1c32df1aadb19fc8": "0934fa1913c0f6c313e1e4328ba49c0c",
".git/objects/1b/695e8d5176b49ee0d2b4e2b00ff18665d365ad": "8592ec91c1d81fa40a4447aa7007d0b9",
".git/objects/1b/c704d54df1c3c6e3967e41a698b31f0b2b6286": "9154cd7fc46dba6b20d676e2d848d6aa",
".git/objects/1e/f37f417be6a0af5a78956d24ada8be56a63443": "9160df4f37156e26245ba891b408931d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/211d29f24410ea2c077fabe475247dd73454e0": "2cbe2ce71f07a4da69ef324204ac899e",
".git/objects/22/7bc1ab991453d2d80a36a833b88d4ab4f3798a": "f80db7b0bbd4b2deae1c8f1502c1bd1d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/b55ba23b0ddeb1b0a1547f008b26db4efe5b10": "9be89467b38c8df693284f0b6aaccd9e",
".git/objects/26/c8d4fc480ab5d9d8c466312c566467ff4e1e41": "097ca1ab771d786757cece7230a4096e",
".git/objects/27/38730aa235af2ac9c6c89c9c55d081b568a0e3": "7b221020e897716e619891b6500f731e",
".git/objects/29/20a61f4097f0f4127392144aaeffc5b1edf679": "0cbc3eda9df60840626690c3965c5bd2",
".git/objects/2a/c9c2a1922e5386a465dfdc4cdefed5544a2c53": "b60ce7ba70ff22749e5b28db25d772fa",
".git/objects/2a/da6cc50860fd02f02da94a1998f60c20a23130": "6c6d1e223a86fa2fceb47c5233e82818",
".git/objects/2b/b8f48fa2f300b26e7e510513368e12cfee742f": "ccdfe0402a403bc3ede4197974d9e1d5",
".git/objects/2c/e657d96e6f6abaa01a30782ed670cc7ebba97a": "afa14fd8bebd2d95dd0de4c0ce82098f",
".git/objects/2d/4cabb888887a91ac4e44da601cc13b4dd14db7": "daae87094b096eccd67777b3834324e6",
".git/objects/2e/71daaf608ff47d2d59758ef2e1707d7a5cf4e0": "093acd899a0d90225679f4d02d7a0d65",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/1d3ef1acf8f067c75cbd242faef513de17f5bd": "f73e99ba3518d4215cfe064a4f7695dd",
".git/objects/34/45692374e20174d4e2485cebed1aee96fadff5": "62959bfce5c86f4ed2aba0952bc82ac7",
".git/objects/34/bd60459eb39c26224447e2508a94fac425ea9c": "0772b9bfea00f782f30103e6afa70315",
".git/objects/3a/5d8a6fd8359adadbcc2805ae43d8f4f4464c45": "95b62c860643141c78ac93a51f02ef82",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b2cd3c93140083c97d357dc23dc40152962601": "4c61858bb83f39749748dba2fd8b21b3",
".git/objects/3e/9c29c38d75349df933ea2219b10e182dfae2aa": "f221aeb954c134b61f05a5b91b0bb595",
".git/objects/3e/b717eac89c50bf06824045861197796e5950bd": "84f24b179fdd30852f7c6ec28b2f9c81",
".git/objects/3f/dc43a479bfba987bbba64a1f29e080ddf56ad9": "823acce46326da1de3522ba9e278132b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/c463fe1a93b14d97031d2072899406aef9d412": "3406b1292f5a84bbe735caf375a3981e",
".git/objects/49/f7d62510326e5f6a8946f1d483a50e6f025623": "6a7e853a8801689a5fa9b2edf809917d",
".git/objects/4a/8400b356bad3bafe2a7217a5a9806ce8b9db29": "8e475796c23e50a6fcc8e1926a743ee8",
".git/objects/53/bc4ee4ad4ac83771648794b9ad423ad8750545": "8dd2fa551c32f8488d96b3299fe63856",
".git/objects/54/d26c31c1d2428ae30466e418213dc43bf53301": "25e6e03577c08169b48bd47e5eb1f481",
".git/objects/57/6bd46ae41a1d0a30079c0f0b770ce346ad0ccd": "2a385b2af975803e0665d645324a36ce",
".git/objects/59/c53cc33dfaa4a8eee097a5e072714895d7fbda": "0d03364fdc52081fd284ec05004667ec",
".git/objects/5a/1a8c65aff09fbbf85b88b906853593fcf00773": "80b85101d64b3291eea143be268f6f46",
".git/objects/5a/6feb863107434227da8ca39343f697d35d3348": "206d0efe889c16d591448622c5dab402",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/877e544959cafbc8d0be27b5a2e44da27a5f11": "73611906c91708d37f556d2b62499c8b",
".git/objects/61/c9429fd4dc7675c01c6a1cfc1c2e4242644f74": "86ad2dbf2e28933f89b85423c996cd96",
".git/objects/61/cab4e53dadc4c0bfbe44e4cc26bab62f0d9acb": "15b0156638c512f776eff9c35cd27374",
".git/objects/64/86d8c3584421a720972653c1ae3aa2f59f1b6a": "f69b5ad7c7a3d885ab007432498075cd",
".git/objects/67/58c23c0d49fb655b3805286b7b6841fb6ccf05": "510ef6b503286289cf0d5fd3058f5d20",
".git/objects/68/16b9b9cf6dc935ae0aa2d9f5f6c01853cef31c": "f60c701edd6b270857f573151fc7a38e",
".git/objects/68/3acfa99b9e7325f04fb31f8c5d341f37c597bc": "a8872da35108956119086a40c0aed98b",
".git/objects/68/afa07d7e69aed9cd97a219cdcd26f733f1ba7f": "0c1785303e882ec0f818fb68811cc253",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/3acb0de3f8859148b04116fca7836cd3d1b94e": "2d3b618a9c47fa8268237fa07bc5a83f",
".git/objects/6c/abf3ed4f27ac9f2474bcbbe84d73fb8a5dcf4f": "f24c6ed134245d083ae51c4d2b7d1023",
".git/objects/6e/03de2f0e2122f7485201ee6caa1daf76adbc86": "1c8e73684e519853883afb410f7beac4",
".git/objects/72/e8b3e3776a8b6c7b4fec93023c88ffb852e522": "4939197e1310861724b0f77cc0efe1af",
".git/objects/75/524de74677eb72d134751919efeeaa53f0aeac": "52ead7af25152b09b6a1fbf5fe0cefcb",
".git/objects/76/d67d3d42d118cdb8e5c1ff5c37306b41cf4ef6": "778e6b2c1f3ff2799ca397a403a84d60",
".git/objects/7b/84f43142586e095254e798da5b6d0ad8fd30f7": "119ce525c7bf03f785f5d8d8af9fe28f",
".git/objects/7e/f00d7a71c5f2061a4d2bc68a22e50f55415f0b": "c5e3b04d389ad8b42cbe3386bf7735f1",
".git/objects/80/533af59b4d30b4f5cd6ec633a4577ead44000e": "d6b24173e5a37117a423119e09991264",
".git/objects/80/f4eeda23cc6f20951adca22ddc51bae025d070": "e3a7d7cb583b850a9cc8ecfb3dad47d1",
".git/objects/80/f5d03a0cafcfe4e82aa47e647a78c58bb11cd5": "45cf6bcc9350755194150f4af6349ab1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/c85cc9d0638bb8dec8834bf39fc98dee5d0749": "130654df2a45cfa53f53c40c3bab36eb",
".git/objects/86/6d670ae43f330e061f56ad269e0ce14b485f05": "23240b3d4cbb4d7b333a9e21007c7ae7",
".git/objects/87/5743ed1b59728936b23724f284cb5fae81c1ff": "0ef0a849218ccbc308813078e8060dd0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bed781ffc2aa2151d8546f3061b056767660ca": "ce8ccba563c8f515f71ddb8d62fffc23",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/751afeed0d3222b383753637f2d03180b7c1a6": "e92818cd6d8df3902c6a0ad9388266b4",
".git/objects/8b/8c3123e386c7b836b322a58ffbcaa07513ab2f": "21091818b5f538c8857862e07a2b3309",
".git/objects/8d/097cebd17c345b1b698b8f8de3f4c2976d6a08": "9f2d65151c10b2369f17b87a0f6a4b0d",
".git/objects/8f/395e9ea7fe21db67ac00764bd4a1d6a6df02ab": "e4fabd496cf513d60d91a7fa3594aef6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/59ae8a34524ddc38fccf41ffbc85c9b733f7a6": "b510d444ca1bc9010ec27124e0a2b606",
".git/objects/94/273562a80f0f49248cc271b766851ebd37d54e": "85495be763330295e6b9cc04019c20ad",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/d91f59ff17a6a92dec1bf8b0c1a56d7d826097": "ef375f3c6dbe9f74b72ea5ad21112a4f",
".git/objects/99/0c9c55435da1361660dbbd4c80dc84a4b5c1e4": "39aca0e6b1249e80d5c921e64482430f",
".git/objects/99/20eddd3b6d9307310803484d9d42d88a39b09b": "d053c90d26a1bbe20a255e493d246a71",
".git/objects/9d/67e1a310e15538c0626973e20904fc386405fe": "dc97540d3f8791e9cc88a6ccb6253da2",
".git/objects/9f/6c933bfa5441ce92b5e16478aab8c1bf7aeb47": "1609efaa33ffbcff295b6d4fa7ce68c5",
".git/objects/9f/90040961a793a07dde84fb3ce1dfd6c19fc49f": "11ec6244c354eda5016c15498387545b",
".git/objects/a0/77662b87ca06f4625a5c0753ffe8f4d215ce08": "f067af090424c08d085a3f3853c7c717",
".git/objects/a1/0f34c2cfcb20308400d14a1fe1ac7024e34472": "bb919bb047b7da7093f9f017deb17f0d",
".git/objects/a1/33e7e3a65ac47cfabf665700fa819c8116e6dc": "ace93fbbe836ee8e13167041f4dd9634",
".git/objects/a3/c1e1f491e554bd63f3d2654995c0a618980a05": "cebc3aa4a3c79d5698dcbd35b551e239",
".git/objects/a3/f4854b0ae908cdf6d2e82cbe61fd82a9e031a4": "267b0cf13cecd58b8f0d2b5f02fd7185",
".git/objects/a6/ee6977a94852f6cf4685a23e79c43c44019323": "d17a0a6d0f99f1bc1c9282656eeb694b",
".git/objects/aa/70c1e08d047570bd1576e2bbdd5cf50f44d0e3": "cab271cca97925fd20f88b4099695437",
".git/objects/b0/3a471f94c7a858d0aedb7076ca43bde5bbdb90": "efa79d7e9e3884986a44b6f276e9374a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6be52416f2164659be9020058e8e994b0d3826": "78e82dc1e28f7cc41bbd1ff055e68a92",
".git/objects/b5/35e9ed61e7e81a07562ac4c95a2008dcba65a3": "210c3ba7e6a13d9912fb878f71531035",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e003b34c76dab57a42b8eab885ed4ed936116c": "c3bec78b4d0ac3dc7f92d9b14e7e9a5d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/18b2d709570f3b5b8bda85113d0bd2d595d2f3": "6581256cfd2137cc1352ddb92796cddf",
".git/objects/bc/ea20e0b921926e6dc8689b3e10cccbf4af2ee5": "14642385376983357002b24e7171b212",
".git/objects/bd/96e5640c24bf1937be889b8a3ddc875d021d49": "96e3ef377cd59ea9e9ce17763c10ed2a",
".git/objects/bd/a0666ecf762bcac364416dc27034c82037b405": "8494721e108b9d840ac7b0b9150c3b0e",
".git/objects/c0/5e44014eec1e415bc29ed3353d945d5f3e2241": "545322a343b3cd3356da1323394f74fb",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/325896ff15fe5863fbcd76033fd7a6fb354db3": "2c1a598c1ff61db403dad45b205e300e",
".git/objects/c1/6c853326e1bd251b846e67f3b31cef6acaf9e5": "641b72c19987b9799a3c9018f32b5ac2",
".git/objects/c5/97702095388bb037d904fc142d9a60d6544db6": "0c4f96768c987036cf25c9fd131cfe33",
".git/objects/c5/983adec78be0af79edc891a4f33791ad34fb6f": "59dede44a56dc491104a2c71409539cd",
".git/objects/c6/5e9ee371a7b79b770569c417c8a67f85cb5526": "171bb08242295b73aca793d145b51029",
".git/objects/c8/691d387c686f17d6963165c3c882a236a07abb": "1ea3778b12041376591ed4f0ceba103b",
".git/objects/c8/6934ac01e74ecc0429f7943614bbcc0cfe1f21": "434036d8aaa53fada07b561befecc7dc",
".git/objects/c9/6d6f863f0d5e1b23836dfeea814f47f5a64412": "bfe19243a7ece4cac62ef6acabf3ef06",
".git/objects/cc/7e3bddd1ee2df6e7ca69ac968ba0fe9779384d": "65c0d9932a3b060022538a37e8182027",
".git/objects/ce/d8703b63e5947cb0662284fb032748c2e8be0b": "adfbceccd49929cfefeebcf4d2d40da1",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/823064571124da7826e98b97148f80aefe3e3d": "ddac970300805e81da05e64bd490b990",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/4bf9eaadd003d85adf9fac97617713453191df": "a132e3a584cab05edfafa107c00c4530",
".git/objects/d3/4f695d2e2272aa2287d38e517172979d4a322d": "24d2aa32f7a09a87d4b3e9ff9ded552b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/0f43550b6e5fdc818b821576d9947f664ecfda": "f3dcc7ece1f1d3af423f20dd3b3c3b1f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/44a1d6d6425a8034fbb2faf725461ac0b4c4d0": "41e697ab7569069e69a526f8922ab9fb",
".git/objects/dd/57257f09d4d17b7500adf71407d62e1de72812": "1ebff7c4c2d86b9cf4f06c94c306aef5",
".git/objects/df/1bf573f98fef4191b59c6ac90cd823803f607c": "3c512ffdc4e10feea8f69bd6390cef18",
".git/objects/e2/34c04ecb8b7cca19e40e6db324d32a99f0c00f": "6bc5b549b2476e82cd636ec74e7bf481",
".git/objects/e4/7063639884ef23a28fa1420799ca192f2b0be0": "913f788175c228bea2e0d0a4df6c6063",
".git/objects/e7/f8a85d2b8c8f06654e5d0541ddcaddad46772a": "e1d471e2bab99b9950e43c8dedfb5109",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c961780f1ed07ccb0b88663ffb5f2b6e7fbfb0": "cd35a706ee5403d2d7af983adc8e9ffe",
".git/objects/f0/d0798ba743b280854bb00526c599aea7a401bc": "e66d0732b47b9edd7b47dbb3c477cf58",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1b6380de719b13200ad4586d26547765af709b": "bb933957eeaaab469039aef46a3d8c19",
".git/objects/f3/9219f64b10e3b4d991631ef05378625d9d6df5": "204f6a9764a2f54460e23c1b75c86b10",
".git/objects/f6/4dd9de3dab59338f298f2fea2f4fcf5f79e54e": "8f190d8f51ea50200fbb650bbd803dd0",
".git/objects/fc/3c5046ba1c33cd733c105b3a16552815a16187": "e2422da8a73f214b6f763d79bbbe64de",
".git/objects/fe/41c6c29588e3df314a203e37369379250c1a8e": "e71eb098f15a257b0561cc57d856630f",
".git/objects/fe/ee9a020f822b6abf7b5bf52c9ee56cfdaa0806": "a5ad3268cebd76f0b57272d6478e41b5",
".git/objects/ff/3da0c6e569faa79fcad2df244c081b255b2f38": "bf189bbe331df45139e06cd45d03a4b3",
".git/refs/heads/master": "6f58b0e60bb8f8b7878b15a01d8d1d7f",
".git/refs/remotes/origin/master": "6f58b0e60bb8f8b7878b15a01d8d1d7f",
"assets/AssetManifest.bin": "df422beaf29b4187237336208ceb0780",
"assets/AssetManifest.bin.json": "23b24ec11acb32795661db77183d75c6",
"assets/AssetManifest.json": "6b9a3e6856a38fcd074646ef83339be4",
"assets/assets/images/favicon.png": "5caeff7c479166474f054ccca77b9d10",
"assets/assets/images/IMG_20240814_130505.jpg": "56a3b4b3b38141461f684810db87780f",
"assets/assets/images/IMG_20240815_175839.jpg": "38806146ea9c2aa66ea003fd36f34135",
"assets/assets/images/IMG_20240816_161719.jpg": "148e634c6cf2ea385102b267df65d5cc",
"assets/assets/images/profilepicture.jpg": "e06d33ffdea8c431fbc388e8fab72ef3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "148a935d4187b2f68928cd6f214a3cc0",
"assets/images/profilepicture.jpg": "e06d33ffdea8c431fbc388e8fab72ef3",
"assets/NOTICES": "ee3f977c7b430547161e0099ce92c4ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5caeff7c479166474f054ccca77b9d10",
"favicon_.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "92b7dab7f33ac0090e7fb3f50ed92b08",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "83828199ed5167ec810d79212cafcecc",
"/": "83828199ed5167ec810d79212cafcecc",
"main.dart.js": "3f89957b7b115a3c86880a2f1c7d6909",
"manifest.json": "04806a9544be521dc4e1d9eb4a9f6008",
"version.json": "1bbee426076f51e929be04395254b03e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
