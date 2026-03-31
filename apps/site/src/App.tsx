export default function App() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto flex max-w-2xl flex-col gap-4">
        <h1 className="font-medium leading-tight text-color-strong">
          Easing Gradients
        </h1>
        <p className="max-w-xl text-color-muted">
          A minimal package that adds easing functions to CSS gradients for
          smoother, more controlled color transitions.
        </p>
        <code className="w-fit rounded-[2px] bg-color-subtle px-1 py-px font-mono text-color-strong">
          pnpm install easing-gradients
        </code>
      </section>
    </main>
  );
}
