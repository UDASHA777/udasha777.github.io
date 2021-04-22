var addressPoints = [
[62.26763, 74.47733, "ХМАО, г. Когалым, 2019, ул. Прибалтийская - ул. Мира",1],
[62.2648, 74.47042, "ХМАО, г. Когалым, 2019, ул. Прибалтийская - ул. Ленинградская",1],
[56.08666, 54.26155, "Республика Башкортостан, г. Нефтекамск,2019, ул. Дорожная, 29 (ПВУ)",1],
[56.09908, 54.23296, "Республика Башкортостан, 2019, г. Нефтекамск, ул. Социалистическая, 62 (ПВУ)",1],
[56.10624, 54.22781, "Республика Башкортостан, 2019, г.Нефтекамск, Николо-Березовское шоссе",1],
[56.091964, 54.265969, "Республика Башкортостан, 2020, 	Нефтекамск	ул. Трактовая - ул.Строителей", 1],
[56.07708, 54.23683, "Республика Башкортостан, 2019, г. Нефтекамск	пр-т Комсомольский (мкр-н Авалон) (ПВУ)",1],
[56.10166, 54.2402,	"Республика Башкортостан, 2019, 	г. Нефтекамск	ул. Строителей - ул. Победы",1],
[56.10855, 54.21922,"Республика Башкортостан, 2019, г. Нефтекамск	Николо-Березовское шоссе - ул. Родниковая",1],
[54.60664, 53.71832,"Республика Башкортостан, 2019, г. Туймазы, 2019, ул. Советская СОШ № 3, Т7"],
[54.59375, 53.69461, "Республика Башкортостан, 2019, г. Туймазы, 2019, ул. Луначарского СОШ № 4, Т7"],
[55.834078, 56.898107, "Республика Башкортостан, 2019, км 98+239 на а/д Бирск - Тастуба - Сатка", 1],
[57.98343, 56.20367, "Пермский край, 2019, г. Пермь,	ул. Мира - ул. Кавалерийская"],
[57.97911, 56.18936,	"Пермский край, 2019, г. Пермь,	ул. Мира - ул. Заслонова"],
[57.96418, 56.18925,	"Пермский край, 2019, г. Пермь,	ул. Свиязева - школа №26"],
[58.04546, 56.05956,	"Пермский край, 2019, г. Пермь,	ул. Якутская - ул. Вольская"],
[57.9981, 56.25669,	"Пермский край, 2019, г. Пермь,	ул. П. Осипенко - ул. Г. Звезда"],
[57.99885, 56.26824,	"Пермский край, 2019, г. Пермь,	ул. Белинского - ул. Суханова"],
[57.99253, 56.25752,	"Пермский край, 2019, г. Пермь,	ул. Чернышевского, 32"],
[58.00342, 56.21873,	"Пермский край, 2019, г. Пермь,	ул. Луначарского - ул. Матросова"],
[58.12204, 56.29281,	"Пермский край, 2019, г. Пермь,	ул. Гайвинская"],
[58.00677, 56.30311,	"Пермский край, 2019, г. Пермь,	ул. Уинская, 9 (ПВУ)"],
[57.98867, 56.30055,	"Пермский край, 2019, г. Пермь,	ул. Лихвинская - ул. Самаркандская"],
[58.00844, 56.26316,	"Пермский край, 2019, г. Пермь,	ул. Островского - ул. Малышева"],
[58.03449, 56.02069, "Пермский край, 2019, г. Пермь,	ул. Калинина - ул. Ушакова"],
[48.38433, 135.08231, "Хабаровский край, 2019, г. Хабаровск,	ул. П.Л. Морозова - пер. Краснореченский"],
[48.37325, 135.08947,	"Хабаровский край, 2019, г. Хабаровск,	ул. Краснореченская - ул. Артемовская"],
[48.37663, 135.09315, "Хабаровский край, 2019, г. Хабаровск,	ул. Краснореченская - ул. Строительная"],  
[48.38123, 135.09541,	"Хабаровский край, 2019, г. Хабаровск,	ул. Краснореченская - пер. Краснореченский"],   
[48.48545, 135.07341,	"Хабаровский край, 2019, г. Хабаровск,	ул. Ким Ю Чена - ул. Гайдара"],
[48.48782, 135.07758,	"Хабаровский край, 2019, г. Хабаровск,	ул. Ким Ю Чена - ул. Дикопольцева"],
[48.48869, 135.07902,	"Хабаровский край, 2019, г. Хабаровск,	ул. Ким Ю Чена - ул. Московская"],
[48.48465, 135.07198,	"Хабаровский край, 2019, г. Хабаровск,	ул. Ким Ю Чена - ул. Л. Толстого"],
[54.325955, 59.373021,	"Республика Башкортостан, 2019, 	г. Учалы, 	ул. Ленина - ул. 65 лет Победы"],
[54.40876, 56.78637,	"Республика Башкортостан, 2019, 	с. Архангельское, 	ул. Ленина - ул. Карла Маркса"],
[52.70628, 55.80305,	"Республика Башкортостан, 2019, 	с. Ермолаево,	ул. Советская - ул. Калинина - ул. Ленина"],
[53.63085, 54.80879,	"Республика Башкортостан, 2019, 	с. Киргиз - Мияки,	ул. Губайдуллина - ул. Чапаева"],
[54.31782, 59.38646,	"Республика Башкортостан, 2019, 	г. Учалы, 	ул. Ахметгалина -ул. Карла Маркса"],
[54.31724, 59.38393,	"Республика Башкортостан, 2019, 	г. Учалы, 	ул. Карла Маркса - ул. Башкортостана"],
[55.04566, 55.95905,	"Республика Башкортостан, 2019, 	г. Благовещенск, 	ул. Седова - ул. Братьев Першиных",1],
[53.61856, 55.95484,	"Республика Башкортостан, 2019, 	г. Стерлитамак, 	ул. Хмельницкого - ул. Советская",1],
[53.64512, 55.94274,	"Республика Башкортостан, 2019, 	г. Стерлитамак, 	ул. Нахимова - пр. Ленина",1],
[53.64512, 55.94274,	"Республик Башкортостан, 2019, 	г. Стерлитамак, 	ул. Нахимова - ул. Революционная",1],
[53.65428, 55.94845,	"Республик Башкортостан, 2019, 	г. Стерлитамак, 	пр-т Ленина  (ПВУ)",1],
[53.67589, 55.94914,	"Республик Башкортостан, 2019, 	г. Стерлитамак, 	Уфимский тракт  (ПВУ)",1],
[53.61537, 55.8998,	"Республик Башкортостан, 2019, 	г. Стерлитамак, 	ул. Артема - ул. Караная Муратова",1],
[53.63472, 55.95567,	"Республик Башкортостан, 2019, 	г. Стерлитамак, 	ул. Вокзальная (школа №34) (ПВУ)",1],
[53.6132262, 55.8995696,	"Республика Башкортостан, 2011, ул. Водолаженко - ул. Артема"],
[53.63425, 55.90251,	"Республика Башкортостан, 2011, ул. Артема (лицей №134)"],
[53.61761, 55.90776,	"Республика Башкортостан, 2011, ул. Коммунистическая (ООТ Поликлиника СК)"],
[53.6431297, 55.9729726,	"Республика Башкортостан, 2011, ул. Кочетова (ООТ СТУ)"],
[53.61761, 55.90776,	"Республика Башкортостан, 2011, ул. Вокзальная (ООТ Нефтебаза) (ТВП)"],
[53.61678, 55.96652,	"Республика Башкортостан, 2011, ул. Халтурина, 106 (ТВП)"],
[53.62636, 55.92065,	"Республика Башкортостан, 2011, ул. Курчатова (ООТ ул. Блюхера) (ТВП)"],
[53.6358, 55.91546,	"Республика Башкортостан, 2011, ул. Худайбердина (ООТ Башкирская гимназия) (ТВП)"],
[53.63767, 55.90301,	"Республика Башкортостан, 2011, ул. Худайбердина (ООТ санаторий Нур) (ТВП)"],
[53.59947, 55.92561,	"Республика Башкортостан, 2011, Стерлибашевский тракт (ООТ Рабочий поселок) (ТВП)"],
[53.64345, 55.95043,	"Республика Башкортостан, 2011, ул. Элеваторная (ул. Вагонная) (ТВП)"],
[53.63882, 55.96528,	"Республика Башкортостан, 2011, ул. Лесная (ул. Тукаева) (ТВП)"],
[53.61569, 55.96284,	"Республика Башкортостан, 2011, ул. Б. Хмельницкого - ул. К. Маркса"],
[53.6336, 55.9218,	"Республика Башкортостан, 2011, ул. Худайбердина - ул. Курчатова"],
[53.61239, 55.94347,	"Республика Башкортостан, 2011, ул. 23 мая - ул. Ильича"],
[53.62477, 55.9721,	"Республика Башкортостан, 2011, ул. Нагуманова - ул. К. Маркса"],
[53.61505, 55.96477,	"Республика Башкортостан, 2011, ул. Халтурина - ул. Б. Хмельницкого"],
[53.64857, 55.97522,	"Республика Башкортостан, 2011, ул. Кочетова - ул. Менделеева"],
[53.5979, 55.922,	"Республика Башкортостан, 2011, Стерлибашевский тракт - ул. Объездная"],
[54.70127, 55.82247,	"Республика Башкортостан, г.Уфа, 2020, 	ул. Новороссийская - ул. Правды"],
[54.72819, 55.96771,	"Республика Башкортостан, г.Уфа, 2020, 	ул. Кирова - ул. Мингажева"],
[54.80636, 56.15301,	"Республика Башкортостан, г.Уфа, 2020, 	ул. Перспективная (сад №5) (ПВУ)"],
[54.82281, 56.07095,	"Республика Башкортостан, г.Уфа, 2020, 	ул. Кольцевая - ул. Мира"],
[50.2659, 127.5356,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул.50 лет Октября"],
[50.26467, 127.54851,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Кузнечная"],
[50.26064, 127.56085,	"Амурская область, Благовещенск, 2020, 	ул. Амурская – ул. Пушкина"],
[50.26467, 127.54851,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Шимановского"],
[50.25934, 127.51898,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Ленина"],
[50.26205, 127.51973,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Зейская"],
[50.27621, 127.52352,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Ломоносова"],
[50.27775, 127.52391,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Забурхановская"],
[50.28023, 127.52453,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Пролетарская"],
[50.27551, 127.52337,	"Амурская область, Благовещенск, 2020, 	ул. Калинина 84"],
[50.26467, 127.54851,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Калинина"],
[50.2659, 127.5356,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Б. Хмельницкого"],
[50.2659, 127.5356,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Шевченко"],
[50.2659, 127.5356,	"Амурская область, Благовещенск, 2020, 	ул. Горького – ул. Пионерская"],
[50.26468, 127.52046,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Амурская"],
[50.26981, 127.52179,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Красноармейская"],
[50.27244, 127.52255,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Октябрьская"],
[50.30587, 127.52395,	"Амурская область, Благовещенск, 2020, 	ул. Воронкова – ул. Кантемирова"],
[50.30739, 127.50891,	"Амурская область, Благовещенск, 2020, 	ул. Воронкова – ул. Василенко"],
[50.30555, 127.52701,	"Амурская область, Благовещенск, 2020, 	ул. Воронкова (в районе авторынка)"],
[50.28225, 127.52504,	"Амурская область, Благовещенск, 2020, 	ул. Калинина – ул. Рабочая"],
[51.60187, 46.00208,	"Саратовская область, г.Саратов, 2020, 	ул. Антонова - ул. Чехова"],
[51.55323, 46.00364,	"Саратовская область, г.Саратов, 2020, 	ул. Большая Горная - Мурманский проезд"],
[51.53985, 46.04142,	"Саратовская область, г.Саратов, 2020, 	ул. Большая Горная - ул. Радищева"],
[51.54648, 45.99909,	"Саратовская область, г.Саратов, 2020, 	ул. Большая Садовая - ул. Зарубина (ПВУ)"],
[51.53873, 46.04599,	"Саратовская область, г.Саратов, 2020, 	ул. Большая Горная - ул. Некрасова"],
[51.49535, 45.92278,	"Саратовская область, г.Саратов, 2020, 	Ново-Астраханское шоссе - Бройлер"],
[51.53585, 46.05762,	"Саратовская область, г.Саратов, 2020, 	ул. Соколовая - ул. Рогожина"],
[51.59955, 45.96832,	"Саратовская область, г.Саратов, 2020, 	ул. Строителей - ГПТУ"],
[51.53728, 45.98368,	"Саратовская область, г.Саратов, 2020, 	ул. Шелковичная -ул. Свинцовая "],
[51.50247, 45.95742,	"Саратовская область, г.Саратов, 2020, 	ул. Энтузиастов - ул. Орджоникидзе"],

];