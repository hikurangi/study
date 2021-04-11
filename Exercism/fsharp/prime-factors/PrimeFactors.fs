module PrimeFactors

let factors =
    let rec factors' candidate fs =
        function
        | n when n < 2L -> fs
        | n when n % candidate = 0L -> factors' candidate (candidate :: fs) (n / candidate)
        | n -> factors' (candidate + 1L) fs n

    factors' 2L [] >> List.rev >> List.map int
