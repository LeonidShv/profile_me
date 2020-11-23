import { useAPI } from './useAPI';

export default function App() {
  const [data, error, status, refetch] = useAPI("https://www.superheroapi.com/api.php/789760065177319/search/batman");

  if (status === 'idle' || !data && status !== 'error') {
    return <div>Loading...</div>
  } else if (status === 'success') {
    return <div>Hi, {data}</div>
  } else if (status === 'error') {
    return (
      <div>
        <p>Oops! Something went wrong.</p>
        <p>{error?.message || error}</p>
        <button>Retry</button>
      </div>
    )
  } else {
    return '';
  }
}
