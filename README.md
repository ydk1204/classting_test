# 클래스팅 과제테스트  

## 프론트엔드 과제  
#  

## 사용 기술
1. react
2. react-route-dom
3. tailwind-css
4. styled-component
5. recharts

### __(섪치)실행 방법__
1. 터미널에 npm i 입력
2. yarn(npm) start 


### __페이지 구성__
- 모든 페이지는 반응형으로 제작되어 pc, 모바일 화면에서 확인이 가능합니다.
- 시작 페이지, 퀴즈 페이지, 결과 페이지로 구성되어있습니다.

### 시작 페이지 구성
- 시작 페이지(첫 화면)에서 퀴즈 풀기 버튼 클릭 시 퀴즈 페이지로 이동합니다.
  - 도움말 버튼 클릭 시 간단한 정보를 확인할 수 있습니다.

### 퀴즈 페이지 구성
- 퀴즈 페이지에는 총 10개의 문제를 출력합니다.
- 퀴즈 페이지 상단에 프로그레스 바와 퀴즈 카드가 나타납니다.
- 프로그레스 바는 현재 작성된 문제의 개수 비율로 채워집니다.
  - 답안 제출 후 다음 문제 버튼을 클릭 시 업데이트 됩니다.
- 퀴즈 카드에 노출되는 정보는 다음과 같습니다.
  - 퀴즈 난이도
    - 현재 퀴즈의 난이도를 나타냅니다.
  - 질문
    - 현재 퀴즈의 질문을 나타냅니다.
  - 보기
    - 현재 퀴즈의 4개 보기 문항을 나타냅니다.
  - 제출 버튼
    - 보기 문항 중 하나를 선택 시 제출 버트이 활성화 되어 클릭 할 수 있습니다.
  - 정답 여부
    - 답안을 제출할 경우 선택한 답의 정답/오답 여부를 보여줍니다.
  - 다음 버튼
    - 제출 버튼을 클릭하여 답안 제출 시 다음 문제로 이동할 수 있는 버튼이 보여집니다.
  
### 결과 페이지 구성
  - 사용자의 퀴즈 정답 내역을 보여줍니다.
  - 결과 페이지 구성
    - 시간
      - 시작 시간과 종료 시간을 나타내고 총 소비된 시간을 나타냅니다.
      - 약 1초의 시간 차이가 존재할 수 있습니다.
    - 정답/오답 개수-비율
      - 정답과 오답의 개수, 비율을 나타냅니다.
    - 오답 노트
      - 틀린 문제와 정답을 보여줍니다.

## 예외 페이지
  - 정상적인 주소 접근이 아닌 경우 에러 페이지로 이동합니다.
  - 에러 페이지에 접근할 경우 5초 후 자동으로 시작 화면(첫 화면)으로 이동합니다.