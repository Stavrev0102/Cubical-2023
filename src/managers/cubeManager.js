const uniqid = require('uniqid')
const cubes = [
    {
        id: '1ojxg1xp8li66ld8y',
    name: 'test1',
    description: 'very good cube for kids',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0482/9177/4628/products/o3rmamdfu2kartbxpul9.jpg?v=1681761411',
    difficultyLevel: 3
    }
];

exports.getAll = (search,from,to) => {
  let result = cubes.slice();

  if(search){
    result =  result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(from){
    result = result.filter(cube => cube.difficultyLevel >= Number(from));
  }
  if(to){
    result = result.filter(cube => cube.difficultyLevel <= Number(to));
  }
  return result

};

exports.getOne = (cubeId) => {
return cubes.find(x => x.id == cubeId)
};

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    cubes.push(newCube);
    
    return newCube;
};