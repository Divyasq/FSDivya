# Square Education Modules - Complete Content

## Module 1: Understanding Sales Metrics

**Duration:** 20 minutes  
**Difficulty:** Beginner  
**Description:** Understanding how Gross Sales, Net Sales, and Total Line Items are calculated and when they are reported

### Sections

#### Section 1: Sales Metrics Definitions
**Content:** Learn the fundamental definitions and formulas for key sales metrics used in Square reporting.

**Example: Core Sales Metrics**
- Gross Sales = Price + Service Charges (Total amount before deductions)
- Net Sales = Gross Sales - Discounts - Comps - Returns (Amount after deductions)
- Total Line Item = Net Sales - Partial Refunds + Tax (Final amount with tax adjustments)
- Result: These metrics build upon each other in sequence

#### Section 2: Gross Sales
**Content:** Gross Sales = Price + Service Charges. This represents the total amount charged to customers before any deductions. It includes the base price of items plus any service charges.

**Example: Basic Gross Sales**
- Scenario: Customer orders a $25 meal with $3 delivery fee
- Item Price: $25.00 (Base price of the meal)
- Service Charges: $3.00 (Delivery fee)
- Gross Sales: $25.00 + $3.00 = $28.00 (Total before deductions)

#### Section 3: Net Sales
**Content:** Net Sales = Gross Sales - Discounts - Comps - Returns. This is calculated by taking Gross Sales and subtracting discounts, comps (complimentary items), and returns.

**Example: Net Sales with Discount**
- Scenario: Customer has $28 gross sales with a $5 discount applied
- Gross Sales: $28.00 (Starting amount)
- Discounts: -$5.00 (Applied discount)
- Comps: $0.00 (No complimentary items)
- Returns: $0.00 (No returns)
- Net Sales: $28.00 - $5.00 = $23.00 (Final net amount)

#### Section 4: Total Line Item
**Content:** Total Line Item = Net Sales - Partial Refunds + Tax. This is the final amount calculated as Net Sales minus partial refunds (refunds by amount) plus tax.

**Example: Complete Calculation**
- Scenario: Customer with $23 net sales, $2 partial refund, and $1.68 tax
- Net Sales: $23.00 (After discounts and comps)
- Partial Refunds: -$2.00 (Refund by amount)
- Tax: +$1.68 (Applied tax)
- Total Line Item: $23.00 - $2.00 + $1.68 = $22.68 (Final amount)

#### Section 5: When Metrics Are Reported
**Content:** Understanding when sales metrics are calculated and reported in your Square dashboard.

**Example: Sales Metrics Reporting**
- All sales metrics follow the same reporting schedule
- Gross Sales: Reported when payment is completed (Payment completion triggers reporting)
- Net Sales: Reported when payment is completed (Same timing as Gross Sales)
- Total Line Item: Reported when payment is completed (Same timing as other sales metrics)
- Result: All sales metrics are reported simultaneously when payment completes

### FAQs

**Q: When are Gross/Net Sales reported?**
A: All sales metrics (Gross Sales, Net Sales, Total Line Item) are calculated and reported when the payment is completed.
Examples:
- Payment completion triggers metric calculation
- Pending payments do not affect sales metrics
- All sales metrics use the same reporting time

**Q: What counts as service charges in Gross Sales?**
A: Service charges include delivery fees, processing fees, convenience charges, and any additional fees beyond the base item price.
Examples:
- Delivery fee: $3.00
- Processing fee: $1.50
- Convenience charge: $2.00

**Q: What are partial refunds in the Total Line Item calculation?**
A: Partial refunds are refunds by amount (not full item returns). They reduce the Total Line Item but not the Net Sales.
Examples:
- $5 refund on a $20 item
- Refund for damaged portion of order
- Customer dissatisfaction adjustment

**Q: What are comps in the Net Sales calculation?**
A: Comps (complimentary items) are free items given to customers, which reduce the Net Sales amount.
Examples:
- Free appetizer
- Complimentary drink
- Manager comp for service issue

---

## Module 2: Understanding Sales and Payments Metrics Differences

**Duration:** 30 minutes  
**Difficulty:** Intermediate  
**Description:** Learn why sales and payment metrics can differ and when each is reported

### Sections

#### Section 1: When Sales vs Payments Are Reported
**Content:** Understanding the fundamental difference in timing between sales and payment reporting.

**Example: Sales vs Payments Reporting Timeline**
- Understanding when each metric is recorded
- Sales Metrics: When payment is completed (Reported when payment finishes processing successfully)
- Payment Metrics: When payment is initiated (Reported when payment starts with specific exceptions)
- Result: This timing difference creates discrepancies in your reports

