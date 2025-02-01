import CashFlowChart from '@/app/app/_components/cashFlowChart'
import DateRangeSelector from '@/app/app/_components/dateRangeSelector'
import NewCustomersStat from '@/app/app/_components/newCustomersStat'
import SalesStat from '@/app/app/_components/salesStat'
import TopSellingCategoriesStat from '@/app/app/_components/topSellingCategoriesStat'
import TopSellingProductsStat from '@/app/app/_components/topSellingProductsStat'
import UniqueNewVisitorsStat from '@/app/app/_components/uniqueNewVisitorsStat'
import VisitorsStat from '@/app/app/_components/visitorsStat'
import VisitsByCountry from '@/app/app/_components/visitsByCountry'
import VisitsBySocialMediaStat from '@/app/app/_components/visitsBySocialMediaStat'
import VisitsBySourceStat from '@/app/app/_components/visitsBySourceStat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Line - Dashboard',
  description: 'Dashboard',
}

export default function AppHomePage() {
  return (
    <main className="p-8 pt-0">
      <DateRangeSelector />

      <div className="grid justify-center gap-8 lg:grid-cols-2">
        <div className="grid auto-rows-fr gap-8 sm:grid-cols-2">
          <SalesStat />
          <NewCustomersStat />
          <VisitorsStat />
          <UniqueNewVisitorsStat />
        </div>

        <div>
          <h3 className="text-center text-muted-foreground">Cash Flow</h3>
          <CashFlowChart />
        </div>
      </div>

      <div className="my-8 grid gap-8 lg:grid-cols-3">
        <TopSellingCategoriesStat />
        <TopSellingProductsStat />
      </div>

      <div className="my-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <VisitsBySourceStat />
        <VisitsByCountry />
        <VisitsBySocialMediaStat />
      </div>
    </main>
  )
}
