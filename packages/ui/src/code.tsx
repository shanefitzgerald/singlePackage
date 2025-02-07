import { version } from "../package.json";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children} v:{version} victors change</code>;
}
