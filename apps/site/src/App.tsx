export default function App() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <h1 className="font-medium leading-tight text-color-strong">
          Easing Gradients
        </h1>
        <p className="max-w-xl text-color-muted">
          A minimal package that adds easing functions to CSS gradients for
          smoother, more controlled color transitions.
        </p>
        <code>pnpm install easing-gradients</code>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/9e/a6/c2/9ea6c2f036450ab4f72d0a7ea61c4093.jpg"
              alt=""
              className="aspect-square select-none pointer-events-none"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-black to-transparent"></div>
          </div>
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/9e/a6/c2/9ea6c2f036450ab4f72d0a7ea61c4093.jpg"
              alt=""
              className="aspect-square select-none pointer-events-none"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t gradient-ease-out from-black to-transparent"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs text-black/60">Without easing</p>
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-white" />
                {/* <img
                  src={OVERLAY_IMAGE_URL}
                  alt=""
                  className="h-64 w-full object-cover"
                  loading="lazy"
                /> */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-linear-to-b from-black to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-black to-transparent" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-black/60">With easing</p>
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-white" />
                {/* <img
                  src={OVERLAY_IMAGE_URL}
                  alt=""
                  className="h-64 w-full object-cover"
                  loading="lazy"
                /> */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-linear-to-b gradient-ease-in-out from-black to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t gradient-ease-in-out from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
