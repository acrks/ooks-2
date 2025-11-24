import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '../ui/navigation-menu';

const currentDate: Date = new Date();

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

export function HeaderMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList className='flex-wrap'>
                {components.map((component) => (
                    <NavigationMenuItem key={component.title}>
                    </NavigationMenuItem>
                        ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};