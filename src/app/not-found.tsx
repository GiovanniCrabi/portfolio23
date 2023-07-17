import Link from 'next/link';
import { Button } from './components/button';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold text-emerald-500">404</h1>
      <h2 className="text-3xl font-medium text-gray-400 mb-4">
        Page not found
      </h2>
      <Link href="/">
        <Button>
          <HiArrowNarrowLeft size={20} />
          Back to a home
        </Button>
      </Link>
    </div>
  );
}
