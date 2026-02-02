'use client';

import * as React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

// Sidebar Context
const SidebarContext = React.createContext<SidebarContextValue | null>(null);

type SidebarContextValue = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  openMobile: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  setOpenMobile: (open: boolean) => void;
};

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

// Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function SidebarProvider({ children, defaultOpen = true }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const isMobile = useIsMobile();
  const state = open ? 'expanded' : 'collapsed';

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    // Close sidebar on route change when mobile
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile]);

  const value: SidebarContextValue = {
    state,
    open,
    openMobile,
    isMobile,
    toggleSidebar,
    setOpenMobile,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

// Sidebar Component
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  collapsible?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ side = 'left', collapsible = true, className, children, ...props }, ref) => {
    const { isMobile, openMobile, setOpenMobile } = useSidebar();

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent side={side} className="w-[300px] p-0">
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-full min-h-screen w-[260px] flex-col border-r bg-background',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Sidebar.displayName = 'Sidebar';

// Sidebar Components
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1 p-4', className)}
    {...props}
  />
));
SidebarHeader.displayName = 'SidebarHeader';

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 overflow-auto py-2', className)}
    {...props}
  />
));
SidebarContent.displayName = 'SidebarContent';

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1 p-4 border-t', className)}
    {...props}
  />
));
SidebarFooter.displayName = 'SidebarFooter';

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('py-2', className)}
    {...props}
  />
));
SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-4 py-1 text-xs font-semibold text-muted-foreground', className)}
    {...props}
  />
));
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
SidebarGroupContent.displayName = 'SidebarGroupContent';

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-col gap-1', className)}
    {...props}
  />
));
SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
SidebarMenuItem.displayName = 'SidebarMenuItem';

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string;
  }
>(({ className, asChild = false, isActive = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp
      ref={ref}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isActive && 'bg-accent text-accent-foreground',
        className
      )}
      {...props}
    />
  );
});
SidebarMenuButton.displayName = 'SidebarMenuButton';

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('ml-4 flex flex-col gap-1 border-l pl-4', className)}
    {...props}
  />
));
SidebarMenuSub.displayName = 'SidebarMenuSub';

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';

const SidebarMenuSubButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
  }
>(({ className, asChild = false, isActive = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp
      ref={ref}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isActive && 'bg-accent text-accent-foreground',
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col flex-1',
      className
    )}
    {...props}
  />
));
SidebarInset.displayName = 'SidebarInset';

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      onClick={toggleSidebar}
      className={cn(
        'absolute inset-y-0 right-0 w-1 rounded-l-sm transition-all hover:w-2',
        'bg-border hover:bg-primary',
        className
      )}
      {...props}
    >
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
});
SidebarRail.displayName = 'SidebarRail';

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
};
