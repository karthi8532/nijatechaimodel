'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dcd9c5198c6d825b0cc6d687f6f69fa1",
"version.json": "9f943616248b066eb8dfdd282afc6212",
"index.html": "49363df4ccc74a5b08221d42119d15c5",
"/": "49363df4ccc74a5b08221d42119d15c5",
"main.dart.js": "394ece44f381e3374d225f22c5dffc6d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8318b644168214660a169e61de37602e",
".git/config": "74411738254d40c618c7e28f79723e0f",
".git/objects/0d/7e3de608b18fb9b2f3426972821a0c1c755cb4": "3718c0f464d2e94cf5a99900cd6b1207",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/3b/1ef4854db2c14d9e47e868eed3e9bba3153020": "072c8a6af0300c0f7648f3ca7d5470d8",
".git/objects/03/56df19bea008b6c0db1907366ef11ed5c24130": "a6b5a31b5a35f42d83ba8a26d1a9d98a",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/3c/abd76be4b7f4460b69686548c2008fad4f4fc1": "2fa652d84d81065d596128e6f8bfa69a",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/34/dac64e0e8f954d38fcc62bd499fcb487699258": "63b6edba14729d3ff114caf10f4540eb",
".git/objects/5a/f5b72ff655a3c809cc4eb60e8df2a3b48a8ec4": "abf06f5cd1edc212fa5c78e614f5b13a",
".git/objects/d0/fd0acc4dbf9b2e843e1741594a1dd4a7fc5749": "e54b7fc9b972f114b244eec41f62a7ab",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/5d56b3562335a39f0f9182c191de02eb793219": "bf3715722771e646751094158e6bd365",
".git/objects/d1/05292bc526e00c4474a6beeae834315a42d5ac": "3dbe15e1c1887ceb972f87d45fe8768a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/8989cc9b81930f43e088a910a5cea153833902": "459db98da1b61026c43afb91ebdb62ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/d19b5c881ba9b126cdcb87e44622229c0ec8ed": "6252e9334adee58c9f4348e7491bfc4a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/bd1676d40b8cc2e06d983fce47e35bb13547db": "c308a65529207dbe21f9d458ccbd6a20",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/16/b692733d105783ecb671139b9b979933490e13": "08e9a7688f73e0a42f53bb1b30ed0da7",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7b/e0504d2eab6eb7f9da7a2adebbbe002941f124": "a10994bf56eb644d519b026797e0437a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/18844f6d24a051e978987f9f7420f5184d3a37": "db62440ca87854316e948a4327b4b03c",
".git/objects/86/37819ac1a256f12c0e23f082a7302666fb5e2a": "249292e89aada151566246fc3f97532a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/af45c850a07b8e389ed22edc660833f8038491": "6e36fd3819b52c6753105f365181f42d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/35f1462b6617381b0cdee66bcd8a2aa6436e8c": "5a242027a62cf37a96e043c50d520704",
".git/objects/91/9625d41f2f07a7ef8cc438a7991d2b0a59bfbd": "e07269bcc0a065b9825e37218c96ef1a",
".git/objects/62/8f60c1390028f1fe5cf14a4386d19302bccbe0": "14e724038d8e7433cb1f1c46a1769ae3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/0fd6a2d9f1dc63bc8442e5e4c23282d8849aef": "35ed95673367e00581a9ec3d4a08cdb5",
".git/objects/5b/f96c7cddae5b94cff8679b68ff11bfddd0d59a": "93af8d679de910591ccdc1511f78c0ed",
".git/objects/08/2816e74fafb52709507167e716964d7c9590df": "1c97c44963fc7f3e02976d7da0990aee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/e40474633b7c4dae349b90040dce20e38ef058": "f3b238eee123443e9dd74a03c8e8f996",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dc/81ff46d5cbb68ef93a2839884fd6df43bca92a": "d26f22edfb166474daaf0539ced2dc42",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/259fec9dd5000111b6f68a1c536f284f7be56c": "c9c364c012d6e08689b5bef41d2b9a55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/1185bb548ae28c60c75ceb3f4f9841f9abb7f2": "5d15f66060d78987c709afce3aae2c20",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/36ae15f437277a64641d15f97a6d4691abd7fd": "7dad05a5a811a6aae56d0a84c6cfb56c",
".git/objects/c3/ff7b94f527ece140db2c92dcc75317edf70aa8": "49b0bb2197aeedb181dd76097aa6d23d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f9/e14ef25b1c4fe62de6632be479cf63b079956c": "0a9d3a7be3ce938a897c40a63027f745",
".git/objects/e8/9d8d2847f0d7bc85290713251a5fcc132ce72b": "67e467fa390e080151386e16824435b5",
".git/objects/fa/ef75756921abb22a055f051b6d74e99fa5fd03": "33cdb61cec5e501e3b2c23b5f1e11b13",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/83/e7ef369a3ddc7a5f8148fe72bc0407c6f1882b": "abd65a999ac258a472fa74d600f3331d",
".git/objects/83/235ab68a14a3cc391e9ff5c65f9df341e49cb0": "de424f14ab6380aab6e5307c09ec9280",
".git/objects/1b/531472a59a5587e068b5db16b71b2a479d2bb6": "1f705ae05614319dea61c480411a587b",
".git/objects/77/015751dabe50c99c33bcb1393294e852efbecb": "fc8ac092e74921a15686f0c90f990111",
".git/objects/48/b73525df002ba5b38401b2536718dbda0ccb1b": "d02d0ec885840c6dff048bfc6f08a552",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/1563a35c83c728858982f97c50619ff4622cef": "c89f127965d8e7aacfa39bb3e9152945",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/8c/00317e72d967d0220edf64dc6e5a3e569b64a6": "d64d758c4d9f4d9ef85a9ac4c21715b9",
".git/objects/1d/c189e2befe160667d2372f7e255bd2215e543c": "7f0d0d8487951123d38634ff8e5d2a3f",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/25/f829e0d9a5a441e6a1773a81c897e62611eb0a": "ff000ad90d65b53219a18d1a10d45487",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b92ec6d23e320870eb8c89987eb93b52",
".git/logs/refs/heads/main": "c5a0029b7ea99a6b0ebc54d1feb88de9",
".git/logs/refs/remotes/origin/main": "770176022c9586e6366291cd1770171e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9bd1850ddff60fb9171307bed4e4d610",
".git/refs/remotes/origin/main": "9bd1850ddff60fb9171307bed4e4d610",
".git/index": "21a8c41fdc0e43d7060afcc1f744ae9d",
".git/COMMIT_EDITMSG": "337c4dc8f1120d67e61ab66786b09220",
"assets/AssetManifest.json": "c0f368a835c6f474b5c6c4666c73a926",
"assets/NOTICES": "d2da080dc0ab72cda02db3650d1df18f",
"assets/FontManifest.json": "24318b0993e324608d4127c3bd9f02c4",
"assets/AssetManifest.bin.json": "a8ddac6d00c5fb86dd985bd1a896e285",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4c8302c8ac89efd65c4704de4c8218b6",
"assets/fonts/MaterialIcons-Regular.otf": "ad808791052ea0c3d7f2baa1ec2d6e3a",
"assets/assets/images/card.png": "0c47ed23f865c69e971b07e809e953c0",
"assets/assets/images/cart.png": "46064dafe48d57ae46e6ad83b5cb544d",
"assets/assets/images/gradient_bg.png": "855e4a6c8459c6a1215d719e98658c04",
"assets/assets/images/van.png": "8db33037602c4185f74d581f574d4b10",
"assets/assets/images/eye.png": "7f02dd9cb5ce29c319848e46850690ea",
"assets/assets/images/nijalogo.png": "98582e285cb067381d8f6d15cbce01c6",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
