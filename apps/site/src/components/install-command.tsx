import CodeBlock from "./code-block";

type InstallCommandProps = {
  children: string;
};

export default function InstallCommand({ children }: InstallCommandProps) {
  return (
    <CodeBlock>
      <span className="text-muted select-none">$ </span>
      {children}
    </CodeBlock>
  );
}
