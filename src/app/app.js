
import {ComponentService} from '../services/component.service';
import {ErrorService} from '../services/error.service';
import {parseInput} from '../utils/parse-input';
import {validateInputs} from '../utils/validate-inputs';

export const app = () => {
    const componentService = new ComponentService();
    const errorService = new ErrorService();

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

// app();