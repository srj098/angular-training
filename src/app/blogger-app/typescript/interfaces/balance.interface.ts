interface Balance {

    capabilities:null;
    status:string;
    knownAccounts:object[];

    authorize(authorizeRequest:object, authorizeHandler:object):void;
    confirm(completionHandler:CompletionHandler):void;
    cancel(cancelRequest:object, cancelHandler:object):void;

}

interface CompletionHandler {
    transactionComplete?:(response:object)=>void;
}


interface CompletionHandlerResponse {
    transactionReference:string
    transactionDateTime:Date
    hostReceipt?:object
    additionalData?:object
}

export {Balance}