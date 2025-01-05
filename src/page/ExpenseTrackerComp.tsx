
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpenseForm from '@/components/expenseTracker/ExpenseForm'
import BudgetSummary from '@/components/expenseTracker/BudgetSummary'
import TransactionList from '@/components/expenseTracker/TransactionList'
import ExpenseChart from '@/components/expenseTracker/ExpenseChart'
import SavingsGoal from '@/components/expenseTracker/SavingGoal'


export type Transaction = {
  id: string
  type: 'income' | 'expense'
  category: string
  amount: number
  date: string
  description: string
}

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [budget, setBudget] = useState(0)

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions])
  }

  const updateBudget = (newBudget: number) => {
    setBudget(newBudget)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className='bg-black border-none text-white' >
          <CardHeader>
            <CardTitle className='text-blue-500' >Add Transaction</CardTitle>
            <CardDescription>Record your income or expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <ExpenseForm onAddTransaction={addTransaction} onUpdateBudget={updateBudget} />
          </CardContent>
        </Card>
        <Card className='bg-black border-none'>
          <CardHeader>
            <CardTitle className='text-blue-500' >Budget Summary</CardTitle>
            <CardDescription>Overview of your financial status</CardDescription>
          </CardHeader>
          <CardContent>
            <BudgetSummary transactions={transactions} budget={budget} />
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="transactions">
          <TabsList className="grid w-full bg-black grid-cols-3">
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="chart">Expense Chart</TabsTrigger>
            <TabsTrigger value="savings">Savings Goal</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <TransactionList transactions={transactions} />
          </TabsContent>
          <TabsContent value="chart">
            <ExpenseChart transactions={transactions} />
          </TabsContent>
          <TabsContent value="savings">
            <SavingsGoal transactions={transactions} budget={budget} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

