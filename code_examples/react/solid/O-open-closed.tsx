import type { ReactNode } from "react";

// Open for extension (new variants via props/slots), closed for modification
// of core layout logic — you rarely edit Card internals when adding a footer.

type CardProps = {
  title: string;
  children: ReactNode;
  /** Optional extension point — new behavior without changing Card's core markup rules */
  footer?: ReactNode;
};

function Card({ title, children, footer }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer ? <footer>{footer}</footer> : null}
    </section>
  );
}

// New "feature" = composition at call site, not a fork of Card source.
export function OpenClosedDemo() {
  return (
    <Card
      title="Dashboard"
      footer={<button type="button">Save</button>}
    >
      <p>Body content stays stable; footer slot extends behavior.</p>
    </Card>
  );
}
