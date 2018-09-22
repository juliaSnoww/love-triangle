/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  obj=preferences;
    obj.unshift(0);
    keys = Object.keys(obj);
    var result = 0;
        for(var i = 0;i < preferences.length;i++)
    {
        first =keys[i];
        second=obj[first];
        third=obj[second];
       // console.log(first+"->"+second+"->"+third+"->"+obj[third]);
        if (first==obj[third] && (first != obj[first] && second != obj[second] && third != obj[third])){result++}
    }
    return result/3;
};
