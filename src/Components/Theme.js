//variables for dark and light themes
import { createGlobalStyle } from "styled-components";

//object that references to the color properties
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  searchBar: "#c4c4c4",
  box: "#312e81",
  wotd: "#F9F9F9",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  banner: "#000",
  title: "#c7d2fe",
  searchBar: "#575757",
  box: "#6366f1",
  wotd: "#000",
};

//base styling (for entire document)
export const GlobalStyles = createGlobalStyle`
body, .banner, .wotd, .searchBar, .input, .partOfSpeech, .synonymsList, .antonymsList{
  transition: background-color 0.5s ease;
}
body{
    background-color: ${(props) => props.theme.body}
}
.banner{
  background-color: ${(props) => props.theme.banner}
}
.main-title, .sub-title{
  color: ${(props) => props.theme.title}
}

.wotd{
  background-color: ${(props) => props.theme.wotd}

}
.words, .word-example, .word-definition, .wotd-title, .theWord, .definition, .title, .notFound, .resolution, .about_us, .contributors, person_name{
  color: ${(props) => props.theme.fontColor}
}

.searchBar, .input{
  background-color: ${(props) => props.theme.searchBar}
}

.input{
  color: ${(props) => props.theme.fontColor}
}

.partOfSpeech, .synonymsList, .antonymsList{
  background-color: ${(props) => props.theme.box}
}
`;
