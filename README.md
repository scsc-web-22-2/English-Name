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
