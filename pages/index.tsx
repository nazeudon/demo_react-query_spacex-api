import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useQueryRockets } from '../hooks/useQueryRockets'
import { RocketItem } from '../components/RocketItem'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export default function Home() {
  const { data, status } = useQueryRockets()
  if (status === 'loading') return <Layout title="home">Loading...</Layout>
  if (status === 'error') return <Layout title="home">Error...</Layout>

  return (
    <Layout title="home">
      <p className="my-5 text-xl font-bold text-blue-500">
        Fetching by useQuery
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <Link href="/read_cache" passHref>
        <div className="flex items-center mt-20 cursor-pointer">
          <ChevronDoubleRightIcon className="w-5 h-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}
