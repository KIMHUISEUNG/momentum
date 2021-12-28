const quotes = [
  {
    quote:
      "사람들은 동기부여는 오래가지 않는다고 말한다.목욕도 마찬가지다.그래서 매일 하라고 하는 것이다.",
    author: "지그 지글러",
  },
  {
    quote:
      "인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 쫓는 사람이다. 그것이 헌신이다.",
    author: "세실 B.드밀",
  },
  {
    quote: "나 자신에 대한 자신감을 잃으면,온 세상이 나의 적이 된다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote:
      "나는 연습에서든 실전에서든 이기기 위해 농구를 한다. 그 어떤 것도 승리를 향한 나의 경쟁적 열정에 방해가 되도록 하지않을 것이다.",
    author: "마이클 조던",
  },
  {
    quote: "실패는 성공으로 가는 가장 빠른 지름길",
    author: "잭 웰치",
  },

  {
    quote: "우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
    author: "글로리아 피처",
  },
  {
    quote:
      "나의 어느 부분도 원래부터 있었던 것이 아니다. 나는 모든 지인들의 노력의 집합체다.",
    author: "척 팔라닉",
  },
  {
    quote: "자기보다 못한 자를 벗으로 삼지 말라.",
    author: "공자",
  },
  {
    quote:
      "우리는 매력적이고,참신하고,자발적으로 태어나며 사회에 참여할 수 있을 때까지 교양을 갖추어야 한다.",
    author: "주디스 마틴",
  },
  {
    quote: "역경은 누가 진정한 친구인지 가르쳐준다.",
    author: "로이스 맥마스터 부욜",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
