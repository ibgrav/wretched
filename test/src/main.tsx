import { defineWretchedStyles, renderToString, type JSX } from "wretched";

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
      <star boxSizing="border-box" color="red" />

      <media screen />
    </>
  );
}

const wretched = defineWretchedStyles(
  <>
    <a>
      <div />
      <attribute has title="href" value=".org" operator="*" flag="i" fontWeight="bold" color="green">
        <hover color="red" />
      </attribute>
    </a>

    <main color="blue" />
  </>
);

const styles = renderToString(wretched, {
  minify: false,
});

document.getElementById("my-app")!.innerHTML = `<pre>
${styles}
</pre>`;

const style = document.querySelector("style")!;
style.innerText = styles;
