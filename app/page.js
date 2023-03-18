import {currencyFormatter} from "@/lib/utils";

import ExpenseCategoryItem from "@/components/ExpenseCategoryitem";

const DUMMY_DATA =[
  {
    id:1,
    title:'Entertainment',
    color:'#000',
    amount: 400
  },
  {
    id: 1,
    title: 'Gas',
    color: '#050',
    amount: 4130
  },
  {
    id: 1,
    title: 'Movies',
    color: '#678',
    amount: 12
  },
]

export default function Home() {
  return <main className="container max-w-2xl px-6 mx-auto">
  <section className="py-3">
    <small className="text-gray-400 text-md">My Balance</small>
    <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
  </section>

  <section className="flex iterms-center gap-2 py-3">
    <button className="btn btn-primary">+ Expenses</button>
    <button className="btn btn-primary-outline">+ Income</button>
  </section>

  {/* Expenses */}
  <section className="py-6">
    <h3 className="text-2xl">My Expenses</h3>
      <div className="flex flex-col gap-4 mt-6">
        {DUMMY_DATA.map((expense)=>{
            return (
              < ExpenseCategoryItem 
               color = {expense.color}
               title = {expense.title} 
               amount ={expense.amount}
              />
            );
            })}
        
      </div>
  </section>
  
  
  </main>
}
