import ButtonOrLink from "./buttonOrlink";

function Links() {
  return (
    <>
      <ButtonOrLink
        href="https://www.linkedin.com/in/daniel-aghababaei/"
        styleModel="model-1"
        as="a"
        target="_blank"
      >
        Linkedin
      </ButtonOrLink>
      <ButtonOrLink
        href="https://github.com/DanielDevel"
        target="_blank"
        styleModel="model-2"
        as="a"
      >
        Github
      </ButtonOrLink>
      <ButtonOrLink
        href="https://twitter.com/danieloaei"
        target="_blank"
        styleModel="model-3"
        as="a"
      >
        Twitter(X)
      </ButtonOrLink>
    </>
  );
}

export default Links;
