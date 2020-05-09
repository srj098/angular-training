class Calculator implements CalculatorInterface {

    add(c: number, d: number): number {
        return c + d;
    }

    sub(c: number, d: number): number {
        return c - d;
    }
}

export const calc = new Calculator();
