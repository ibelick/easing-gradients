export default function App() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium leading-tight text-color-strong">
            Easing Gradients
          </h1>
          <p className="max-w-xl text-color-muted">
            A minimal Tailwind CSS plugin that eases gradient stops for
            smoother, more controlled transitions. It changes stop distribution,
            not color interpolation.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-color-strong">Demo</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/774423d4-6c39-48c5-800f-e78f1e66176b.jpg"
                alt=""
                className="aspect-square select-none pointer-events-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-black to-transparent"></div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/774423d4-6c39-48c5-800f-e78f1e66176b.jpg"
                alt=""
                className="aspect-square select-none pointer-events-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t gradient-ease-out from-black to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="text-color-muted">Without easing</p>
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-color-bg" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-linear-to-b from-black to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-black to-transparent" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-color-muted">With easing</p>
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-color-bg" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-linear-to-b gradient-ease-in-out from-black to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t gradient-ease-in-out from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-color-strong">Installation</p>
          <code>pnpm add easing-gradients</code>
          <p>
            Then add the plugin to your <code>global.css</code>.
          </p>
          <pre>
            <code>{`@import "tailwindcss";
@plugin "easing-gradients";`}</code>
          </pre>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-color-strong">Usage</p>
          <table className="grid w-full grid-cols-[auto_auto_1fr] border-b border-color-subtle/40">
            <thead className="col-span-3 grid grid-cols-subgrid">
              <tr className="col-span-3 grid grid-cols-subgrid">
                <th className="px-2 py-2 text-left font-medium text-color-strong">
                  Class
                </th>
                <th className="px-2 py-2 text-left font-medium text-color-strong">
                  Styles
                </th>
                <th className="px-2 py-2 text-left font-medium text-color-strong">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="col-span-3 grid grid-cols-subgrid border-t border-color-subtle/40">
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-color-subtle/40 last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-color-strong">
                  <code>gradient-ease-linear</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-color-muted">
                  <code>--tw-gradient-via-stops: eased stops (0,0,1,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-color-muted">
                  Keeps default linear gradient distribution.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-color-subtle/40 last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-color-strong">
                  <code>gradient-ease-in</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-color-muted">
                  <code>--tw-gradient-via-stops: eased stops (0.42,0,1,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-color-muted">
                  Packs more color change toward the end of the gradient.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-color-subtle/40 last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-color-strong">
                  <code>gradient-ease-out</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-color-muted">
                  <code>--tw-gradient-via-stops: eased stops (0,0,0.58,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-color-muted">
                  Packs more color change near the start of the gradient.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-color-subtle/40 last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-color-strong">
                  <code>gradient-ease-in-out</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-color-muted">
                  <code>
                    --tw-gradient-via-stops: eased stops (0.42,0,0.58,1)
                  </code>
                </td>
                <td className="px-2 py-2 align-top text-color-muted">
                  Smooth start and end, with stronger transition in the middle.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-color-subtle/40 last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-color-strong">
                  <code>gradient-ease-[...]</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-color-muted">
                  <code>
                    --tw-gradient-via-stops: eased stops (custom bezier)
                  </code>
                </td>
                <td className="px-2 py-2 align-top text-color-muted">
                  Uses your own <code>cubic-bezier(x1,y1,x2,y2)</code> curve.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
