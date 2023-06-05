<script>

    let consoleValue = "0";
    let state = "";
  
    async function calculate() {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        body: JSON.stringify({ state, consoleValue }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { total } = await response.json();
      return total;
    }
  
    function setOperation(operation) {
        calculate();
        consoleValue = "0";
        state = operation;        
    }
  
    function setValue(value) {
      if (consoleValue === "0" || state === "equal") {
        consoleValue = "";
      }

      if (value === "C") {
        state = "";
        consoleValue = "0";
        return;
      }
      
      consoleValue += value;
    }

    function equal() {
      calculate().then(result => {
        consoleValue = result.toString();
        state = "equal";
      });
      
    }
  </script>
  
  <div class="calculator">
    <input type="text" bind:value={consoleValue} readonly />
    <div class="buttons">
      <div class="operations">
        <button on:click={() => setOperation('add')}>+</button>
        <button on:click={() => setOperation('subtract')}>-</button>
        <button on:click={() => setOperation('multiply')}>&times;</button>
        <button on:click={() => setOperation('divide')}>&divide;</button>
      </div>
      <div class="numbers">
        <div>
          <button on:click={() => setValue(7)}>7</button>
          <button on:click={() => setValue(8)}>8</button>
          <button on:click={() => setValue(9)}>9</button>
        </div>
        <div>
          <button on:click={() => setValue(4)}>4</button>
          <button on:click={() => setValue(5)}>5</button>
          <button on:click={() => setValue(6)}>6</button>
        </div>
        <div>
          <button on:click={() => setValue(1)}>1</button>
          <button on:click={() => setValue(2)}>2</button>
          <button on:click={() => setValue(3)}>3</button>
        </div>
        <div>
          <button class="zero" on:click={() => setValue(0)}>0</button>
          <button on:click={() => setValue('C')}>C</button>
        </div>
      </div>
      <div class="equal">
        <button on:click={equal}>=</button>
      </div>
    </div>
  </div>
  
  <style>
   .calculator {
		position:absolute;
		top:50%;
		left:50%;
        width: 220px;
		transform:translate(-50%,-50%);
		border:1px solid #eee;
		box-shadow:2px 2px 2px #eee;
		padding:20px;
	}
	.calculator input {
		text-align:right;
		font-size:20px;
        width: 100%;
        border: none;
	}
	.calculator .buttons {
		display:flex;
		flex-wrap:wrap;
	}
	.calculator .buttons .operations {
		display:flex;
		width:100%;
	}
	.calculator .buttons .operations button,
    .calculator .buttons .numbers > div button 
     {
		width:50px;
        height: 50px;
        margin: .15rem;
        border: none;
        border-radius: .5rem;
	}

    .zero{
        width: 104.8px !important;
    }
	.calculator .buttons .numbers > div {
		display:flex;
	}
	.calculator .equal button {
		margin:.15rem;
		width:50px;
		height:98%;
		background:#eeae00;
		color:#eee;
        border: none;
        border-radius: .5rem;
	}
  </style>
  