import dynamic from 'next/dynamic';
const Outstatic = dynamic(() => import('outstatic'), { ssr: false });

export default function Admin() {
  return <Outstatic />;
}
