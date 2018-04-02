import {OperationResultError} from "./operationResultError";

export class OperationResult<T> {
    public readonly isSuccessful:boolean;
    public readonly result:T;
    public readonly error:OperationResultError;


    protected constructor(isSuccessful:boolean, result:T, error?:OperationResultError) {
        this.isSuccessful = isSuccessful;
        this.result = result;
        this.error = error;
    }


    public static createSuccessful<T1>(result:T1):OperationResult<T1> {
        return new OperationResult<T1>(true, result);
    }

    public static createUnsuccessful<T1>(error:OperationResultError):OperationResult<T1> {
        return new OperationResult<T1>(false, null, error);
    }
}
