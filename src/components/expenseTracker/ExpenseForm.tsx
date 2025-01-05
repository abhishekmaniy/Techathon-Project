"use client"

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Transaction } from '@/page/ExpenseTrackerComp'

type ExpenseFormProps = {
    onAddTransaction: (transaction: Transaction) => void
    onUpdateBudget: (budget: number) => void
}

export default function ExpenseForm({ onAddTransaction, onUpdateBudget }: ExpenseFormProps) {
    const [type, setType] = useState<'income' | 'expense'>('expense')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const transaction: Transaction = {
            id: uuidv4(),
            type,
            category,
            amount: parseFloat(amount),
            date: new Date().toISOString(),
            description
        }
        onAddTransaction(transaction)
        setCategory('')
        setAmount('')
        setDescription('')
    }

    const handleBudgetUpdate = () => {
        onUpdateBudget(parseFloat(budget))
        setBudget('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label>Transaction Type</Label>
                <RadioGroup defaultValue="expense" onValueChange={(value) => setType(value as 'income' | 'expense')}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem className='bg-white ' value="expense" id="expense" />
                        <Label htmlFor="expense">Expense</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem className='bg-white ' value="income" id="income" />
                        <Label htmlFor="income">Income</Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={setCategory}>
                    <SelectTrigger className='bg-gray-800 border-none' >
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-800 text-white border-none'>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" className='bg-gray-800 border-none' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" className='bg-gray-800 border-none ' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
            </div>
            <Button type="submit" className='bg-gray-700'>Add Transaction</Button>
            <div className="space-y-2 mt-4">
                <Label htmlFor="budget">Update Monthly Budget</Label>
                <div className="flex space-x-2">
                    <Input id="budget" type="number" className='bg-gray-800 border-none' value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter budget" />
                    <Button className='bg-gray-700' type="button" onClick={handleBudgetUpdate}>Update</Button>
                </div>
            </div>
        </form>
    )
}

