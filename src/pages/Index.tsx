import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'men', name: 'Мужское', icon: 'User' },
    { id: 'women', name: 'Женское', icon: 'User' },
    { id: 'shoes', name: 'Обувь', icon: 'Footprints' },
    { id: 'accessories', name: 'Аксессуары', icon: 'ShoppingBag' },
  ];

  const products = [
    {
      id: 1,
      name: 'ULTRABOOST 22',
      category: 'shoes',
      price: '12 990',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/a8d10cfc-a63c-49da-b39a-4cf22026d693.jpg',
      badge: 'Новинка',
      isLimited: false,
    },
    {
      id: 2,
      name: 'ADICOLOR HOODIE',
      category: 'men',
      price: '4 990',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/183b72fc-f00a-4f66-b791-490ea8e82a2a.jpg',
      badge: 'Хит',
      isLimited: false,
    },
    {
      id: 3,
      name: 'CLASSIC BACKPACK',
      category: 'accessories',
      price: '3 490',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/e1e735e9-a7ae-41a9-8e32-2ed0bb2c4519.jpg',
      badge: 'Топ',
      isLimited: false,
    },
    {
      id: 4,
      name: 'NMD_S1 LIMITED',
      category: 'shoes',
      price: '15 990',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/a8d10cfc-a63c-49da-b39a-4cf22026d693.jpg',
      badge: 'Лимитированная серия',
      isLimited: true,
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-heading font-bold tracking-tight">adidas</h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#new" className="text-sm hover:text-gray-300 transition-colors">Новинки</a>
                <a href="#men" className="text-sm hover:text-gray-300 transition-colors">Мужское</a>
                <a href="#women" className="text-sm hover:text-gray-300 transition-colors">Женское</a>
                <a href="#shoes" className="text-sm hover:text-gray-300 transition-colors">Обувь</a>
                <a href="#accessories" className="text-sm hover:text-gray-300 transition-colors">Аксессуары</a>
                <a href="#about" className="text-sm hover:text-gray-300 transition-colors">О бренде</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-accent text-white hover:bg-accent/90 text-xs px-3 py-1">
              СЕЗОН ВЕСНА 2025
            </Badge>
            <h2 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              IMPOSSIBLE<br />IS NOTHING
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Новая коллекция спортивной одежды и обуви для достижения максимальных результатов
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-medium px-8">
                Смотреть коллекцию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-medium px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="limited" className="py-12 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y-2 border-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">Лимитированная серия</h3>
                <p className="text-muted-foreground">Эксклюзивные модели в ограниченном количестве</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Осталось времени:</span>
              <div className="flex gap-2">
                {[
                  { value: timeLeft.hours, label: 'ч' },
                  { value: timeLeft.minutes, label: 'м' },
                  { value: timeLeft.seconds, label: 'с' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black text-white rounded-lg px-3 py-2 min-w-[60px] text-center">
                    <div className="text-2xl font-heading font-bold">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-xs opacity-70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="new" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-2">Новинки</h3>
              <p className="text-muted-foreground">Последние поступления сезона</p>
            </div>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-gray-200"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isLimited && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent text-white">
                          <Icon name="Zap" size={12} className="mr-1" />
                          Limited
                        </Badge>
                      </div>
                    )}
                    {!product.isLimited && (
                      <Badge className="absolute top-3 left-3 bg-black text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" className="bg-white text-black hover:bg-gray-100">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-semibold mb-1 text-sm uppercase tracking-wide">
                      {product.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {categories.find(c => c.id === product.category)?.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-heading font-bold">{product.price} ₽</span>
                      <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-5xl font-heading font-bold mb-6">
                Сезонная коллекция<br />СПОРТ БЕЗ ГРАНИЦ
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Инновационные технологии и современный дизайн для максимальной производительности. 
                Созданы для тех, кто не останавливается на достигнутом.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Технология BOOST для максимальной амортизации',
                  'Дышащий материал Primeknit',
                  'Влагоотталкивающее покрытие',
                  'Экологичные материалы переработки'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Купить сейчас
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl font-heading font-bold opacity-20">3</div>
                    <div className="text-2xl font-heading font-bold -mt-8">STRIPES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-heading font-bold mb-6">О бренде Adidas</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              С 1949 года adidas создает спортивную одежду и обувь, которая помогает атлетам 
              достигать невозможного. Три полоски — это не просто логотип, это символ 
              инноваций, качества и страсти к спорту.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: 'Trophy', title: 'Победы', value: '1000+', desc: 'Олимпийских медалей' },
                { icon: 'Globe', title: 'Присутствие', value: '160+', desc: 'Стран по всему миру' },
                { icon: 'Heart', title: 'Миссия', value: '∞', desc: 'Вдохновлять поколения' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-heading font-bold mb-2">{stat.value}</div>
                  <div className="font-heading font-semibold mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-bold text-xl mb-4">adidas</h4>
              <p className="text-gray-400 text-sm">
                Impossible is nothing. Создаем будущее спорта вместе с вами.
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Магазин</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Мужское</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Женское</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обувь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Размеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Следите за нами</h5>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                  <Button key={social} size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10">
                    <Icon name={social as any} size={20} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 adidas. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
