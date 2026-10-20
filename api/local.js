'use strict';

// ============================================================
// LOCAL MASTERPIECE
// ============================================================

const images = [

    {
        file: 'lv_0_20260914002544.jpg',
        title: 'Masterpiece'
    }

];


// ============================================================
// LOCAL IMAGE API
// ============================================================

module.exports = {

    fetchList: async function (
        from,
        count
    ) {

        return images
            .slice(
                from,
                from + count
            )
            .map(
                (img, i) => ({

                    ...img,

                    image_id:
                        from + i

                })
            );

    },


    fetchImage: async function (
        obj,
        advisedResolution
    ) {

        const url =
            'images/' +
            obj.file;


        const blob =
            await fetch(url)
                .then(
                    res =>
                        res.blob()
                );


        return {

            title:
                obj.title,

            image:
                blob

        };

    }

};