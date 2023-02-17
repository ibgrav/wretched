import { renderToString, type JSX } from "wretched";

interface MainProps {
  fontFamily: string;
}

const colorVars = {
  "--color-red": "#FF0000",
  "--color-green": "#00FF00",
  "--color-blue": "#0000FF",
};

function Medium(props: JSX.CSSProperties) {
  return <media min-width="600px" {...props} />;
}

function Large(props: JSX.CSSProperties) {
  return <media min-width="900px" {...props} />;
}

function Main({ fontFamily }: MainProps) {
  return (
    <>
      <star boxSizing="border-box" />

      <body margin={0} />

      <pre margin={0} padding="10px" />

      <myApp id color="purple" fontFamily={fontFamily}>
        <red has color="red">
          <orange color="orange" />
        </red>
      </myApp>
    </>
  );
}

const styles = renderToString(<Main fontFamily="Arial" />, ".test");

document.getElementById("my-app")!.innerHTML = `<pre>
${styles}
</pre>`;

const style = document.querySelector("style")!;
style.innerText = styles;
