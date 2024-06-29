'use client'

import { ProgressCircle } from '@tremor/react'

export function SalesProgressChart() {
  return (
    <div className="flex justify-center">
      <ProgressCircle size="md" value={78}>
        <span className="text-xs font-medium">78%</span>
      </ProgressCircle>
    </div>
  )
}
