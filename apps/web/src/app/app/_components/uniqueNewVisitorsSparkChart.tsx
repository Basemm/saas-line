import { SparkAreaChart } from '@tremor/react'

const chartData = [
  {
    month: 'Jan 21',
    Performance: 5000,
  },
  {
    month: 'Feb 21',
    Performance: 6000,
  },
  {
    month: 'Mar 21',
    Performance: 3000,
  },
  {
    month: 'Apr 21',
    Performance: 3500,
  },
  {
    month: 'May 21',
    Performance: 6000,
  },
]

export default function UniqueNewVisitorsSparkChart() {
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
