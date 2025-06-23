import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { JokesList } from './jokes-list';
import '../styles.css';

// Create a client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <JokesList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
