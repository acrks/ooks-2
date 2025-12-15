import Link from 'next/link';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, navigationMenuTriggerStyle } from '../ui/navigation-menu';

export function HeaderMenu() {
    return (
      <div className="w-full flex justify-center border-b-2 border-solid border-gray-300">
        <NavigationMenu>
            <NavigationMenuList className='flex-wrap'>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/lists">Lists</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/meeting-organizer">Meeting Organizer</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    );
};