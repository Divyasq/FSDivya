import React from 'react';
import { ChevronDown, X, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/Button';
import { useReports } from '../../context/ReportsContext';

export function ReportsFilters() {
  const { state, updateFilters } = useReports();

  const filterOptions = [
    {
      label: 'Report type',
      value: 'Summary',
      options: ['Summary', 'Detailed', 'Custom']
    },
    {
      label: 'Locations',
      value: state.filters.location,
      options: ['All', 'Location 1', 'Location 2', 'Location 3']
    },
    {
      label: 'View',
      value: 'Gauge',
      options: ['Gauge', 'Table', 'Chart']
    },
    {
      label: 'Group metric by',
      value: state.filters.groupBy,
      options: ['All', 'Category', 'Item', 'Staff']
    },
    {
      label: 'Filter by',
      value: state.filters.timeframe,
      options: ['All day', 'Morning', 'Afternoon', 'Evening']
    }
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-700">Metrics</span>
          <span className="text-gray-500">Gross sales & 25 others</span>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400">
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          {filterOptions.map((filter, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="text-xs text-gray-500">{filter.label}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs bg-gray-100 hover:bg-gray-200"
              >
                {filter.value}
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </div>
          ))}
          
          {/* Active filter indicator */}
          <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            <span className="text-xs">Timeframe: All day</span>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-blue-600 hover:bg-blue-200">
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          <Button variant="ghost" size="sm" className="text-xs text-gray-500">
            Filter by
          </Button>
        </div>
      </div>
    </div>
  );
}
