import { renderToStylesheet } from "wretched";
import { css, extractCss } from "goober";

interface MainProps {
  fontFamily: string;
}

function Main({ fontFamily }: MainProps) {
  return (
    <>
      {/* <body margin="0" maxWidth="100vw" overflow="hidden"></body> */}

      <body margin="0" fontFamily={fontFamily}>
        <childOne padding="1px">
          <hover color="red" />

          <child-two padding="1px">
            <child-three padding="1px"></child-three>
          </child-two>
        </childOne>
      </body>

      <app id />

      {/* <app
        id
        width="100%"
        whiteSpace="pre-wrap"
        border="1px solid red"
        margin="10px"
        padding="10px"
        fontFamily="initial"
        background="image-set(url(logo.png) 2x, url(logo.png) 1x)"
      ></app> */}
    </>
  );
}

const results = renderToStylesheet(<Main fontFamily="Arial" />);
const styles = css(results.stylesheet);

document.getElementById("app")!.innerHTML = `<pre>
${JSON.stringify(results.stylesheet, null, 2)}
</pre>
<pre>${extractCss()}</pre>`;

// const style = document.querySelector("style")!;
// style.innerText = results.styles;
