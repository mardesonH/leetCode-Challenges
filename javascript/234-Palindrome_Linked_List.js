/* 234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space? */

//////////////////////////// CODE ////////////////////////////

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
        var midle = (Math.round(head.length / 2) - 1) > 0 ? Math.round(head.length / 2) - 1 :  Math.round(head.length / 2)
    
        for(let i = 0; i < midle; i ++){
            //console.log('Iteração número ' + i)
            //console.log((head[head.length - (i + 1)]) + ' é igual a ' + head[i] + '? ' + ((head[head.length - (i + 1)]) === head[i]))

            if((head[head.length - (i + 1)]) == head[i]){
                //console.log('Olha, foi igual aqui')
                continue
            }
            else{
                //console.log('Não é não')
                return false
            }
             
            
        }
        //console.log('É igual sim')  
        return true
};

let head = [1,2,4,3,1]

console.log(isPalindrome(head))
