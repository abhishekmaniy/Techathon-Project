import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Transaction } from "@/page/ExpenseTrackerComp"

type BudgetSummaryProps = {
    transactions: Transaction[]
    budget: number
}

export default function BudgetSummary({ transactions, budget }: BudgetSummaryProps) {
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)

    const totalExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)

    const balance = totalIncome - totalExpenses

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 text-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</div>
                </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</div>
                </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${balance.toFixed(2)}
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Budget</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${budget.toFixed(2)}</div>
                </CardContent>
            </Card>
        </div>
    )
}

