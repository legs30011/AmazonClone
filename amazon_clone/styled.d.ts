import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      background:string;
      navBg:string;
      orange:string;
    };
  }
}
