import Image from "../models/Image";

export default {
  render(image: Image) {
    const URL = 'http://localhost:3333/uploads';
    return {
      id: image.id,
      url: `${URL}/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
