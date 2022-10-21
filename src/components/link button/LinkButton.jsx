const LinkButton = props => {
  const { text, image, subText, link } = props;
  return (
    <a href={link} target="_blank">
      <img src={image} />
      <span>{text}</span>
      <span className="subtext">{subText}</span>
    </a>
  );
};
export default LinkButton;
