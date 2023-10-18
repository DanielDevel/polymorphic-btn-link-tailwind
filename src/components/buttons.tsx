"use client";
import ButtonOrLink from "./buttonOrlink";
import { useRouter } from "next/navigation";

function Buttons() {
  const router = useRouter();
  return (
    <>
      <ButtonOrLink
        onClick={()=> router.push("https://www.linkedin.com/in/daniel-aghababaei")}
        styleModel="model-1"
        as="button"
        type="button"
      >
        Linkedin
      </ButtonOrLink>
      <ButtonOrLink
        onClick={()=> router.push("https://github.com/DanielDevel")}
        type="button"
        styleModel="model-2"
        as="button"
      >
        Github
      </ButtonOrLink>
      <ButtonOrLink
        onClick={()=> router.push("https://twitter.com/danieloaei")}
        type="button"
        styleModel="model-3"
        as="button"
      >
        Twitter(X)
      </ButtonOrLink>
    </>
  );
}

export default Buttons;
