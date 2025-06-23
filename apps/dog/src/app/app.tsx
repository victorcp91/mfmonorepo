import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DogImages } from './dog-images';
import '../styles.css';

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <DogImages />
      </div>
    </QueryClientProvider>
  );
}

export default App;
