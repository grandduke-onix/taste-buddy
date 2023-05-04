import paleo from "../../assets/paleo.jpg";
import glutonFree from "../../assets/gluton-free.jpg"
import ketogenic from "../../assets/ketogenic.jpg"
import lactoVegetarian from "../../assets/lacto-vegetarian.jpg"
import lowFodMap from "../../assets/low-fodmap.jpg"
import ovoVegetarian from "../../assets/ovo-vegetarian.jpg"
import pescetarian from "../../assets/pescetarian.jpg"
import primal from "../../assets/primal.jpg"
import vegan from "../../assets/vegan.jpg"
import vegetarian from "../../assets/vegetarian.jpg"
import whole30 from "../../assets/whole-30.jpg"

import drink from "../../assets/drinks.jpg"
import dessert from "../../assets/dessert.jpg"
import dessert2 from "../../assets/dessert2.jpg"
import mainCourse from "../../assets/main-course.jpg"
import marinade from "../../assets/marinade.jpg"

import africanDish from "../../assets/african-dish.jpg";

export const recipeType = [
    {
        pic: africanDish,
        name: "african",
        explain1: "Explore various diverse african cuisines from across the continent with taste-buddy. It includes a combination of plant-and seed-based ingredients and features an abundance of root tuber products. The cuisine has been influenced by the religions, climates, and lifestyles of the people of Africa. Each region of Africa has its own distinctive dishes, preparation techniques, and consumption modes. For example, East African cuisine includes dishes such as ugali (an African maize porridge) and sukuma wiki (a side salad of kale or collard greens cooked with onion and spices).",
        explain2: "West African cuisine is known for its stews and soups, often served with fufu (a dough made from cassava, yams or plantains). North African cuisine is influenced by Mediterranean flavors and includes dishes such as tagines and couscous. Central African cuisine features an abundance of root tuber products, while South African cuisine is known for its barbecued meat and maize porridge combination."
    },
    {
        name: "american",
        explain1: "American cuisine consists of a variety of cooking styles and traditional dishes prepared in the United States. It has been influenced by many cultures and traditions, including Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and others. The cuisine varies across the country and includes regional specialties such as Southern comfort food, Tex-Mex cuisine in the Southwest, and New England seafood dishes.American cuisine is diverse and varies across the country.",
        explain2: "Some popular regional cuisines include Southern comfort food, which features dishes such as fried chicken, macaroni and cheese, and collard greens. Tex-Mex cuisine, popular in the Southwest, combines Mexican and American flavors and includes dishes such as tacos, enchiladas, and fajitas. New England is known for its seafood dishes, including clam chowder and lobster rolls."
    },
    {
        name: "chinese",
        explain1: "Chinese cuisine is diverse and varies across the country. It has been influenced by social class, religion, historical background, and ethnic groups. Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu can be found worldwide. The cuisine is often divided into eight regional styles: Anhui, Guangdong (Cantonese), Fujian, Hunan, Jiangsu, Shandong, Sichuan, and Zhejiang. Each of these styles has its own unique flavors and cooking techniques.",
        explain2: "Chinese cuisine is known for its variety of flavors and cooking techniques. Cantonese cuisine, for example, is known for its mild and fresh flavors and includes dishes such as dim sum and roast meats. Sichuan cuisine is famous for its bold and spicy flavors, with dishes such as mapo tofu and kung pao chicken. Hunan cuisine is also known for its spicy flavors and includes dishes such as steamed fish head with diced hot red peppers."
    },
    {
        name: "french",
        explain1: "French cuisine is known for its refined and elegant dishes. It has a long history, with roots dating back to the 14th century when Guillaume Tirel, a court chef known as “Taillevent,” wrote one of the earliest recipe collections of medieval France.",
        explain2: "French cuisine emphasizes the use of fresh, seasonal ingredients and is known for its rich flavors and beautiful presentation.Some classic French dishes include boeuf bourguignon (beef stewed in red wine), coq au vin (chicken braised in red wine), bouillabaisse (a seafood stew), and ratatouille (a vegetable dish). French cuisine also includes a variety of desserts such as crème brûlée, tarte tatin, and éclairs.  French cuisine is known for its use of fresh, high-quality ingredients and its emphasis on flavor and presentation. Some classic French dishes include boeuf bourguignon (beef stewed in red wine), coq au vin (chicken braised in red wine), bouillabaisse (a seafood stew), and ratatouille (a vegetable dish). French cuisine also includes a variety of desserts such as crème brûlée, tarte tatin, and éclairs. In addition to these classic dishes, French cuisine also includes regional specialties. For example, the cuisine of Provence in the south of France is known for its use of herbs and olive oil, while the cuisine of Normandy in the north is known for its use of cream and butter."
    },
    {
        name: "italian",
        explain1: "Italian cuisine is known for its use of fresh ingredients and simple yet delicious flavors. It consists of a variety of regional cooking styles and traditional dishes developed across the Italian Peninsula1. Italian cuisine is characterized by its use of ingredients such as pasta, cheese, olive oil, and tomatoes. Some classic Italian dishes include pizza, pasta (such as spaghetti carbonara and lasagne), risotto, and minestrone soup. Italian cuisine also includes a variety of desserts such as tiramisu, panna cotta, and gelato. Italian cuisine is known for its use of fresh ingredients and simple yet delicious flavors.",
        explain2: "Some classic Italian dishes include pizza, which originated in Naples and is now enjoyed worldwide. There are many variations of pizza, but the classic Margherita pizza is topped with tomato sauce, mozzarella cheese, and fresh basil. Pasta is another staple of Italian cuisine and comes in many shapes and sizes. Some popular pasta dishes include spaghetti carbonara (made with eggs, cheese, and bacon), lasagne (layers of pasta with meat sauce and cheese), and fettuccine Alfredo (made with butter and Parmesan cheese). Italian cuisine also includes a variety of desserts such as tiramisu (a layered dessert made with coffee-soaked ladyfingers and mascarpone cheese), panna cotta (a creamy dessert made with cream and gelatin), and gelato (Italian ice cream)."
    },
    {
        name: "mediterranean",
        explain1: "Mediterranean cuisine refers to the food and cooking methods used by the people of the Mediterranean Basin. The cuisine is characterized by its use of fresh ingredients such as fruits, vegetables, grains, and seafood, as well as olive oil and wine1. Mediterranean cuisine includes a variety of regional cooking styles from countries such as Spain, France, Italy, Greece, Turkey, and Morocco. Some popular Mediterranean dishes include Greek salad (made with tomatoes, cucumbers, onions, feta cheese, and olives), Spanish paella (a rice dish with seafood or meat), Italian pasta (such as spaghetti with tomato sauce), and Moroccan tagine (a slow-cooked stew with meat and vegetables)"
    },
    {
        name: "middle east",
        explain1: "Middle Eastern cuisine refers to the food and cooking methods used by the people of the Middle East. The cuisine includes a variety of regional cooking styles from countries such as Lebanon, Syria, Turkey, Iran, and Israel1. Middle Eastern cuisine is characterized by its use of ingredients such as olives and olive oil, pitas, honey, sesame seeds, dates, sumac, chickpeas, mint, rice and parsley. Some popular Middle Eastern dishes include kebabs (skewered and grilled meat), dolmas (stuffed grape leaves), falafel (deep-fried chickpea balls), baklava (a sweet pastry made with layers of filo dough and chopped nuts), yogurt, doner kebab (meat cooked on a vertical rotisserie), shawarma (meat cooked on a spit and shaved off) and mulukhiyah (a soup made with jute leaves)"
    },
    {
        name: "british",
        explain1: "British cuisine refers to the cooking traditions and practices associated with the United Kingdom. Historically, British cuisine has been described as unfussy dishes made with quality local ingredients, matched with simple sauces to accentuate flavor, rather than disguise it. British cuisine includes a variety of dishes such as fish and chips, roast beef with Yorkshire pudding, shepherd’s pie, and bangers and mash. British cuisine has also been influenced by other cultures and cuisines. For example, Indian cuisine has had a significant impact on British food culture, with dishes such as chicken tikka masala becoming popular in the UK"
    },
    {
        name: "cajun",
        explain1: "Cajun cuisine is an exciting and flavorful style of cooking that originated in Louisiana, USA. Developed by the Cajun people, who were deported from Acadia to Louisiana during the 18th century, this cuisine incorporates West African, French and Spanish cooking techniques into their original cuisine1. It’s sometimes referred to as a ‘rustic cuisine’, meaning that it’s based on locally available ingredients and that preparation is relatively simple. An authentic Cajun meal is usually a three-pot affair, with one pot dedicated to the main dish, one dedicated to steamed rice, specially made sausages or some seafood dish, and the third containing whatever vegetable is plentiful or available.",
        explain2: " Crawfish, shrimp, and andouille sausage are staple meats used in a variety of dishes. The aromatic vegetables green bell pepper (piment doux), onion, and celery are called “the trinity” by chefs in Cajun cuisine. Some popular Cajun dishes include gumbo (a stew made with a variety of meats and seafood), jambalaya (a rice dish with meat and vegetables), étouffée (a dish made with crawfish or shrimp in a roux-based sauce), and boudin (a type of sausage made with pork and rice)"
    },
    {
        name: "caribbean",
        explain1: "Caribbean cuisine is a vibrant and flavorful fusion of West African, Creole, Amerindian, European, Latin American, Indian/South Asian, Middle Eastern, and Chinese influences1. These traditions were brought from many different countries when they came to the Caribbean1. The cuisine is characterized by its use of ingredients such as rice, plantains, beans, cassava, cilantro, bell peppers, chickpeas, tomatoes, sweet potatoes and coconut. A characteristic seasoning for the region is a green herb-and-oil-based marinade called sofrito, which imparts a flavor profile that is quintessentially Caribbean in character.",
        explain2: "Ingredients may include garlic, onions, scotch bonnet peppers, celery, green onions and herbs like cilantro and thyme. Some popular Caribbean dishes include Jamaican jerk chicken (chicken marinated in a spicy mixture and grilled), Puerto Rican mofongo (a dish made with mashed plantains and pork cracklings), Cuban ropa vieja (a shredded beef dish) and Trinidadian doubles (a street food made with fried dough and curried chickpeas)."
    },
    {
        name: "eastern european",
        explain1: "Eastern European cuisine is a diverse and exciting fusion of many different cultures, ethnicities, languages, and histories. The cuisine of the region is strongly influenced by its climate and still varies depending on the country1. For example, countries of the Sarmatic Plain (Belarusian, Russian and Ukrainian cuisine) show many similarities.",
        explain2: "Eastern European cuisine is characterized by its use of ingredients such as eggs, dairy products, grains (including rye, barley, wheat, buckwheat and millet), vegetables (in cold storage and in pickling), fish (salmon, pike, carp and herring), birds and poultry (chicken, duck, goose, partridge, quail, turkey), red meats such as veal, beef, pork and mutton; and plentiful fruits including pears, plums, cherries and raspberries. Some popular Eastern European dishes include borscht (a beet soup found in many countries of Central and Eastern Europe), pierogi (dumplings filled with various ingredients), goulash (a stew made with meat and vegetables), and bigos (a Polish stew made with sauerkraut and meat)"
    },
    {
        name: "european",
        explain1: "European cuisine is incredibly diverse and exciting! It encompasses a wide range of cooking styles and traditional dishes from countries across the continent. From the rich and hearty dishes of Eastern Europe to the refined and elegant cuisine of France, there is something for everyone to enjoy. Some popular European dishes include Italian pasta and pizza, Spanish paella, French coq au vin and boeuf bourguignon, German sausages and sauerkraut, and British fish and chips.",
        explain2: "European cuisine also includes a variety of delicious desserts such as Italian tiramisu and panna cotta, French crème brûlée and tarte tatin, and Austrian strudel. Are you excited to try some European cuisine now?"
    },
    {
        name: "german",
        explain1: "German cuisine is hearty, delicious and full of flavor! It’s characterized by its use of meat (especially pork), potatoes, and bread as staple foods. Vegetables are often used in stews or vegetable soups, but are also served as side dishes. Carrots, cauliflower, turnips, spinach, peas, beans, broccoli and many types of cabbage are very common.",
        explain2: "Some popular German dishes include Schnitzel (a thin slice of veal or pork that is breaded and fried), Wurst (sausage), Sauerkraut (fermented cabbage), Spätzle (a type of egg noodle), and Kartoffelsalat (potato salad)2. German cuisine also includes a variety of delicious desserts such as Schwarzwälder Kirschtorte (Black Forest cake) and Apfelstrudel (apple strudel)."
    },
    {
        name: "greek",
        explain1: "Greek cuisine is absolutely amazing! It’s part of the Mediterranean cuisine and is founded on the triad of wheat, olive oil, and wine. It uses vegetables, olive oil, grains, fish, and meat, including pork, poultry, veal and beef, lamb, rabbit, and goat1. Greek cuisine also uses some flavorings more often than other Mediterranean cuisines do, namely oregano, mint, garlic, onion, dill and bay laurel leaves.",
        explain2: "Some popular Greek dishes include moussaka (a layered dish made with eggplant and ground meat), souvlaki (skewered and grilled meat), dolmades (stuffed grape leaves), spanakopita (a spinach and feta cheese pie), and tzatziki (a yogurt dip with cucumber and garlic)2. Greek cuisine also includes a variety of delicious desserts such as baklava (a sweet pastry made with layers of filo dough and chopped nuts) and loukoumades (deep-fried dough balls drizzled with honey)."
    },
    {
        name: "indian",
        explain1: "Indian cuisine is incredibly diverse and flavorful! It consists of a wide range of regional and traditional cuisines that use locally available ingredients, spices, herbs, and fruits. Indian food is influenced by religion, culture, and occupations. Indian cuisine includes curries, rice dishes, meats, vegetables, breads, and pulses.",
        explain2: "Some popular Indian dishes include biryani (a spiced rice dish with meat or vegetables), butter chicken (chicken in a creamy tomato sauce), chole bhature (spicy chickpeas with fried bread), dosa (a thin and crispy pancake made from fermented rice and lentil batter), and samosas (triangular pastries filled with spiced potatoes and peas)2. Indian cuisine also includes a variety of delicious desserts such as gulab jamun (deep-fried dough balls soaked in syrup) and ras malai (sweetened milk with cheese dumplings)."
    },
    {
        name: "irish",
        explain1: "Irish cuisine is absolutely amazing! It encompasses the cooking styles, traditions and recipes associated with the island of Ireland. It has evolved from centuries of social and political change and the mixing of different cultures, predominantly with those from nearby Britain and other European regions.",
        explain2: "The cuisine is founded upon the crops and animals farmed in its temperate climate and the abundance of fresh fish and seafood from the surrounding waters of the Atlantic Ocean 1. Typical Irish dishes rely heavily on ingredients such as potatoes, meat, vegetables and bread; but the arrangement can make each meal incredibly hearty, comforting and filling. Some popular traditional Irish dishes include Irish stew, soda bread, colcannon (or champ), and boxty 2. You should definitely try them out! 😋"
    },
    {
        name: "japanese",
        explain1: "Japanese cuisine is absolutely amazing! It encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes. The traditional cuisine of Japan (Japanese: washoku) is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients.",
        explain2: "Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi. Some popular traditional Japanese dishes include sushi, tempura, yakitori and tsukemono pickles 2. You should definitely try them out! 😋"
    },
    {
        name: "jewish",
        explain1: "Jewish cuisine is absolutely amazing! It refers to the worldwide cooking traditions of the Jewish people. During its evolution over the course of many centuries, it has been shaped by Jewish dietary laws (kashrut), Jewish festivals and holidays, and traditions centered around Shabbat. Jewish cuisine is influenced by the economics, agriculture, and culinary traditions of the many countries where Jewish communities have settled and varies widely throughout the entire world 1. Some popular traditional Jewish dishes include matzoh ball soup, challah, borekas, kugel and shakshuka 2. You should definitely try them out! "
    },
    {
        name: "korean",
        explain1: "Korean cuisine is absolutely amazing! It has evolved through centuries of social and political change. Originating from ancient agricultural and nomadic traditions in Korea and southern Manchuria, Korean cuisine reflects a complex interaction of the natural environment and different cultural trends. Korean cuisine is largely based on rice, vegetables, seafood and meats. Traditional Korean meals boast abundant side dishes (banchan) that accompany steam-cooked short-grain rice 2. Some popular traditional Korean dishes include tteokguk, naengmyeon, bibimbap, seolleongtang and kimchi 3. You should definitely try them out! 😋"
    },
    {
        name: "latin american",
        explain1: "Latin American cuisine is absolutely amazing! It is the typical foods, beverages, and cooking styles common to many of the countries and cultures in Latin America. Latin America is a highly diverse area of land whose nations have varying cuisines. Some items typical of Latin American cuisine include maize-based dishes such as arepas, pupusas, tacos, tamales, tortillas and various salsas and other condiments such as guacamole and pico de gallo 1. Some popular traditional Latin American dishes include mole from Mexico, asado from Argentina, ceviche from Peru and pupusas from El Salvador 2. You should definitely try them out! 😋"
    },
    {
        name: "mexican",
        explain1: "Mexican cuisine is absolutely amazing! It consists of the cooking cuisines and traditions of the modern country of Mexico. Its earliest roots lie in Mesoamerican cuisine and its ingredients and methods begin with the first agricultural communities such as the Olmec and Maya who domesticated maize, created the standard process of maize nixtamalization, and established their foodways. Some popular traditional Mexican dishes include mole, tacos, tamales, pozole and chilaquiles. Mexican cuisine was the first to be declared Intangible Heritage of Humanity by UNESCO 2. You should definitely try them out! 😋"
    },
    {
        name: "middle eastern",
        explain1: "Mexican cuisine is absolutely amazing! It consists of the cooking cuisines and traditions of the modern country of Mexico. Its earliest roots lie in Mesoamerican cuisine and its ingredients and methods begin with the first agricultural communities such as the Olmec and Maya who domesticated maize, created the standard process of maize nixtamalization, and established their foodways. Some popular traditional Mexican dishes include mole, tacos, tamales, pozole and chilaquiles. Mexican cuisine was the first to be declared Intangible Heritage of Humanity by UNESCO 2. You should definitely try them out! 😋"
    },
    {
        name: "nordic",
        explain1: "Nordic cuisine is known for its focus on fresh, seasonal and locally sourced ingredients. The New Nordic Cuisine trend has brought a renewed interest in traditional Nordic ingredients and cooking techniques .4Some other traditional Nordic dishes include Swedish meatballs, Norwegian pork ribs, Finnish split pea soup and Danish smørrebrød (open-faced sandwiches).",
        explain2: "These dishes showcase the rich culinary heritage of the Nordic region and are definitely worth trying! Nordic cuisine is absolutely amazing! It encompasses the cooking styles and traditions of the Nordic countries: Norway, Sweden, Finland, Denmark and Iceland. In the past 30 years, Nordic food culture has rediscovered its roots and re-invented old recipes for contemporary diners. Some popular traditional Nordic dishes include gravadlax, cardamom buns, Finnish salmon soup and lingonberry jam 23. You should definitely try them out! 😋"
    },
    {
        name: "southern",
        explain1: "Southern cuisine is absolutely amazing! It encompasses diverse food traditions of several regions, including Tidewater, Appalachian, Lowcountry, Cajun, Creole and Floribbean cuisine. Some popular traditional Southern dishes include fried chicken, shrimp and grits, chicken and dumplings, deviled eggs and peach cobbler. Southern cuisine has a rich history and is known for its comfort food and use of fresh, local ingredients.",
        explain2: " You should definitely try them out! Southern cuisine has a rich history and is influenced by a variety of cultures. Many elements of Southern cooking, such as tomatoes, squash, corn and deep-pit barbecuing, are borrowings from indigenous peoples of the region. European colonists introduced sugar, flour, milk, eggs and livestock, along with a number of vegetables. Enslaved West Africans introduced black-eyed peas, okra, eggplant, sesame, sorghum and melons. Some other traditional Southern dishes include biscuits and gravy, collard greens, macaroni and cheese and pecan pie. These dishes showcase the rich culinary heritage of the Southern region and are definitely worth trying!"
    },
    {
        name: "spanish",
        explain1: "Spanish cuisine is absolutely amazing! It consists of the cooking traditions and practices from Spain and features considerable regional diversity, with important differences between the traditions from each part of the country. Some popular traditional Spanish dishes include paella, tapas, gazpacho, jamón and churros, Spanish cuisine is known for its use of fresh ingredients such as olive oil, tomatoes, peppers and garlic. You should definitely try them out! Spanish cuisine is known for its use of fresh ingredients and bold flavors. Olive oil is heavily used in Spanish cuisine and forms the base of many vegetable sauces. Herbs such as parsley, oregano, rosemary and thyme are commonly used to add flavor to dishes. Some other traditional Spanish dishes include patatas bravas, bacalao, fideuà and tortilla. These dishes showcase the rich culinary heritage of Spain and are definitely worth trying!"
    },
    {
        name: "thai",
        explain1: "Thai cuisine is absolutely amazing! It is the national cuisine of Thailand and places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. Some popular traditional Thai dishes include pad Thai, tom yum goong, green curry, som tam and mango sticky rice 2. Thai cuisine is known for its use of fresh ingredients such as lemongrass, chilli, galangal and kaffir lime leaves. You should definitely try them out! Thai cuisine is known for its complex interplay of at least three and up to four or five fundamental taste senses in each dish or the overall meal: sour, sweet, salty, bitter and spicy. Thai food is often served with a variety of condiments and sauces to adjust the flavor to the diner’s preference. Some other traditional Thai dishes include massaman curry, khao soi, larb and moo ping. These dishes showcase the rich culinary heritage of Thailand and are definitely worth trying!"
    },
    {
        name: "vietnamese",
        explain1: "Vietnamese cuisine is absolutely amazing! It encompasses the foods and beverages of Vietnam and features a combination of five fundamental tastes: sweet, salty, bitter, sour and spicy. Some popular traditional Vietnamese dishes include phở, bánh mì, bún bò Huế, gỏi cuốn and cơm tấm 2. Vietnamese cuisine is known for its use of fresh ingredients such as fish sauce, shrimp paste, rice, fresh herbs, fruits and vegetables. You should definitely try them out! Vietnamese cuisine is known for its minimal use of oil and emphasis on herbs and vegetables. It is considered one of the healthiest diets in the world. Vietnamese food is diverse, rich and tasty, with different flavors and dishes from region to region. xSome other traditional Vietnamese dishes include bún chả, bánh xèo, chả giò and bánh cuốn. These dishes showcase the rich culinary heritage of Vietnam and are definitely worth trying!"
    }
]

