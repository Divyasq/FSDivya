import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  Home, 
  Package, 
  FileText, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Users, 
  Building2, 
  Settings, 
  Grid3X3,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Bell,
  MessageCircle,
  HelpCircle,
  User,
  Bot,
  GraduationCap,
  TrendingUp,
  Activity
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
}

const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { 
    id: 'items', 
    label: 'Items & services', 
    icon: Package, 
    hasSubmenu: true,
    submenuItems: [
      { id: 'items-main', label: 'Items' },
      { id: 'item-library', label: 'Item library' },
      { id: 'channel-listings', label: 'Channel listings' },
      { id: 'service-library', label: 'Service library' },
      { id: 'image-library', label: 'Image library' },
      { id: 'modifiers', label: 'Modifiers' },
      { id: 'categories', label: 'Categories' },
      { id: 'discounts', label: 'Discounts' },
      { id: 'options', label: 'Options' },
      { id: 'units', label: 'Units' },
      { id: 'custom-attributes', label: 'Custom attributes' },
      { id: 'settings', label: 'Settings', hasSubmenu: true },
      { id: 'gift-cards', label: 'Gift Cards', hasSubmenu: true },
      { id: 'subscription-plans', label: 'Subscription plans' }
    ]
  },
  { id: 'invoices', label: 'Invoices & payments', icon: FileText },
  { id: 'online', label: 'Online', icon: Globe },
  { id: 'customers', label: 'Customers', icon: CreditCard },
  { 
    id: 'financial-suite', 
    label: 'Financial Suite', 
    icon: BarChart3,
    hasSubmenu: true,
    submenuItems: [
      { id: 'financial-dashboard', label: 'Dashboard' },
      { id: 'deferred-sales', label: 'Deferred Sales' },
      { 
        id: 'reports', 
        label: 'Reports', 
        hasSubmenu: true,
        submenuItems: [
          { id: 'sales-summary', label: 'Sales summary' },
          { id: 'sales-by-location', label: 'Sales by location' },
          { id: 'sales-by-time', label: 'Sales by time' },
          { id: 'sales-by-category', label: 'Sales by category' },
          { id: 'sales-by-item', label: 'Sales by item' },
          { id: 'discounts-comps', label: 'Discounts & comps' },
          { id: 'taxes', label: 'Taxes' },
          { id: 'payments', label: 'Payments' },
          { id: 'cash-drawer', label: 'Cash drawer' },
          { id: 'deposits', label: 'Deposits' },
          { id: 'employee-timecards', label: 'Employee timecards' },
          { id: 'gratuity', label: 'Gratuity' },
          { id: 'items-sold', label: 'Items sold' },
          { id: 'modifier-sold', label: 'Modifier sold' },
          { id: 'customer-directory', label: 'Customer directory' }
        ]
      },
      { id: 'custom-reports', label: 'Custom Reports' },
      { id: 'migration-status', label: 'Migration Status' }
    ]
  },
  { id: 'staff', label: 'Staff', icon: Users },
  { id: 'money', label: 'Money', icon: Building2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'add-more', label: 'Add more', icon: Grid3X3 }
];

