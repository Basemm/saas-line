import CashFlowChart from '@/app/app/_components/cashFlowChart'
import NewCustomersStat from '@/app/app/_components/newCustomersStat'
import SalesStat from '@/app/app/_components/salesStat'
import TopSellingCategoriesStat from '@/app/app/_components/topSellingCategoriesStat'
import TopSellingProductsStat from '@/app/app/_components/topSellingProductsStat'
import UniqueNewVisitorsStat from '@/app/app/_components/uniqueNewVisitorsStat'
import VisitorsStat from '@/app/app/_components/visitorsStat'
import VisitsBySourceStat from '@/app/app/_components/visitsBySourceStat'

export default function Home() {
  return (
    <main className="p-8">
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
      </div>
    </main>
  )
}
