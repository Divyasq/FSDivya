import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReports } from '../../context/ReportsContext';
import { cn } from '../../utils/cn';
import { GrossSalesTableModal } from './GrossSalesTableModal';

interface SalesLineItemProps {
  label: string;
  amount: number;
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  level?: number;
  hasRedDot?: boolean;
  isClickable?: boolean;
}

function SalesLineItem({ 
  label, 
  amount, 
  isExpandable = false, 
  isExpanded = false, 
  onToggle, 
  onClick,
  children, 
  level = 0,
  hasRedDot = false,
  isClickable = false
}: SalesLineItemProps) {
  const formatAmount = (value: number) => {
    const formatted = Math.abs(value).toFixed(2);
    return value < 0 ? `($${formatted})` : `$${formatted}`;
  };

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle();
    }
  };

  const handleAmountClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isClickable && onClick) {
      onClick();
    }
  };

  return (
    <div>
      <div className={cn(
        "flex items-center justify-between py-2 transition-colors",
        level > 0 && "pl-6"
      )}>
        <div className="flex items-center gap-2">
          {isExpandable && (
            <button 
              className="p-0.5 hover:bg-gray-100 rounded"
              onClick={handleToggleClick}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3 text-gray-400" />
              ) : (
                <ChevronRight className="h-3 w-3 text-gray-400" />
              )}
            </button>
          )}
          {!isExpandable && level > 0 && <div className="w-4" />}
          
          <div className="flex items-center gap-2">
            {hasRedDot && (
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            )}
            <span className={cn(
              "text-sm",
              level === 0 ? "font-medium text-gray-900" : "text-gray-700"
            )}>
              {label}
            </span>
          </div>
        </div>
        
        <span 
          className={cn(
            "text-sm font-medium cursor-pointer hover:bg-blue-50 px-2 py-1 rounded",
            amount < 0 ? "text-red-600" : "text-gray-900",
            isClickable && "hover:text-blue-600"
          )}
          onClick={handleAmountClick}
        >
          {formatAmount(amount)}
        </span>
      </div>
      
      {isExpanded && children && (
        <div className="border-l border-gray-200 ml-3">
          {children}
        </div>
      )}
    </div>
  );
}

export function SalesBreakdown() {
  const { state } = useReports();
  const { salesData } = state;
  const navigate = useNavigate();
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    grossSales: true,
    serviceCharges: false,
    discountsAndComps: false,
    netSales: false,
    giftCardSales: false,
    taxes: false,
    tips: false,
    totalSales: false,
    totalPayments: true,
    fees: true
  });

  const [isGrossSalesModalOpen, setIsGrossSalesModalOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavigateToTransactions = (transactionType?: string) => {
    // Navigate to transactions page with appropriate filters
    navigate('/transactions', { 
      state: { 
        filterType: transactionType,
        dateRange: state.filters.dateRange 
      } 
    });
  };

  return (
    <div className="bg-white">
      <div className="divide-y divide-gray-100">
        {/* Gross Sales */}
        <SalesLineItem
          label="Gross sales"
          amount={salesData.items + salesData.serviceCharges.covidServiceCharge + salesData.serviceCharges.setupCost + salesData.serviceCharges.autoGratuity}
          isExpandable={true}
          isExpanded={expandedSections.grossSales}
          onToggle={() => toggleSection('grossSales')}
          isClickable={true}
          onClick={() => setIsGrossSalesModalOpen(true)}
        >
          <SalesLineItem 
            label="Items" 
            amount={salesData.items} 
            level={1}
            isClickable={true}
            onClick={() => handleNavigateToTransactions('sale')}
          />
          <SalesLineItem 
            label="Service charges" 
            amount={salesData.serviceCharges.covidServiceCharge + salesData.serviceCharges.setupCost + salesData.serviceCharges.autoGratuity}
            level={1}
            isClickable={true}
            onClick={() => handleNavigateToTransactions('service')}
          />
        </SalesLineItem>

        {/* Returns */}
        <SalesLineItem
          label="Returns"
          amount={salesData.returns}
          hasRedDot={true}
          isClickable={true}
          onClick={() => handleNavigateToTransactions('refund')}
        />

        {/* Discounts & Comps */}
        <SalesLineItem
          label="Discounts & comps"
          amount={salesData.discountsAndComps}
          isExpandable={true}
          isExpanded={expandedSections.discountsAndComps}
          onToggle={() => toggleSection('discountsAndComps')}
          hasRedDot={true}
          isClickable={true}
          onClick={() => handleNavigateToTransactions('comp')}
        />

        {/* Net Sales */}
        <SalesLineItem
          label="Net sales"
          amount={salesData.netSales}
          isExpandable={true}
          isExpanded={expandedSections.netSales}
          onToggle={() => toggleSection('netSales')}
          hasRedDot={true}
          isClickable={true}
          onClick={() => handleNavigateToTransactions()}
        />

        {/* Gift Card Sales */}
        <SalesLineItem
          label="Gift card sales"
          amount={salesData.giftCardSales}
          isExpandable={true}
          isExpanded={expandedSections.giftCardSales}
          onToggle={() => toggleSection('giftCardSales')}
          hasRedDot={true}
        />

        {/* Taxes */}
        <SalesLineItem
          label="Taxes"
          amount={salesData.taxes}
          isExpandable={true}
          isExpanded={expandedSections.taxes}
          onToggle={() => toggleSection('taxes')}
          hasRedDot={true}
        />

        {/* Tips */}
        <SalesLineItem
          label="Tips"
          amount={salesData.tips}
          isExpandable={true}
          isExpanded={expandedSections.tips}
          onToggle={() => toggleSection('tips')}
          hasRedDot={true}
        />

        {/* Total Sales */}
        <SalesLineItem
          label="Total sales"
          amount={salesData.totalSales}
          isExpandable={true}
          isExpanded={expandedSections.totalSales}
          onToggle={() => toggleSection('totalSales')}
          isClickable={true}
          onClick={() => handleNavigateToTransactions()}
        >
          <div className="text-xs text-gray-500 px-4 py-1">
            32 transactions
          </div>
        </SalesLineItem>

        {/* Total Payments Collected */}
        <SalesLineItem
          label="Total payments collected"
          amount={salesData.totalPaymentsCollected}
          isExpandable={true}
          isExpanded={expandedSections.totalPayments}
          onToggle={() => toggleSection('totalPayments')}
          isClickable={true}
          onClick={() => handleNavigateToTransactions()}
        >
          {salesData.paymentMethods.map((method, index) => (
            <SalesLineItem
              key={index}
              label={method.method}
              amount={method.amount}
              level={1}
            />
          ))}
        </SalesLineItem>

        {/* Fees */}
        <SalesLineItem
          label="Fees"
          amount={salesData.fees.squarePaymentProcessingFees}
          isExpandable={true}
          isExpanded={expandedSections.fees}
          onToggle={() => toggleSection('fees')}
        >
          <SalesLineItem
            label="Square payment processing fees"
            amount={salesData.fees.squarePaymentProcessingFees}
            level={1}
          />
        </SalesLineItem>

        {/* Net Total */}
        <div className="pt-4 border-t-2 border-gray-200">
          <SalesLineItem
            label="Net total"
            amount={salesData.netTotal}
          />
        </div>
      </div>

      {/* Gross Sales Table Modal */}
      <GrossSalesTableModal
        isOpen={isGrossSalesModalOpen}
        onClose={() => setIsGrossSalesModalOpen(false)}
      />
    </div>
  );
}
