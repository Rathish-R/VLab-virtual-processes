
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl ,Validators} from '@angular/forms';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'node_modules/chart.js'
interface TableRow {
  time: string;
  volume: number;
  ca?: number;
}
@Component({
  selector: 'app-semi-batch',
  templateUrl: './semi-batch.component.html',
  styleUrls: ['./semi-batch.component.css']
})

export class SemiBatchComponent {
  isTheoryOn: boolean = false;
  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  table = document.getElementById("myTable") as HTMLTableElement;
  data: TableRow[] = [];
  chart!: Chart;
  
  rows: FormArray = this.fb.array([]);

  constructor(private fb: FormBuilder) { }

  inputValues = new FormGroup({
    Nnaoh: new FormControl('', Validators.required),
   Cao: new FormControl('', Validators.required),
    Ceo: new FormControl('', Validators.required),
    rows: new FormControl('0', Validators.required),
    dBulbOutlet: new FormControl('', Validators.required),
    wBulbOutlet: new FormControl('', Validators.required),
    height1: new FormControl('', Validators.required),
    height2: new FormControl('', Validators.required),
    timeTaken: new FormControl('', Validators.required),
    Iweight: new FormControl('', Validators.required),
    Fweight: new FormControl('', Validators.required),
    numRows : new FormControl('')
  });

  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
  }
  ngOnInit() {
    this.table = document.getElementById('myTable') as HTMLTableElement;
    this.initForm();
    this.updateChart();
  }

  initForm() {
    this.table.querySelectorAll('tr')?.forEach((row, index) => {
      if (index !== 0) {
        const time = row.cells[0].textContent;
        const volume = parseFloat(row.cells[1].textContent ?? '0') ?? 0; // Add a null check here
        const ca = volume * 10;
        this.rows.push(this.fb.group({
          time: time,
          volume: volume,
          ca: ca
        }));
      }
    });
  }
  
  addRows() {
    const numRows = this.inputValues.value.numRows || 0;
    for (let i = 0; i < Number(numRows); i++) {
      this.rows.push(this.fb.group({
        time: '',
        volume: 0
      }));
    }
  }

  updateChart() {
    // Clear the existing data
    this.data = [];

    // Loop through the table rows and extract the label and data values
    for (let i = 1; i < this.table.rows.length; i++) {
      const time = this.table.rows[i].cells[0].textContent!;
      const volume = parseFloat(this.table.rows[i].cells[1].textContent!);
      this.data.push({
        time: time,
        volume: volume
      });
    }

    // Create a bar chart using Chart.js
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.data.map(d => d.time),
        datasets: [{
          label: 'CA',
          data: this.data.map(d => d.volume * 10) // calculate CA based on volume
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {

        }
      }
    });
   

    // Create a bar chart using Chart.js




   
  }
}
function onClickTheory() {
  throw new Error('Function not implemented.');
}

function onClickFormula() {
  throw new Error('Function not implemented.');
}

function onClickSimulation() {
  throw new Error('Function not implemented.');
}

