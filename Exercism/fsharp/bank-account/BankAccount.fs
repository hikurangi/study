﻿module BankAccount

type AccountAction =
    | Open
    | Close
    | GetBalance of AsyncReplyChannel<decimal option>
    | UpdateBalance of decimal

let performAccountAction =
    function
    | None, Open -> Some 0m
    | Some _balance, Open -> failwith $"Cannot open an account which is already open."
    | Some 0m, Close
    | None, Close -> None
    | Some _balance, Close -> failwith $"Cannot close an account with a non-zero balance."
    | prevBalance, GetBalance replyChannel -> replyChannel.Reply(prevBalance); prevBalance
    | prevBalance, UpdateBalance change ->
        match prevBalance with
        | Some v -> Some(v + change)
        | None -> Some change

type AccountAgent = MailboxProcessor<AccountAction>

let mkBankAccount () =
    MailboxProcessor.Start
        (fun inbox ->
            let rec loop prevBalance =
                async {
                    let! action = inbox.Receive()
                    let newBalance = performAccountAction (prevBalance, action)
                    return! loop newBalance
                }
            loop None)

let openAccount (account: AccountAgent) = account.Post Open; account

let getBalance (account: AccountAgent) = account.PostAndReply GetBalance

let updateBalance change (account: AccountAgent) = account.Post(UpdateBalance change); account

let closeAccount (account: AccountAgent) = account.Post Close; account
