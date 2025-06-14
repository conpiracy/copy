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
          <h1 className="mb-6 text-7xl md:text-8xl font-black tracking-tight text-gray-900 leading-none">
            Frontrun the AI Era
          </h1>
          <p className="mb-6 text-3xl md:text-4xl text-gray-700 font-semibold max-w-3xl mx-auto leading-tight">
            Context Profiles for everything you use AI for
          </p>
          <p className="mb-8 text-2xl md:text-3xl text-gray-700 font-medium max-w-3xl mx-auto leading-tight">
            Finally make AI useful—for what *you* actually care about.
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

        </div>
      </section>

      {/* Context Power Section */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            AI gets 100× better when used in context.
          </h2>

          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Most people use AI like a generalist with amnesia—repeating instructions and constantly tweaking generic outputs. Frontrunners gives you reusable context that makes every AI interaction precise and aligned with your goals.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-12">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Without context, you're leaving potential on the table every time you use AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            It’s like ChatGPT memory—if it actually worked everywhere.
          </h2>

          <div className="text-left prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A Context Profile stores your goals, style, systems, and objectives. It upgrades every AI interaction you have, forever, without ever repeating yourself.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl my-12">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "The best AI users don't reinvent context—they leverage it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do We Keep Starting Over Section */}
      <section className="px-4 py-20 bg-stone-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Reusable. Modular. Flexible.
          </h2>

          <div className="prose prose-xl max-w-none">
            <ul className="list-disc pl-6 space-y-4 text-xl text-gray-700 mb-12">
              <li>Create profiles for your writing, learning, business, or life.</li>
              <li>Share or import between tools seamlessly.</li>
              <li>Update as you grow and your needs evolve.</li>
            </ul>

            <div className="bg-white rounded-xl p-8 my-12 border-l-4 border-orange-500">
              <p className="text-xl font-semibold text-gray-900">
                "Context turns AI from a tool into leverage."
              </p>
            </div>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">Context Generator</h3>
              <p className="text-sm text-gray-600">Interviews you and extracts precise information</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prompt Builder</h3>
              <p className="text-sm text-gray-600">Turns context into clear, execution-ready prompts</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Course Tutor</h3>
              <p className="text-sm text-gray-600">Adapts lessons to your goals and learning style</p>
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
              <p className="text-gray-600">Extract key details automatically</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prompt Builder</h3>
              <p className="text-gray-600">Build precise, goal-driven prompts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Course Tutor</h3>
              <p className="text-gray-600">Learn in your own context dynamically</p>
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
                <h3 className="font-bold text-gray-900">Business: Audience, strategy, objectives</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900">Learning: Personal gaps, learning style</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900">Writing: Tone, format, style</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Personal Life: Habits, routines, goals</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-pink-500">
                <h3 className="font-bold text-gray-900">Research: Focus, sources, objectives</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-left border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900">Planning: Workflow, priorities, tasks</h3>
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
                "Every AI tool I use knows exactly what I need."
              </blockquote>
            </div>
            <div className="text-center">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "The tutor teaches as if it knows me better than myself."
              </blockquote>
            </div>
            <div className="text-center">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "AI is finally aligned and predictable every time."
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
            {['ChatGPT', 'Claude', 'Zapier', 'Make', 'Notion', 'Custom agents', 'Automations'].map((tool) => (
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
              Start Free
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
