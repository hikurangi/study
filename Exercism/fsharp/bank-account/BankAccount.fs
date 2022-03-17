module BankAccount

type Account = { Balance: decimal option }

type AccountAction =
    | Open
    | Close
    | GetBalance of AsyncReplyChannel<Account>
    | UpdateBalance of decimal

let performAccountAction previousAccountState =
    function
    | Open -> { Balance = Some 0.0m }
    | GetBalance replyChannel ->
        replyChannel.Reply(previousAccountState)
        previousAccountState
    | UpdateBalance change ->
        { Balance =
              (match previousAccountState.Balance with
               | Some v -> Some(v + change)
               | None -> Some change) }
    | Close -> { Balance = None }

let mkBankAccount () =
    MailboxProcessor.Start
        (fun inbox ->
            let rec loop previousState =
                async {

                    let! msg = inbox.Receive()
                    let updatedState = performAccountAction previousState msg

                    return! loop updatedState
                }

            loop { Balance = None })

let openAccount (account: MailboxProcessor<AccountAction>) =
    account.Post Open
    account

let getBalance (account: MailboxProcessor<AccountAction>) =
    (account.PostAndReply GetBalance).Balance

let updateBalance change (account: MailboxProcessor<AccountAction>) =
    account.Post(UpdateBalance change)
    account

let closeAccount (account: MailboxProcessor<AccountAction>) =
    account.Post Close
    account
