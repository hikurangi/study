module BankAccount

open System

type AccountAction =
    | Open
    | Close
    | GetBalance of AsyncReplyChannel<decimal option>
    | UpdateBalance of decimal
    
type AccountAgent = MailboxProcessor<AccountAction>

let accountReducer = // a purer implementation would separate the replyChannel effect somehow
    function
    | None, Open -> Some 0m
    | Some _balance, Open -> failwith $"Cannot open an account which is already open."
    | Some 0m, Close
    | None, Close -> None
    | Some _balance, Close -> failwith $"Cannot close an account with a non-zero balance."
    | prevBalance, GetBalance replyChannel -> replyChannel.Reply(prevBalance); prevBalance // would be cooler to ONLY return a result
    | prevBalance, UpdateBalance change -> prevBalance |> Option.map ((+) change)

let mkBankAccount () =
    MailboxProcessor.Start
        (fun inbox ->
            let rec loop prevBalance =
                async {
                    let! action = inbox.Receive()
                    let newBalance = accountReducer (prevBalance, action)
                    return! loop newBalance
                }
            loop None)

let openAccount (account: AccountAgent) = account.Post Open; account

let getBalance (account: AccountAgent) = account.PostAndReply GetBalance

let updateBalance change (account: AccountAgent) = account.Post(UpdateBalance change); account

let closeAccount (account: AccountAgent) = account.Post Close; account
