/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.toLowerCase().split(' ').map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word).join(' ');
};