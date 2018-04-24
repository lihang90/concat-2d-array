const concat2dArray = require('../index');
const should = require('should');


describe("check 2d Array", function () {
    it("Params is 1d array", function () {
        should(concat2dArray([1])).eql(false);
    });
    it("Params is string", function () {
        should(concat2dArray('abc')).eql(false);
    });
    it("Params is Object", function () {
        should(concat2dArray({a:1})).eql(false);
    });
});

const tempArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
describe("check result", function () {
    it("Is right result", function () {
        should(concat2dArray(tempArr)).eql([
            [1, 3, 5],
            [1, 3, 6],
            [1, 4, 5],
            [1, 4, 6],
            [2, 3, 5],
            [2, 3, 6],
            [2, 4, 5],
            [2, 4, 6]
        ]);
    });
    it("Is right result", function () {
        should(concat2dArray([[1,2],[3,4]])).eql([
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4]
        ]);
    });
});

// describe('check params array', function(){
//     it("params arr need array", function(){
//         should(array2tree('arr')).eql(false);
//     })
// });
//
// const fourLevelArr = [
//     {
//         id: 1,
//         pid: 0,
//         name: 'level 1'
//     },
//     {
//         id: 2,
//         pid: 1,
//         name: 'level 2'
//     },
//     {
//         id: 3,
//         pid: 2,
//         name: 'level 3'
//     },
//     {
//         id: 4,
//         pid: 3,
//         name: 'level 4'
//     },
// ];
// describe("more than 3 levels", function () {
//     it("The single level array more than 3 levels tree", function () {
//         should(array2tree(fourLevelArr)).eql([{
//             id: 1,
//             pid: 0,
//             name: 'level 1',
//             children: [
//                 {
//                     id: 2,
//                     pid: 1,
//                     name: 'level 2',
//                     children: [{
//                         id: 3,
//                         pid: 2,
//                         name: 'level 3',
//                         children: [{
//                             id: 4,
//                             pid: 3,
//                             name: 'level 4',
//                             children: []
//                         }]
//                     }]
//                 }
//             ]
//         }]);
//     });
// });
//
// const badLevelArr = [{
//     pid : 1,
//     name : 'level 1'
// },{
//     pid : 2,
//     name : 'level 2'
// }
// ];
// describe("params no 'id' ", function () {
//     it("params array item key has no 'id'", function () {
//         should(array2tree(badLevelArr)).eql(false);
//     });
// });