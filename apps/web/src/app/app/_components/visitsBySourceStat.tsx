import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@repo/core-ui/components/ui/table'
import { SettingsIcon } from 'lucide-react'

export default function VisitsBySourceStat() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <p className="self-center">Visits By Source</p>
          <Button size="icon" title="Settings" variant="ghost">
            <SettingsIcon />
          </Button>
        </CardTitle>
        <CardDescription>Total Visits 206K</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableCell className="w-16">
                <p className="items-middle flex justify-center rounded-full border border-dashed border-muted-foreground">
                  1
                </p>
              </TableCell>
              <TableCell>
                <p>Direct</p>
                <p className="text-sm text-muted-foreground">
                  Access by direct links
                </p>
              </TableCell>
              <TableCell>50K</TableCell>
            </TableRow>
            <TableRow className="bg-muted hover:bg-muted">
              <TableCell className="w-16">
                <p className="items-middle flex justify-center rounded-full border border-dashed border-muted-foreground">
                  2
                </p>
              </TableCell>
              <TableCell>
                <p>Social Media</p>
                <p className="text-sm text-muted-foreground">
                  TikTok, Instagram, ...
                </p>
              </TableCell>
              <TableCell>46K</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell className="w-16">
                <p className="items-middle flex justify-center rounded-full border border-dashed border-muted-foreground">
                  3
                </p>
              </TableCell>
              <TableCell>
                <p>Referrals</p>
                <p className="text-sm text-muted-foreground">
                  Referred to by existing users
                </p>
              </TableCell>
              <TableCell>42K</TableCell>
            </TableRow>
            <TableRow className="bg-muted hover:bg-muted">
              <TableCell className="w-16">
                <p className="items-middle flex justify-center rounded-full border border-dashed border-muted-foreground">
                  4
                </p>
              </TableCell>
              <TableCell>
                <p>Influencers</p>
                <p className="text-sm text-muted-foreground">
                  Brand ambassadors
                </p>
              </TableCell>
              <TableCell>36K</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell className="w-16">
                <p className="items-middle flex justify-center rounded-full border border-dashed border-muted-foreground">
                  5
                </p>
              </TableCell>
              <TableCell>
                <p>Search Engines</p>
                <p className="text-sm text-muted-foreground">Google, Bing,..</p>
              </TableCell>
              <TableCell>32K</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
