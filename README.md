# English-Name

    저희는 두명이라 main branch 하나에서 작업할 생각이에요!
    repository에 있는 파일 전부를 받아주세요(git clone).
    프론트 부분은 client에 있는 부분입니다.
    client 디렉토리로 이동해서 package.json으로 node_modules를 설치해주세요.
    서버 키는법: 메인 디렉토리에서 >pipenv shell >python manage.py runserver
    이후 client 디렉토리에서 >npm run start로 리액트 키시면 api test라고 링크 달랑 하나 있는 페이지 나올거에요.
    그거 클릭하시면 제가 테스트용으로 만들어둔 데이터가 보일거에요. 그럼 api 작동 확인이 된겁니다.
    이제 메인 페이지는 프론트에서 만들고 필요한 데이터 api는 제가 만들어서 push 하겠습니다.

    git에 관한 기본적인 개념들이 잘 나와 있는 사이트 공유드려요!
    https://backlog.com/git-tutorial/kr/intro/intro1_1.html

시작전에 항상 >git pull origin develop 해서 원격 저장소의 git과 로컬의 git을 동일하게 만들어 주세요

#10.27 노션에 제가 생각한 아이디어들 정리해서 공유해 놓았어요. 대분류 api는 현재 만들고 있습니다...

#11.03 대분류 api 완성되었어요. 전체 디렉토리에서 >pipenv install numpy 해주세요. 프론트 상에서 질문 input태그의 name, value는 똑같이 해주시면 됩니다

#11.05(client)

- client 에 style-reset, style-component 설치 → Global style.js 생성
- client에 react-router-dom 설치 → Router.js로 page url에 나누고, App.js에 Router컴포넌트를 올려놨습니다.
- 기존에 App.js에 있던 form은 Test.js에 옮겼습니다.

#11.06(client)

- 폰트 파일 추가, 자주 쓰는 색상 themeprovider추가(App.js)
- 메인 url 제일 첫 랜딩페이지 퍼블리싱 완료

#11.07(client)

- 메인 url 두번째 페이지 스토리 페이지 퍼블리싱

#11.08(client)

- 메인 url 세번째 페이지 성별 선택 페이지 퍼블리싱 및 구현

#11.09(client)

- 대분류 Test 페이지 퍼블리싱 완료

#11.10(client)

- 소분류 검사 페이지 url '/Detail/:id'
- 결과 페이지 url '/Result/:id'

#11.11(server)

- 문제가 발견되었어요.. 질문에서 데이터가 q1데이터만 받아와지고 나머지 질문들 데이터는 받아와지지 않아요

#11.11(client)

- form을 하나만 사용해서 submit하도록 수정했습니다. 한번 더 확인 부탁드려요!

#11.12(client) - url 설정 의견!

- 페이지 url을 id로만 구분하지 말고, 의미를 부여해서 구분하면 더 쉬울 것 같아요. 다른 방법도 괜찮습니다!!
- 소분류 검사 페이지는 '/Detail/:gender/:category' 이런 식으로
- 결과 페이지는 '/Result/:gender/:category/:id' 이때 category는 대분류(자연, 지혜, 사랑), id는 소분류 4가지를 그냥 0,1,2,3으로 표현한 것
  참고 자료도 첨부합니다. https://velog.io/@qkrtjdtn97/React-useParams

#11.13(client)

- 로딩 컴포넌트, 404페이지

#11.18(server)

- 노션 '백엔드 소통'에 오늘 구현한 것, 문제 상황, 앞으로의 구현 방향 상세하게 적어놓았습니다!

#11.20(client)

- fetch로 서버 요청 후 json데이터 불러와서, 해당 소분류 테스트 시작

#11.23(client)

- 소분류 테스트 구현

#11.29(server)

- 모델 수정 및 데이터 수정 완료했습니다.
- 데이터 분류 내부 로직을 중복 없이 분류되도록 추가하고 수정했습니다.
- Http404도 리턴하도록 수정했습니다.
- 자세한 사항은 노션에 올려놓을게요!

#12.03
- 결과 페이지 구현 완료했습니다. 공유하기 버튼은 나중에 구현하고, 지금은 검사 다시하기 버튼으로 구현해도 괜찮을것 같아서 그렇게 했습니다!
- 테스트 진행 상황에 따라 progressBar가 보이도록 구현했습니다.
- 서버 status가 404일때 404페이지 보이도록, url을 잘못입력했을때 404가 보이도록 구현했습니다!


ppt용 Client 활동 강조부분?
- 모바일 뷰 ux 디자인
- Styled Components 라이브러리 활용
- React Hook(useState, useEffect, useNavigate, useLocation 등) 활용
- form radio 스타일 커스텀

#12.17
- AWS EC2, RDS, UWSGI, NGINX 활용
- 가비아에서 도메인 구입(16,500) => 동아리 지원 가능 여부 문의 예정
- AWS 로드 밸런서 및 nginx proxy 이용하여 https 적용

- 위는 배포 내용이고 배포 완료했습니다!
- 제가 배포를 진행해보니 프론트, 백 각각 따로 하는 방식을 사용한느 게 더 편하더라구요
- 그래서 이제 배포 후 수정 및 업데이트 단계에서는 현재 Organization의 Frontend-Deploy, Backend-Deploy 를 활용하여 진행할게요!
- 배포 과정에서 백 부분 뿐 아니라 프론트 부분도 수정된 곳이 꽤 있어서(fetch 링크나 index.html 등) 앞으로는 Frontend-Deploy를 활용해 주세요.
- 자세한 사항은 Frontend-Deploy의 Readme를 참고하세요!
