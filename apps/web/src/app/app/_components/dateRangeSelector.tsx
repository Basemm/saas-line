'use client'

import { Button } from '@repo/core-ui/components/ui/button'
import { Calendar } from '@repo/core-ui/components/ui/calendar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@repo/core-ui/components/ui/dialog'
import { Label } from '@repo/core-ui/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/core-ui/components/ui/select'
import { Separator } from '@repo/core-ui/components/ui/separator'
import { toast } from '@repo/core-ui/components/ui/sonner'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

interface DateRange {
  from: Date | undefined
  to?: Date | undefined
}

export default function DateRangeSelector() {
  const [dateRange, setDateRange] = useState('monthToDate')
  const [isDateRangeSelectorOpen, setIsDateRangeSelectorOpen] = useState(false)
  const [customDateRange, setCustomDateRange] = useState<DateRange | undefined>(
    {
      from: new Date(),
    }
  )
  const [isCustomDateRangeDlgOpen, setIsCustomDateRangeDlgOpen] =
    useState(false)
  const [formattedDateRange, setFormattedDateRange] = useState('')

  function openCustomDateRangeDlg() {
    setIsCustomDateRangeDlgOpen(true)
    setIsDateRangeSelectorOpen(false)
  }

  function saveCustomDateRangeDlg() {
    if (!customDateRange?.from || !customDateRange.to) {
      toast('Error', {
        description: 'Please select a date range!',
      })
      return
    }

    setFormattedDateRange(
      `${customDateRange.from.toDateString()} - ${customDateRange.to.toDateString()}`
    )
    setDateRange('customDateRange')
    setIsCustomDateRangeDlgOpen(false)
  }

  function closeCustomDateRangeDlg() {
    setIsCustomDateRangeDlgOpen(false)
  }

  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      <Label className="text-lg">Date Range</Label>
      <Select
        onOpenChange={setIsDateRangeSelectorOpen}
        onValueChange={setDateRange}
        open={isDateRangeSelectorOpen}
        value={dateRange}
      >
        <SelectTrigger className="w-96">
          <SelectValue placeholder="Select a Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="monthToDate">Month to Date</SelectItem>
            <SelectItem value="pastMonth">Past Month</SelectItem>
            <SelectItem value="yearToDate">Year To Date</SelectItem>
            <SelectItem value="Past Year">Past Year</SelectItem>
            <SelectItem value="5year">5 Years Ago</SelectItem>
            {formattedDateRange ? (
              <SelectItem value="customDateRange">
                {formattedDateRange}
              </SelectItem>
            ) : null}
          </SelectGroup>
          <Separator />
          <Button
            className="my-1 w-full"
            onClick={openCustomDateRangeDlg}
            variant="ghost"
          >
            <CalendarIcon className="mr-2" size={16} />
            Select a Custom Date Range
          </Button>
        </SelectContent>
      </Select>

      <Dialog
        onOpenChange={setIsCustomDateRangeDlgOpen}
        open={isCustomDateRangeDlgOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Custom Date Range</DialogTitle>
            <DialogDescription>Select a Date Range</DialogDescription>
          </DialogHeader>

          <div className="inline-flex justify-center">
            <Calendar
              className="rounded-md border"
              mode="range"
              onSelect={setCustomDateRange}
              selected={customDateRange}
            />
          </div>

          <DialogFooter>
            <Button onClick={closeCustomDateRangeDlg} variant="outline">
              Cancel
            </Button>
            <Button onClick={saveCustomDateRangeDlg} type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
