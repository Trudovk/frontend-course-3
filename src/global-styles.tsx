import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
      --theme: white;
      --text: black;
    }
	body {
      background-color: var(--theme);
      color: var(--text);
    }
    html[data-theme=light] {
				--theme: white;
                --text: black;
    }

    html[data-theme=dark] {
				--theme: #242424;
                --text: white;
    }
`;

export default GlobalStyles;