#### Section 2: General Payment Scenarios
**Content:** Common scenarios that cause differences between sales and payment timing.

**Example 1: Sale with Single Payment**
- Standard transaction with one payment method
- Sale Timing: Payment completed time (When the payment finishes processing)
- Payment Timing: When customer presents payment method (except Gift Cards: payment complete, Bank Transfers: payment completed time)
- Result: Most common scenario with minimal timing differences

**Example 2: Credit Card Processing Delay**
- Unintentional delays due to server-side processing issues
- Sale Timing: Payment completed time (When payment actually completes despite delays)
- Payment Timing: When customer presents payment method (When customer initially presented payment method)
- Result: Network latency or server delays can cause timing discrepancies

**Example 3: Cash Payment System Issue**
- Internal system failure affecting payment record timing
- Sale Timing: Payment completed time (When cash payment is actually completed)
- Payment Timing: When customer presents payment method (when system recovers) (When system failure is resolved and record is created)
- Result: System failures can create gaps between sale and payment recording

#### Section 3: Edge Cases and Special Payment Methods
**Content:** Special payment scenarios that have unique timing behaviors.

**Example 1: Pre-Authorization**
- Payments are reported when customer presents payment method, sales when payment completes
- Sale Timing: Payment completed time (When payment is captured and sale completes)
- Payment Timing: When customer presents payment method (except Gift Cards: payment complete, Bank Transfers: payment completed time)
- Result: May show differences when sales fall outside of midnight windows

**Example 2: Tipping on Paper Receipts**
- Open orders where payment method is presented after order creation
- Sale Timing: When order is created (Sale recorded when order is initially created)
- Payment Timing: When customer presents payment method (except Gift Cards: payment complete, Bank Transfers: payment completed time)
- Result: Used for paper receipts and open orders where payment happens after order creation

**Example 3: Offline Payments**
- Payments taken offline and synced later
- Sale Timing: Bill/Order completed_at time (When seller took the payment offline)
- Payment Timing: Auth time when payment comes back online (When offline payment syncs back to system)
- Result: Offline mode creates timing gaps when payments sync back online

**Example 4: ACH Payments**
- Bank transfer payments with processing delays
- Sale Timing: Payment completed/Capture time (When ACH payment is completed)
- Payment Timing: Payment completed/Capture time (Same as sale timing for ACH)
- Result: Both metrics align for ACH payments due to processing requirements

#### Section 4: Complex Payment Scenarios
**Content:** Advanced scenarios involving multiple payments or special account types.

**Example 1: Sale with Split Payments**
- Multiple payment methods for single sale
- Sale Timing: Last completed payment (Sale timing depends on when final payment completes)
- Payment Timing: When customer presents payment method (except Gift Cards: payment complete, Bank Transfers: bankTransaction.completedAt)
- Result: Sale timing depends on final payment completion

**Example 2: Sale with Multiple Payments via Invoice**
- Invoice paid in multiple installments
- Sale Timing: When final payment is complete (Sale not recorded until invoice is fully paid)
- Payment Timing: When customer presents payment method (Gift Cards: when completed, Bank Transfers: when completed)
- Result: Sale not recorded until invoice is fully paid

**Example 3: House Account**
- Credit account payments
- Sale Timing: When order is placed (Sale recorded immediately when order is created)
- Payment Timing: As House account balances are paid (Payments recorded when account is settled)
- Result: Sale recorded immediately, payments recorded when account is settled

#### Section 5: Understanding Bank Transfers
**Content:** Deep dive into how bank transfers affect sales and payment reporting.

**Example: Bank Transfer Timing Rules**
- How bank transfers are handled differently from other payment methods
- Standard Payments: When customer presents payment method (Most payments report when customer presents payment method)
- Bank Transfers: Payment completed time (Bank transfers report when completed, aligning with sales timing)
- Why Different: Processing requirements (Bank transfers require completion confirmation before reporting)
- Result: Bank transfers align more closely with sales timing than other payment methods

### FAQs

**Q: Why don't my sales reports match my payment reports?**
A: Sales and payments are tracked differently: Sales reports show when transactions are completed, Payment reports show when payment processing is initiated. This timing difference occurs because sales are reported when payment completes, while payments are reported when the payment process begins (with some exceptions for specific payment methods).
Examples:
- Sales: reported when payment completes
- Payments: reported when payment processing starts
- Timing differences can occur during processing
- Different payment methods have different timing rules

