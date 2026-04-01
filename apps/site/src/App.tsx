export default function App() {
  return (
    <main className="min-h-screen px-5 py-20">
      <div className="mx-auto flex max-w-2xl flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="font-medium leading-tight text-strong">
              Easing Gradients
            </h1>
            <a
              href="https://github.com/ibelick/easing-gradients"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="text-muted transition-colors hover:text-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.93 0 1.4-.01 2.53-.01 2.88 0 .28.18.6.69.5A10.2 10.2 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
          <p className="max-w-xl leading-relaxed text-muted">
            Linear gradients often show hard edges at the start or end.
            easing-gradients applies easing curves to stop distribution so fades
            look smoother and less visible.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-[450] text-strong">Demo</p>
          <div className="grid grid-cols-2 gap-4 text-center sm:gap-6">
            <p className="text-muted">Without easing</p>
            <p className="text-muted">With easing</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/774423d4-6c39-48c5-800f-e78f1e66176b.jpg"
                alt="Image of a white room"
                className="pointer-events-none aspect-square select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-black to-transparent"></div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/774423d4-6c39-48c5-800f-e78f1e66176b.jpg"
                alt="Image of a white room"
                className="pointer-events-none aspect-square select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-linear-to-t gradient-ease-out from-black to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/7dea52ab-df00-4758-82c1-023192027f76.jpg"
                alt="Image of a white room with a computer on the wall"
                className="pointer-events-none aspect-square select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-linear-to-b from-black to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-linear-to-t from-black to-transparent" />
            </div>

            <div className="relative overflow-hidden">
              <img
                src="https://cdn.interfaceoffice.com/easing-gradients/7dea52ab-df00-4758-82c1-023192027f76.jpg"
                alt="Image of a white room with a computer on the wall"
                className="pointer-events-none aspect-square select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-linear-to-b gradient-ease-in-out from-black to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-linear-to-t gradient-ease-in-out from-black to-transparent" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-[450] text-strong">Installation</p>
          <code>pnpm add easing-gradients</code>
          <p>
            Then add the plugin to your <code>global.css</code>:
          </p>
          <pre>
            <code>{`@import "tailwindcss";
@plugin "easing-gradients";`}</code>
          </pre>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-[450] text-strong">Usage</p>
          <table className="grid w-full grid-cols-[auto_auto_1fr] border-b border-border -mx-2">
            <thead className="col-span-3 grid grid-cols-subgrid">
              <tr className="col-span-3 grid grid-cols-subgrid">
                <th className="px-2 py-2 text-left font-medium text-strong">
                  Class
                </th>
                <th className="px-2 py-2 text-left font-medium text-strong">
                  Styles
                </th>
                <th className="px-2 py-2 text-left font-medium text-strong">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="col-span-3 grid grid-cols-subgrid border-t border-border">
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-border last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-strong">
                  <code>gradient-ease-linear</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-muted">
                  <code>--tw-gradient-via-stops: eased stops (0,0,1,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-muted">
                  Keeps default linear gradient distribution.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-border last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-strong">
                  <code>gradient-ease-in</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-muted">
                  <code>--tw-gradient-via-stops: eased stops (0.42,0,1,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-muted">
                  Packs more color change toward the end of the gradient.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-border last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-strong">
                  <code>gradient-ease-out</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-muted">
                  <code>--tw-gradient-via-stops: eased stops (0,0,0.58,1)</code>
                </td>
                <td className="px-2 py-2 align-top text-muted">
                  Packs more color change near the start of the gradient.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-border last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-strong">
                  <code>gradient-ease-in-out</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-muted">
                  <code>
                    --tw-gradient-via-stops: eased stops (0.42,0,0.58,1)
                  </code>
                </td>
                <td className="px-2 py-2 align-top text-muted">
                  Smooth start and end, with stronger transition in the middle.
                </td>
              </tr>
              <tr className="col-span-3 grid grid-cols-subgrid border-b border-border last:border-b-0">
                <td className="px-2 py-2 align-top font-mono text-strong">
                  <code>gradient-ease-[...]</code>
                </td>
                <td className="px-2 py-2 align-top font-mono text-muted">
                  <code>
                    --tw-gradient-via-stops: eased stops (custom bezier)
                  </code>
                </td>
                <td className="px-2 py-2 align-top text-muted">
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
