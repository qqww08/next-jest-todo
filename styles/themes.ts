// Iterate through the sizes and create a media template
const customMediaQuery = (maxWidth: number): string => {
  // 최대폭을 입력하면. 문자열을 밷는다!
  return `@media (max-width: ${maxWidth}px)`;
};
// 각 디바이스에 따라 최대폭 값을 변수화
const media = {
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

const color = {};

const themes = {
  color,
  media,
};

export default themes;
