import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Transaction } from '@/page/ExpenseTrackerComp';

Chart.register(...registerables);

type ExpenseChartProps = {
  transactions: Transaction[];
};

export default function ExpenseChart({ transactions }: ExpenseChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const expensesByCategory = transactions
          .filter(t => t.type === 'expense')
          .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
          }, {} as Record<string, number>);

        chartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: Object.keys(expensesByCategory),
            datasets: [
              {
                data: Object.values(expensesByCategory),
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                  '#FF9F40',
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Expenses by Category',
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [transactions]); 

  return <canvas ref={chartRef} />;
}
