import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
    id: 1,
    name: 'Сыр Hochland творожный сливочный 60% 220 г',
    price: 1335,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p9b/p14/24867021.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pf0/p14/24867024.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pe9/p17/24867030.jpg?format=gallery-medium"
    ],
    rating: 5,
    description: `Нежный творожный сыр Hochland – это польза натурального творога и свежесть молодого сыра. А удобный и экономичный формат упаковки идеально подходит для большой семьи и для воплощения любых кулинарных фантазий.`,
    sourceLink: "https://kaspi.kz/shop/p/syr-hochland-tvorozhnyi-slivochnyi-60-220-g-101176969/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 2,
    name: 'Foodmaster творог рассыпчатый 9% 450 г',
    price: 915,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7e/86541832126494.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hc4/ha1/86541832192030.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/he3/h12/86541832257566.jpg?format=gallery-medium"
    ],
    rating: 5,
    description: 'Творог Домашний от «ФудМастер» изготовлен из 100% натурального молока и сливок самого высокого качества, обладает мягким вкусом и нежной консистенцией. Насыщен кальцием и витаминами, очень вкусный и чрезвычайно полезный.',
    sourceLink: 'https://kaspi.kz/shop/p/foodmaster-tvorog-rassypchatyi-9-450-g-101082006/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 3,
    name: 'Султан рожки №5 особые 400 г',
    price: 453,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h89/h82/86667726815262.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h89/h82/86667726815262.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h40/h84/86667813191710.jpg?format=gallery-medium"
    ],
    rating: 5,
    description: 'Макароны спагетти из твердых сортов пшеницы не развариваются при варке. Превосходный гарнир, сочетающийся с соусами, овощами, мясом или птицей.',
    sourceLink: 'https://kaspi.kz/shop/p/sultan-rozhki-5-osobye-400-g-100212026/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 4,
    name: 'Йогурт Активиа Комфортное пищеварение черника, злаки 2.9% 110 г',
    price: 459,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pf6/pf8/7911306.JPG?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pa1/pf8/7911309.JPG?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p35/pf6/7911310.JPG?format=gallery-medium"
    ],
    rating: 5,
    description: 'Натуральный йогурт "Активиа" с жирностью 2.9%. Содержит пробиотики для поддержания здоровья кишечника.',
    sourceLink: 'https://kaspi.kz/shop/p/iogurt-aktivia-komfortnoe-pischevarenie-chernika-zlaki-2-9-110-g-129926757/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 5,
    name: 'Брест-Литовск масло сливочное 82.5% 180 г',
    price: 1449,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h21/ha9/86224532701214.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h21/ha9/86224532701214.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h21/ha9/86224532701214.jpg?format=gallery-medium"
    ],
    rating: 5,
    description: 'Масло Брест-Литовск изготавливается только из свежих сливок без добавления растительных жиров и консервантов по старинным рецептам. ',
    sourceLink: 'https://kaspi.kz/shop/p/brest-litovsk-maslo-slivochnoe-82-5-180-g-102567277/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 6,
    name: 'Сыр Hochland плавленый Чизбургер 45% 150 г',
    price: 898,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p17/p49/25387459.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pe5/p45/25387467.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p3a/p46/25387464.jpg?format=gallery-medium"
    ],
    rating: 4.8,
    description: 'Приготовить вкусный чизбургер проще простого, если под рукой есть ломтики плавленого сыра Hochland чизбургер! Ведь они изготовлены из классического натурального сыра с добавлением сыра Чеддер, поэтому идеально подходят для приготовления бургеров. А квадратная форма и оптимальный размер соответствуют требованиям блюда.',
    sourceLink: 'https://kaspi.kz/shop/p/syr-hochland-plavlenyi-chizburger-45-150-g-101048939/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 7,
    name: 'MAGNUM хлеб ржаной нарезной 480 г',
    price: 425,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h0c/hda/64364174016542.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hf1/h0f/64364175622174.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hae/h54/64364244172830.jpg?format=gallery-medium"
    ],
    rating: 4.7,
    description: 'Свежий хлеб',
    sourceLink: 'https://kaspi.kz/shop/p/magnum-hleb-rzhanoi-nareznoi-480-g-104571699/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 8,
    name: 'KINDER Bueno White шоколадный батончик белый 39 г',
    price: 443,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pa8/pec/12256207.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p8b/pec/12256208.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p03/pea/12256210.png?format=gallery-medium"
    ],
    rating: 4.9,
    description: 'Хрустящая вафля, покрытая белым шоколадом с нежной молочно-ореховой начинкой. Два индивидуально упакованных батончика обладают высокими вкусовыми качествами благодаря белому шоколаду Kinder и оригинальной начинке.',
    sourceLink: 'https://kaspi.kz/shop/p/kinder-bueno-white-shokoladnyi-batonchik-belyi-39-g-100223064/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 9,
    name: 'Чипсы Lay’s картофельные Рифленые Лобстер 140 г',
    price: 689,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/paf/p5f/13871622.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/paf/p5f/13871622.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/paf/p5f/13871622.jpg?format=gallery-medium"
    ],
    rating: 4.9,
    description: "Lay's — чипсы, каждая пачка которых изготовлена из специально отобранного картофеля и соответствует самым высоким стандартам качества. Рифленая текстура золотистой отборной картошки, насыщенный вкус лобстера — вот, что нужно в моменты истинного наслаждения! Попробовав однажды эти рифленые чипсы Лейс, вы никогда не сможете забыть их яркийвкус. Каждый день вкуснее с Lay's!",
    sourceLink: 'https://kaspi.kz/shop/p/chipsy-lay-s-kartofel-nye-riflenye-lobster-140-g-105085503/?c=750000000',
    indexOfImage: 0,
  },
  {
    id: 10,
    name: 'Печенье Oreo Original с какао и начинкой с ванильным вкусом 228 г',
    price: 700,
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p1c/p90/26251196.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p1c/p90/26251196.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p1c/p90/26251196.jpg?format=gallery-medium"
    ],
    rating: 5,
    description: 'Хрустящее печенье со сливочной начинкой с ванильными нотками, нежно тает во рту! Насыщает энергией, удобно брать с собой в качестве перекуса.',
    sourceLink: 'https://kaspi.kz/shop/p/pechen-e-oreo-original-s-kakao-i-nachinkoi-s-vanil-nym-vkusom-228-g-100971349/?c=750000000',
    indexOfImage: 0,
  },
];

share(link: string) {
  const shareMessage = `Я делюсь с ссылкой на продукт:  ${link}`;
  const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
  window.location.href = telegramLink;
}


getStars(rating: number): string {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
}

changeImage(product: any, direction: number) {
  product.indexOfImage += direction;
  if (product.indexOfImage >= product.images.length) {
    product.indexOfImage = 0; 
  } else if (product.indexOfImage < 0) {
    product.indexOfImage = product.images.length - 1; 
  }
}
}
