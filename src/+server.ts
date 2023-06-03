import { writable } from 'svelte/store';

export const valueStore = writable<InputValue>({
  value: "",
  state: "",
  total: 0,
  consoleValue: ""
});

function resolveState() {
  valueStore.update((e) => {
    switch (e.state) {
      case "add":
        e.total += parseFloat(e.consoleValue);
        e.consoleValue = "0";
        break;
      case "subtract":
        e.total -= parseFloat(e.consoleValue);
        e.consoleValue = "0";
        break;
      case "multiply":
        e.total *= parseFloat(e.consoleValue);
        e.consoleValue = "0";
        break;
      case "divide":
        e.total /= parseFloat(e.consoleValue);
        e.consoleValue = "0";
        break;
      default:
        e.total = parseFloat(e.consoleValue);
        e.consoleValue = "0";
        break;
    }
    return e;
  });
}

export function setOperation(input: string) {
  resolveState();
  valueStore.update((e) => {
    e.state = input;
    return e;
  });
}

export function setValue(input: string) {
  valueStore.update((e) => {
    if (e.consoleValue === "0" || e.state === "equal") {
      e.consoleValue = "";
    }
    if (e.state === "equal") {
      e.state = "";
    }
    if (input === "C") {
      e.total = 0;
      e.state = "";
      e.consoleValue = "";
      return e;
    }
    e.consoleValue += input;
    return e;
  });
}

export function equal() {
    resolveState();
  valueStore.update((e) => {
    e.consoleValue = e.total.toString();
    e.state = "equal";
    return e;
  });
}
