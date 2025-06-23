export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Module Federation Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Testing project using Nx Monorepo + Module Federation + React
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Technical Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Architecture:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Shell App (Host)</li>
                <li>• Jokes Remote (4202)</li>
                <li>• Dog Remote (4201)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Stack:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Nx 21.2.1</li>
                <li>• React 19.0.0</li>
                <li>• Rspack + Module Federation</li>
                <li>• TanStack Query + Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
