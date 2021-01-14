let len = 0
let indexs = []
let level = 'easy'
let checkData = [0,0,0,0,0,0,0,0,0]
let data = ["","","","","","","","",""]
let winner = {
    win: null,
    cordinats: []
}

function random() {
    let rand
    let arr = []
    for(let i=0; i<arguments.length; i++) {
        arr[i] = arguments[i]
    }
    rand = arr.splice(parseInt(Math.random() * arr.length),1)
    return rand[0]
}

export const clear = () => {
    len = 0
    indexs = []
    checkData = [0,0,0,0,0,0,0,0,0]
    data = ["","","","","","","","",""]
    winner = {
        win: null,
        cordinats: []
    }
} 

export const changeLevel = (val) => {
    level = val
}

export const checkWinner = () => {
    if(len >= 5) {
        if(data[0] === 'X' && data[1] === 'X' && data[2] === 'X') {
            winner.win = 1;
            winner.cordinats = [0,1,2]
        } else if(data[3] === 'X' && data[4] === 'X' && data[5] === 'X') {
            winner.win = 1;
            winner.cordinats = [3,4,5]
        } else if(data[6] === 'X' && data[7] === 'X' && data[8] === 'X') {
            winner.win = 1;
            winner.cordinats = [6,7,8]
        } else if(data[0] === 'X' && data[3] === 'X' && data[6] === 'X') {
            winner.win = 1;
            winner.cordinats = [0,3,6]
        } else if(data[1] === 'X' && data[4] === 'X' && data[7] === 'X') {
            winner.win = 1;
            winner.cordinats = [1,4,7]
        } else if(data[2] === 'X' && data[5] === 'X' && data[8] === 'X') {
            winner.win = 1;
            winner.cordinats = [2,5,8]
        } else if(data[0] === 'X' && data[4] === 'X' && data[8] === 'X') {
            winner.win = 1;
            winner.cordinats = [0,4,8]
        } else if(data[2] === 'X' && data[4] === 'X' && data[6] === 'X') {
            winner.win = 1;
            winner.cordinats = [2,4,6]
        }

        else if(data[0] === 'O' && data[1] === 'O' && data[2] === 'O') {
            winner.win = -1;
            winner.cordinats = [0,1,2]
        } else if(data[3] === 'O' && data[4] === 'O' && data[5] === 'O') {
            winner.win = -1;
            winner.cordinats = [3,4,5]
        } else if(data[6] === 'O' && data[7] === 'O' && data[8] === 'O') {
            winner.win = -1;
            winner.cordinats = [6,7,8]
        } else if(data[0] === 'O' && data[3] === 'O' && data[6] === 'O') {
            winner.win = -1;
            winner.cordinats = [0,3,6]
        } else if(data[1] === 'O' && data[4] === 'O' && data[7] === 'O') {
            winner.win = -1;
            winner.cordinats = [1,4,7]
        } else if(data[2] === 'O' && data[5] === 'O' && data[8] === 'O') {
            winner.win = -1;
            winner.cordinats = [2,5,8]
        } else if(data[0] === 'O' && data[4] === 'O' && data[8] === 'O') {
            winner.win = -1;
            winner.cordinats = [0,4,8]
        } else if(data[2] === 'O' && data[4] === 'O' && data[6] === 'O') {
            winner.win = -1;
            winner.cordinats = [2,4,6]
        }
    } 
    
    if(len === 10) {
        winner.win = 0
    }

    return winner;
}

