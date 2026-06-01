type Props = {
  fill: string;
};

export default function SiteLogo({ fill }: Props) {
  return (
    <svg className={`size-full ${fill}`} role="img">
      <title>FUTENMA STUDIO</title>
      <use href="#site-logo"></use>
    </svg>
  );
}
