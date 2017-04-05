import React from 'react';
import pattern from '../patterns/pattern1b.png';

const radius = 150, halfRadius = radius / 2;

class Hexagon extends React.Component {
  componentDidMount() {
    this.drawImages();
    this.drawImages2();
  }

  drawImages() {
    const ctx = document.getElementById("canvas").getContext('2d');

    ctx.translate(radius, radius);

    const img = new Image();
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACCCAYAAACkRjFvAAAABmJLR0QAaAB9AHa1Tqj5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAErklEQVR42u2ayXLiSBRFL1JqsABTDtfwi/0FvetV7/oL+icrGmMQGlKpXmDUdrXLFVVmUCrPiWABRHiQrs59ejAT/JDf/vi9f/787z//mnFU3ibiELw/aECwCNGFQOnvCBWViLEAY/lVgVgLYwHG8mtgx1oYiztHgkVIqEJCRSViLMBYHlYg1sJYgLH8GtixFsbizpJgEQKqkFAFX4lUIWAsHyswVGthLMBYvg7sIVoLY3HnSbA4yVQhoQq8EqlCwFhTqMBQrIWxmPEIFieTKiRUgVciVQgYa2oVOGVrYSzAWFMc2KdqLYzFBUCwQj9ZVCGhCr4SqULAWFOvwClZC2MBxgphYJ+KtTAWFwjBmvrJoAoJFZVIFQLGwlaTsRbGAowV4sDuq7UwFhcQwQrNVlQhoaISqULAWNjKW2thLAjbWAzsflkLY3HzEm6wsBVVSKioRKoQAjUWtvLXWhiLQT6sYGErqpBQUYlUIQRqLGw1DWsZTskbV91s9t/j6bVeUt/3wwM8MNZYbHUMUxzHiqNIURRpNjscqr7v5ZxT55y6rhtVwMZkLWasV0IVR5HSJFGepiryGy2KuZbFQstioUUxV5HfKE9TpUmi+FnouDBHWIVjOCjHUCVJojRJlWeZ8ixTlqYy8eFQ2c6qbhpVda2qrg+halt1zlGNY6vCsVxp0ZOpsjQ7mGpeDIZK01SS1DSNymqvbbnTdleqrPaqm1pN28o5RyUyvL9iqzhWYozyLNNiXujDcqW71Uq3i+WLYG22j4PBXO/kXDcYC2uNZMYa08AeR5ESkxyCVcx1t1rp8/1Hfb7/qC/3n/Tl/tPw/G610qKYK88yJYZZC2O9EawoimSMUfY0tN8ulrpdLPXhdqUizyVJZVVJkqq61q4stduX2hvz4s4RrmysMd3FzI7hmkUysVGapkrT9GneylXcFIdHnitLs+F9ExtFs+jFrgtrsW6YNNcMlwn1ivqW40bd9U62s2qaRk3TqG7qof6OVVg39fC+7axc/zS4k+XrGmuMnwceN+rWHvZUZbXXZvuozfZR682Dvq7X+rpea715GF4/rBoaWWvlRrrHutaxZnh/FqzOObW2VVXX2pa7YaVQ1fX/1g3/PDxoW+5U1bVay4L0tZk1eFsN+p7IgvQ1Lr00xVjfWMtaO6wNXO/UtK12+/K7H+k07aEKsdUVjeXDd62Oi1JjjBJjlJhExhxWCsewWWvV2lattbLWelODl7QW64bvzFpN26p6VnuP5VaP5Vbbcqey2qtqGjWeffh8yQvbTPGfOkW4jo+OL/qNtwr5unF4lUgVgp/GwlZhWgtjgX/GwlbhWmtGqAgXVQhhVyG2wloYC/wwFrbCWhgLziaEaMx/HFCFhIpKpArBE2NhK6yFscAPY2ErrIWx4GLCiK75y4EqJFRUIlUInhoLW2EtjAV+GAtbYS2MBSfjZ4USnfOHA1VIqOCklUgVwvWMha3gZ62FseA6xsJW8CvWwljwS/xIOBG2gotWIaGC91QiVQiXMxa2gvdaC2PBWQb5CFvB2auQUMGpKpEqhPMaC1vBKa2FseB8xsJWcGprESw4j7EIFZwDZiwgWOAP/wKI3b23YmOhzQAAAABJRU5ErkJggg==";

    img.onload = () => {
      ctx.rotate(Math.PI / -3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
    };
  }

  drawImages2() {
    const ctx = document.getElementById("canvas2").getContext('2d');
    // ctx.imageSmoothingEnabled = false;
    ctx.translate(radius, radius);

    const img = new Image();
    const file = {pattern};
    img.src = file['pattern'];

    img.onload = () => {
      ctx.rotate(Math.PI / -3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
      ctx.rotate(Math.PI / 3);
      ctx.drawImage(img, -halfRadius, 0);
    };
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width={2*radius+10} height={2*radius} />
        <canvas id="canvas2" width={2*radius} height={2*radius} />
       </div>
    )
  }
}

export default Hexagon;