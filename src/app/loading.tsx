export default function Loading() {
  return (
    <div
      className="mx-auto w-full max-w-6xl flex-1 px-6 py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="sr-only">Loading</p>
      <div className="h-3 w-36 animate-pulse bg-line" />
      <div className="mt-6 h-12 w-full max-w-xl animate-pulse bg-line" />
      <div className="mt-4 h-4 w-full max-w-lg animate-pulse bg-line" />
      <div className="mt-2 h-4 w-2/3 max-w-sm animate-pulse bg-line" />
    </div>
  );
}
