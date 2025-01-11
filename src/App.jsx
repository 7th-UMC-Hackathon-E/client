import Router from './routes/router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
