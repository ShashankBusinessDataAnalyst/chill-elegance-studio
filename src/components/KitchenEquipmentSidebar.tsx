import { useState } from 'react';
import { Filter, ChefHat, Star, Tag, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

interface KitchenEquipmentSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onBadgeFilter: (badge: string | null) => void;
  activeBadgeFilter: string | null;
  onPriceFilter: (range: string | null) => void;
  activePriceFilter: string | null;
}

export function KitchenEquipmentSidebar({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  onBadgeFilter,
  activeBadgeFilter,
  onPriceFilter,
  activePriceFilter
}: KitchenEquipmentSidebarProps) {
  const priceRanges = [
    { label: 'Under $5,000', value: 'under-5000' },
    { label: '$5,000 - $10,000', value: '5000-10000' },
    { label: '$10,000 - $20,000', value: '10000-20000' },
    { label: 'Over $20,000', value: 'over-20000' }
  ];

  const badges = [
    { label: 'New Products', value: 'New' },
    { label: 'Best Sellers', value: 'Best Seller' }
  ];

  return (
    <Sidebar className="w-64 border-r">
      <SidebarContent className="p-6">
        {/* Categories */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 mb-4">
            <ChefHat className="w-4 h-4" />
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    variant={activeCategory === 'All' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => onCategoryChange('All')}
                  >
                    All Categories
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {categories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant={activeCategory === category ? 'default' : 'ghost'}
                      className="w-full justify-start text-sm"
                      onClick={() => onCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Badge Filters */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4" />
            Special Offers
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    variant={!activeBadgeFilter ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => onBadgeFilter(null)}
                  >
                    All Products
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {badges.map((badge) => (
                <SidebarMenuItem key={badge.value}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant={activeBadgeFilter === badge.value ? 'default' : 'ghost'}
                      className="w-full justify-start text-sm"
                      onClick={() => onBadgeFilter(badge.value)}
                    >
                      {badge.label}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Price Filters */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4" />
            Price Range
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    variant={!activePriceFilter ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => onPriceFilter(null)}
                  >
                    Any Price
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {priceRanges.map((range) => (
                <SidebarMenuItem key={range.value}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant={activePriceFilter === range.value ? 'default' : 'ghost'}
                      className="w-full justify-start text-sm"
                      onClick={() => onPriceFilter(range.value)}
                    >
                      {range.label}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Clear All Filters */}
        <div className="mt-auto">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              onCategoryChange('All');
              onBadgeFilter(null);
              onPriceFilter(null);
            }}
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}