import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface DogApiResponse {
  message: string;
  status: string;
}

const fetchRandomDogImage = async (): Promise<DogApiResponse> => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!response.ok) {
    throw new Error('Failed to fetch dog image');
  }
  return response.json();
};

export function DogImages() {
  const [imageHistory, setImageHistory] = useState<string[]>([]);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['dogImage'],
    queryFn: fetchRandomDogImage,
    staleTime: 0, // Always fetch fresh images
    gcTime: 0, // Don't cache images
  });

  const handleNewImage = () => {
    if (data?.message) {
      setImageHistory((prev) => [data.message, ...prev.slice(0, 4)]); // Keep last 5 images
    }
    refetch();
  };

  if (isLoading && !data) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 text-lg">
          Fetching a good boy...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 mb-4 text-lg">
          Woof! Something went wrong while fetching dog images.
        </div>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Random Dog Images
        </h1>
        <button
          onClick={handleNewImage}
          disabled={isLoading}
          className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
        >
          {isLoading ? 'Getting New Dog...' : 'Get New Dog'}
        </button>
      </div>

      {/* Current Dog Image */}
      {data?.message && (
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <div className="relative">
              <img
                src={data.message}
                alt="Random dog"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Image History */}
      {imageHistory.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Recent Good Boys
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {imageHistory.map((imageUrl, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={imageUrl}
                  alt={`Dog ${index + 1}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-2">
                  <span className="text-xs text-gray-500">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
