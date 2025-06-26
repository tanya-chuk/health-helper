import { redirect } from 'next/navigation';
import { routes } from '@/app/(routes)/routes';

export default function Home() {
  redirect(routes.anamnesis);
}
