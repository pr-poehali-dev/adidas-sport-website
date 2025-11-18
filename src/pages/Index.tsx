import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все коллекции', icon: 'Sparkles' },
    { id: 'women', name: 'Женское', icon: 'User' },
    { id: 'men', name: 'Мужское', icon: 'User' },
    { id: 'accessories', name: 'Аксессуары', icon: 'ShoppingBag' },
  ];

  const products = [
    {
      id: 1,
      name: 'ԱՐԱՐԱՏ',
      nameEn: 'Ararat Collection',
      category: 'women',
      price: '24 900',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/2cd84e36-147a-4baa-a468-a9cc5af926a0.jpg',
      badge: 'Новая коллекция',
    },
    {
      id: 2,
      name: 'ԽԱՉՔԱՐ',
      nameEn: 'Khachkar Jacket',
      category: 'men',
      price: '32 900',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/1d283e3d-e9e4-40db-9cad-5d55e536d783.jpg',
      badge: 'Хит продаж',
    },
    {
      id: 3,
      name: 'ԵՐԵՎԱՆ',
      nameEn: 'Yerevan Bag',
      category: 'accessories',
      price: '12 900',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/9b08b4d3-a536-4628-bc3f-bffa34a301ac.jpg',
      badge: 'Лимитировано',
    },
    {
      id: 4,
      name: 'ՀԱՅԱՍՏԱՆ',
      nameEn: 'Armenia Heritage',
      category: 'women',
      price: '28 500',
      image: 'https://cdn.poehali.dev/projects/98496b6e-deb1-4c3e-9923-6404c391b984/files/2cd84e36-147a-4baa-a468-a9cc5af926a0.jpg',
      badge: 'Эксклюзив',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">ՀԱՅ</span>
                </div>
                <h1 className="text-2xl font-heading font-bold tracking-tight">ԱՐՄԵՆԻԱ</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#collections" className="text-sm hover:text-primary transition-colors">Коллекции</a>
                <a href="#women" className="text-sm hover:text-primary transition-colors">Женское</a>
                <a href="#men" className="text-sm hover:text-primary transition-colors">Мужское</a>
                <a href="#accessories" className="text-sm hover:text-primary transition-colors">Аксессуары</a>
                <a href="#heritage" className="text-sm hover:text-primary transition-colors">Наследие</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[650px] bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <pattern id="armenian-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L75 25 L50 50 L25 25 Z M0 50 L25 75 L0 100 M100 50 L75 75 L100 100" 
                    stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#armenian-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <Badge className="bg-accent text-foreground hover:bg-accent/90 text-xs px-4 py-1.5">
                СДЕЛАНО В АРМЕНИИ
              </Badge>
            </div>
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Հայկական<br />Ոճ և Ժառանգություն
            </h2>
            <p className="text-2xl text-muted-foreground mb-3 font-heading">
              Армянский стиль и наследие
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Современная одежда с традиционными армянскими орнаментами. 
              Каждое изделие создано вручную мастерами Еревана, сохраняя древние традиции ткачества.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-medium px-8 shadow-lg">
                Смотреть коллекции
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8">
                История бренда
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Mountain', title: 'Сделано в Армении', desc: 'Производство в Ереване с 2015 года' },
              { icon: 'Hand', title: 'Ручная работа', desc: 'Каждое изделие создано вручную мастерами' },
              { icon: 'Sparkles', title: 'Национальные узоры', desc: 'Традиционные армянские орнаменты' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Наши коллекции
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Современный дизайн встречается с древними традициями
            </p>
          </div>

          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-center">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in border-2 hover:border-primary/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-foreground shadow-lg">
                      {product.badge}
                    </Badge>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" className="bg-white text-primary hover:bg-primary hover:text-white shadow-lg">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-heading font-bold text-lg text-primary">
                        {product.name}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.nameEn}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-primary">{product.price} ₽</span>
                      <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="heritage" className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <pattern id="khachkar" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="3" fill="white"/>
              <path d="M40 20 L40 60 M20 40 L60 40" stroke="white" strokeWidth="2"/>
              <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#khachkar)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h3 className="text-5xl font-heading font-bold mb-6">
                Արարատյան ժառանգություն
              </h3>
              <p className="text-xl mb-3 opacity-90">Наследие Арарата</p>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                Наш бренд основан на древних традициях армянского ткачества и вышивки. 
                Мы используем только натуральные ткани и органические красители, 
                создавая уникальные изделия, которые рассказывают историю тысячелетней культуры.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Традиционные армянские орнаменты хачкаров',
                  'Ручная вышивка национальных узоров',
                  'Натуральные ткани из органического хлопка',
                  'Поддержка местных мастеров и ремесленников'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-foreground" />
                    </div>
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-foreground">
                Узнать больше о нас
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="mb-6">
                    <div className="text-8xl font-heading font-bold mb-2">2015</div>
                    <div className="text-xl opacity-80">Год основания</div>
                  </div>
                  <div className="h-px w-32 bg-white/30 mb-6"></div>
                  <div className="mb-6">
                    <div className="text-6xl font-heading font-bold mb-2">1000+</div>
                    <div className="text-lg opacity-80">Довольных клиентов</div>
                  </div>
                  <div className="h-px w-32 bg-white/30 mb-6"></div>
                  <div>
                    <div className="text-6xl font-heading font-bold mb-2">100%</div>
                    <div className="text-lg opacity-80">Сделано в Армении</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-heading font-bold mb-6">Мастерская в Ереване</h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Наша мастерская расположена в самом сердце Еревана, где опытные мастера 
              создают каждое изделие с любовью к традициям и вниманием к деталям. 
              Мы гордимся тем, что поддерживаем местное производство и сохраняем 
              уникальное культурное наследие Армении.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: 'Users', title: 'Мастера', value: '25+' },
                { icon: 'Clock', title: 'Часов работы', value: '500+' },
                { icon: 'Package', title: 'Изделий в год', value: '2000+' },
                { icon: 'Award', title: 'Лет опыта', value: '10+' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={stat.icon} size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-heading font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">ՀԱՅ</span>
                </div>
                <h4 className="font-heading font-bold text-xl">ԱՐՄԵՆԻԱ</h4>
              </div>
              <p className="text-sm opacity-70">
                Брендовая одежда с армянскими мотивами. 
                Традиции встречают современность.
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Коллекции</h5>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Женское</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Мужское</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Аксессуары</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Новинки</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О бренде</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Оплата</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Мы в соцсетях</h5>
              <div className="flex gap-3 mb-6">
                {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                  <Button key={social} size="icon" variant="ghost" className="opacity-70 hover:opacity-100">
                    <Icon name={social as any} size={20} />
                  </Button>
                ))}
              </div>
              <p className="text-sm opacity-70">
                Ереван, Армения<br />
                info@armenia-brand.am
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
            <p>© 2025 ԱՐՄԵՆԻԱ. Все права защищены. Сделано с любовью в Армении 🇦🇲</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