export const join = (index) => {
    let index_O = 0;
    indexs.push(index)
    checkData[index -1] = index
    data[index - 1] = 'X'
    len++

    if(checkWinner().win === 1) {return -1}

    if(len === 1 && level === 'easy') {
        if(index === 5) {
            index_O = random(2,4,6,8)
        } else {
            let arr= []
            for(let i=1; i<=9; i++) {
                i !== index && arr.push(i)
            }
            index_O = arr.splice(parseInt(Math.random() * 8),1)[0]
        }        
    } else if(len === 1 && (level === 'hard' || level === 'normal')) {
        if(index === 5) {
            index_O = random(1,3,7,9)
        }else if(index === 1) {
            index_O = 5
        }else if(index === 2) {
            index_O = random(1,3,5)
        }else if(index === 3) {
            index_O = 5
        }else if(index === 4) {
            index_O = random(1,7,5)
        }else if(index === 6) {
            index_O = random(3,5,9)
        }else if(index === 7) {
            index_O = 5
        }else if(index === 8) {
            index_O = random(5,7,9)
        }else if(index === 9) {
            index_O = 5
        }
    }

    if(len === 3 && (level === 'hard' || level === 'normal')) {
        if(indexs[0]>=1 && indexs[0]<=3 && indexs[2]>=1 && indexs[2]<=3){
            index_O = 6 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O += 3
            }
        } else if(indexs[0]>=4 && indexs[0]<=6 && indexs[2]>=4 && indexs[2]<=6){
            index_O = 15 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O = random(index_O-3,index_O+3)
            }
        } else if(indexs[0]>=7 && indexs[0]<=9 && indexs[2]>=7 && indexs[2]<=9){
            index_O = 24 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O -= 3 
            }
        } else if((indexs[0]===1 || indexs[0]===4 || indexs[0]===7) && (indexs[2]===1 || indexs[2]===4 || indexs[2]===7)){
            index_O = 12 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O += 1
            }
        } else if((indexs[0]===2 || indexs[0]===5 || indexs[0]===8) && (indexs[2]===2 || indexs[2]===5 || indexs[2]===8)){
            index_O = 15 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O = random(index_O-1,index_O+1)
            }
        } else if((indexs[0]===3 || indexs[0]===6 || indexs[0]===9) && (indexs[2]===3 || indexs[2]===6 || indexs[2]===9)){
            index_O = 18 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                index_O -= 1
            }
        } else if((indexs[0]===3 || indexs[0]===5 || indexs[0]===7) && (indexs[2]===3 || indexs[2]===5 || indexs[2]===7)){
            index_O = 15 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                if(indexs[1] === 7 || indexs[1] === 3){
                    index_O = random(1,9)
                } else {
                    index_O = random(2,4,6,8)
                }
            }
        } else if((indexs[0]===1 || indexs[0]===5 || indexs[0]===9) && (indexs[2]===1 || indexs[2]===5 || indexs[2]===9)){
            index_O = 15 - indexs[0] - indexs[2]
            if(indexs[1] === index_O) {
                if(indexs[1] === 1 || indexs[1] === 9){
                    index_O = random(3,7)
                } else {
                    index_O = random(2,4,6,8)
                }
            } 
        } else {       
            let arr = []
            if(level === 'normal') {
                if(data[4] === ''){
                    index_O = 5
                } else {
                    let a,b
                    if((indexs[0] === 1 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 1)) {
                        a = 2;
                    } else if((indexs[0] === 1 && indexs[2] === 6) || (indexs[0] === 6 && indexs[2] === 1)) {
                        a = 4;
                    } else if((indexs[0] === 3 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 3)) {
                        a = 1;
                    } else if((indexs[0] === 3 && indexs[2] === 4) || (indexs[0] === 4 && indexs[2] === 3)) {
                        a = 6;
                    } else if((indexs[0] === 2 && indexs[2] === 7) || (indexs[0] === 7 && indexs[2] === 2)) {
                        a = 8;
                    }else if((indexs[0] === 6 && indexs[2] === 7) || (indexs[0] === 7 && indexs[2] === 6)) {
                        a = 1;
                    } else if((indexs[0] === 2 && indexs[2] === 9) || (indexs[0] === 9 && indexs[2] === 2)) {
                        a = 7;
                    } else if((indexs[0] === 4 && indexs[2] === 9) || (indexs[0] === 9 && indexs[2] === 4)) {
                        a = 3;
                    }
                    for(let i=1;i<=9;i++){
                        if(i !== indexs[0] && i !== indexs[1] && i !== indexs[2] && i !== a) {
                            arr.push(i)
                        }
                    }
                    index_O = arr.splice(parseInt(Math.random() * arr.length),1)[0]
                }
            } else if(level === 'hard') {
                if(data[4] === ''){
                    index_O = 5
                } else if(data[4] === 'O' && indexs[0]%2 === 0) {
                    if((indexs[0] === 2 && indexs[2] === 4) || (indexs[0] === 4 && indexs[2] === 2)) {
                       index_O = random(1,3,7)
                    } else if((indexs[0] === 2 && indexs[2] === 6) || (indexs[0] === 6 && indexs[2] === 2)) {
                       index_O = random(1,3,9)
                    } else if((indexs[0] === 4 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 4)) {
                       index_O = random(1,7,9)
                    } else if((indexs[0] === 6 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 6)) {
                       index_O = random(3,7,9)
                    }
                } else {
                    let a,b
                    if((indexs[0] === 1 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 1)) {
                        a = 2; b = 3;
                    } else if((indexs[0] === 1 && indexs[2] === 6) || (indexs[0] === 6 && indexs[2] === 1)) {
                        a = 4; b = 7;
                    } else if((indexs[0] === 3 && indexs[2] === 8) || (indexs[0] === 8 && indexs[2] === 3)) {
                        a = 1; b = 2;
                    } else if((indexs[0] === 3 && indexs[2] === 4) || (indexs[0] === 4 && indexs[2] === 3)) {
                        a = 6; b = 9;
                    } else if((indexs[0] === 2 && indexs[2] === 7) || (indexs[0] === 7 && indexs[2] === 2)) {
                        a = 8; b = 9;
                    }else if((indexs[0] === 6 && indexs[2] === 7) || (indexs[0] === 7 && indexs[2] === 6)) {
                        a = 1; b = 4;
                    } else if((indexs[0] === 2 && indexs[2] === 9) || (indexs[0] === 9 && indexs[2] === 2)) {
                        a = 7; b = 8;
                    } else if((indexs[0] === 4 && indexs[2] === 9) || (indexs[0] === 9 && indexs[2] === 4)) {
                        a = 3; b = 6;
                    }
                    for(let i=1;i<=9;i++){
                        if(i !== indexs[0] && i !== indexs[1] && i !== indexs[2] && i !== a && i !== b) {
                            arr.push(i)
                        }
                    }
                    index_O = arr.splice(parseInt(Math.random() * arr.length),1)[0]
                }
            }            
        }
    }

    if(len >= 5 || (len === 3 && level === 'easy')) {
        if((data[0]==='' || data[1]==='' || data[2]==='') && (data[0] === 'O' && data[1] === 'O' || data[0] === 'O' && data[2] === 'O' || data[1] === 'O' && data[2] === 'O')){
            index_O = 6 - checkData[0] - checkData[1]- checkData[2]
        } else if((data[3]==='' || data[4]==='' || data[5]==='') && (data[3] === 'O' && data[4] === 'O' || data[3] === 'O' && data[5] === 'O' || data[4] === 'O' && data[5] === 'O')){
            index_O = 15 - checkData[3] - checkData[4]- checkData[5]
        } else if((data[6]==='' || data[7]==='' || data[8]==='') && (data[6] === 'O' && data[7] === 'O' || data[6] === 'O' && data[8] === 'O' || data[7] === 'O' && data[8] === 'O')){
            index_O = 24 - checkData[6] - checkData[7]- checkData[8]
        } else if((data[0]==='' || data[3]==='' || data[6]==='') && (data[0] === 'O' && data[3] === 'O' || data[0] === 'O' && data[6] === 'O' || data[3] === 'O' && data[6] === 'O')){
            index_O = 12 - checkData[0] - checkData[3]- checkData[6]
        } else if((data[1]==='' || data[4]==='' || data[7]==='') && (data[1] === 'O' && data[4] === 'O' || data[1] === 'O' && data[7] === 'O' || data[4] === 'O' && data[7] === 'O')){
            index_O = 15 - checkData[1] - checkData[4]- checkData[7]
        } else if((data[2]==='' || data[5]==='' || data[8]==='') && (data[2] === 'O' && data[5] === 'O' || data[2] === 'O' && data[8] === 'O' || data[5] === 'O' && data[8] === 'O')){
            index_O = 18 - checkData[2] - checkData[5]- checkData[8]
        } else if((data[0]==='' || data[4]==='' || data[8]==='') && (data[0] === 'O' && data[4] === 'O' || data[0] === 'O' && data[8] === 'O' || data[4] === 'O' && data[8] === 'O')){
            index_O = 15 - checkData[0] - checkData[4]- checkData[8]
        } else if((data[2]==='' || data[4]==='' || data[6]==='') && (data[2] === 'O' && data[4] === 'O' || data[2] === 'O' && data[6] === 'O' || data[4] === 'O' && data[6] === 'O')){
            index_O = 15 - checkData[2] - checkData[4]- checkData[6]
        } 
        
        else if((data[0]==='' || data[1]==='' || data[2]==='') && (data[0] === 'X' && data[1] === 'X' || data[0] === 'X' && data[2] === 'X' || data[1] === 'X' && data[2] === 'X')){
            index_O = 6 - checkData[0] - checkData[1]- checkData[2]
        } else if((data[3]==='' || data[4]==='' || data[5]==='') && (data[3] === 'X' && data[4] === 'X' || data[3] === 'X' && data[5] === 'X' || data[4] === 'X' && data[5] === 'X')){
            index_O = 15 - checkData[3] - checkData[4]- checkData[5]
        } else if((data[6]==='' || data[7]==='' || data[8]==='') && (data[6] === 'X' && data[7] === 'X' || data[6] === 'X' && data[8] === 'X' || data[7] === 'X' && data[8] === 'X')){
            index_O = 24 - checkData[6] - checkData[7]- checkData[8]
        } else if((data[0]==='' || data[3]==='' || data[6]==='') && (data[0] === 'X' && data[3] === 'X' || data[0] === 'X' && data[6] === 'X' || data[3] === 'X' && data[6] === 'X')){
            index_O = 12 - checkData[0] - checkData[3]- checkData[6]
        } else if((data[1]==='' || data[4]==='' || data[7]==='') && (data[1] === 'X' && data[4] === 'X' || data[1] === 'X' && data[7] === 'X' || data[4] === 'X' && data[7] === 'X')){
            index_O = 15 - checkData[1] - checkData[4]- checkData[7]
        } else if((data[2]==='' || data[5]==='' || data[8]==='') && (data[2] === 'X' && data[5] === 'X' || data[2] === 'X' && data[8] === 'X' || data[5] === 'X' && data[8] === 'X')){
            index_O = 18 - checkData[2] - checkData[5]- checkData[8]
        } else if((data[0]==='' || data[4]==='' || data[8]==='') && (data[0] === 'X' && data[4] === 'X' || data[0] === 'X' && data[8] === 'X' || data[4] === 'X' && data[8] === 'X')){
            index_O = 15 - checkData[0] - checkData[4]- checkData[8]
        } else if((data[2]==='' || data[4]==='' || data[6]==='') && (data[2] === 'X' && data[4] === 'X' || data[2] === 'X' && data[6] === 'X' || data[4] === 'X' && data[6] === 'X')){
            index_O = 15 - checkData[2] - checkData[4]- checkData[6]
        }

        else {
            let arr = []
            if(checkData[0]%2 !== 0 || checkData[2]%2 !== 0 || checkData[6]%2 !== 0 || checkData[8]%2 !== 0) {
                for(let i=0;i<9;i++){
                    if(checkData[i] === 0){
                        arr.push(i+1)
                    }
                }
                index_O = arr.splice(parseInt(Math.random() * arr.length),1)[0]

            } else {
                for(let i=0;i<9;i++){
                    if(checkData[i] === 0){
                        arr.push(i+1)
                    }
                }
                index_O = arr.splice(parseInt(Math.random() * arr.length),1)[0]
            }
        }
    }

    indexs.push(index_O)
    checkData[index_O -1] = index_O
    data[index_O - 1] = 'O'
    len++
    
    return index_O
}