**Q: My close-of-day report doesn't match my daily sales report. What's wrong?**
A: This is usually due to different time windows: Daily sales reports typically cover a full 24-hour calendar day, Close-of-day reports only include transactions within your configured business hours. Check for transactions that occurred outside your normal business hours (early morning or late evening).
Examples:
- Daily sales: full 24-hour calendar day
- Close-of-day: configured business hours only
- Early morning transactions (6:59 AM when business starts at 7:00 AM)
- Late evening transactions after configured close time

**Q: There's a transaction missing from my close-of-day report but it shows in my sales report. Where did it go?**
A: Check the transaction timestamp: Transactions outside your configured business hours won't appear in close-of-day reports. Common examples: 6:59 AM sale when business hours start at 7:00 AM, Late evening transactions after your configured close time. Solution: Adjust your business hours settings or reference the full daily sales report.
Examples:
- 6:59 AM sale when business hours start at 7:00 AM
- Late evening transactions after configured close time
- Adjust business hours settings if needed
- Reference full daily sales report for complete picture

**Q: My refunds don't match between different reports. Why?**
A: Refunds can appear differently depending on timing: Same-day refunds may net against sales in some reports, Next-day refunds appear as separate line items, Different reports may group refunds by processing date vs. original sale date.
Examples:
- Same-day refunds: may net against sales
- Next-day refunds: appear as separate line items
- Processing date vs. original sale date grouping
- Report-specific refund handling varies

**Q: I have multiple locations. Why do my consolidated reports not add up?**
A: Multi-location reporting considerations: Ensure all locations are in the same time zone setting, Check that business hours are configured consistently, Verify that all locations are included in your consolidated report filters, Inter-location transfers may appear differently in individual vs. consolidated reports.
Examples:
- Ensure consistent time zone settings across locations
- Configure business hours consistently
- Verify all locations included in consolidated filters
- Inter-location transfers may appear differently

**Q: What's the difference between gross sales and net sales?**
A: Gross sales: Total transaction amounts before any deductions, Net sales: Gross sales minus refunds, discounts, and tax (depending on your settings). Always check which metric your reports are displaying.
Examples:
- Gross sales: total before deductions
- Net sales: after refunds, discounts, tax adjustments
- Check report settings for which metric is displayed
- Both metrics serve different analytical purposes

**Q: My credit card deposits don't match my credit card sales. Is there an error?**
A: This is normal due to processing timing: Credit card sales are recorded when the transaction occurs, Deposits happen 1-2 business days later, Weekend and holiday processing delays can extend this timing, Check your deposit schedule in your Square dashboard.
Examples:
- Sales recorded when transaction occurs
- Deposits happen 1-2 business days later
- Weekend and holiday delays extend timing
- Check deposit schedule in dashboard

**Q: What should I do when reports don't match?**
A: Follow these troubleshooting steps: 1. Check time ranges - Ensure you're comparing the same date ranges, 2. Verify time zones - Confirm all reports use the same time zone, 3. Review business hours - Check your close-of-day settings, 4. Look for edge cases - Early morning or late evening transactions, 5. Consider processing delays - Sales vs. payment timing differences.
Examples:
- Compare same date ranges across reports
- Verify consistent time zone usage
- Check close-of-day business hours settings
- Look for transactions outside normal hours
- Account for processing delays between sales and payments

**Q: How can I prevent report discrepancies?**
A: Prevention tips: Set consistent business hours across all locations, Understand the difference between sales and payment timing, Regularly review report settings after system changes, Train staff on proper transaction timing procedures.
Examples:
- Set consistent business hours across locations
- Understand sales vs payment timing differences
- Review report settings after changes
- Train staff on transaction timing procedures

---

## Module 3: Self-Serve Navigation: Sales Summary to Transactions

**Duration:** 15 minutes  
**Difficulty:** Beginner  
**Description:** Learn how to navigate from summary numbers to detailed transaction data

### Sections

#### Section 1: Understanding the Navigation Flow
**Content:** Learn how to drill down from high-level sales summary data to individual transaction details.

**Example: Sales Summary to Transaction Details**
- Following the data trail from summary to details
- Sales Summary: High-level aggregated data (Total sales, payment counts, averages)
- Filtered Reports: Filtered by time, payment method, etc. (Narrow down to specific criteria)
- Transaction Details: Individual transaction records (Complete transaction information)
- Result: Navigate from summary metrics to individual transaction details

#### Section 2: Drill-Down Techniques
**Content:** Master the techniques for drilling down from summary data to transaction-level details.

