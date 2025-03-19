import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-16">BuildSomethingWonderful</h1>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg mb-6">
            Hello! I'm{" "}
            <Link href="https://x.com/akhil_bvs" className="underline underline-offset-4">
              Akhil
            </Link>
          </p>
        </div>

        {/* Background */}
        <div className="mb-16">
          <ul className="space-y-5 text-lg">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>I lead product at Coop Records Music - bringing music onchain.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Co-founded{" "}
                <Link href="https://x.com/callusfbi" className="underline underline-offset-4">
                  Farcaster Builders Int.
                </Link>{" "}
                (FBI) - one of the largest onchain builder collectives in India and Africa.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Passionate about building products, music, movies, fandom, and collectibles.</span>
            </li>
          </ul>
        </div>

        {/* What's the Fund about? */}
        <div className="mb-16">
          <p className="text-lg mb-6 border-l-4 border-gray-200 pl-4 italic">
            BuildSomethingWonderful is a fund to help student-builders across the world build onchain through
            experimental grant funding.
          </p>
        </div>

        {/* Why do We Need? */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why do We Need?</h2>

          <p className="text-lg mb-6">The current ecosystem needs fresh talent and more fun products to be built.</p>

          <ul className="space-y-5 text-lg">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                This onboards more builders into the space - young talent are hungry and sharp, just need support via
                incentives and guidance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Anyone (must be a college student) with an idea can get a grant to build their dream project with
                community support.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>We need more experimentation onchain, encourage creative talent and foster new builders.</span>
            </li>
          </ul>
        </div>

        {/* How does it work? */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">How does it work?</h2>

          <p className="text-lg mb-6">
            Proper site and application process will be setup within a week of getting the funds.
          </p>

          <ul className="space-y-5 text-lg">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Fund goes live from first week of April, 2025.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Application form for idea and team submission with merit checking.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>One-time 1 ETH Grant.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Access to Builder Community support for feedback and application of Ideas.</span>
            </li>
          </ul>
        </div>

        {/* Why should I run this? */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why should I run this?</h2>

          <p className="text-lg mb-6">I have done this my entire life.</p>

          <ul className="space-y-5 text-lg">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Helped & mentored more than 200+ builders to go from 0 to 1 in building their first side-project on the
                Internet and also acquire their first set of users.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Ran multiple programs that enabled builders (500+) ship hundreds of ideas in India and across the globe.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                These programs have helped change lives, create compounding value, and take crypto ethos to the world
                through valuable products and applications.
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

