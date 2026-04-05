import type { ReactNode } from "react";

// Contract: any implementation must render a label and work as a button-like control.
type ActionProps = {
  label: string;
  onClick: () => void;
};

function PrimaryAction({ label, onClick }: ActionProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

function LinkAction({ label, onClick }: ActionProps) {
  return (
    <a href="#action" onClick={(e) => { e.preventDefault(); onClick(); }}>
      {label}
    </a>
  );
}

// Toolbar accepts either implementation — callers rely on the shared contract,
// not on concrete button vs link internals (substitutability in UI terms).

function Toolbar({ action }: { action: ReactNode }) {
  return <div className="toolbar">{action}</div>;
}

export function LiskovDemo() {
  return (
    <>
      <Toolbar action={<PrimaryAction label="OK" onClick={() => {}} />} />
      <Toolbar action={<LinkAction label="OK" onClick={() => {}} />} />
    </>
  );
}
