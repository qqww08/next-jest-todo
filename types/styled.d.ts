// import original module declarations
import "styled-components";

type TMedia = string;
// and extend them!
declare module "styled-components" {
  // 우리가 아는 타입지정을 여기서 다해주고 불러서 쓰기

  // 2. 타입속성지정

  // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
  export interface DefaultTheme {
    color: {};
    media: {
      desktop: TMedia;
      tablet: TMedia;
      phone: TMedia;
    };
  }
}
