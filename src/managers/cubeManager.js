
const cubes = [];

exports.getAll = () => {
    return cubes.slice()
}

exports.create = (cubeData) => {
    const newCube = {
        id:cubes.length + 1,
        ...cubeData,
    }
    cubes.push(newCube);
    
    return newCube;
};