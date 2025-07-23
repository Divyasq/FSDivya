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
  User
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
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'staff', label: 'Staff', icon: Users },
  { id: 'money', label: 'Money', icon: Building2 },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'add-more', label: 'Add more', icon: Grid3X3 }
];

export function LeftNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [expandedSubmenuItems, setExpandedSubmenuItems] = useState<string[]>(['items-main']);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMainItemClick = (item: NavItem) => {
    if (item.hasSubmenu) {
      // Always open submenu with left-to-right animation when clicking main item
      setActiveItem(item.id);
      setIsSubmenuOpen(true);
    } else {
      setActiveItem(item.id);
      setIsSubmenuOpen(false);
      
      // Navigate to routes for main items
      if (item.id === 'home') {
        navigate('/');
      }
    }
  };

  const handleSubmenuItemClick = (subItem: SubMenuItem) => {
    if (subItem.hasSubmenu) {
      toggleSubmenuItem(subItem.id);
    } else {
      // Navigate to specific routes based on submenu items
      if (subItem.id === 'items-main') {
        navigate('/items');
        // Close submenu after navigation
        setIsSubmenuOpen(false);
      }
    }
  };

  const handleBackClick = () => {
    // Close submenu with right-to-left animation
    setIsSubmenuOpen(false);
  };

  const toggleSubmenuItem = (itemId: string) => {
    setExpandedSubmenuItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const activeNavItem = mainNavItems.find(item => item.id === activeItem);

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
        {/* Main Menu */}
        <div 
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-in-out",
            isSubmenuOpen ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <div className="py-2 h-full overflow-y-auto">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              // Determine if item is active based on current route and navigation state
              let isActive = false;
              
              if (item.id === 'home') {
                isActive = location.pathname === '/';
              } else if (item.id === 'items') {
                isActive = location.pathname === '/items' || activeItem === 'items';
              } else {
                isActive = activeItem === item.id;
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

        {/* Submenu */}
        {activeNavItem?.hasSubmenu && (
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out bg-gray-100",
              isSubmenuOpen ? "translate-x-0" : "translate-x-full"
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
                  <h2 className="font-medium text-gray-900">{activeNavItem.label}</h2>
                </div>
              </div>

              {/* Submenu Items */}
              <div className="py-2">
                {activeNavItem.submenuItems?.map((subItem) => (
                  <div key={subItem.id}>
                    <button
                      onClick={() => handleSubmenuItemClick(subItem)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors font-normal",
                        subItem.id === 'items-main' 
                          ? "text-blue-600" 
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