# ⌨️ Keystom
![](https://velog.velcdn.com/images/antipiebse/post/45824383-51d3-4836-aaab-2b45d6d3473b/image.png)
## ***Key***board + cus***tom***
![](https://velog.velcdn.com/images/antipiebse/post/07240daf-fe83-4af3-99e3-bd28ba45e24e/image.png)
> ***custom*** 라는 단어에서 착안한 키보드 커스텀 서비스 ***keystom***
><br/><br/>
> 코로나 19로 인해 사람들이 집에 머무는 시간이 증가하면서 집 안을 꾸며 인스타그램이나 페이스북에 공유하고 자랑하는 일들이 많아졌습니다.<br><br>
누군가는 집에 꽃을 들여놓고, 또 누군가는 침대를 바꾸는 등 인테리어에 대한 관심과 수요가 증가하게 되었고, 이러한 흐름 속에서 사람들의 시선은 자연스럽게 책상 위로 향하였습니다. 대부분을 책상 위에서 일을 하고, 수업을 듣다보니 책상 위를 꾸미기 시작하였고, '데스크 셋업'이라는 새로운 유행이 불기 시작하였습니다. <br><br>
‘데스크 셋업’의 주요 부품중 하나인 키보드의 수요가 증가할 것으로 예상이되는 가운데,  F12는 사용자가 원하는 디자인으로 커스텀 된 세상에서 하나뿐인 특별한 키보드를 제작하여 나만의 개성을 들어낼수 있는 서비스를 기획하였습니다.<Br><br>
우리의 시작은 키보드지만 원하는 모든 것을 커스텀 할 수 있는 사이트가 될 수 있도록 달려나갈 것입니다.
<br/>

## 배포주소
>***https://keystom.site*** 

백엔드 개발을 공부 중인 주니어이고 GCP무료 크레딧이 고갈되어 일시적으로 배포를 중단하였습니다.

<br/>

## 프로젝트 설치 방법 & 실행 방법
### 프로젝트 설치
``` bash
git clone https://github.com/jonghyun-sun/f6b2-team6-server.git
```
<br>

``` bash
yarn install
```
<Br/>

### 프로젝트 실행
``` bash
docker-compose -f docker-compose.${개발환경}.yaml build
docker-compose -f docker-compose.${개발환경}.yaml up
```

<br/>

## 기술스택
<div style="width:70% text-align:center"><img src="https://user-images.githubusercontent.com/79756706/173012667-97a4d79c-02b5-4a23-a561-8fcee3a6d2d6.png"></div>

`JavaScript`, `TypeScript`, `NodeJS`, `NestJS`, `TypeORM`, `JWT`, `GraphQL`, `MySQL`,`ElasticSearch`, `Logstash`, `Redis`, `Docker`, `Git`, `GitHub`, `GCP`

<br/>

## Flow Chart
![](https://velog.velcdn.com/images/antipiebse/post/464f28fe-a7c7-4817-b8a6-02c14a31b239/image.png)


## ERD
![](https://velog.velcdn.com/images/antipiebse/post/d1fcd92f-3175-4f22-926e-01322a736f86/image.png)


## API Docs
![](https://velog.velcdn.com/images/antipiebse/post/1c6fb37b-d6c1-4916-929f-b89209c6daf3/image.png)

## Database Schema
![스크린샷 2022-06-05 오후 11 18 18](https://user-images.githubusercontent.com/79756706/178704493-5f014bfd-62fe-44ff-b6d7-20699ac98f31.png)


## API
<!--table-->
|api 기능|request|respose|
|--|--|--|
|Create|Mutation{API name:contents}{request col}|등록 성공 or 실패메시지|
|Update|Mutation{API name:contents}{request col}|수정 성공 or 실패메시지|
|Delete|Mutation{API name:contents}{request col}|삭제 성공 or 실패메시지|
|Fetch|Query{API name}{request col}|조회 성공 or 실패메시지|
|login/logout|Query{API name}{request col}|성공 or 실패메시지|



## 폴더 구조
```
f6b2-team6-server
├── Dockerfile
├── docker-compose.dev.yaml
├── docker-compose.prod.yaml
├── docker-compose.stage.yaml
├── docker-compose.yaml
├── elk
│   ├── elasticsearch
│   ├── kibana
│   └── logstash
│       ├── indexTemplate.json
│       ├── logstash.conf
│       └── mysql-connector-java-8.0.28.jar
├── frontend
│   ├── payment.html
│   └── social-login.html
├── nest-cli.json
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── apis
│   │   ├── UserCoupon
│   │   │   ├── dto
│   │   │   │   └── createUserCoupon.input.ts
│   │   │   ├── entities
│   │   │   │   └── userCoupon.entity.ts
│   │   │   ├── userCoupon.module.ts
│   │   │   ├── userCoupon.resolver.ts
│   │   │   └── userCoupon.service.ts
│   │   ├── address
│   │   │   ├── address.module.ts
│   │   │   ├── address.resolver.ts
│   │   │   ├── address.service.ts
│   │   │   ├── dto
│   │   │   │   └── createAddress.input.ts
│   │   │   └── entities
│   │   │       └── address.entity.ts
│   │   ├── auth
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.resolver.ts
│   │   │   └── auth.service.ts
│   │   ├── comments
│   │   │   ├── comment.module.ts
│   │   │   ├── comment.resolver.ts
│   │   │   ├── comment.service.ts
│   │   │   ├── dto
│   │   │   │   └── createComment.input.ts
│   │   │   └── entities
│   │   │       └── comment.entity.ts
│   │   ├── coupon
│   │   │   ├── coupon.module.ts
│   │   │   ├── coupon.resolver.ts
│   │   │   ├── coupon.service.ts
│   │   │   ├── dto
│   │   │   │   └── createCoupon.input.ts
│   │   │   └── entities
│   │   │       └── coupon.entity.ts
│   │   ├── custom
│   │   │   ├── customs.module.ts
│   │   │   ├── customs.resolver.ts
│   │   │   ├── customs.service.ts
│   │   │   ├── dto
│   │   │   │   └── createCustom.input.ts
│   │   │   └── entities
│   │   │       └── custom.entity.ts
│   │   ├── file
│   │   │   ├── file.module.ts
│   │   │   ├── file.resolver.ts
│   │   │   └── file.service.ts
│   │   ├── iamport
│   │   │   └── iamport.service.ts
│   │   ├── order
│   │   │   ├── dto
│   │   │   │   └── createOrder.input.ts
│   │   │   ├── entities
│   │   │   │   └── order.entity.ts
│   │   │   ├── orders.module.ts
│   │   │   ├── orders.resolver.ts
│   │   │   └── orders.service.ts
│   │   ├── payment
│   │   │   ├── dto
│   │   │   │   └── createPayment.input.ts
│   │   │   ├── entities
│   │   │   │   └── payment.entity.ts
│   │   │   ├── payments.module.ts
│   │   │   ├── payments.resolver.ts
│   │   │   └── payments.service.ts
│   │   ├── productImage
│   │   │   └── entities
│   │   │       └── productImage.entity.ts
│   │   ├── products
│   │   │   ├── dto
│   │   │   │   ├── createProduct.input.ts
│   │   │   │   └── updateProduct.input.ts
│   │   │   ├── entities
│   │   │   │   └── product.entity.ts
│   │   │   ├── product.module.ts
│   │   │   ├── product.resolver.ts
│   │   │   └── product.service.ts
│   │   ├── productsTag
│   │   │   └── entities
│   │   │       └── productTag.entity.ts
│   │   ├── review
│   │   │   ├── dto
│   │   │   │   ├── createReview.input.ts
│   │   │   │   └── updateReview.input.ts
│   │   │   ├── entities
│   │   │   │   └── review.entity.ts
│   │   │   ├── reviews.module.ts
│   │   │   ├── reviews.resolver.ts
│   │   │   └── reviews.service.ts
│   │   ├── reviewImage
│   │   │   └── entities
│   │   │       └── reviewImage.entity.ts
│   │   ├── reviewLike
│   │   │   ├── dto
│   │   │   │   └── createReviewLike.input.ts
│   │   │   ├── entities
│   │   │   │   └── reviewLike.entity.ts
│   │   │   ├── reviewLike.module.ts
│   │   │   ├── reviewLike.resolver.ts
│   │   │   └── reviewLike.service.ts
│   │   ├── signup
│   │   │   ├── signup.module.ts
│   │   │   ├── signup.resolver.ts
│   │   │   └── signup.service.ts
│   │   └── user
│   │       ├── dto
│   │       │   ├── createUser.input.ts
│   │       │   └── updateUserInput.ts
│   │       ├── entities
│   │       │   └── user.entity.ts
│   │       ├── users.module.ts
│   │       ├── users.resolver.ts
│   │       └── users.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── commons
│   │   ├── auth
│   │   │   ├── gql-auth.guard.ts
│   │   │   ├── gql-user.param.ts
│   │   │   ├── jwt-access.strategy.ts
│   │   │   ├── jwt-refresh.strategy.ts
│   │   │   ├── jwt-social-google.strategy.ts
│   │   │   ├── jwt-social-kakao.strategy.ts
│   │   │   └── jwt-social-naver.strategy.ts
│   │   ├── graphql
│   │   │   └── schema.gql
│   │   └── types
│   │       └── context.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```
<br/>

## .env 설정
```
ACCESS_SECRET_KEY
REFRESH_SECRET_KEY
SMS_APP_KEY
SMS_X_SECRETE_KEY
SMS_SENDER
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_CALLBACKUR
NAVER_CLIENT_ID
NAVER_CLIENT_SECRET
NAVER_CALLBACKURL
KAKAO_CLIENT_ID
KAKAO_CLIENT_SECRET
KAKAO_CALLBACKURL
STORAGE_BUCKET
STORAGE_KEY_FILENAME
STORAGE_PROJECT_ID
```
<br/>

* * *

- ## 프로젝트 작업기간 및 시간
  - 작업기간 : 2022년 05월 09일 ~ 2022년 06월 01일
  - 출근: 9-10시
  - 개인 업무: 10~13시
  - 점심 시간: 13시~14시
  - 회의 시간: 14~15시
  - 개인 업무: 15~21 or 22시



<br/>

# BackEnd 팀원 역할
## 문성민
Email: antipiebse@gmail.com
Github: https://github.com/antipiebse
* `Order API`, `Payment API`, `FileUpload API`, `Logout API`, `Coupon API` 생성 및 유지 보수
* ERD 설계
* Backend 배포
* Git 담당
* 기타 공유 문서 작업

## 선종현
Email: jjong981028@gmail.com
Github: https://github.com/jonghyun-sun
* `Login API`, `Signin API`, `Review API`,`기본CRUD API` 생성 및 유지 보수
* 발표
* 기타 공유 문서 작업
