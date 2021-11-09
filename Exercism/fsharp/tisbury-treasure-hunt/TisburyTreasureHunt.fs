module TisburyTreasureHunt

let getCoordinate (_description, coordinate) = coordinate

let convertCoordinate (coordinate: string) = // In real code, I'd handle exception cases properly using Result and Seq.tryItem
    (coordinate |> Seq.head |> int) - ('0' |> int), coordinate |> Seq.item 1

let compareRecords (_aDescription, aCoord) (_bDescription, bCoord, _bColor) = aCoord |> convertCoordinate = bCoord

let createRecord (aDescription, aCoord) (bDescription, _bCoord, bColor) =
    if (aCoord |> convertCoordinate = _bCoord) then
        aCoord, bDescription, bColor, aDescription
    else
        "", "", "", ""
