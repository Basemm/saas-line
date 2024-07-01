import { SparkAreaChart } from '@tremor/react'

const chartData = [
  {
    month: 'Jan 21',
    Performance: 3000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
  },
  {
    month: 'Apr 21',
    Performance: 3780,
  },
  {
    month: 'May 21',
    Performance: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
  },
  {
    month: 'Jul 21',
    Performance: 4000,
  },
]

export default function NewCustomersSparkChart() {
  return (
    <div className="flex justify-center">
      <SparkAreaChart
        categories={['Performance']}
        className="h-10 w-80"
        colors={['green-700']}
        data={chartData}
        index="month"
      />
    </div>
  )
}