**Example 1: Time-Based Drill Down**
- Narrowing down by time periods
- Monthly Summary: Total sales for the month (Start with monthly aggregated data)
- Daily Breakdown: Sales by day within the month (Drill down to daily level)
- Hourly Analysis: Sales by hour for specific days (Further drill down to hourly data)
- Transaction List: Individual transactions (Final level: individual transactions)
- Result: Progressive narrowing from month to individual transactions

**Example 2: Payment Method Drill Down**
- Analyzing by payment method
- Total Sales: All payment methods combined (Starting point: total sales)
- By Payment Method: Credit cards, cash, etc. (Break down by payment method)
- Specific Method: Focus on one payment method (Drill into specific payment method)
- Transaction Details: Individual transactions for that method (See individual transactions)
- Result: Isolate and analyze specific payment methods

#### Section 3: Effective Filtering Strategies
**Content:** Learn how to use filters effectively to find the data you need.

**Example: Multi-Filter Approach**
- Using multiple filters to narrow down data
- Date Range: Specific time period (Start with relevant time frame)
- Payment Method: Specific payment types (Add payment method filter)
- Amount Range: Transaction size filter (Filter by transaction amount)
- Location: Specific business location (Filter by location if applicable)
- Result: Combine multiple filters for precise data analysis

#### Section 4: Common Navigation Use Cases
**Content:** Explore common scenarios where you need to navigate from summary to details.

**Example 1: Investigating Discrepancies**
- When summary numbers don't match expectations
- Identify Issue: Summary shows unexpected numbers (Notice discrepancy in summary data)
- Filter by Time: Narrow to specific time period (Focus on when issue occurred)
- Check Payment Methods: Look at payment method breakdown (See if specific payment methods are affected)
- Review Transactions: Examine individual transactions (Find specific transactions causing the issue)
- Result: Systematic approach to finding root cause of discrepancies

**Example 2: Performance Analysis**
- Understanding business performance patterns
- High-Level Trends: Monthly/weekly performance (Start with broad performance view)
- Peak Identification: Find high-performing periods (Identify peak performance times)
- Drill into Peaks: Analyze high-performing days/hours (Understand what drove good performance)
- Transaction Analysis: Look at individual high-value transactions (Identify specific successful transactions)
- Result: Understand what drives business performance

### FAQs

**Q: What filters are available for drilling down into transaction data?**
A: Common filters include date range, payment method, transaction amount, location, item categories, and staff members.
Examples:
- Date range: Last 30 days, specific week, custom range
- Payment method: Credit cards, cash, gift cards, etc.
- Amount: Transactions over $50, under $10, etc.
- Location: Specific store locations for multi-location businesses

**Q: Can I export the detailed transaction data after filtering?**
A: Yes, most reporting systems allow you to export filtered transaction data to CSV or Excel formats for further analysis.
Examples:
- Export to CSV for spreadsheet analysis
- Export to Excel with formatting
- Export specific columns only
- Export with applied filters maintained

---

## Module 4: Reconciliation FAQs

**Duration:** 25 minutes  
**Difficulty:** Beginner  
**Description:** Common questions about summary emails, close-of-day reports, and reconciliation processes

### Sections

#### Section 1: Understanding Reconciliation
**Content:** Learn about the different reconciliation tools and reports available to help you balance your books.

**Example: Reconciliation Tools Overview**
- Understanding the different tools available for reconciliation
- Summary Emails: Daily automated summaries (Automated daily reports sent via email)
- Close-of-Day Reports: End-of-business-day summaries (Reports covering your configured business hours)
- Dashboard Reports: Real-time reporting interface (Interactive reports in your Square dashboard)
- Export Options: Downloadable detailed data (CSV and Excel exports for external analysis)
- Result: Multiple tools work together to provide complete reconciliation capabilities

### FAQs

**Q: When do I receive the daily summary email?**
A: We send a daily email to merchants who have taken at least one payment for the day summarizing their gross sales. The email is sent after 1:30 AM PST. If you don't have business hours set (most merchants don't), you'll receive an email covering midnight to midnight. The Daily Sales Summary is based on your set business hours, which you can update in your Public Profile.
Examples:
- Sent after 1:30 AM PST for previous business day
- Requires at least one payment to trigger email
- Midnight to midnight if no business hours set
- Based on business hours and timezone in Public Profile
- Separate emails sent for each location with payments

**Q: What's the difference between close-of-day reports and summary emails?**
A: Close-of-day reports cover transactions within your configured business hours, while summary emails typically cover a full 24-hour period. Close-of-day reports are generated when you manually close your day, while summary emails are sent automatically.
Examples:
- Close-of-day: configured business hours only
- Summary email: full 24-hour period
- Close-of-day: manually triggered
- Summary email: automatically sent

