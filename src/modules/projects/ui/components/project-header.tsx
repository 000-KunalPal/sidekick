import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronLeftIcon, SunMoonIcon } from "lucide-react";

interface ProjectHeaderProps {
  projectId: string;
}

export const ProjectHeader = ({ projectId }: ProjectHeaderProps) => {
  const trpc = useTRPC();
  const { data: project } = useSuspenseQuery(
    trpc.projects.getOne.queryOptions({ id: projectId })
  );

  const { theme, setTheme } = useTheme();

  return (
    <header className='p-2 flex justify-between items-center border-b'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='focus-visible:ring-0 hover:bg-transparent hover:opacity-75 transition-opacity pl-2'
          >
            <Image src='/logo.png' alt='SideKick AI' width={36} height={36} />
            <span className='text-sm font-medium'>{project.name}</span>
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='bottom' align='start'>
          <DropdownMenuItem asChild>
            <Link href='/'>
              <ChevronLeftIcon />
              <span>Go to Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className='gap-2'>
              <SunMoonIcon className='size-4 text-muted-foreground' />
              <span>Appearance</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem value='light'>
                    <span>Light</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='dark'>
                    <span>Dark</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='system'>
                    <span>System</span>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
