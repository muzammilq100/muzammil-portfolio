'use strict';

const images = [
    {
        file: 'IMG_20250717_102753.jpg',
        title: 'Love me like I am Already Dead'
    },
    {
        file: 'lv_0_20260703041118.jpg',
        title: 'The Hardest Gift I Gave'
    },
    {
        file: 'lv_0_20260707024023.jpg',
        title: 'A Private Eulogy'
    },
    {
        file: 'lv_0_20260914002544.jpg',
        title: 'The Guardians I Built to Defend'
    },
    {
        file: 'between-grief-and-acceptance.jpg',
        title: 'Between Grief and Acceptance'
    },
    {
        file: 'uncertainty.jpg',
        title: 'Uncertainty'
    },
    {
        file: 'everything-else-was-easier-to-perform.jpg',
        title: 'Everything Else Was Easier To Perform'
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
