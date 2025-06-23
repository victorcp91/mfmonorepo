import { useQuery } from '@tanstack/react-query';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const fetchJokes = async (): Promise<Joke[]> => {
  const response = await fetch(
    'https://official-joke-api.appspot.com/random_ten'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch jokes');
  }
  return response.json();
};

export function JokesList() {
  const {
    data: jokes,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['jokes'],
    queryFn: fetchJokes,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">Loading jokes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 mb-4">
          Oops! Something went wrong while fetching jokes.
        </div>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Random Jokes</h1>
        <button
          onClick={() => refetch()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Get New Jokes
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jokes?.map((joke) => (
          <div
            key={joke.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                {joke.type}
              </span>
              <span className="text-xs text-gray-500">#{joke.id}</span>
            </div>
            <div className="space-y-3">
              <p className="text-gray-800 font-medium">{joke.setup}</p>
              <p className="text-gray-600 italic border-l-4 border-yellow-400 pl-3">
                {joke.punchline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
