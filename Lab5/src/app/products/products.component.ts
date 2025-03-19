import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';  
export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

export interface Category {
  name: string;
  products: Product[];
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = [
    {name : 'Magnum Products',
    products : [
      {
        id: 1,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p9b/p14/24867021.jpg?format=gallery-medium",
        name: "Сыр Hochland творожный сливочный 60% 220 г",
        description: "Нежный творожный сыр Hochland – это польза натурального творога и свежесть молодого сыра. А удобный и экономичный формат упаковки идеально подходит для большой семьи и для воплощения любых кулинарных фантазий.",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/syr-hochland-tvorozhnyi-slivochnyi-60-220-g-101176969/?c=750000000"
      },
      {
        id: 2,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7e/86541832126494.jpg?format=gallery-medium",
        name: "Foodmaster творог рассыпчатый 9% 450 г",
        description: "Творог Домашний от «ФудМастер» изготовлен из 100% натурального молока и сливок самого высокого качества, обладает мягким вкусом и нежной консистенцией. Насыщен кальцием и витаминами, очень вкусный и чрезвычайно полезный.",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/foodmaster-tvorog-rassypchatyi-9-450-g-101082006/?c=750000000"
      },
      {
        id: 3,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h89/h82/86667726815262.jpg?format=gallery-medium",
        name: "Султан рожки №5 особые 400 г",
        description: "Макароны спагетти из твердых сортов пшеницы не развариваются при варке. Превосходный гарнир, сочетающийся с соусами, овощами, мясом или птицей.",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/sultan-rozhki-5-osobye-400-g-100212026/?c=750000000"
      },
      {
        id: 4,
        image: "https://resources.cdn-kaspi.kz/img/m/p/pf6/pf8/7911306.JPG?format=gallery-medium",
        name: "Йогурт Активиа Комфортное пищеварение черника, злаки 2.9% 110 г",
        description: "Натуральный йогурт 'Активиа' с жирностью 2.9%. Содержит пробиотики для поддержания здоровья кишечника.",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/iogurt-aktivia-komfortnoe-pischevarenie-chernika-zlaki-2-9-110-g-129926757/?c=750000000"
      },
      {
        id: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h21/ha9/86224532701214.jpg?format=gallery-medium",
        name: "Брест-Литовск масло сливочное 82.5% 180 г",
        description: "Масло Брест-Литовск изготавливается только из свежих сливок без добавления растительных жиров и консервантов по старинным рецептам.",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/brest-litovsk-maslo-slivochnoe-82-5-180-g-102567277/?c=750000000"
      }
      ]
    
    },

    {
      name : 'Phones and gadgets',
      products : [
        {
          id : 6, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium' ,
          name : 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
          description : 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.          ' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
        },
    
        {
          id : 7,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium' ,
          name : 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
          description : 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.С его помощью можно быстро зарядить iPhone 8 или новее. До iPhone 12' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
        },
    
        {
          id : 8,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium' ,
          name : 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
          description : 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
        },
    
        {
          id : 9,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium' ,
          name : 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
          description : 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
        },
    
        {
          id : 10,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h47/hfa/84599409541150.jpg?format=gallery-medium' ,
          name : 'Кабель USB TypeC (M), Lightning белый',
          description : 'Надежный' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=750000000'
        }

      ]
    }, 
    {
      
        name : 'Beauty and health',
        products : [
          {id :11, 
            image : 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h74/86264155275294.jpg?format=gallery-medium' ,
            name : 'Skin1004 крем Madagascar Centella Hyalu-Cica Moisture Cream для лица 75 мл',
            description : 'Крем с успокаивающим действием SKIN1004 Madagascar Centella Hyalu-Cica Moisture Cream в кратчайшие сроки помогает устранить сухость и обезвоженность. Делает кожу упругой и эластичной. Продукт оказывает пролонгированное увлажняющее действие и способен сохранять влагу в клетках эпидермиса до 100 часов. Веганская формула мягко воздействует даже на самую чувствительную кожу, не провоцирует появления раздражений и шелушений. Помогает снять зуд и уменьшить область покраснений. Обладает лёгкой текстурой, которая быстро впитывается и не создаёт на лице плёнки. Отлично подходит в качестве базы под макияж.' ,
            rating : 5.0 , 
            link : 'https://kaspi.kz/shop/p/skin1004-krem-madagascar-centella-hyalu-cica-moisture-cream-dlja-litsa-75-ml-120341265/?c=750000000'
            
          },
      
          {
            id : 12,
            image : 'https://resources.cdn-kaspi.kz/img/m/p/h23/h60/86630600212510.jpg?format=gallery-medium' ,
            name : 'Skin1004 ампульная сыворотка Madagascar Centella Probio-Cica Intensive для лица 50 мл',
            description : 'Высококонцентрированная ампула с пробиотиками предназначена для восстановления, увлажнения и питания ослабленной кожи, оказывает ярко выраженное омолаживающее действие.' ,
            rating : 4.7 , 
            link : 'https://kaspi.kz/shop/p/skin1004-ampul-naja-syvorotka-madagascar-centella-probio-cica-intensive-dlja-litsa-50-ml-109664621/?c=750000000'
          },
      
          {
            id : 13, 
            image : 'https://resources.cdn-kaspi.kz/img/m/p/he9/h42/86619421638686.jpg?format=gallery-medium' ,
            name : 'Celimax крем Dual Barrier Skin Wearable Cream для лица 50 мл',
            description : 'Интенсивно увлажняющий крем направленно работает на восстановление защитного барьера эпидермиса и его функций, он поможет защитить кожу от воздействия негативных внешних факторов при помощи растительных керамидов, и сделает её покров гладким и смягчённым, удерживая влагу на длительное время и предупреждая её испарение. Гиалуронат натрия и запатентованный комплекс пептида будут наполнять покров живительной влагой, делая его более плотным и упругим.' ,
            rating : 4.9 , 
            link : 'https://kaspi.kz/shop/p/celimax-krem-dual-barrier-skin-wearable-cream-dlja-litsa-50-ml-108389249/?c=750000000'
          },
      
          {
            id : 14, 
            image : 'https://resources.cdn-kaspi.kz/img/m/p/h92/ha8/86627601743902.jpg?format=gallery-medium' ,
            name : 'Celimax сыворотка Pore Dark Spot Brightening для лица 30 мл',
            description : 'Сыворотка по уходу за пигментацией, веснушками, темными пятнами - Интенсивный уход за темными и расширенными порами - Делает вашу кожу чистой и сияющей Эта сыворотка воздействует на гиперпигментацию, темные пятна и избыток меланина, придавая коже естественное сияние. В состав осветляющих ингредиентов входят транексамовая кислота, ниацинамид и Melazero V2, которые помогают свести к минимуму выработку меланина и улучшить неровный тон кожи. Гиалуроновая кислота увлажняет кожу изнутри и обеспечивает влагой сухую кожу. Не содержит искусственных отдушек, эфирных масел и подсушивающих веществ.' ,
            rating : 4.9 , 
            link : 'https://kaspi.kz/shop/p/celimax-syvorotka-pore-dark-spot-brightening-dlja-litsa-30-ml-115318389/?c=750000000'
          },
      
          {
            id : 15, 
            image : 'https://resources.cdn-kaspi.kz/img/m/p/hef/h6e/86640643702814.png?format=gallery-medium' ,
            name : 'Celimax тонер Dual Barrier 150 мл',
            description : 'Барьерный кремовый тонер Celimax Dual Barrier Creamy Toner увлажняет, питает и восстанавливает' ,
            rating : 5.0 , 
            link : 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=750000000'
          }
  
      ]
    },
    {name : 'Jewelery',
    products : [
      {
        id: 16,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hac/h04/80649875718174.jpg?format=gallery-medium",
        name: "Комплект Diamond M-1380 вес 7.44 г золото, бриллиант, фианит",
        description: "белое золото, желтое золото",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/diamond-m-1380-ves-7-44-g-zoloto-brilliant-fianit-110232888/?c=750000000"
      },
      {
        id: 17,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h16/he3/82878218797086.jpg?format=gallery-medium",
        name: "Комплект Serebro 01234559 вес 7.8 г серебро, фианит",
        description: "значение веса оттенка на фото и характеристики являются",
        rating: 4.0,
        link: "https://kaspi.kz/shop/p/serebro-01234559-ves-7-8-g-serebro-fianit-112602117/?c=750000000"
      }
    ]
    }



  ];

  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  share(productLink : string ){
    const text = `Посмотри этот товар: ${productLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(text)}`
    window.open(telegramUrl, '_blank')
  }

 
}
