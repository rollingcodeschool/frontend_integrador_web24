const ExitoViews = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-10 text-slate-900 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-green-200/50 blur-3xl"
      />

      <section className="relative w-full max-w-xl">
        <header className="mb-6 flex items-center justify-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-600/20">
            m
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Mercado Pago
          </span>
        </header>

        <div className="overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl shadow-emerald-900/10">
          <div className="px-6 pb-8 pt-10 text-center sm:px-12 sm:pb-10 sm:pt-12">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50">
              <svg
                aria-hidden="true"
                className="size-10 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              <span className="size-2 rounded-full bg-emerald-500" />
              Pago aprobado
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¡Tu pago se realizó con éxito!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
              Mercado Pago confirmó tu pago. La tienda ya recibió la
              notificación y continuará con tu compra.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                  <svg
                    aria-hidden="true"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="font-semibold text-slate-900">
                    ¿Qué sigue?
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    En unos instantes vas a recibir la confirmación y los
                    detalles de tu compra por los medios de contacto que
                    compartiste.
                  </p>
                </div>
              </div>
            </div>

            <a
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:w-auto"
              href="/"
            >
              Volver a la tienda
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <footer className="border-t border-slate-100 bg-slate-50/70 px-6 py-5 text-center sm:px-12">
            <p className="text-sm text-slate-500">
              ¿Tenés dudas sobre tu pago?{" "}
              <a
                className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-800"
                href="https://www.mercadopago.com.ar/ayuda"
                target="_blank"
                rel="noreferrer"
              >
                Visitá la ayuda de Mercado Pago
              </a>
            </p>
          </footer>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Tu pago fue procesado de forma segura por Mercado Pago.
        </p>
      </section>
    </main>
  );
};

export default ExitoViews;
