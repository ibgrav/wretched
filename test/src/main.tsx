import { renderToStylesheet, h } from "wretched";
import { extractCss } from "goober";
import { glob } from "goober/global";

interface MainProps {
  fontFamily: string;
}

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

// const colors = [<red color="var(--color-red)" />];

function Main({ fontFamily }: MainProps) {
  return (
    <>
      {Object.entries(colors).map(([key, value]) => h("root", { [`var--color-${key}`]: value }))}

      <body margin="0" fontFamily={fontFamily}>
        <childOne padding="1px">
          <hover color="var(--color-red)" cursor="pointer" />

          <child-two padding="1px">
            <color-blue has color="blue"></color-blue>

            <child-three padding="1px"></child-three>
          </child-two>
        </childOne>
      </body>

      <app id color="green" />

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

glob(results.stylesheet);

const styles = extractCss();

document.getElementById("app")!.innerHTML = `<pre>
${JSON.stringify(results.stylesheet, null, 2)}
</pre>`;

const style = document.querySelector("style")!;
style.innerText = styles;
