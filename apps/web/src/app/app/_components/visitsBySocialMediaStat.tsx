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
import Image from 'next/image'

export default function VisitsBySocialMediaStat() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <p className="self-center">Visits By Social Media</p>
          <Button size="icon" title="Settings" variant="ghost">
            <SettingsIcon />
          </Button>
        </CardTitle>
        <CardDescription>Total Visits 95K</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableCell>
                <div className="flex items-center justify-center">
                  <Image
                    alt="Tiktok"
                    height={32}
                    src="/img/social-media/tiktok.svg"
                    width={32}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p>Tiktok</p>
                <p className="text-sm text-muted-foreground">Short videos</p>
              </TableCell>
              <TableCell>50K</TableCell>
            </TableRow>
            <TableRow className="bg-muted hover:bg-muted">
              <TableCell className="w-16">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Facebook"
                    height={32}
                    src="/img/social-media/facebook.svg"
                    width={32}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p>Facebook</p>
                <p className="text-sm text-muted-foreground">Website page</p>
              </TableCell>
              <TableCell>46K</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell className="w-16">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Instagram"
                    height={32}
                    src="/img/social-media/instagram.svg"
                    width={32}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p>Instagram</p>
                <p className="text-sm text-muted-foreground">Influencers</p>
              </TableCell>
              <TableCell>42K</TableCell>
            </TableRow>
            <TableRow className="bg-muted hover:bg-muted">
              <TableCell className="w-16">
                <div className="flex items-center justify-center">
                  <Image
                    alt="YouTube"
                    height={32}
                    src="/img/social-media/youtube.svg"
                    width={32}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p>YouTube</p>
                <p className="text-sm text-muted-foreground">Video Tutorials</p>
              </TableCell>
              <TableCell>36K</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableCell className="w-16">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Twitch"
                    height={32}
                    src="/img/social-media/twitch.svg"
                    width={32}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p>Twitch</p>
                <p className="text-sm text-muted-foreground">Video Streaming</p>
              </TableCell>
              <TableCell>32K</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
