import { parseISO, isValid, format } from "date-fns";
import { enUS } from "date-fns/locale";


export const dateFormaterAndTime = (date: any) => {
  const parsedDate = parseISO(date);

  if (isValid(parsedDate)) {
    return format(parsedDate, `MM/d/yyyy`, { locale: enUS });
  } else {
    // Handle invalid date input, e.g., return an error message or default value
    return "Invalid Date";
  }
};

export function formatDate(dateString: any) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}


// Currency Format function
export function formatCurrency(input: number | string): string {
  // Convert input to a number (if it's a string)
  const number: number = typeof input === `string` ? parseFloat(input) : input;

  // Check if the converted input is a valid number
  if (isNaN(number)) {
    return `0.00`; // return a default value
  }

  // Convert the number to a string with two decimal places
  const formattedNumber: string = number.toFixed();

  // Add commas as thousands separators
  const parts: string[] = formattedNumber.toString().split(`.`);
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, `,`);

  return parts.join(`.`);
}

// Greet user base on their current time { Good morning, Good afternoon, Good evening } function
export function greetUser() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return greeting;
}

// Reverse Array
export function reverseArray(arr: any[]) {
  return arr?.slice()?.reverse();
}

