"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Transaction } from '@/page/ExpenseTrackerComp'
import { Progress } from '../ui/progress'

type SavingsGoalProps = {
    transactions: Transaction[]
    budget: number
}

export default function SavingsGoal({ transactions }: SavingsGoalProps) {
    const [goal, setGoal] = useState(1000)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const totalSavings = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0) -
            transactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0)

        setProgress((totalSavings / goal) * 100)
    }, [transactions, goal])

    return (
        <div className="space-y-4 bg-black text-white p-4">
            <h3 className="text-lg font-semibold">Savings Goal Tracker</h3>
            <div className="flex items-center space-x-2">
                <Input
                    type="number"
                    value={goal}
                    className='bg-gray-800 border-none m-2'
                    onChange={(e) => setGoal(Number(e.target.value))}
                    placeholder="Enter your savings goal"
                />
                <Button className='bg-gray-600' onClick={() => setGoal(goal)}>Set Goal</Button>
            </div>
            <Progress  value={progress} className="w-full" />
            <p>You've saved {progress.toFixed(2)}% of your goal</p>
        </div>
    )
}

