const componentService = new ComponentService();
const errorService = new ErrorService();

const app = () => {
    errorService.hideError();
    const calTotal = () => {
        errorService.hideError();
        const inputs = componentService.getInput();
        const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4
        const valid = validateInputs(...numbers);

        if (valid) {
            const [price, quantity, shipping] = numbers;
            const totalPrice = price * quantity + shipping;
            componentService.setPrice(totalPrice);
        } else {
            // showError();
            errorService.showErrorMessage(inputs, numbers);
        }
    };
    // totalBtn.addEventListener('click', calTotal);
    componentService.onClick(calTotal);
}

app();