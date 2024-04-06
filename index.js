/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const open_indices = [];
    let output = s.split('');

    for(let i = 0; i<=s.length; i++){
        if(s[i] === '('){
            open_indices.push(i);
        } else if(s[i] === ')'){
            if(open_indices.length > 0){
                open_indices.pop();
            } else {
                output[i] = ''
            }
        }
    }

    for(let index of open_indices){
        output[index] = ''
    }
    return output.join('');
};
