import SearchBar from "./SearchBar"
import ExpenseTrackerComp from "../page/ExpenseTrackerComp"

const ExpenseTracker = () => {
    return (
        <div className="bg-gray-800 p-4 flex-grow">
            <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Expense Tracker & Budgeting tool</h1>
            <p className="text-white text-xl text-center pb-4">Track expenses, set budgets, and achieve your financial goals effortlessly.</p>
            <SearchBar />
            <ExpenseTrackerComp/>
        </div>
    )
}

export default ExpenseTracker