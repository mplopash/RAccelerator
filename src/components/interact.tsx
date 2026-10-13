"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { getLenis } from "@/lib/lenis-bridge";

type Mode = "demo" | "signin" | "note";

const InteractContext = createContext<{
  open: (mode: Mode, label?: string) => void;
  pulse: (id: string) => void;
} | null>(null);

function useInteract() {
  const value = useContext(InteractContext);
  if (!value) {
    throw new Error("InteractProvider is missing");
  }
  return value;
}

export function InteractProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode | null>(null);
  const [label, setLabel] = useState("");
  const [done, setDone] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  function open(next: Mode, nextLabel = "") {
    setDone(false);
    setLabel(nextLabel);
    setMode(next);
  }

  function pulse(id: string) {
    const node = document.getElementById(id);
    if (!node) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(node, { offset: -88, lerp: 0.08 });
    else node.scrollIntoView({ behavior: "smooth", block: "center" });
    node.classList.remove("is-live");
    void node.offsetWidth;
    node.classList.add("is-live");
  }

  function close() {
    setMode(null);
    setDone(false);
  }

  useEffect(() => {
    if (!mode) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const lenis = getLenis();
    lenis?.stop();
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("input, button")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
    };
  }, [mode, done]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  const title =
    mode === "demo" ? "Book a Demo" : mode === "signin" ? "Sign In" : label;

  return (
    <InteractContext.Provider value={{ open, pulse }}>
      {children}
      {mode ? (
        <div className="sheet" onClick={close}>
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="sheet-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="text-2xl font-black tracking-tight text-ink">
                {title}
              </h2>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border border-line px-3 py-1 text-sm font-bold text-ink"
              >
                Close
              </button>
            </div>
            {mode === "note" ? (
              <p className="mt-4 text-sm leading-7 text-muted">
                {label} opens here. The walkthrough stays on this page.
              </p>
            ) : done ? (
              <p className="mt-4 text-sm leading-7 text-ink">
                {mode === "demo"
                  ? "Your demo request is held in this session."
                  : "This preview session is active."}
              </p>
            ) : (
              <form className="mt-5 grid gap-3" onSubmit={onSubmit}>
                {mode === "demo" ? (
                  <label className="grid gap-1 text-sm font-bold text-ink">
                    Name
                    <input
                      required
                      name="name"
                      className="h-11 rounded-xl border border-line bg-background px-3 font-normal"
                    />
                  </label>
                ) : null}
                <label className="grid gap-1 text-sm font-bold text-ink">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    className="h-11 rounded-xl border border-line bg-background px-3 font-normal"
                  />
                </label>
                {mode === "signin" ? (
                  <label className="grid gap-1 text-sm font-bold text-ink">
                    Password
                    <input
                      required
                      type="password"
                      name="password"
                      minLength={4}
                      className="h-11 rounded-xl border border-line bg-background px-3 font-normal"
                    />
                  </label>
                ) : (
                  <label className="grid gap-1 text-sm font-bold text-ink">
                    Company
                    <input
                      required
                      name="company"
                      className="h-11 rounded-xl border border-line bg-background px-3 font-normal"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="btn-primary mt-2 h-11 rounded-xl bg-accent text-sm font-black text-on-accent"
                >
                  {mode === "demo" ? "Request demo" : "Continue"}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </InteractContext.Provider>
  );
}

export function InteractButton({
  mode = "note",
  label,
  target,
  className,
  children,
}: {
  mode?: Mode | "pulse";
  label?: string;
  target?: string;
  className?: string;
  children: ReactNode;
}) {
  const interact = useInteract();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (mode === "pulse" && target) {
          interact.pulse(target);
          return;
        }
        if (mode !== "pulse") interact.open(mode, label);
      }}
    >
      {children}
    </button>
  );
}