**Q: I didn't receive my daily summary email. What should I do?**
A: Check your spam/junk folder first. Verify your email address is correct in your Square account settings. If you still don't receive it, you can access the same information in your Square dashboard under Reports.
Examples:
- Check spam/junk email folders
- Verify email address in account settings
- Access reports directly in Square dashboard
- Contact support if issue persists

**Q: How do I reconcile cash transactions?**
A: Compare your physical cash count with the cash sales shown in your reports. The close-of-day report will show total cash sales, which should match your cash drawer after accounting for your starting cash amount.
Examples:
- Count physical cash in drawer
- Check cash sales in close-of-day report
- Account for starting cash amount
- Investigate any discrepancies

**Q: Why don't my deposits match my daily sales?**
A: Deposits typically occur 1-2 business days after sales due to payment processing. Your daily sales report shows when transactions occurred, while deposits show when funds actually reach your bank account.
Examples:
- Sales: when transaction occurred
- Deposits: when funds reach bank (1-2 days later)
- Weekend/holiday delays affect timing
- Different payment methods have different processing times

**Q: How do refunds appear in reconciliation reports?**
A: Refunds appear as negative amounts in your reports and reduce your net sales. Same-day refunds may net against sales, while refunds processed on different days appear as separate line items.
Examples:
- Refunds show as negative amounts
- Same-day refunds: net against sales
- Different-day refunds: separate line items
- Reduces net sales and deposit amounts

**Q: How is tax handled in reconciliation reports?**
A: Tax collected is shown separately from sales in most reports. Your total transaction amount includes tax, but reports typically break down the tax portion separately for accounting purposes.
Examples:
- Tax shown separately from sales
- Total transaction = sales + tax
- Tax breakdown available for accounting
- Tax rates may vary by location/item type

**Q: How do I reconcile multiple locations?**
A: You can view reports for individual locations or consolidated across all locations. Ensure each location's business hours and settings are configured consistently for accurate reconciliation.
Examples:
- Individual location reports available
- Consolidated multi-location reports
- Ensure consistent business hours settings
- Configure time zones properly for each location

**Q: What should I do if I find discrepancies during reconciliation?**
A: Start by checking transaction timing and business hours settings. Look for transactions outside normal hours, verify payment method totals, and check for any pending or failed transactions. Document discrepancies and contact support if needed.
Examples:
- Check transaction timing and business hours
- Look for transactions outside normal hours
- Verify payment method totals
- Check for pending or failed transactions
- Document discrepancies for support

**Q: Can I export reconciliation data for my accounting software?**
A: Yes, Square provides various export options including CSV and Excel formats. You can export transaction details, summary reports, and tax information that can be imported into most accounting software.
Examples:
- CSV and Excel export formats available
- Transaction details and summary reports
- Tax information included
- Compatible with most accounting software

**Q: What are the best practices for daily reconciliation?**
A: Reconcile daily rather than waiting, compare multiple report types for accuracy, keep physical receipts for cash transactions, document any discrepancies immediately, and maintain consistent business hours settings.
Examples:
- Reconcile daily, not weekly or monthly
- Compare multiple report types for accuracy
- Keep physical receipts for cash transactions
- Document discrepancies immediately
- Maintain consistent business hours settings

---

# Additional Data Structures

## Payment Scenarios Reference

1. **Sale with Single Payment** - Standard transaction with one payment method
2. **Credit Card Processing Delay** - Unintentional delays due to server-side processing
3. **Cash Payment System Issue** - Internal system failure affecting payment record timing
4. **Pre-Authorization** - Intentional separation of auth and capture times
5. **Delayed Capture (Credit Card)** - Intentional delay for paper receipts and reopen checks
6. **Offline Payments** - Payments taken offline and synced later
7. **ACH Payments** - Bank transfer payments with processing delays
8. **Sale with Split Payments** - Multiple payment methods for single sale
9. **Sale with Multiple Payments via Invoice** - Invoice paid in multiple installments
10. **House Account** - Credit account payments

## Metric Definitions Reference

1. **Gross Sales** = Price + Service Charges (Total amount charged before deductions, reported when payment completed)
2. **Net Sales** = Gross Sales - Discounts - Comps - Returns (Sales amount after deducting discounts, comps, and returns, reported when payment completed)

---

*This document contains all the content from the Square Education modules. You can edit this content in Google Docs and then provide the updated version back for implementation in the app.*
