// src/data/dummyPosts.js
const todayTopic = {
  date: "2024년 1월 10일",
  title: "한국어를 배울 때 가장 어려운 점은 무엇인가요? 팁이 있다면 공유해주세요!",
  replies: 12,
};

const hotPosts = [
  {
    id: 1,
    author: "사라",
    flag: "🇺🇸",
    time: "1일 전",
    category: "자유",
    title: "서울 근처 우링 모임 있나요?",
    content:
      "안녕하세요! 서울 강남구에 살고 있는데, 오프라인으로 만나서 우링 할 수 있는 모임이 있는지 궁금해요. 영어와 한국어 교환하고 싶습니다.",
    likes: 42,
    comments: 6,
  },
  {
    id: 2,
    author: "마리아",
    flag: "🇵🇭",
    time: "5시간 전",
    category: "문화",
    title: "한국 전통 음식 만들기 도전!",
    content:
      "어제 처음으로 김치찌개를 만들어봤어요! 처음엔 너무 매웠지만 정말 맛있었답니다. 다음엔 불고기도 도전해보고 싶어요.",
    likes: 35,
    comments: 12,
  },
  {
    id: 3,
    author: "리나",
    flag: "🇻🇳",
    time: "2시간 전",
    category: "한국어",
    title: "한국어 발음 연습 팁 공유해요!",
    content:
      "한국에 온 지 6개월 된 베트남 출신 리나예요. 발음이 정말 어려워서 고민이었는데, 최근에 좋은 방법을 찾아서 공유드려요.",
    likes: 24,
    comments: 8,
  },
];

const latestPosts = [
  {
    id: 4,
    author: "나린",
    flag: "🇹🇭",
    time: "3시간 전",
    category: "육아",
    title: "아이 한국 학교 적응 도움 필요해요",
    content:
      "7살 아이가 한국 초등학교에 다니기 시작했는데 언어 장벽 때문에 힘들어해요. 비슷한 경험 있으신 분들 조언 부탁드려요.",
    likes: 18,
    comments: 15,
  },
  {
    id: 5,
    author: "메이",
    flag: "🇨🇳",
    time: "30분 전",
    category: "오늘의 주제",
    title: "한국어 문법이 너무 어려워요",
    content:
      "저는 조사가 가장 어려워요. 은/는, 이/가 언제 쓰는지 아직도 헷갈려요. 연습 방법 있을까요?",
    likes: 8,
    comments: 3,
  },
];
export { todayTopic, hotPosts, latestPosts };
