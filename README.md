# SCSC Web Project - English Name

    서울대학교 컴퓨터 중앙동아리 SCSC 22년 가을학기 프로젝트
    당신 성격에 맞는 영어이름을 찾아주는 웹사이트입니다!

영어이름 웹사이트: <https://scscproject-engname.com/>  
(EC2 인스턴스를 언제까지 켜놓을 지 알 수 없음. 도메인은 1년(~23.12.15))

영어이름 데이터 원본 및 전체 구조('백엔드 소통'부분)  
영어이름 웹 프로젝트 노션: <https://airy-fang-202.notion.site/7c600296fe264622a0cf0ffe8c1e54fb/>
    
Git Commit & Refactoring 과정  
./docs/README.md



FrontEnd

- ReactJs
- 모바일 뷰 UX 디자인
- Styled Components 라이브러리 활용
- ReactHook(useState, useEffect, useNavigate, useLocation..)
- form tag radio 스타일 커스텀

BackEnd

- Django
- OOP
- Name Data 구조 설계(뭐가 Foreign Key인지 등)
- 질문 분류 로직: 유클리도 유사도(벡터 사이 거리), 코사인 유사도 (numpy 활용)

Deploy

- AWS EC2(Ubuntu 22.04.1)
- AWS RDS(MySQL)
- Virtual Environment
- Web Server: NGINX
- Https: AWS 인증서, AWS Load Balancer, NGINX https redirect
- Domain 가비아에서 구입(1년, ₩16,500)
