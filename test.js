function Test(title) {
    console.log(`hi ${title}`);
    console.log(`hi ${title}`);
    console.log(`hi ${title}`);
    console.log(`hi ${title}`);
}

Test('React');
Test('JavaScript');
Test('C++');

class Component {
    getName(){}
}

class Student extends Component {

}


let name = 'HI';

const obj = {
    name:'WebBrain',
};

const {name: newName} = obj;

console.log(obj.name);
console.log(newName);