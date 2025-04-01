
import { useState } from 'react';
import { CreditCard, CheckCircle, AlertCircle, DollarSign, Calendar, RefreshCw, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GradientBlob from '@/components/animations/GradientBlob';

const LoansPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('3');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  // Sample loan details for UI
  const maxEligibleLoan = 2625; // 3x of user's savings
  const existingLoan = {
    id: 'LOAN-12345',
    amount: 500,
    remaining: 350,
    duration: 6,
    monthsPaid: 2,
    nextPaymentDate: '2023-12-01',
    nextPaymentAmount: 87.50,
    interestRate: 5,
    status: 'active'
  };

  const calculateMonthlyPayment = (amount: number, months: number, rate: number) => {
    // Simple calculation for demo purposes
    const interest = (amount * rate * months) / (12 * 100);
    return (amount + interest) / months;
  };

  const handleLoanApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Loan Application Submitted",
        description: `Your loan application for $${loanAmount} has been submitted successfully.`,
      });
      setLoanAmount('');
    }, 1500);
  };

  const handleLoanRepayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: `Your payment of $${existingLoan.nextPaymentAmount} has been processed.`,
      });
    }, 1500);
  };

  // Calculate monthly payment based on user input
  const monthlyPayment = loanAmount 
    ? calculateMonthlyPayment(parseFloat(loanAmount), parseInt(loanDuration), 5) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-decofi-dark pt-16">
      <Navbar />
      <div className="relative">
        <GradientBlob className="opacity-20 fixed" />
        
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Loan Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Apply for loans and manage your existing loans</p>
          </header>

          <div className="max-w-xl mx-auto">
            <Tabs defaultValue="apply" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="apply" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Apply for Loan
                </TabsTrigger>
                <TabsTrigger value="manage" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Manage Loans
                </TabsTrigger>
              </TabsList>

              {/* Apply for Loan Tab */}
              <TabsContent value="apply">
                <Card>
                  <CardHeader>
                    <CardTitle>Apply for a New Loan</CardTitle>
                    <CardDescription>Quick and paperless loan application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLoanApplication}>
                      <div className="space-y-4">
                        <div className="rounded-md bg-blue-50 dark:bg-blue-900/30 p-4">
                          <div className="flex items-start">
                            <InfoIcon className="h-5 w-5 text-blue-700 dark:text-blue-300 mr-2 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-blue-800 dark:text-blue-300">Loan Eligibility</h4>
                              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                Based on your savings, you are eligible for a loan up to <strong>${maxEligibleLoan}</strong>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="loan-amount">Loan Amount (USD)</Label>
                          <Input 
                            id="loan-amount" 
                            type="number" 
                            placeholder="Enter amount" 
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            required
                            min="100"
                            max={maxEligibleLoan}
                            step="100"
                          />
                          {loanAmount && parseFloat(loanAmount) > maxEligibleLoan && (
                            <p className="text-sm text-red-500 dark:text-red-400 mt-1">
                              Amount exceeds your eligibility limit
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="loan-duration">Loan Duration (months)</Label>
                          <select 
                            id="loan-duration"
                            value={loanDuration}
                            onChange={(e) => setLoanDuration(e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          >
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="loan-purpose">Purpose of Loan</Label>
                          <select 
                            id="loan-purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          >
                            <option value="business">Business Investment</option>
                            <option value="education">Education</option>
                            <option value="housing">Housing</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="medical">Medical Expenses</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {loanAmount && (
                          <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 mt-6">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">Loan Summary</h4>
                            <div className="mt-2 space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Loan Amount:</span>
                                <span className="font-medium">${parseFloat(loanAmount).toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                                <span className="font-medium">{loanDuration} months</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                                <span className="font-medium">5% per annum</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Processing Fee:</span>
                                <span className="font-medium">$0</span>
                              </div>
                              <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                                <span className="font-medium">Monthly Payment:</span>
                                <span className="font-bold">${monthlyPayment.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <Button 
                        className="w-full mt-6 bg-decofi-blue hover:bg-decofi-blue/90" 
                        type="submit" 
                        disabled={!loanAmount || isProcessing || (loanAmount && parseFloat(loanAmount) > maxEligibleLoan)}
                      >
                        {isProcessing ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Processing
                          </>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Submit Loan Application
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Manage Loans Tab */}
              <TabsContent value="manage">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Active Loans</CardTitle>
                    <CardDescription>View and manage your existing loans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {existingLoan ? (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-lg">Loan #{existingLoan.id}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                existingLoan.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                              }`}>
                                {existingLoan.status === 'active' ? (
                                  <>
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Active
                                  </>
                                ) : (
                                  <>
                                    <AlertCircle className="h-3 w-3 mr-1" />
                                    Pending
                                  </>
                                )}
                              </span>
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">${existingLoan.amount}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {existingLoan.interestRate}% interest
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Repayment Progress</span>
                            <span>
                              {existingLoan.monthsPaid} of {existingLoan.duration} months
                            </span>
                          </div>
                          <Progress value={(existingLoan.monthsPaid / existingLoan.duration) * 100} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-md bg-gray-100 dark:bg-gray-800 p-3">
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-5 w-5 text-decofi-blue" />
                              <h4 className="font-medium">Remaining Balance</h4>
                            </div>
                            <p className="text-xl font-bold mt-1">${existingLoan.remaining}</p>
                          </div>
                          <div className="rounded-md bg-gray-100 dark:bg-gray-800 p-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-decofi-blue" />
                              <h4 className="font-medium">Next Payment</h4>
                            </div>
                            <p className="text-xl font-bold mt-1">${existingLoan.nextPaymentAmount}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Due on {existingLoan.nextPaymentDate}</p>
                          </div>
                        </div>

                        <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Loan Details</h4>
                          <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Original Amount:</span>
                              <span className="font-medium">${existingLoan.amount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                              <span className="font-medium">{existingLoan.duration} months</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                              <span className="font-medium">{existingLoan.interestRate}% per annum</span>
                            </div>
                          </div>
                        </div>

                        <form onSubmit={handleLoanRepayment}>
                          <Button className="w-full bg-green-600 hover:bg-green-700" type="submit" disabled={isProcessing}>
                            {isProcessing ? (
                              <>
                                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                Processing
                              </>
                            ) : (
                              <>
                                <DollarSign className="mr-2 h-4 w-4" />
                                Make Payment of ${existingLoan.nextPaymentAmount}
                              </>
                            )}
                          </Button>
                        </form>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                          <CreditCard className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">No Active Loans</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          You don't have any active loans at the moment.
                        </p>
                        <Button className="bg-decofi-blue hover:bg-decofi-blue/90" onClick={() => document.getElementById('apply-tab')?.click()}>
                          <CreditCard className="mr-2 h-4 w-4" />
                          Apply for a Loan
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Helper component for info icon
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default LoansPage;
