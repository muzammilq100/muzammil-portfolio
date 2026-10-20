'use strict';

const images = [
    {
        file: 'IMG_20250717_102753.jpg',
        title: 'Artwork I'
    },
    {
        file: 'lv_0_20260703041118.jpg',
        title: 'Artwork II'
    },
    {
        file: 'lv_0_20260707024023.jpg',
        title: 'Artwork III'
    },
    {
        file: 'lv_0_20260914002544.jpg',
        title: 'Masterpiece'
    }
];

module.exports = {
    fetchList: async function (from, count) {
        return images.slice(from, from + count).map((img, i) => ({
            ...img,
            image_id: from + i
        }));
    },

    fetchImage: async function (obj) {
        const response = await fetch('images/' + obj.file);
        if (!response.ok) {
            throw new Error('Could not load ' + obj.file);
        }
        return {
            title: obj.title,
            image: await response.blob()
        };
    }
};
