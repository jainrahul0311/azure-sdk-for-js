let nock = require('nock');

module.exports.hash = "3d44defc5584e632a9ae5dc8023c9abf";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '7b2c5336-e34a-4e98-adc3-152c7ca3b800',
  'x-ms-ests-server',
  '2.1.12381.24 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=AqxUWtRudW1EgB-pKrKn6cs; expires=Thu, 03-Mar-2022 21:58:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrS2cFStHmGN2rfTwGNhG_H0BVkUrZmjnSvctv4X-Fe_yeWZEqW1reppUmrmPfSL8TzIDgXDHge_MMyMxby5L0y4Xj0cgeT5tS3AF2bab8sDxp6zpcGWgOJbEPtDx4y8TmWxQIWaTCuutiO3RNNoTh5UmFNacIItLRhOfodaZAcgogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 21:58:43 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'fd18a876-9d6c-456a-a255-1d635a77a300',
  'x-ms-ests-server',
  '2.1.12381.24 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=AieZ0LWqL9xFrElthLuN9XA; expires=Thu, 03-Mar-2022 21:58:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrlUYRvkmDwbkfnEVrV0APecfcerQE6vWzppUZl5F0MLTvgImlPhEpStY9QALgNc4N68zt7_ILLnvlsX-6UvYHMaRdNBT-qqxdm5y0ZdtL_PfEo1h5gacTJjOJ78r0WUCkNh44Jf4rXE5UcGGB0epN0eZet96HxLWJgBvNE8ELlPwgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 21:58:43 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=b1ec8b99-3ffc-422b-af31-5bf6b4182195&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'df626620-7bd1-41ff-80a9-4d3fdf258e00',
  'x-ms-ests-server',
  '2.1.12381.24 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AkqNpnyiLOJApFzkLvqeWG4; expires=Thu, 03-Mar-2022 21:58:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 21:58:43 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-layout/analyzeResults/baef7e67-00b5-413d-b631-3314a793e6ae?api-version=2022-01-30-preview',
  'x-envoy-upstream-service-time',
  '1155',
  'apim-request-id',
  'baef7e67-00b5-413d-b631-3314a793e6ae',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 21:58:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/baef7e67-00b5-413d-b631-3314a793e6ae')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T21:58:44Z","lastUpdatedDateTime":"2022-02-01T21:58:44Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '76',
  'apim-request-id',
  '4d9f8125-d4b0-4f2b-a881-3c9cad3954a5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 21:58:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/baef7e67-00b5-413d-b631-3314a793e6ae')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T21:58:44Z","lastUpdatedDateTime":"2022-02-01T21:58:44Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '92',
  'apim-request-id',
  '23ac7b19-51e3-4cfa-873f-feefee07d15a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 21:58:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/baef7e67-00b5-413d-b631-3314a793e6ae')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2022-02-01T21:58:44Z","lastUpdatedDateTime":"2022-02-01T21:58:49Z","analyzeResult":{"apiVersion":"2022-01-30-preview","modelId":"prebuilt-layout","stringIndexType":"textElements","content":"O\nContoso\nContoso\n123 Main Street\nRedmond, WA 98052\n123-456-7890\n6/10/2019 13:59\nSales Associate: Paul\n--\n1 Surface Pro 6\n256GB / Intel Core i5 /\n8GB RAM (Black)\n999.00\n1 SurfacePen\n---\n99.99\nSub-Total\n-\n1098.99\nTax\n$ 104.40\nTotal\n1203.39","pages":[{"pageNumber":1,"angle":0.1574,"width":1688,"height":3000,"unit":"pixel","words":[{"content":"O","boundingBox":[412,241,503,241,503,422,412,422],"confidence":0.5,"span":{"offset":0,"length":1}},{"content":"Contoso","boundingBox":[626,279,1033,277,1043,388,623,399],"confidence":0.998,"span":{"offset":2,"length":7}},{"content":"Contoso","boundingBox":[328,591,499,601,495,652,325,642],"confidence":0.97,"span":{"offset":10,"length":7}},{"content":"123","boundingBox":[324,691,383,692,380,750,321,748],"confidence":0.996,"span":{"offset":18,"length":3}},{"content":"Main","boundingBox":[395,693,497,695,495,753,392,751],"confidence":0.994,"span":{"offset":22,"length":4}},{"content":"Street","boundingBox":[509,695,644,696,642,754,506,753],"confidence":1,"span":{"offset":27,"length":6}},{"content":"Redmond,","boundingBox":[315,793,521,798,521,858,313,854],"confidence":0.994,"span":{"offset":34,"length":8}},{"content":"WA","boundingBox":[532,798,598,798,598,857,532,858],"confidence":0.998,"span":{"offset":43,"length":2}},{"content":"98052","boundingBox":[609,798,750,795,751,848,610,856],"confidence":0.999,"span":{"offset":46,"length":5}},{"content":"123-456-7890","boundingBox":[309,1002,618,1012,617,1069,308,1064],"confidence":0.994,"span":{"offset":52,"length":12}},{"content":"6/10/2019","boundingBox":[302,1220,500,1223,499,1293,303,1290],"confidence":0.996,"span":{"offset":65,"length":9}},{"content":"13:59","boundingBox":[514,1223,628,1221,626,1296,513,1293],"confidence":0.999,"span":{"offset":75,"length":5}},{"content":"Sales","boundingBox":[299,1335,411,1337,412,1395,299,1393],"confidence":0.994,"span":{"offset":81,"length":5}},{"content":"Associate:","boundingBox":[423,1337,644,1339,644,1397,423,1396],"confidence":0.994,"span":{"offset":87,"length":10}},{"content":"Paul","boundingBox":[656,1340,768,1340,768,1397,656,1397],"confidence":0.99,"span":{"offset":98,"length":4}},{"content":"--","boundingBox":[1070,1479,1099,1479,1099,1486,1070,1486],"confidence":0.981,"span":{"offset":103,"length":2}},{"content":"1","boundingBox":[335,1560,358,1560,357,1621,334,1621],"confidence":0.994,"span":{"offset":106,"length":1}},{"content":"Surface","boundingBox":[370,1560,542,1562,541,1621,369,1621],"confidence":0.997,"span":{"offset":108,"length":7}},{"content":"Pro","boundingBox":[554,1562,628,1562,628,1621,553,1621],"confidence":0.99,"span":{"offset":116,"length":3}},{"content":"6","boundingBox":[640,1562,673,1562,673,1621,639,1621],"confidence":0.995,"span":{"offset":120,"length":1}},{"content":"256GB","boundingBox":[369,1669,504,1671,504,1738,369,1735],"confidence":0.996,"span":{"offset":122,"length":5}},{"content":"/","boundingBox":[517,1671,531,1671,531,1738,518,1738],"confidence":0.986,"span":{"offset":128,"length":1}},{"content":"Intel","boundingBox":[544,1671,643,1671,643,1740,545,1739],"confidence":0.967,"span":{"offset":130,"length":5}},{"content":"Core","boundingBox":[657,1671,756,1671,756,1741,657,1740],"confidence":0.994,"span":{"offset":136,"length":4}},{"content":"i5","boundingBox":[769,1671,805,1670,805,1741,769,1741],"confidence":0.994,"span":{"offset":141,"length":2}},{"content":"/","boundingBox":[819,1670,848,1670,848,1741,819,1741],"confidence":0.98,"span":{"offset":144,"length":1}},{"content":"8GB","boundingBox":[367,1784,447,1784,446,1851,367,1850],"confidence":0.996,"span":{"offset":146,"length":3}},{"content":"RAM","boundingBox":[461,1784,557,1783,555,1852,460,1851],"confidence":0.998,"span":{"offset":150,"length":3}},{"content":"(Black)","boundingBox":[570,1783,728,1782,726,1856,569,1853],"confidence":0.994,"span":{"offset":154,"length":7}},{"content":"999.00","boundingBox":[976,1793,1126,1796,1125,1856,975,1852],"confidence":0.994,"span":{"offset":162,"length":6}},{"content":"1","boundingBox":[320,2018,343,2018,346,2082,323,2083],"confidence":0.945,"span":{"offset":169,"length":1}},{"content":"SurfacePen","boundingBox":[356,2017,624,2011,624,2077,359,2082],"confidence":0.995,"span":{"offset":171,"length":10}},{"content":"---","boundingBox":[290,2169,336,2168,336,2180,291,2181],"confidence":0.177,"span":{"offset":182,"length":3}},{"content":"99.99","boundingBox":[1004,2030,1130,2027,1131,2089,1005,2092],"confidence":0.998,"span":{"offset":186,"length":5}},{"content":"Sub-Total","boundingBox":[471,2244,692,2246,691,2309,471,2304],"confidence":0.991,"span":{"offset":192,"length":9}},{"content":"-","boundingBox":[1094,2174,1100,2174,1100,2184,1095,2184],"confidence":0.911,"span":{"offset":202,"length":1}},{"content":"1098.99","boundingBox":[964,2261,1134,2254,1136,2314,967,2321],"confidence":0.997,"span":{"offset":204,"length":7}},{"content":"Tax","boundingBox":[572,2357,653,2357,652,2416,571,2415],"confidence":0.998,"span":{"offset":212,"length":3}},{"content":"$","boundingBox":[939,2374,965,2373,967,2438,941,2439],"confidence":0.984,"span":{"offset":216,"length":1}},{"content":"104.40","boundingBox":[978,2373,1127,2371,1130,2433,980,2438],"confidence":1,"span":{"offset":218,"length":6}},{"content":"Total","boundingBox":[545,2595,662,2588,666,2646,548,2653],"confidence":0.931,"span":{"offset":225,"length":5}},{"content":"1203.39","boundingBox":[958,2594,1126,2613,1118,2674,951,2653],"confidence":0.996,"span":{"offset":231,"length":7}}],"selectionMarks":[],"lines":[{"content":"O","boundingBox":[382,243,521,241,526,422,386,420],"spans":[{"offset":0,"length":1}]},{"content":"Contoso","boundingBox":[622,278,1058,276,1060,391,622,398],"spans":[{"offset":2,"length":7}]},{"content":"Contoso","boundingBox":[327,590,500,600,497,651,325,641],"spans":[{"offset":10,"length":7}]},{"content":"123 Main Street","boundingBox":[321,690,645,695,644,754,321,749],"spans":[{"offset":18,"length":15}]},{"content":"Redmond, WA 98052","boundingBox":[313,793,752,793,752,856,313,858],"spans":[{"offset":34,"length":17}]},{"content":"123-456-7890","boundingBox":[308,1002,618,1010,616,1069,307,1062],"spans":[{"offset":52,"length":12}]},{"content":"6/10/2019 13:59","boundingBox":[301,1219,629,1221,628,1295,301,1291],"spans":[{"offset":65,"length":15}]},{"content":"Sales Associate: Paul","boundingBox":[298,1334,770,1339,770,1397,298,1393],"spans":[{"offset":81,"length":21}]},{"content":"--","boundingBox":[1066,1478,1115,1478,1115,1486,1066,1486],"spans":[{"offset":103,"length":2}]},{"content":"1 Surface Pro 6","boundingBox":[332,1560,675,1561,674,1621,331,1619],"spans":[{"offset":106,"length":15}]},{"content":"256GB / Intel Core i5 /","boundingBox":[366,1669,847,1670,847,1741,366,1736],"spans":[{"offset":122,"length":23}]},{"content":"8GB RAM (Black)","boundingBox":[366,1782,731,1782,730,1855,366,1853],"spans":[{"offset":146,"length":15}]},{"content":"999.00","boundingBox":[974,1793,1128,1797,1127,1856,973,1853],"spans":[{"offset":162,"length":6}]},{"content":"1 SurfacePen","boundingBox":[319,2017,624,2010,625,2075,321,2082],"spans":[{"offset":169,"length":12}]},{"content":"---","boundingBox":[290,2168,357,2167,358,2179,290,2181],"spans":[{"offset":182,"length":3}]},{"content":"99.99","boundingBox":[1002,2030,1132,2027,1131,2089,1004,2092],"spans":[{"offset":186,"length":5}]},{"content":"Sub-Total","boundingBox":[471,2243,694,2245,693,2308,471,2304],"spans":[{"offset":192,"length":9}]},{"content":"-","boundingBox":[1093,2174,1111,2174,1111,2183,1093,2184],"spans":[{"offset":202,"length":1}]},{"content":"1098.99","boundingBox":[963,2261,1135,2254,1135,2314,967,2321],"spans":[{"offset":204,"length":7}]},{"content":"Tax","boundingBox":[566,2357,655,2357,653,2416,566,2413],"spans":[{"offset":212,"length":3}]},{"content":"$ 104.40","boundingBox":[937,2374,1129,2371,1129,2430,941,2439],"spans":[{"offset":216,"length":8}]},{"content":"Total","boundingBox":[543,2595,666,2588,667,2646,547,2653],"spans":[{"offset":225,"length":5}]},{"content":"1203.39","boundingBox":[956,2594,1125,2613,1119,2674,951,2652],"spans":[{"offset":231,"length":7}]}],"spans":[{"offset":0,"length":238}]}],"tables":[{"rowCount":5,"columnCount":4,"cells":[{"rowIndex":0,"columnIndex":0,"rowSpan":1,"columnSpan":3,"content":"8GB RAM (Black)","boundingRegions":[{"pageNumber":1,"boundingBox":[270,1764,804,1766,804,1935,270,1934]}],"spans":[{"offset":146,"length":15}]},{"rowIndex":0,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"999.00","boundingRegions":[{"pageNumber":1,"boundingBox":[804,1766,1148,1770,1148,1935,804,1935]}],"spans":[{"offset":162,"length":6}]},{"rowIndex":1,"columnIndex":0,"rowSpan":1,"columnSpan":3,"content":"1 SurfacePen","boundingRegions":[{"pageNumber":1,"boundingBox":[270,1934,804,1935,803,2173,271,2175]}],"spans":[{"offset":169,"length":12}]},{"rowIndex":1,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"99.99","boundingRegions":[{"pageNumber":1,"boundingBox":[804,1935,1148,1935,1148,2180,803,2173]}],"spans":[{"offset":186,"length":5}]},{"rowIndex":2,"columnIndex":0,"rowSpan":1,"columnSpan":3,"content":"--- Sub-Total","boundingRegions":[{"pageNumber":1,"boundingBox":[271,2175,803,2173,803,2343,271,2338]}],"spans":[{"offset":182,"length":3},{"offset":192,"length":9}]},{"rowIndex":2,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"- 1098.99","boundingRegions":[{"pageNumber":1,"boundingBox":[803,2173,1148,2180,1148,2341,803,2343]}],"spans":[{"offset":202,"length":9}]},{"rowIndex":3,"columnIndex":0,"rowSpan":1,"columnSpan":3,"content":"Tax","boundingRegions":[{"pageNumber":1,"boundingBox":[271,2338,803,2343,803,2517,271,2514]}],"spans":[{"offset":212,"length":3}]},{"rowIndex":3,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"$ 104.40","boundingRegions":[{"pageNumber":1,"boundingBox":[803,2343,1148,2341,1148,2513,803,2517]}],"spans":[{"offset":216,"length":8}]},{"rowIndex":4,"columnIndex":0,"rowSpan":1,"columnSpan":3,"content":"Total","boundingRegions":[{"pageNumber":1,"boundingBox":[271,2514,803,2517,803,2673,271,2680]}],"spans":[{"offset":225,"length":5}]},{"rowIndex":4,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"1203.39","boundingRegions":[{"pageNumber":1,"boundingBox":[803,2517,1148,2513,1148,2682,803,2673]}],"spans":[{"offset":231,"length":7}]}],"boundingRegions":[{"pageNumber":1,"boundingBox":[279,1756,1156,1753,1157,2695,280,2696]}],"spans":[{"offset":146,"length":92}]}],"styles":[]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '327',
  'apim-request-id',
  'a1cd3f49-9589-47b8-98f9-676e6a6d82b1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 21:58:50 GMT'
]);