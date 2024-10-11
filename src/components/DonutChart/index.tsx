'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registre os elementos necessários
ChartJS.register(ArcElement, Tooltip, Legend);


export default function DonutChart(){
    const data = {
        // labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50],
            backgroundColor: ['#ffc107', '#fff'],
            hoverBackgroundColor: ['#ffc107', '#fff'],
          },
        ],
      };
    
      const options = {
        cutout: '70%', // Para gráfico de rosca
      };
    
      return <Doughnut data={data} options={options} />;
}