import { VFC } from 'react'
import Link from 'next/link'
import { useQueryClient } from 'react-query'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'
import { RocketItem } from '../components/RocketItem'
import { Rocket } from '../types/types'

const ReadCache = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')
  return (
    <Layout title="read cache">
      <p className="my-5 text-xl font-bold text-blue-500">
        Read out cache data
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <Link href="/" passHref>
        <div className="flex items-center mt-20 cursor-pointer">
          <ChevronDoubleLeftIcon className="w-5 h-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReadCache
