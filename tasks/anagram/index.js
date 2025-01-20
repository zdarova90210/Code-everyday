function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    const normalized1 = normalize(str1);
    const normalized2 = normalize(str2);

    if (!normalized1 || !normalized2) return false;

    return normalized1 === normalized2;
}

// Версия похуже. Она сложнее по О большому и менее читаемая.
// function isAnagram(str1, str2) {
//     let arr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
//     let arr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
//
//     if (!arr1.length || !arr2.length) {
//         return false;
//     }
//
//     while (arr1.length > 0 && arr2.length > 0) {
//         const char = arr1.shift();
//         const index = arr2.indexOf(char);
//         if (index === -1) {
//             return false;
//         }
//         arr2.splice(index, 1);
//     }
//
//     return arr1.length === arr2.length;
// }

module.exports = isAnagram;
