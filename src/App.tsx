import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">AI Frontrunners</div>
          <div className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
            Limited Early Access
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-7xl md:text-8xl font-black tracking-tight text-gray-900 leading-none">
            **Frontrun the AI Era**
          </h1>
          <p className="mb-8 text-2xl md:text-3xl text-gray-700 font-medium max-w-3xl mx-auto leading-tight">
            Finally make AI useful—for what **you** actually care about.
          </p>
          <div className="mb-16">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              Create Your Free Profile
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </Button>
          </div>

          {/* Product Demo Image Placeholder */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-600">Context Profile Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - The Most Expensive A/B Test */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            **The Most Expensive** **Context Test** **In History**
          </h2>

          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Most AI users are running their own version of this billion-dollar blunder with every prompt they write.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We craft the "perfect" prompt. Design specific instructions. Write detailed context...
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Only to watch our time burn while we wait to see what works.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-12">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                **This "Context Tax" is costing AI users millions of hours every year.**
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              And worst of all...
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Cost Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            **You're** **Testing Context** **That's Already Known.**
          </h2>

          <div className="text-left prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Think about this for a second.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every day, millions of people use AI. Each interaction is a documented test showing what context works and what doesn't.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              All the 'context' you're building already exists. Right in front of us. In your own work.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl my-12">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                **The most successful AI users recognize this.**
              </p>
              <p className="text-lg text-gray-700">
                They don't try to re-prompt from scratch every time.
              </p>
              <p className="text-lg text-gray-700">
                They capture context, adapt, and improve upon it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do We Keep Testing Section */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            **Why Do We Keep "Starting Over"?**
          </h2>

          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              "If the context is out there, why do we keep prompting from scratch?"
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              It's not because we're lazy or stubborn...
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              It's simply that our context is **scattered and disorganized**.
            </p>

            <div className="bg-white rounded-xl p-8 my-12 border-l-4 border-orange-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Most 'AI memory' nowadays consists of:
              </p>
              <ul className="mt-6 space-y-3 text-lg text-gray-700">
                <li>• Chat histories we can't search <em>("I know I asked about this before...")</em></li>
                <li>• Custom instructions that are too generic <em>("Be helpful and concise...")</em></li>
                <li>• Random notes we can't access <em>("I swear I wrote down my preferences...")</em></li>
                <li>• One-off prompts we can't reuse <em>("That worked great, but where is it?")</em></li>
              </ul>
            </div>

            <p className="text-xl font-bold text-gray-900 mb-8">
              **We have pieces of the context but no way to see the complete picture.**
            </p>
          </div>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-600 mb-8">Introducing AI Frontrunners</p>

          <h2 className="mb-16 text-6xl md:text-7xl font-black text-gray-900 leading-tight">
            The First (And Only) Context-First AI Toolkit.
          </h2>

          {/* Feature Demo */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Context</h3>
              <p className="text-sm text-gray-600">Captures your goals & preferences</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Profiles</h3>
              <p className="text-sm text-gray-600">Modular system for different areas</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reuse</h3>
              <p className="text-sm text-gray-600">Works across any AI model</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
              Hand-Curated | Human Verified
            </span>
          </div>

          <div className="text-center">
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
              Save As Favorite
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20 bg-stone-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Relevant</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                All profiles inside AI Frontrunners are human-verified for relevance, so you don't have to dig for the needle in the haystack.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Context Profile Preview</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="bg-white rounded-xl p-8">
              <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Real-Time Updates</p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Real-Time</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every profile in our system is live and scaling NOW, not months or years ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Toolkit */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            What's Inside the Toolkit
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Context Generator</h3>
              <p className="text-gray-600">Interviews you, extracts key information</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prompt Builder</h3>
              <p className="text-gray-600">Maps outcomes into execution-ready prompts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Course Tutor</h3>
              <p className="text-gray-600">Adapts to your learning goals and context</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles for Anything */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Profiles for Anything
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900">Business strategy</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900">Writing content</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900">Personal planning</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Learning AI</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-pink-500">
                <h3 className="font-bold text-gray-900">Research workflows</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Every AI tool I use knows my tone and audience"
              </blockquote>
            </div>
            <div className="text-center">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "The tutor feels like it knows me better than I do"
              </blockquote>
            </div>
            <div className="text-center">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Now I can actually reuse my prompts with precision"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Works With Everything */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Works With Everything
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['ChatGPT', 'Claude', 'Zapier', 'Notion', 'Make', 'Agents'].map((tool) => (
              <span key={tool} className="bg-white px-6 py-3 rounded-full font-medium text-gray-700 shadow-sm">
                {tool}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-600">
            Frontrunners doesn't replace your tools. It upgrades them.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-white leading-tight">
            You don't need to be technical. You just need context.
          </h2>

          <div className="mb-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg"
            >
              Get Started Free
            </Button>
          </div>

          <p className="text-xl text-gray-300">
            Start using AI like a frontrunner—not a follower.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
