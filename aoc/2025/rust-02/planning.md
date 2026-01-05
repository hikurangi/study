You can find the invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice.

1. ~~Validate the ids at the bounds/string input?~~ *Seems out of scope*.
2. Given the bounds of a range of valid ids, generate the intermediate values
    a. convert the value to an unsigned integer
    b. use the range operator to make the range
3. For each id, validate that the id meets the criteria
    a. convert the id a string
    b. convert the id to a vec of char ❌
    c. split the id of length x into chunks and filter for those which repeat. Starting with chunks of length y as an example:
        i. chunk the id into chunks of length y
        ii. add each chunk to a new hashmap
        iii. if the chunk already exists, this id is invalid, return true at the first instance of this.
        iv. if none repeat, go back and increment length y by one, up to and including x / 2. if there are no repeating chunks of any length <= x / 2, then this id is valid, return false.
4. sum these filtered ids for our result

