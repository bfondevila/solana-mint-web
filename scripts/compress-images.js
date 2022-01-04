import glob from "glob";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  const removeFileNameRegex = new RegExp(/[^/]+$/);
  glob("../public/{images,videos}/**/*.{jpg,jpeg,png}", (err, paths) => {
    if (err) {
      console.log(err);
    } else {
      Promise.all(
        paths.map(async (item) => {
          return imagemin([item], {
            destination: item.replace(removeFileNameRegex, ""),
            plugins: [
              imageminJpegtran(),
              imageminPngquant({
                quality: [0.6, 0.8],
              }),
              imageminWebp({ quality: 80 }),
            ],
          });
        }),
      ).then((result) => {
        console.log(`Finished compressing ${result.length} images`);
      });
    }
  });
})();
