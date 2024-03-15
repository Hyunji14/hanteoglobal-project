## [HANTEO] Front-end 코딩 테스트 : React로 구현하는 콘텐츠 뷰
### **1. 프로젝트 정보**
* 패키지 설치 도구 : yarn 
* 프레임워크 : React
* 개발 언어 : Typescript
* 상태 관리 라이브러리 : React-Query(Tanstack query)
* 주요 기능
 * 무한 루프 슬라이드 배너
 * 무한 스크롤 컨텐츠 리스트 뷰
 * footer 최상단 이동 버튼
* ${\textsf{\color{red}특이사항}}$
  * <span style='color:red'>프론트엔드 파트 기능 개발 집중을 위해 백엔드 API가 구현되어 있고, 받아온 데이터가 있다는 가정하에 작업했습니다.
  * 백엔드 세팅은 따로 진행하지 않았고, 백엔드에서 받아온 데이터의 형식은 임의로 "db" 디렉터리 내부에 json 파일로 저장해두었습니다.
  * 이후에 백엔드와 연결할 때, API 사용이 원활하도록 각 기능별로 API를 사용하도록 설계했습니다.

  
### **2. 프로젝트 구조 설계**
```
src
 ┣ assets
 ┃ ┣ font
 ┃ ┣ img
 ┣ components
 ┃ ┣ ApiBoundary
 ┃ ┣ Banner
 ┃ ┣ Category
 ┃ ┣ Contents
 ┃ ┣ Empty
 ┃ ┣ Footer
 ┃ ┣ Layout
 ┃ ┗ Loading
 ┣ db
 ┣ global
 ┣ hooks
 ┣ page
 ┃ ┣ Category
 ┃ ┣ Main
 ┃ ┣ Notfound
 ┃ ┗ index.ts
 ┣ App.tsx
 ┣ main.tsx
 ┗ vite-env.d.ts
 ```
* 디렉터리 구조 설계
  * assets : 프로젝트에서 사용하는 폰트, 이미지 등이 저장된 디렉터리
  * components : 각 페이지에서 사용할 컴포넌트들의 디렉터리
  * db : 프로젝트에서 사용할 임의 데이터들이 담긴 디렉터리
  * page : 각 페이지들이 담긴 디렉터리
  * global : 프로젝트 전체에서 사용하는 상수, 변수 값, 스타일 등이 담긴 디렉터리
  * hooks : 프로젝트 전체에서 사용하는 커스텀 훅을 담은 디렉터리
* 프로젝트 방향성
  * 동일한 와이어 프레임 구조에 각 카테고리별에 따라 보여주는 데이터가 달라지는 방향으로 개발을 진행했습니다.
    * 다양한 페이지를 만들지 않고 "CategoryPage" 에서 카테고리 이동 시, 카테고리 id에 따라 해당 id를 가지고 있는 데이터를 호출해 보여줬습니다.
  * 각 컨텐츠의 리스트 뷰 : 무한스크롤 방식
    * 최초에 5개의 데이터를 가져고, 최하단의 div에 도달했을때 observer를 활용하여 다음 데이터를 불러오는 형식으로 기능을 구현했습니다.

### **3. 프로젝트 설치 및 실행**## 
```
yarn
yarn dev
```

### **4. 구현 화면**
<img width="979" alt="image" src="https://github.com/Hyunji14/hanteoglobal-project/assets/17976486/ca06ba27-ebc9-4242-ac37-d8b6567055d8">

