module.exports = {
  api_gateway_succesful_request_no_ip: `2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Verifying Usage Plan for request: f4a8e01b-49f6-11e7-8898-f1161a8a9a54. API Key:  API Stage: oo8kadh853/Test
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) API Key  authorized because method \'ANY /{resource+}\' does not require API Key. Request will not contribute to throttle or quota limits
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Usage Plan check succeeded for API Key  and API Stage oo8kadh853/Test
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Starting execution for request: f4a8e01b-49f6-11e7-8898-f1161a8a9a54
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) HTTP Method: GET, Resource Path: /all_state
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method request path: {resource=all_state}
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method request query string: {}
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method request headers: {Accept=*/*, CloudFront-Viewer-Country=NO, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, origin=https://62a2yvqm2fsec02pycycyd7gvm727q.ext-twitch.tv, CloudFront-Is-Mobile-Viewer=false, Referer=https://62a2yvqm2fsec02pycycyd7gvm727q.ext-twitch.tv/62a2yvqm2fsec02pycycyd7gvm727q/0.1.1/fa17edfff7a459cbbc5da74d827f0c5d/viewer.html, User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=ext.muxy.io, Accept-Encoding=gzip, deflate, br, x-muxy-gdi-aws=62a2yvqm2fsec02pycycyd7gvm727q eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTY2NzI4NjUsIm9wYXF1ZV91c2VyX2lkIjoiVVFCUWVPRU9XQzlCdHExdlJGS2RNIiwiY2hhbm5lbF9pZCI6IjI1NTUzMzkxIiwicm9sZSI6InZpZXdlciIsInB1YnN1Yl9wZXJtcyI6eyJsaXN0ZW4iOlsiYnJvYWRjYXN0Iiwid2hpc3Blci1VUUJRZU9FT1dDOUJ0cTF2UkZLZE0iXX19.Z7TAdCHntioiH4mzi3tWx3PmdVn-JOzw4uuBFmVwvmw, X-Forwarded-Port=443, X-Amzn-Trace- [TRUNCATED]
2017-06-05T13:57:47.369Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method request body before transformations:
2017-06-05T13:57:47.370Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Endpoint request URI: https://lambda.us-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-west-2:919586034543:function:extension_state/invocations
2017-06-05T13:57:47.370Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Endpoint request headers: {x-amzn-lambda-integration-tag=f4a8e01b-49f6-11e7-8898-f1161a8a9a54, Authorization=****************************************************************************************************************************************************************************************************************************************************************************************************************************************afc190, X-Amz-Date=20170605T135747Z, x-amzn-apigateway-api-id=oo8kadh853, X-Amz-Source-Arn=arn:aws:execute-api:us-west-2:919586034543:oo8kadh853/Test/ANY/{resource+}, Accept=application/json, User-Agent=AmazonAPIGateway_oo8kadh853, X-Amz-Security-Token=FQoDYXdzEBYaDKivKsqrf3ZgEyqqMyK3A3U81jbjneXSJ9dehFQEgOQCuObBuepE5rf/T3Dd689s8SPSf+kcM7LQPFan7KRpyc9UAbKfs+FTpGtUJA6kUMPf4aUjjnqNxl+wJ5oj1f6j4paS8jAbfN/6APy9YVizt3RWRD50DDQ4snmBntzNI31XBhhAGdWjphZMeijkqoqbz5ykUGUCFbSmp/DR/iaQPmw8kjfHgYHV1nMexMjsGoYp+bS5M2u06j93jY/3Zs/ZTYarD0CR1L9E92285i8iYyQLR2fYOl84y1Q9L6JPmbmAv40snUa43m4zKIj7Pd0bK8 [TRUNCATED]
2017-06-05T13:57:47.370Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Endpoint request body after transformations: {"resource":"/{resource+}","path":"/all_state","httpMethod":"GET","headers":{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"nb-NO","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"NO","Host":"ext.muxy.io","origin":"https://62a2yvqm2fsec02pycycyd7gvm727q.ext-twitch.tv","Referer":"https://62a2yvqm2fsec02pycycyd7gvm727q.ext-twitch.tv/62a2yvqm2fsec02pycycyd7gvm727q/0.1.1/fa17edfff7a459cbbc5da74d827f0c5d/viewer.html","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063","Via":"2.0 1b61c3f085e80ef7e1cd6e9ac0cdfa77.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"GAv72EcJNaqTVQqpLm5OSwbQ7Ob1INMa1BzTDFREa5nnKqAq_5zTMA==","X-Amzn-Trace-Id":"Root=1-5935635b-47cdf47c6e1218c839de9a54","X-Forwarded-For [TRUNCATED]
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Endpoint response body before transformations: {"body": "{\\"viewer\\": \\"{}\\", \\"channel\\": \\"{\\\\\\"data_fetch\\\\\\": {\\\\\\"pretzel_track_update\\\\\\": {\\\\\\"track\\\\\\": {\\\\\\"stores\\\\\\": {\\\\\\"spotify\\\\\\": \\\\\\"http://spoti.fi/GXeYeL\\\\\\", \\\\\\"apple\\\\\\": \\\\\\"https://itunes.apple.com/us/album/the-way-home/id512985308?app=music&at=1001lwEj&ct=pretzel&i=512985409\\\\\\", \\\\\\"youtube\\\\\\": \\\\\\"https://www.youtube.com/watch?v=NHu4ruTXcno&index=8&list=PL466543B9D7CFD03E\\\\\\", \\\\\\"bandcamp\\\\\\": \\\\\\"http://bit.ly/zMZA7n\\\\\\", \\\\\\"amazon\\\\\\": \\\\\\"https://www.amazon.com/gp/product/B007NVIZQU/ref=dm_dp_trk8?ie=UTF8&qid=1332609858&sr=8-1&tag=pretze01-20\\\\\\", \\\\\\"google_play\\\\\\": \\\\\\"https://play.google.com/store/music/album?id=Bpfpzxmh7qq5jdn2nqonixkn4vy&tid=song-Tnl5hmwuukx77lsugs5igvyt3qu\\\\\\", \\\\\\"soundcloud\\\\\\": \\\\\\"https://soundcloud.com/approachingnirvana/the-way-home?in=approachingnirvana/sets/blocking-the-sky\\\\\\"}, \\\\\\"trackName\\\\\\": \\\\\\"The Way Home\\\\\\", \\\\\\"timestamp\\\\\\": \\\\\\"2017-06-05 13:57:40 UTC\\\\\\", \\\\\\"token\\\\\\": \\\\\\"2GHg6b [TRUNCATED]
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Endpoint response headers: {x-amzn-Remapped-Content-Length=0, x-amzn-RequestId=f4aa1876-49f6-11e7-920d-a5d0f98cfe9a, Connection=keep-alive, Content-Length=5071, Date=Mon, 05 Jun 2017 13:57:46 GMT, X-Amzn-Trace-Id=root=1-5935635b-aeb068b7465f18567ae3dd16;sampled=0, Content-Type=application/json}
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method response body after transformations: {"viewer": "{}", "channel": "{\\"data_fetch\\": {\\"pretzel_track_update\\": {\\"track\\": {\\"stores\\": {\\"spotify\\": \\"http://spoti.fi/GXeYeL\\", \\"apple\\": \\"https://itunes.apple.com/us/album/the-way-home/id512985308?app=music&at=1001lwEj&ct=pretzel&i=512985409\\", \\"youtube\\": \\"https://www.youtube.com/watch?v=NHu4ruTXcno&index=8&list=PL466543B9D7CFD03E\\", \\"bandcamp\\": \\"http://bit.ly/zMZA7n\\", \\"amazon\\": \\"https://www.amazon.com/gp/product/B007NVIZQU/ref=dm_dp_trk8?ie=UTF8&qid=1332609858&sr=8-1&tag=pretze01-20\\", \\"google_play\\": \\"https://play.google.com/store/music/album?id=Bpfpzxmh7qq5jdn2nqonixkn4vy&tid=song-Tnl5hmwuukx77lsugs5igvyt3qu\\", \\"soundcloud\\": \\"https://soundcloud.com/approachingnirvana/the-way-home?in=approachingnirvana/sets/blocking-the-sky\\"}, \\"trackName\\": \\"The Way Home\\", \\"timestamp\\": \\"2017-06-05 13:57:40 UTC\\", \\"token\\": \\"2GHg6bz\\", \\"albumName\\": \\"Blocking the Sky\\", \\"artistName\\": \\"Approaching Nirvana\\", \\"albumArt\\": \\"https://cdn.pre [TRUNCATED]
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method response headers: {Access-Control-Allow-Origin=*, Access-Control-Allow-Headers=X-Muxy-Token, X-Muxy-Extension-Id, X-Amzn-Trace-Id=sampled=0;root=1-5935635b-aeb068b7465f18567ae3dd16}
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Successfully completed execution
2017-06-05T13:57:47.390Z (f4a8e01b-49f6-11e7-8898-f1161a8a9a54) Method completed with status: 200
`,
  api_gateway_successful_request: `2017-06-05T17:52:57.673Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Starting authorizer: elkw5b for request: cf101403-4a17-11e7-935f-35dfc4618b7d
2017-06-05T17:52:57.673Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Incoming identity: *********************************************************************************************************************************************************************************************************************************************************************************************************************************************I1BUdE
2017-06-05T17:52:57.674Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request URI: https://lambda.us-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-west-2:919586034543:function:ExtensionGatewayAuthorizer/invocations
2017-06-05T17:52:57.674Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request headers: {x-amzn-lambda-integration-tag=cf101403-4a17-11e7-935f-35dfc4618b7d, Authorization=****************************************************************************************************************************************************************************************************************************************************************************************************************************************9081d0, X-Amz-Date=20170605T175257Z, x-amzn-apigateway-api-id=oo8kadh853, X-Amz-Source-Arn=arn:aws:execute-api:us-west-2:919586034543:oo8kadh853/authorizers/elkw5b, Accept=application/json, User-Agent=AmazonAPIGateway_oo8kadh853, X-Amz-Security-Token=FQoDYXdzEBoaDK2AeMcZ6WHkJFZgyyK3A+DIGJgGTl6dnL9mTwVuJIyod4nUr9Mc0DmEKFy9WWvXzMtrth9NMdd4KlzM0efT90Eat+PLrWXbHpWHlOdTtx/XjNXIV8g4KjqEg4z8GukznxjhcHyMOmoyHjJ2I1lWT2hLzv4Yv2LVGQCNgTn3u8IyNrzNCBO0z5kFibboCo4HkurW6lt5FRZgBV0Le+v1nl+QcCDjEMNksYuHzkxSW6TUME/wi11J5mZFI33p1XJ8mSjVg1U2XpcR7agtE6twd8u2Vo438lRj4uogkXJka4QqoNR2SFIGT/PzGVmjkCLAAy62 [TRUNCATED]
2017-06-05T17:52:57.674Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request body after transformations: {"type":"TOKEN","authorizationToken":"24u62kim5mn0slhwigdt7v4ybkwef5 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTY2ODY5NzYsIm9wYXF1ZV91c2VyX2lkIjoiVWtvVEl3UWlaWnN4MDNTbFU5dF95IiwiY2hhbm5lbF9pZCI6IjcyMzY2OTIiLCJyb2xlIjoidmlld2VyIiwicHVic3ViX3Blcm1zIjp7Imxpc3RlbiI6WyJicm9hZGNhc3QiLCJ3aGlzcGVyLVVrb1RJd1FpWlpzeDAzU2xVOXRfeSJdfX0.V6iFHSvV2t6zJ8GysXqSR4c7lRrL0OR2MG7mDI1BUdE","methodArn":"arn:aws:execute-api:us-west-2:919586034543:oo8kadh853/Test/GET/user_info"}
2017-06-05T17:52:57.700Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Authorizer result body before parsing: {"policyDocument": {"Version": "2012-10-17", "Statement": [{"Action": "execute-api:Invoke", "Resource": ["arn:aws:execute-api:us-west-2:919586034543:oo8kadh853/Test/*/*"], "Effect": "Allow"}]}, "context": {"opaque_user_id": "UkoTIwQiZZsx03SlU9t_y", "channel_id": "7236692", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTY2ODY5NzYsIm9wYXF1ZV91c2VyX2lkIjoiVWtvVEl3UWlaWnN4MDNTbFU5dF95IiwiY2hhbm5lbF9pZCI6IjcyMzY2OTIiLCJyb2xlIjoidmlld2VyIiwicHVic3ViX3Blcm1zIjp7Imxpc3RlbiI6WyJicm9hZGNhc3QiLCJ3aGlzcGVyLVVrb1RJd1FpWlpzeDAzU2xVOXRfeSJdfX0.V6iFHSvV2t6zJ8GysXqSR4c7lRrL0OR2MG7mDI1BUdE", "role": "viewer", "extension_id": "24u62kim5mn0slhwigdt7v4ybkwef5", "extension_secret": "tgJLRBtM4mNphPE+5b9agV8qQ66vSMeVEW9GVVlFgns=", "allowed_resources": ""}, "principalId": "UkoTIwQiZZsx03SlU9t_y|24u62kim5mn0slhwigdt7v4ybkwef5"}
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Using valid authorizer policy for principal: **********************************************bkwef5
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Successfully completed authorizer execution
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Verifying Usage Plan for request: cf101403-4a17-11e7-935f-35dfc4618b7d. API Key:  API Stage: oo8kadh853/Test
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) API Key  authorized because method 'ANY /{resource+}' does not require API Key. Request will not contribute to throttle or quota limits
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Usage Plan check succeeded for API Key  and API Stage oo8kadh853/Test
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Starting execution for request: cf101403-4a17-11e7-935f-35dfc4618b7d
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) HTTP Method: GET, Resource Path: /user_info
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method request path: {resource=user_info}
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method request query string: {}
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method request headers: {Accept=*/*, CloudFront-Viewer-Country=PL, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, origin=null, CloudFront-Is-Mobile-Viewer=false, User-Agent=Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=ext.muxy.io, Accept-Encoding=gzip, deflate, sdch, br, x-muxy-gdi-aws=24u62kim5mn0slhwigdt7v4ybkwef5 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTY2ODY5NzYsIm9wYXF1ZV91c2VyX2lkIjoiVWtvVEl3UWlaWnN4MDNTbFU5dF95IiwiY2hhbm5lbF9pZCI6IjcyMzY2OTIiLCJyb2xlIjoidmlld2VyIiwicHVic3ViX3Blcm1zIjp7Imxpc3RlbiI6WyJicm9hZGNhc3QiLCJ3aGlzcGVyLVVrb1RJd1FpWlpzeDAzU2xVOXRfeSJdfX0.V6iFHSvV2t6zJ8GysXqSR4c7lRrL0OR2MG7mDI1BUdE, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-59359a79-0d29389d32bb11c4196221e9, Via=2.0 4959f7132ae6b3fce773418bff3f76bd.cloudfront.net (CloudFront), X-Amz-Cf-Id=mqElzSGuAklWw4HNEi7hX8hV1GHzH02lRHYrdxpe3Hl_ALBsl2z3pw==, X-Forwarded-For=8 [TRUNCATED]
2017-06-05T17:52:57.701Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method request body before transformations:
2017-06-05T17:52:57.702Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request URI: https://lambda.us-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-west-2:919586034543:function:extension_state/invocations
2017-06-05T17:52:57.702Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request headers: {x-amzn-lambda-integration-tag=cf101403-4a17-11e7-935f-35dfc4618b7d, Authorization=****************************************************************************************************************************************************************************************************************************************************************************************************************************************14ee93, X-Amz-Date=20170605T175257Z, x-amzn-apigateway-api-id=oo8kadh853, X-Amz-Source-Arn=arn:aws:execute-api:us-west-2:919586034543:oo8kadh853/Test/ANY/{resource+}, Accept=application/json, User-Agent=AmazonAPIGateway_oo8kadh853, X-Amz-Security-Token=FQoDYXdzEBoaDK2AeMcZ6WHkJFZgyyK3A+DIGJgGTl6dnL9mTwVuJIyod4nUr9Mc0DmEKFy9WWvXzMtrth9NMdd4KlzM0efT90Eat+PLrWXbHpWHlOdTtx/XjNXIV8g4KjqEg4z8GukznxjhcHyMOmoyHjJ2I1lWT2hLzv4Yv2LVGQCNgTn3u8IyNrzNCBO0z5kFibboCo4HkurW6lt5FRZgBV0Le+v1nl+QcCDjEMNksYuHzkxSW6TUME/wi11J5mZFI33p1XJ8mSjVg1U2XpcR7agtE6twd8u2Vo438lRj4uogkXJka4QqoNR2SFIGT/PzGVmjkCLAAy [TRUNCATED]
2017-06-05T17:52:57.702Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint request body after transformations: {"resource":"/{resource+}","path":"/user_info","httpMethod":"GET","headers":{"Accept":"*/*","Accept-Encoding":"gzip, deflate, sdch, br","Accept-Language":"pl-PL,pl;q=0.8,en-US;q=0.6,en;q=0.4","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"PL","Host":"ext.muxy.io","origin":"null","User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36","Via":"2.0 4959f7132ae6b3fce773418bff3f76bd.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"mqElzSGuAklWw4HNEi7hX8hV1GHzH02lRHYrdxpe3Hl_ALBsl2z3pw==","X-Amzn-Trace-Id":"Root=1-59359a79-0d29389d32bb11c4196221e9","X-Forwarded-For":"89.64.28.236, 54.239.171.97","X-Forwarded-Port":"443","X-Forwarded-Proto":"https","x-muxy-gdi-aws":"24u62kim5mn0slhwigdt7v4ybkwef5 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ [TRUNCATED]
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint response body before transformations: {"body": "{\"ip_address\": \"89.64.28.236\"}", "headers": {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "X-Muxy-Token, X-Muxy-Extension-Id"}, "statusCode": 200}
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Endpoint response headers: {x-amzn-Remapped-Content-Length=0, x-amzn-RequestId=cf154484-4a17-11e7-aa36-15f3676da0c2, Connection=keep-alive, Content-Length=183, Date=Mon, 05 Jun 2017 17:52:57 GMT, X-Amzn-Trace-Id=root=1-59359a79-3f2c1fd185751bfd75aaa3b7;sampled=0, Content-Type=application/json}
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method response body after transformations: {"ip_address": "89.64.28.236"}
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method response headers: {Access-Control-Allow-Origin=*, Access-Control-Allow-Headers=X-Muxy-Token, X-Muxy-Extension-Id, X-Amzn-Trace-Id=sampled=0;root=1-59359a79-3f2c1fd185751bfd75aaa3b7}
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Successfully completed execution
2017-06-05T17:52:57.738Z (cf101403-4a17-11e7-935f-35dfc4618b7d) Method completed with status: 200
`,
  api_gateway_error_request: `2016-10-01T10:55:36.315Z Verifying Usage Plan for request: 9537d573-87c5-11e6-b3e4-6f23bc206746. API Key: **********************************bMZHBg API Stage: ulhoxnm2x2/dev
2016-10-01T10:55:36.325Z Usage Plan check succeeded for API Key **********************************bMZHBg and API Stage ulhoxnm2x2/dev
2016-10-01T10:55:36.326Z Starting execution for request: 9537d573-87c5-11e6-b3e4-6f23bc206746
2016-10-01T10:55:36.326Z HTTP Method: POST, Resource Path: /repos/hello
2016-10-01T10:55:36.326Z API Key: **********************************bMZHBg
2016-10-01T10:55:36.326Z Method request path: {id=hello}
2016-10-01T10:55:36.326Z Method request query string: {}
2016-10-01T10:55:36.326Z Method request headers: {Origin=chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop, Accept=*/*, CloudFront-Viewer-Country=IL, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=ulhoxnm2x2.execute-api.us-east-1.amazonaws.com, Accept-Encoding=gzip, deflate, br, X-Forwarded-Port=443, Via=1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront), x-api-key=**********************************bMZHBg, X-Amz-Cf-Id=Qr82GnPkKddXmNMLRFpOGpA_EH6ajYrk-AapcXBqAKMqVHPYdzYfaQ==, X-Forwarded-For=199.203.61.109, 54.240.145.57, Postman-Token=7ff039cb-f290-0368-5285-db273d3ac48f, Accept-Language=en-US,en;q=0.8,he;q=0.6, CloudFront-Is-Desktop-Viewer=true}
2016-10-01T10:55:36.326Z Method request body before transformations: null
2016-10-01T10:55:36.327Z Endpoint request URI: https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-east-1:<account id>:function:SampleProject_getRepositories/invocations
2016-10-01T10:55:36.327Z Endpoint request headers: {x-amzn-lambda-integration-tag=9537d573-87c5-11e6-b3e4-6f23bc206746, Authorization=*******************************************************************************************************************************************************************************************************************************************************************************************************e02aab, X-Amz-Date=20161001T105536Z, x-amzn-apigateway-api-id=ulhoxnm2x2, Accept=application/json, User-Agent=AmazonAPIGateway_ulhoxnm2x2, X-Amz-Security-Token=AgoGb3JpZ2luEKf//////////wEaCXVzLWVhc3QtMSKAAkeM6Ff9ixkpyS2Ut1zP2xnQrVaWgwMggXKCfp3bkjFoWm1Qb0tJHsFEu2E6YWcms7s7d/d7fLCMQloRTB9gETgUv47qmdg2wHthYmj3Mx61n3NelG2POq3N+JTcyA1fmr3YTGivlmj8l4xHTNVdqi1t9cT+LekxCGcTnKz1FXbNNyjm2RKq5VitNl4Xj2VWcFMUgBOnopxZxruFVPji9trjL2rxLuX2/b2dP1vrywzqFGUwHXMp8mYjRfHqB2/ssnGlJcrsIKsCYsNqe09iVTcbGsFzmLMysCRmrdisc+MEyM7FAOQ1CftYMBbUVPEm/YT+dMzBHjr4K9jfHOLCqhwqgAIIXBAAGgw2MDc0MDkyMjQ4ODUiDEMzHr1Ir6rewavoQyrdAcxjuWjCHbQBliVp5OKAhwUb [TRUNCATED]
2016-10-01T10:55:36.327Z Endpoint request body after transformations: {
   "method": "POST",
   "body" : {},
   "headers": {
          "Accept": "*\/*" ,
          "Accept-Encoding": "gzip, deflate, br" ,
          "Accept-Language": "en-US,en;q=0.8,he;q=0.6" ,
          "CloudFront-Forwarded-Proto": "https" ,
          "CloudFront-Is-Desktop-Viewer": "true" ,
          "CloudFront-Is-Mobile-Viewer": "false" ,
          "CloudFront-Is-SmartTV-Viewer": "false" ,
          "CloudFront-Is-Tablet-Viewer": "false" ,
          "CloudFront-Viewer-Country": "IL" ,
          "Host": "ulhoxnm2x2.execute-api.us-east-1.amazonaws.com" ,
          "Origin": "chrome-extension:\/\/fhbjgbiflinjbdggehcddcbncdddomop" ,
          "Postman-Token": "7ff039cb-f290-0368-5285-db273d3ac48f" ,
          "User-Agent": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/53.0.2785.116 Safari\/537.36" ,
          "Via": "1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront)" ,
          "X-Amz- [TRUNCATED]
2016-10-01T10:55:36.480Z Endpoint response body before transformations: {"errorMessage":"Error: Request failed with status code 422"}
2016-10-01T10:55:36.480Z Endpoint response headers: {x-amzn-Remapped-Content-Length=0, x-amzn-RequestId=953898c1-87c5-11e6-8bfd-9d908893e99b, Connection=keep-alive, Content-Length=61, X-Amz-Function-Error=Handled, Date=Sat, 01 Oct 2016 10:55:36 GMT, Content-Type=application/json}
2016-10-01T10:55:36.480Z Method response body after transformations: {"errorMessage":"Error: Request failed with status code 422"}
2016-10-01T10:55:36.480Z Method response headers: {Content-Type=application/json}
2016-10-01T10:55:36.480Z Successfully completed execution
2016-10-01T10:55:36.480Z Method completed with status: 400`,
  lambda_event: `2016-10-01T10:47:56.545Z START RequestId: 8329c002-87c4-11e6-bbf0-c124e4d39f76 Version: $LATEST

  2016-10-01T10:47:56.901Z 2016-10-01T10:47:56.582Z	8329c002-87c4-11e6-bbf0-c124e4d39f76	{ [Error: Request failed with status code 422]
    config:
     { transformRequest: { '0': [Function: transformRequest] },
       transformResponse: { '0': [Function: transformResponse] },
       headers:
        { Accept: 'application/json, text/plain, */*',
          'User-Agent': 'rotemtam' },
       timeout: 0,
       xsrfCookieName: 'XSRF-TOKEN',
       xsrfHeaderName: 'X-XSRF-TOKEN',
       maxContentLength: -1,
       validateStatus: [Function: validateStatus],
       method: 'get',
       params: { q: undefined, sort: 'stars', order: 'desc' },
       responseType: 'json',
       url: 'https://api.github.com/search/repositories',
       data: undefined },
    response:
     { status: 422,
       statusText: 'Unprocessable Entity',
       headers:
        { server: 'GitHub.com',
          date: 'Sat, 01 Oct 2016 10:47:56 GMT',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '154',
          connection: 'close',
          status: '422 Unprocessable Entity',
          'x-ratelimit-limit': '10',
          'x-ratelimit-remaining': '7',
          'x-ratelimit-reset': '1475318905',
          'cache-control': 'no-cache',
          'x-github-media-type': 'github.v3',
          'access-control-expose-headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval',
          'access-control-allow-origin': '*',
          'content-security-policy': 'default-src \'none\'',
          'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
          'x-content-type-options': 'nosniff',
          'x-frame-options': 'deny',
          'x-xss-protection': '1; mode=block',
          'x-github-request-id': '345AE533:06D2:131FC5E:57EF945C' },
       config:
        { transformRequest: [Object],
          transformResponse: [Object],
          headers: [Object],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          validateStatus: [Function: validateStatus],
          method: 'get',
          params: [Object],
          responseType: 'json',
          url: 'https://api.github.com/search/repositories',
          data: undefined },
       request:
        ClientRequest {
          domain: null,
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          output: [],
          outputEncodings: [],
          outputCallbacks: [],
          outputSize: 0,
          writable: true,
          _last: true,
          chunkedEncoding: false,
          shouldKeepAlive: false,
          useChunkedEncodingByDefault: false,
          sendDate: false,
          _removedHeader: {},
          _contentLength: 0,
          _hasBody: true,
          _trailer: '',
          finished: true,
          _headerSent: true,
          socket: [Object],
          connection: [Object],
          _header: 'GET /search/repositories?sort=stars&order=desc HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: rotemtam\r\nHost: api.github.com\r\nConnection: close\r\n\r\n',
          _headers: [Object],
          _headerNames: [Object],
          _onPendingData: null,
          agent: [Object],
          socketPath: undefined,
          method: 'GET',
          path: '/search/repositories?sort=stars&order=desc',
          parser: null,
          res: [Object] },
       data:
        { message: 'Validation Failed',
          errors: [Object],
          documentation_url: 'https://developer.github.com/v3/search' } } }

  2016-10-01T10:47:56.920Z 2016-10-01T10:47:56.901Z	8329c002-87c4-11e6-bbf0-c124e4d39f76	{"errorMessage":"Error: Request failed with status code 422"}

  2016-10-01T10:47:56.920Z END RequestId: 8329c002-87c4-11e6-bbf0-c124e4d39f76

  2016-10-01T10:47:56.920Z REPORT RequestId: 8329c002-87c4-11e6-bbf0-c124e4d39f76	Duration: 352.40 ms	Billed Duration: 400 ms 	Memory Size: 128 MB	Max Memory Used: 23 MB

`
};
