import 'outstatic/outstatic.css'
// import { Outstatic } from 'outstatic'
import { Outstatic  } from 'outstatic';

export default async function Page(props: { params: Promise<{ ost: string[] }> }) {
  const params = await props.params;
  const ostData = await Outstatic()
//   return <OstClient ostData={ostData} params={params} />
}