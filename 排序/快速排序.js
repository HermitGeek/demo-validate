/*
实现步骤：
    选择一个基准元素target（一般选择第一个数）
    将比target小的元素移动到数组左边，比target大的元素移动到数组右边
    分别对target左侧和右侧的元素进行快速排序    
*/
const arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];


const quickSort = (array) => {

    if (array.length < 2) {
        return array;
    }

    const left = [];
    const right = [];
    const target = array[0];

    array.forEach((item, index) => {
        if (index > 0) {
            if (item > target) {
                right.push(item);
            } else {
                left.push(item);
            }
        }
    });

    console.log(left, right)

    return quickSort(left).concat([target], quickSort(right))
}


console.log(quickSort(arr));
