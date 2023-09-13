export default function NewsletterCTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl bg-gray-900 px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Sign up for our newsletter
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Tune into your inner symphony with Harmony Haven. Monthly, I share
              tools to explore your inner beauty. Unearth harmony within—a
              refuge where every note enriches your journey.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:ml-8 lg:mt-0 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-100">
              We care about the protection of your information.
              <span className="font-medium text-white underline">
                We will never sell your data
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
