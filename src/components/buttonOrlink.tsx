enum ButtonOrLinkStyleModels {
  "model-1",
  "model-2",
  "model-3",
}

type ButtonOrLinkProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
) & { styleModel: keyof typeof ButtonOrLinkStyleModels };

const ButtonOrLink = (props: ButtonOrLinkProps) => {
  const classNameProps = props.className ? props.className : "";
  const className = `${classNameProps} ${props.styleModel}`;
  return props.as === "a" ? (
    <a {...props} className={className} />
  ) : (
    <button {...props} className={className} />
  );
};
export default ButtonOrLink;
