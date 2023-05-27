const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => {
    return cubes.slice()
}

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    cubes.push(newCube);
    
    return newCube;
};