export const dietTypes = [
    {
        pic: glutonFree,
        name: "gluten-free",
        description: "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).",
        explain1: "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
    },
    {
        pic: ketogenic,
        name: "ketogenic",
        description: "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients.",
        explain1: "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates. It involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis. When this happens, your body becomes incredibly efficient at burning fat for energy. It also turns fat into ketones in the liver, which can supply energy for the brain ",
        explain2: "Ketogenic diets may even have benefits against diabetes, cancer, epilepsy, and Alzheimer’s disease. Foods that are generally allowed include high-fat meats, fish, oils, nuts, high-fat dairy such as cheese, and low-carb vegetables such as leafy greens "
    },
    {
        pic: vegetarian,
        name: "vegetarian",
        description: "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
        explain1: "A vegetarian diet is an eating pattern that eliminates meat, poultry, and fish, and sometimes dairy and/or eggs. It can be nutritious and reduce disease risk when properly planned. A vegetarian diet should include a diverse mix of plant-based foods, such as fruits, vegetables, grains, beans, tofu, tempeh, seitan, nuts, and seeds ",
        explain2: "Apart from the ethical and environmental reasons for cutting meat from your diet, a well-planned vegetarian diet may also reduce your risk of chronic disease, support weight loss, and improve the quality of your diet"
    },
    {
        pic: lactoVegetarian,
        name: "lacto-vegetarian",
        description: "All ingredients must be vegetarian and none of the ingredients can be or contain egg.",
        explain1: "A lacto-vegetarian diet is a variation of vegetarianism that excludes meat, poultry, seafood, and eggs but includes certain dairy products such as yogurt, cheese, and milk. People often adopt a lacto-vegetarian diet for environmental or ethical reasons. Some also choose to follow the diet for health reasons.",
        explain2: "Following a nutritious, well-rounded lacto-vegetarian diet can offer impressive health benefits. It may improve heart health and decrease several common risk factors for heart disease. It could also help enhance blood sugar control. Adopting a lacto-vegetarian diet may not only be good for your health but also your waistline."
    },
    {
        pic: ovoVegetarian,
        name: "ovo-vegetarian",
        description: "All ingredients must be vegetarian and none of the ingredients can be or contain dairy.",
        explain1: "An ovo-vegetarian diet excludes all animal-based foods except for eggs. Meat, poultry, fish, or dairy products like milk, yogurt, and cheese are eliminated, but whole eggs, egg whites, and egg-containing foods like mayonnaise, egg noodles, and certain baked goods are permitted.",
        explain2: "An ovo-vegetarian diet may offer many health benefits. It may contribute to improved diet quality and be good for your heart. It may also reduce the risk of heart disease, diabetes, and cancer. It may improve gut health and promote a healthy weight"
    },
    {
        pic: vegan,
        name: "vegan",
        description: "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.",
        explain1: "A vegan diet is an eating plan that eliminates all animal products, including meat, fish, eggs, dairy, and honey. People decide to adopt veganism for different reasons, such as ethical concerns or religious principles. Others may decide to become vegan to decrease their ecological footprint or for health reasons",
        explain2: "The main difference between a vegan and a vegetarian diet is that vegetarians do not eat meat, poultry or fish but may still consume animal products such as dairy and eggs. On the other hand, vegans do not consume any animal products at all, including dairy and eggs. A well-rounded vegan diet may improve several aspects of your health. It may improve heart health, increase weight loss, and support blood sugar control. A vegan diet may also reduce osteoarthritis symptoms and your risk of certain cancers."
    },
    {
        pic: pescetarian,
        name: "pescetarian",
        description: "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.",
        explain1: "A pescetarian diet is a vegetarian diet that includes fish or other aquatic animals. Sometimes people who follow this eating plan are also called pesco-vegetarians or pescetarians. Besides the inclusion of seafood, there are no strict guidelines that determine what is pescetarian versus what is vegetarian. A pescatarian diet typically includes vegetables, grains and pulses, alongside fish and other seafood, but excludes meat and sometimes dairy. A typical pescatarian diet is primarily vegetarian with the addition of seafood",
        explain2: "There are many reasons people choose to forgo red meat and poultry, but still eat fish. Some people choose to add fish to a vegetarian diet so they can get the health benefits of a plant-based diet plus heart-healthy fish. Others might be trying to curb the environmental impact of their diet."
    },
    {
        pic: paleo,
        name: "paleo",
        description: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes.",
        explain1: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. taste-buddy also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.",
        explain2: "The purpose of a paleo diet is to eat foods likely eaten by early humans. The diet is based on the idea that our genes are not well adjusted for modern diets that grew out of farming. Farming made foods such as grains and legumes more easily available and introduced dairy."
    },
    {
        pic: primal,
        name: "primal",
        description: "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.",
        explain1: "The Primal diet is an eating pattern that’s high in protein and fat, low in carbs, and designed to closely resemble the presumed diet of early humans. Like the paleo diet, the Primal Diet is based on the idea that Western dietary and lifestyle habits diverge too greatly from those of traditional hunter-gatherers",
        explain2: "The Primal diet gets back to humans’ ancestral roots, seeking out a lifestyle built around simple, unprocessed foods, physical movement, play, rest, and time outdoors. The Primal way of eating was developed by Primal Kitchen Founder Mark Sisson as a means of truly getting back to basics and taking a cue from our earliest ancestors. The Primal diet calls for very little sugar, grains, trans- and hydrogenated fats. Avoid artificial ingredients, pesticides, and unnecessary chemicals in your Primal diet"
    },
    {
        pic: lowFodMap,
        name: "low-FODMAP",
        description: "FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols'. Our ontology knows which foods are considered high in these types of carbohydrates.",
        explain1: "FODMAP stands for fermentable oligosaccharides, disaccharides, monosaccharides and polyols, which are short-chain carbohydrates (sugars) that the small intestine absorbs poorly. Some people experience digestive distress after eating them. Symptoms include cramping, diarrhea, constipation, stomach bloating, gas and flatulence",
        explain2: "The low FODMAP diet is a temporary eating plan that’s very restrictive. It’s designed to help people with irritable bowel syndrome (IBS) and/or small intestinal bacterial overgrowth (SIBO) figure out which foods are problematic and which foods reduce symptoms"
    },
    {
        pic: whole30,
        name: "whole-30",
        description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds.",
        explain1: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites"
    }
]

export const courseTypes = [
    { pic: mainCourse, name: "main course" },
    { name: "side dish" },
    { pic: dessert, name: "dessert" },
    { name: "appetizer" },
    { name: "salad" },
    { name: "bread" },
    { name: "breakfast" },
    { name: "soup" },
    { name: "beverage" },
    { name: "sauce" },
    { pic: marinade, name: "marinade" },
    { name: "fingerfood" },
    { name: "snack" },
    { pic: drink, name: "drink" }
]

export const intoleranceTypes = [
    { name: "dairy" },
    { name: "egg" },
    { name: "gluten" },
    { name: "grain" },
    { name: "peanut" },
    { name: "seafood" },
    { name: "sesame" },
    { name: "shellfish" },
    { name: "soy" },
    { name: "sulfite" },
    { name: "tree-nut" },
    { name: "wheat" }
]