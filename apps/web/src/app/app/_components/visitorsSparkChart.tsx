import { SparkAreaChart } from '@tremor/react'

const chartData = [
  {
    month: 'Jan 21',
    Performance: 4000,
  },
  {
    month: 'Feb 21',
    Performance: 3500,
  },
  {
    month: 'Mar 21',
    Performance: 3800,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
  },
  {
    month: 'May 21',
    Performance: 2999,
  },
  {
    month: 'Jun 21',
    Performance: 2700,
  },
]

export function VisitorsSparkChart() {
  return (
    <div className="flex justify-center">
      <SparkAreaChart
        categories={['Performance']}
        className="h-10 w-80"
        colors={['red-700']}
        data={chartData}
        index="month"
      />
    </div>
  )
}