export function LeftNav() {
  const [currentView, setCurrentView] = useState<string>('main'); // 'main' or item.id for submenu view
  const [expandedSubmenuItems, setExpandedSubmenuItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMainItemClick = (item: NavItem) => {
    if (item.hasSubmenu) {
      // Switch to submenu view
      setCurrentView(item.id);
    } else {
      // Navigate to routes for main items
      if (item.id === 'home') {
        navigate('/');
      } else if (item.id === 'reports') {
        navigate('/reports');
      } else if (item.id === 'education') {
        navigate('/education');
      }
    }
  };

  const handleSubmenuItemClick = (subItem: SubMenuItem, parentId: string) => {
    if (subItem.hasSubmenu) {
      toggleSubmenuItem(subItem.id);
    } else {
      // Navigate to specific routes based on submenu items
      if (subItem.id === 'items-main') {
        navigate('/items');
      } else if (subItem.id === 'financial-dashboard') {
        navigate('/financial-suite');
      } else if (subItem.id === 'deferred-sales') {
        navigate('/deferred-sales');
      } else if (subItem.id === 'reports') {
        // This will show the reports submenu
        toggleSubmenuItem(subItem.id);
      } else if (subItem.id === 'custom-reports') {
        navigate('/financial-suite/custom-reports');
      } else if (subItem.id === 'migration-status') {
        navigate('/migration-status');
      } else if (subItem.id === 'sales-summary') {
        navigate('/financial-suite/reports/sales-summary');
      }
    }
  };

  const handleBackClick = () => {
    setCurrentView('main');
  };

  const toggleSubmenuItem = (itemId: string) => {
    setExpandedSubmenuItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const currentNavItem = mainNavItems.find(item => item.id === currentView);

  return (
    <div className="relative w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Search Bar */}
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-hidden relative">
        {/* Main Menu View */}
        <div 
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-in-out",
            currentView !== 'main' ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <div className="py-2 h-full overflow-y-auto">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              
              // Determine if item is active based on current route
              let isActive = false;
              if (item.id === 'home') {
                isActive = location.pathname === '/';
              } else if (item.id === 'items') {
                isActive = location.pathname === '/items' || location.pathname.startsWith('/items');
              } else if (item.id === 'reports') {
                isActive = location.pathname.startsWith('/reports');
              } else if (item.id === 'education') {
                isActive = location.pathname.startsWith('/education');
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMainItemClick(item)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-2.5 text-left transition-colors font-normal",
                    isActive 
                      ? "bg-blue-100 text-blue-600" 
                      : "text-gray-700 hover:bg-gray-200"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submenu View */}
        {currentNavItem?.hasSubmenu && (
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out bg-gray-50",
              currentView === currentNavItem.id ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="h-full overflow-y-auto">
              {/* Submenu Header */}
              <div className="p-3 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleBackClick}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <h2 className="font-medium text-gray-900">{currentNavItem.label}</h2>
                </div>
              </div>

              {/* Submenu Items */}
              <div className="py-2">
                {currentNavItem.submenuItems?.map((subItem) => (
                  <div key={subItem.id}>
                    <button
                      onClick={() => handleSubmenuItemClick(subItem, currentNavItem.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors font-normal",
                        (subItem.id === 'items-main' && location.pathname === '/items') ||
                        (subItem.id === 'deferred-sales' && location.pathname === '/deferred-sales') ||
                        (subItem.id === 'sales-summary' && location.pathname === '/reports/sales-summary')
                          ? "text-blue-600 bg-blue-100" 
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <span>{subItem.label}</span>
                      {subItem.hasSubmenu && (
                        expandedSubmenuItems.includes(subItem.id) ? (
                          <ChevronUp className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        )
                      )}
                    </button>
                    
                    {/* Nested submenu items if expanded */}
                    {subItem.hasSubmenu && expandedSubmenuItems.includes(subItem.id) && (
                      <div className="bg-gray-100">
                        {subItem.submenuItems?.map((nestedItem) => (
                          <button
                            key={nestedItem.id}
                            onClick={() => handleSubmenuItemClick(nestedItem, subItem.id)}
                            className={cn(
                              "w-full flex items-center px-8 py-2 text-left transition-colors font-normal text-sm",
                              nestedItem.id === 'sales-summary' && location.pathname.includes('sales-summary')
                                ? "text-blue-600 bg-blue-100" 
                                : "text-gray-700 hover:bg-gray-200"
                            )}
                          >
                            <span>{nestedItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        {/* Bottom Icons */}
        <div className="flex justify-center space-x-6 py-3">
          <button className="relative p-2 hover:bg-gray-100 rounded transition-colors">
            <Bell className="h-4 w-4 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              1
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <MessageCircle className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <HelpCircle className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-3 border-t border-gray-200">
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded transition-colors">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-900">Tech for Product</span>
            </div>
            <ChevronLeft className="h-4 w-4 text-gray-400 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}